import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useFilter } from "../../contexts/FilterContext";
import "./Filter.scss";

const Filter = ({ setFilter }) => {
    const [sortInput, setSortInput] = useState("");
    const [filterByLabel, setFilterByLabel] = useState("");

    const { dispatchFilter } = useFilter();

    return (
        <div className="filter__container">
            <div className="top">
                <div className="title">Sort and Filter Notes</div>
                <AiOutlineClose
                    className="close-btn"
                    onClick={() => setFilter(false)}
                />
            </div>

            <div className="sortby">
                <p>Sort By</p>
                <select
                    className="sortby-input"
                    onClick={(e) => setSortInput(e.target.value)}
                >
                    <option>None</option>
                    <option value="New">Newest</option>
                    <option value="Old">Oldest</option>
                </select>
            </div>

            <div className="filterby">
                <p>Filter By Priority</p>
                <select
                    className="filterby-input"
                    onClick={(e) => setFilterByLabel(e.target.value)}
                >
                    <option>None</option>
                    <option value="low">Low</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div className="apply">
                <div
                    className="btn"
                    onClick={() => {
                        dispatchFilter({ type: "SORT", payload: sortInput });
                        dispatchFilter({
                            type: "LABELS",
                            payload: filterByLabel,
                        });
                        setFilter(false);
                    }}
                >
                    Apply
                </div>
            </div>
        </div>
    );
};

export default Filter;
