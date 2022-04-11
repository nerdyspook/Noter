export const filterNotes = (notes, filterLabels) => {
    if (filterLabels) {
        const output = notes.filter(
            (note) => note.labels.toLowerCase() === filterLabels.toLowerCase()
        );
        return output;
    }

    return notes;
};
