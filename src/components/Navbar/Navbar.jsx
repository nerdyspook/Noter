import React from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./Navbar.scss";

const Navbar = () => {
    const navigate = useNavigate();

    const { firstName } = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="navbar__container">
            <div className="brand" onClick={() => navigate("/")}>
                Noter
            </div>
            <div className="user">
                <div className="username">Hello, {firstName}</div>
                <RiLogoutBoxRLine onClick={logout} className="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
