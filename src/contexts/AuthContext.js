import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const oldToken = localStorage.getItem("token");

    const [stateAuth, dispatchAuth] = useReducer(AuthReducer, {
        userDetails: [],
        token: oldToken ?? "",
        isAuth: oldToken ? true : false,
    });
    return (
        <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContextProvider };
