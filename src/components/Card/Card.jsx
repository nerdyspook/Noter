import React, { useState } from "react";
import { addNewNote } from "../../utilities/add-new-note";
import { addArchive } from "../../utilities/add-archive";
import { restoreArchive } from "../../utilities/restore-archive";
import { removeArchive } from "../../utilities/remove-archive";
import { removeNote } from "../../utilities/remove-note";
import { editNote } from "../../utilities/edit-notes";

import { FiEdit3 } from "react-icons/fi";
import { BsFillPinFill } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { GoArchive } from "react-icons/go";
import {
    MdLabelOutline,
    MdOutlineRestoreFromTrash,
    MdOutlineDeleteForever,
} from "react-icons/md";

import { useNote } from "../../contexts/NoteContext";
import "./Card.scss";

const Card = ({ note }) => {
    const { noteTitle, noteData, createdAt, _id, labels, isPinned } = note;
    const date = createdAt.slice(0, 10);

    const {
        stateNote: { archiveNotes, trashNotes },
        dispatchNote,
    } = useNote();

    const inArchive = archiveNotes.some((note) => note._id === _id);
    const inTrash = trashNotes.some((note) => note._id === _id);

    const [label, setLabel] = useState(labels);
    const [pinned, setPinned] = useState(isPinned);

    const deleteNote = () => {
        const newNote = trashNotes.filter((note) => note._id !== _id);

        dispatchNote({
            type: "DELETE_NOTE",
            payload: newNote,
        });
    };

    const changeLabel = (note) => {
        const change = label === "Low" ? "High" : "Low";
        setLabel(change);
        const labelNote = { ...note, labels: change };
        editNote(_id, labelNote, dispatchNote);
    };

    return (
        <div className="card__container">
            <div className="title">
                <p>{noteTitle || "Empty title"}</p>
                <div className="icons">
                    <FiEdit3
                        className="edit"
                        onClick={() =>
                            dispatchNote({
                                type: "EDIT",
                                payload: { show: true, noteInfo: note },
                            })
                        }
                    />
                    <BsFillPinFill
                        className={`pin ${pinned && "pinned"}`}
                        onClick={() => {
                            const pinNote = { ...note, isPinned: !isPinned };
                            editNote(_id, pinNote, dispatchNote);
                            setPinned((prevPin) => !prevPin);
                        }}
                    />
                </div>
            </div>

            <div className="data">{noteData || "Empty data"}</div>
            <div className="chip">{labels}</div>

            <div className="bottom">
                <div className="date">Created on {date}</div>
                <div className="icons">
                    <IoColorPaletteOutline className="paint" />
                    <MdLabelOutline
                        className="tag"
                        onClick={() => changeLabel(note)}
                    />
                    <GoArchive
                        className="archive"
                        style={{ color: `${inArchive && "#fb923c"}` }}
                        onClick={() =>
                            inArchive
                                ? restoreArchive(_id, dispatchNote)
                                : addArchive(_id, note, dispatchNote)
                        }
                    />

                    {inTrash ? (
                        <div className="inside__trash">
                            <MdOutlineRestoreFromTrash
                                className="restore__trash"
                                onClick={() => {
                                    deleteNote();
                                    addNewNote(note, dispatchNote);
                                }}
                            />
                            <MdOutlineDeleteForever
                                className="detele__trash"
                                onClick={() => deleteNote()}
                            />
                        </div>
                    ) : (
                        <AiOutlineDelete
                            className="trash"
                            onClick={() => {
                                if (inArchive) {
                                    removeArchive(_id, dispatchNote);
                                    removeNote(_id, note, dispatchNote);
                                } else {
                                    removeNote(_id, note, dispatchNote);
                                }
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
