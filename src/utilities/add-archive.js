import axios from "axios";

export const addArchive = async (id, note, dispatchNote) => {
    const token = localStorage.getItem("token");
    const currentColor = note.color;

    try {
        const response = await axios({
            method: "POST",
            url: `/api/notes/archives/${id}`,
            data: { note },
            headers: {
                authorization: token,
            },
        });

        if (response.status === 201) {
            response.data.archives.map((note) => {
                if (note._id === id) {
                    note.color = currentColor;
                }
                return note;
            });
            dispatchNote({ type: "ADD_NOTE", payload: response.data.notes });
            dispatchNote({
                type: "ADD_ARCHIVE",
                payload: response.data.archives,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
