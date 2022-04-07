import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import "./Notes.scss";

const Notes = () => {
    const [filter, setFilter] = useState(false);

    return (
        <div className={`notes__container ${filter && "overlay"}`}>
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className="main__card__container">
                    <div className="search__container">
                        <Search setFilter={setFilter} />

                        {filter && <Filter setFilter={setFilter} />}
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Notes;
