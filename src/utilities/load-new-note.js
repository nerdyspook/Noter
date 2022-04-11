import axios from "axios";

export const loadNewNotes = async (dispatchNote, navigate) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "GET",
            url: "/api/notes",
            headers: {
                authorization: token,
            },
        });

        if (response.status === 500) {
            navigate("/login");
        }

        if (response.status === 200) {
            dispatchNote({ type: "ADD_NOTE", payload: response.data.notes });
        }
    } catch (e) {
        console.log("Error: ", e);
        navigate("/login");
    }
};
