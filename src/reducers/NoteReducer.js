export const NoteReducer = (stateNote, actionNote) => {
    switch (actionNote.type) {
        case "ADD_NOTE":
            return { ...stateNote, newNote: actionNote.payload };

        case "ADD_ARCHIVE":
            return { ...stateNote, archiveNotes: actionNote.payload };

        case "ADD_TRASH":
            return {
                ...stateNote,
                trashNotes: [...stateNote.trashNotes, actionNote.payload],
            };

        case "DISPLAY_NOTE_EDITOR":
            return { ...stateNote, displayNoteEditor: actionNote.payload.show };

        case "EDIT":
            return {
                ...stateNote,
                currentEditNote: actionNote.payload.noteInfo,
                displayNoteEditor: actionNote.payload.show,
            };

        case "DELETE_NOTE":
            return { ...stateNote, trashNotes: actionNote.payload };

        case "REMOVE_EDIT":
            return { ...stateNote, currentEditNote: [] };
        default:
            return stateNote;
    }
};
