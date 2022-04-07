import React from "react";
import Card from "../Card/Card";
import "./Trash.scss";

const Trash = () => {
    return (
        <div className="trash__container container">
            <div className="option__title">Trash</div>
            <Card />
        </div>
    );
};

export default Trash;
