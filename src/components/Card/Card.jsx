import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { BsFillPinFill } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdLabelOutline } from "react-icons/md";
import { GoArchive } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import "./Card.scss";
import { useNote } from "../../contexts/NoteContext";

const Card = ({ note }) => {
    const { noteTitle, noteData, createdAt, id } = note;
    const date = createdAt.slice(0, 10);

    const { stateNote, dispatchNote } = useNote();

    return (
        <div className="card__container">
            <div className="title">
                <p>{noteTitle}</p>
                <div className="icons">
                    <FiEdit3
                        onClick={() =>
                            dispatchNote({
                                type: "EDIT",
                                payload: { show: true, noteInfo: note },
                            })
                        }
                    />
                    <BsFillPinFill />
                </div>
            </div>

            <div className="data">{noteData}</div>

            <div className="bottom">
                <div className="date">Created on {date}</div>
                <div className="icons">
                    <IoColorPaletteOutline />
                    <MdLabelOutline />
                    <GoArchive />
                    <AiOutlineDelete />
                </div>
            </div>
        </div>
    );
};

export default Card;
