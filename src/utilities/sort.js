export const sortNotes = (notes, sortby) => {
    if (sortby === "New") {
        return [...notes].sort((a, b) => b.createTiming - a.createTiming);
    }

    if (sortby === "Old") {
        return [...notes].sort((a, b) => a.createTiming - b.createTiming);
    }

    return notes;
};
