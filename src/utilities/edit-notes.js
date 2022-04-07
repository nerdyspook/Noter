import axios from "axios";

export const editNote = async (id, note, dispatchNote) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "POST",
            url: `/api/notes/${id}`,
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
