import React from "react";
import { useNote } from "../../contexts/NoteContext";
import Card from "../Card/Card";
import "./Trash.scss";

const Trash = () => {
    const {
        stateNote: { trashNotes },
    } = useNote();

    return (
        <div className="trash__container container">
            <div className="option__title">Trash</div>

            {trashNotes.length !== 0 ? (
                trashNotes.map((note) => <Card key={note._id} note={note} />)
            ) : (
                <div className="empty">It's Empty here</div>
            )}
        </div>
    );
};

export default Trash;
