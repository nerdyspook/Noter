import axios from "axios";

export const removeNote = async (id, note, dispatchNote) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/notes/${id}`,
            headers: {
                authorization: token,
            },
        });

        if (response.status === 200) {
            dispatchNote({ type: "ADD_TRASH", payload: note });
            dispatchNote({ type: "ADD_NOTE", payload: response.data.notes });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
