import { createContext, useContext, useReducer } from "react";
import { NoteReducer } from "../reducers/NoteReducer";

const NoteContext = createContext(null);

const NoteContextProvider = ({ children }) => {
    const [stateNote, dispatchNote] = useReducer(NoteReducer, {
        newNote: [],
        archiveNotes: [],
        trashNotes: [],
        currentEditNote: [],
        displayNoteEditor: false,
    });
    return (
        <NoteContext.Provider value={{ stateNote, dispatchNote }}>
            {children}
        </NoteContext.Provider>
    );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteContextProvider };
