import axios from "axios";

export const addNewNote = async (note, dispatchNote) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "POST",
            url: "/api/notes",
            data: { note },
            headers: {
                authorization: token,
            },
        });
        if (response.status === 201) {
            dispatchNote({ type: "ADD_NOTE", payload: response.data.notes });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
