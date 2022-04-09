export const getFilteredProducts = (notes, low, high) => {
    const filteredList = [];

    if (low === false && high === false) {
        return notes;
    }

    if (low) {
        let newList = notes.filter((note) => note.priority === "Low");
        filteredList.push(...newList);
    }

    if (high) {
        let newList = notes.filter((note) => note.priority === "High");
        filteredList.push(...newList);
    }
    console.log(filteredList);

    return filteredList;
};
