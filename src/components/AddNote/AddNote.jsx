import React, { useState } from "react";
import { useNote } from "../../contexts/NoteContext";
import { AiOutlineClose } from "react-icons/ai";
import { addNewNote } from "../../utilities/add-new-note";
import { editNote } from "../../utilities/edit-notes";
import "./AddNote.scss";

const AddNote = () => {
    const { stateNote, dispatchNote } = useNote();
    const { currentEditNote } = stateNote;

    const [title, setTitle] = useState(
        currentEditNote?.noteTitle ? currentEditNote?.noteTitle : ""
    );
    const [body, setBody] = useState(
        currentEditNote?.noteData ? currentEditNote?.noteData : ""
    );

    const [label, setLabel] = useState("Low");

    const add = () => {
        Object.keys(currentEditNote).length !== 0
            ? editNote(
                  currentEditNote._id,
                  {
                      noteTitle: title,
                      isPinned: false,
                      noteData: body,
                      createdAt: new Date(),
                      createTiming: Date.now(),
                      color: "",
                      labels: label,
                      isTrash: false,
                  },
                  dispatchNote
              )
            : addNewNote(
                  {
                      noteTitle: title,
                      isPinned: false,
                      noteData: body,
                      createdAt: new Date(),
                      createTiming: Date.now(),
                      color: "",
                      labels: label,
                      isTrash: false,
                  },
                  dispatchNote
              );
        setTitle("");
        setBody("");
        dispatchNote({ type: "DISPLAY_NOTE_EDITOR", payload: { show: false } });
    };

    return (
        <div className="newnote__container">
            <div className="top">
                <AiOutlineClose
                    className="close_btn"
                    onClick={() =>
                        dispatchNote({
                            type: "DISPLAY_NOTE_EDITOR",
                            payload: { show: false },
                        })
                    }
                />
            </div>

            <input
                className="note__title"
                type="text"
                placeholder="Type title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="note__body"
                placeholder="Type here"
                rows={7}
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <div className="bottom">
                <div className="label">
                    Priority :
                    <select
                        className="label-input"
                        placeholder="Tags"
                        onClick={(e) => setLabel(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <button className="save btn" onClick={add}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;
