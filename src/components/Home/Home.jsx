import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";

import { loadNewNotes } from "../../utilities/load-new-note";
import "./Home.scss";
import { useNote } from "../../contexts/NoteContext";

import { searchNotes } from "../../utilities/search";
import { filterNotes } from "../../utilities/filter";
import { sortNotes } from "../../utilities/sort";
import { useFilter } from "../../contexts/FilterContext";

const Home = () => {
    const { stateNote, dispatchNote } = useNote();
    const { newNote } = stateNote;

    const { stateFilter, dispatchFilter } = useFilter();
    const { search, sort, filterLabels } = stateFilter;

    const pinnedNotes = newNote.filter((note) => note.isPinned);

    const notPinnedNotes = newNote.filter((note) => !note.isPinned);
    const searchedNotes = searchNotes(notPinnedNotes, search);
    const filteredNotes = filterNotes(searchedNotes, filterLabels);
    const sortedNotes = sortNotes(filteredNotes, sort);

    const navigate = useNavigate();
    useEffect(() => {
        loadNewNotes(dispatchNote, navigate);
    }, []);

    return (
        <div className="home__container ">
            <div
                className="btn clear"
                onClick={() => {
                    console.log("clicked");
                    dispatchFilter({ type: "CLEAR" });
                }}
            >
                Clear all
            </div>

            {pinnedNotes.length !== 0 ? (
                <div className="pinned__notes">
                    <div className="pinned__title">Pinned Notes :</div>
                    {pinnedNotes.map((note) => (
                        <Card key={note._id} note={note} />
                    ))}
                </div>
            ) : (
                <div></div>
            )}

            <div className="other">Other Notes :</div>
            {sortedNotes.length !== 0 ? (
                <ul className="note__list">
                    {sortedNotes.map((note) => (
                        <Card key={note._id} note={note} />
                    ))}
                </ul>
            ) : (
                <div className="empty">It's Empty here</div>
            )}
        </div>
    );
};

export default Home;
