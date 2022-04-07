import axios from "axios";

export const restoreArchive = async (id, dispatchNote) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "POST",
            url: `/api/archives/restore/${id}`,
            headers: {
                authorization: token,
            },
        });
        if (response.status === 200) {
            dispatchNote({
                type: "ADD_ARCHIVE",
                payload: response.data.archives,
            });
            dispatchNote({ type: "ADD_NOTE", payload: response.data.notes });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
