import React from "react";
import { useNote } from "../../contexts/NoteContext";
import Card from "../Card/Card";
import "./Labels.scss";

const Labels = () => {
    const { stateNote } = useNote();
    const { newNote } = stateNote;

    const highNotes = newNote.filter((note) => note.labels === "High");
    const lowNotes = newNote.filter((note) => note.labels === "Low");

    return (
        <div className="labels__container container">
            <div className="option__title">Labels</div>

            <div className="high__priority">
                <div className="label">Priority: High</div>
                {highNotes.length ? (
                    highNotes.map((note) => <Card key={note._id} note={note} />)
                ) : (
                    <div className="empty">Empty</div>
                )}
            </div>

            <div className="low__priority">
                <div className="label">Priority: Low</div>
                {lowNotes.length ? (
                    lowNotes.map((note) => <Card key={note._id} note={note} />)
                ) : (
                    <div className="empty">Empty</div>
                )}
            </div>
        </div>
    );
};

export default Labels;
