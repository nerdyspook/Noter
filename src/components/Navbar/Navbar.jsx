import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const navigate = useNavigate();

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
                <div className="username">Susanto</div>
                <RiLogoutBoxRLine onClick={logout} className="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
