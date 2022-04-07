import React, { useEffect } from "react";
import Card from "../Card/Card";

import { loadNewNotes } from "../../utilities/load-new-note";
import "./Home.scss";
import { useNote } from "../../contexts/NoteContext";

const Home = () => {
    const { stateNote, dispatchNote } = useNote();
    const { newNote } = stateNote;

    useEffect(() => {
        loadNewNotes(dispatchNote);
    }, []);

    return (
        <div className="home__container container">
            {newNote.length !== 0 ? (
                <ul className="note__list">
                    {newNote.map((note) => (
                        <Card key={note._id} note={note} />
                    ))}
                </ul>
            ) : (
                <div>It's Empty here</div>
            )}
        </div>
    );
};

export default Home;
