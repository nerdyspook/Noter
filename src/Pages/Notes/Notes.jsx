import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import "./Notes.scss";
import { useNote } from "../../contexts/NoteContext";
import AddNote from "../../components/AddNote/AddNote";

const Notes = () => {
    const [filter, setFilter] = useState(false);

    const { stateNote } = useNote();
    const { displayNoteEditor } = stateNote;

    return (
        <main>
            <div
                className={`notes__container ${filter && "overlay"} ${
                    displayNoteEditor && "overlay"
                }`}
            >
                <Navbar />
                <div className="container">
                    <Sidebar />
                    <div className="main__card__container">
                        <div className="search__container">
                            <Search setFilter={setFilter} />
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>

            <div className={`modal ${filter ? "" : "hidden"}`}>
                <div className="modal-details">
                    {filter && <Filter setFilter={setFilter} />}
                </div>
            </div>
            <div className="modal-back hidden"></div>

            <div className={`modal ${displayNoteEditor ? "" : "hidden"}`}>
                <div className="modal-details">
                    {displayNoteEditor && <AddNote />}
                </div>
            </div>
            <div className="modal-back hidden"></div>
        </main>
    );
};

export default Notes;
