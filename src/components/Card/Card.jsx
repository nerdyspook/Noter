import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { BsFillPinFill } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdLabelOutline } from "react-icons/md";
import { GoArchive } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import "./Card.scss";

const Card = () => {
    return (
        <div className="card__container">
            <div className="title">
                <p>Title</p>
                <div className="icons">
                    <FiEdit3 />
                    <BsFillPinFill />
                </div>
            </div>

            <div className="data">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem fugit, ipsa corporis cumque ipsam dolor nihil
                illo! Saepe pariatur, asperiores iure iusto, sint adipisci neque
                error voluptas sed quaerat modi.
            </div>

            <div className="bottom">
                <div className="date">Created on 6-4-2022</div>
                <div className="icons">
                    <IoColorPaletteOutline />
                    <MdLabelOutline />
                    <GoArchive />
                    <AiOutlineDelete />
                </div>
            </div>
        </div>
    );
};

export default Card;
