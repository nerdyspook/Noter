import axios from "axios";

export const loadArchive = async (dispatchNote) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "GET",
            url: `/api/archives`,
            headers: {
                authorization: token,
            },
        });
        if (response.status === 200) {
            dispatchNote({
                type: "ADD_ARCHIVE",
                payload: response.data.archives,
            });
        }
    } catch (e) {
        console.log("Error:", e);
    }
};
