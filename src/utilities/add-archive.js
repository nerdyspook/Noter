import axios from "axios";

export const addArchive = async (id, note, dispatchNote) => {
    const token = localStorage.getItem("token");

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
