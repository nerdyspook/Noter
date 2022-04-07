import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Filter.scss";

const Filter = ({ setFilter }) => {
    const [sortInput, setInput] = useState("");
    const [filterByLabel, setFilterByLabel] = useState("");

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
                <select className="sortby-input">
                    <option value="new">Newest</option>
                    <option value="old">Oldest</option>
                </select>
            </div>

            <div className="filterby">
                <p>Filter By Priority</p>
                <select className="filterby-input">
                    <option value="low">Low</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div className="labels">
                <p>Labels</p>
                <div className="labels_container">
                    <label>
                        <input type="checkbox" />
                        Label1
                    </label>
                    <label>
                        <input type="checkbox" />
                        Label2
                    </label>
                    <label>
                        <input type="checkbox" />
                        Label3
                    </label>
                </div>
            </div>

            <div className="apply">
                <div className="btn">Apply</div>
            </div>
        </div>
    );
};

export default Filter;
