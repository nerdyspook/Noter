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
            console.log(response);
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
                "firstName",
                response.data.foundUser.firstName
            );
            localStorage.setItem("lastName", response.data.foundUser.lastName);
            localStorage.setItem("email", response.data.foundUser.email);

            navigate("/notes");
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
