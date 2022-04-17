import axios from "axios";

export const loginUser = async (email, password, dispatchAuth, navigate) => {
    try {
        const response = await axios({
            method: "POST",
            url: "/api/auth/login",
            data: {
                email,
                password,
            },
        });

        if (response.status === 200) {
            dispatchAuth({
                type: "GET_USER_DETAILS",
                payload: response.data.foundUser,
            });

            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.foundUser)
            );
            navigate("/notes");
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
