import axios from "axios";

export const loadNewNotes = async (dispatchNote) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "GET",
            url: "/api/notes",
            headers: {
                authorization: token,
            },
        });

        if (response.status === 200) {
            dispatchNote({ type: "ADD_NOTE", payload: response.data.notes });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
