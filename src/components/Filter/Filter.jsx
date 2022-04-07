import React from "react";

const Filter = ({ setFilter }) => {
    return (
        <div className="filter__container">
            <div className="top">
                <h3>Sort and Filter Notes</h3>
                <div className="clear" onClick={() => setFilter(false)}>
                    Clear
                </div>
            </div>

            <div className="sortby">
                <p>Sort By</p>
                <select className="sortby-input">
                    <option value="current">Current</option>
                    <option value="old">Oldest</option>
                </select>
            </div>

            <div className="filterby">
                <p>Filter By</p>
                <option value="labels">Labels</option>
                <option value="archives">Archives</option>
                <option value="trash">Trash</option>
            </div>

            <div className="labels">
                <p>Labels</p>
                <div className="labels-container">
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
