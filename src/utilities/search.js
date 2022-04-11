export const searchNotes = (notes, search) => {
    if (search) {
        return [...notes].filter(
            (note) =>
                note.noteTitle.toLowerCase().includes(search.toLowerCase()) ||
                note.labels.toLowerCase().includes(search.toLowerCase())
        );
    }

    return notes;
};
