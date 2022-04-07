import React from "react";
import { BsSearch, BsSliders } from "react-icons/bs";
import "./Search.scss";

const Search = ({ setFilter }) => {
    return (
        <div className="search__container">
            <BsSearch className="search_icon" />
            <input type="text" placeholder="Search" className="search" />

            <BsSliders
                className="show_filters"
                onClick={() => setFilter(true)}
            />
        </div>
    );
};

export default Search;
