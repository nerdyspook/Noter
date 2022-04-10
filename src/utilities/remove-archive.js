import axios from "axios";

export const removeArchive = async (id, dispatchNote) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/archives/delete/${id}`,
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
        console.log("Error: ", e);
    }
};
