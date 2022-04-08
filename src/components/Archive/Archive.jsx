import React, { useEffect } from "react";
import { useNote } from "../../contexts/NoteContext";
import { loadArchive } from "../../utilities/load-archive";
import Card from "../Card/Card";
import "./Archive.scss";

const Archive = () => {
    const { stateNote, dispatchNote } = useNote();
    const { archiveNotes } = stateNote;

    useEffect(() => {
        loadArchive(dispatchNote);
    }, []);

    return (
        <div className="archive__container container">
            <div className="option__title">Archive</div>
            {archiveNotes.length !== 0 ? (
                <ul>
                    {archiveNotes.map((note) => (
                        <Card key={note._id} note={note} />
                    ))}
                </ul>
            ) : (
                <div className="empty">It's Empty here</div>
            )}
        </div>
    );
};

export default Archive;
