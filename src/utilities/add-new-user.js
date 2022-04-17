import axios from "axios";

export const addNewUser = async (
    firstName,
    lastName,
    email,
    password,
    dispatchAuth,
    navigate
) => {
    try {
        const response = await axios({
            method: "POST",
            url: "/api/auth/signup",
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            },
        });

        if (response.status === 201) {
            dispatchAuth({
                type: "GET_USER_DETAILS",
                payload: response.data.createdUser,
            });
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.createdUser)
            );
            navigate("/notes");
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
