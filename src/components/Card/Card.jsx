import React from "react";
import { addArchive } from "../../utilities/add-archive";
import { restoreArchive } from "../../utilities/restore-archive";
import { FiEdit3 } from "react-icons/fi";
import { BsFillPinFill } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdLabelOutline } from "react-icons/md";
import { GoArchive } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import "./Card.scss";
import { useNote } from "../../contexts/NoteContext";

const Card = ({ note }) => {
    const { noteTitle, noteData, createdAt, _id } = note;
    const date = createdAt.slice(0, 10);

    const { stateNote, dispatchNote } = useNote();
    const { archiveNotes } = stateNote;

    const inArchive = archiveNotes.some((item) => item._id === _id);

    return (
        <div className="card__container">
            <div className="title">
                <p>{noteTitle}</p>
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
                    <BsFillPinFill className="pin" />
                </div>
            </div>

            <div className="data">{noteData}</div>

            <div className="bottom">
                <div className="date">Created on {date}</div>
                <div className="icons">
                    <IoColorPaletteOutline className="paint" />
                    <MdLabelOutline className="tag" />
                    <GoArchive
                        className="archive"
                        style={{ color: `${inArchive && "#fb923c"}` }}
                        onClick={() =>
                            inArchive
                                ? restoreArchive(_id, dispatchNote)
                                : addArchive(_id, note, dispatchNote)
                        }
                    />
                    <AiOutlineDelete className="trash" />
                </div>
            </div>
        </div>
    );
};

export default Card;
