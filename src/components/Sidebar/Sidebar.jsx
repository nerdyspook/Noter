import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    AiOutlineDelete,
    AiOutlineHome,
    AiOutlineDownSquare,
} from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { GoArchive } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import "./Sidebar.scss";

const Sidebar = () => {
    const [showMobile, setShowMobile] = useState(false);
    return (
        <section className="sidebar">
            <div className="mobile">
                <h2>Options</h2>

                <AiOutlineDownSquare
                    className="expand__btn"
                    onClick={() => setShowMobile((showMobile) => !showMobile)}
                />
            </div>

            <div className={`options ${showMobile ? "show" : "hide"}`}>
                <ul>
                    <li>
                        <NavLink to={"/notes/home"} className="nav__link">
                            <AiOutlineHome className="icon" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/notes/labels"} className="nav__link">
                            <MdLabelOutline className="icon" />
                            Labels
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/notes/archive"} className="nav__link">
                            <GoArchive
                                className="icon"
                                style={{ fontsize: "2rem" }}
                            />
                            Archive
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/notes/trash"} className="nav__link">
                            <AiOutlineDelete className="icon" />
                            Trash
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/notes/profile"} className="nav__link">
                            <CgProfile className="icon" /> Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="btn">Create new note</div>
        </section>
    );
};

export default Sidebar;
