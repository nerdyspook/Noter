import React from "react";
import Card from "../Card/Card";
import "./Labels.scss";

const Labels = () => {
    return (
        <div className="labels__container container">
            <div className="option__title">Labels</div>
            <div className="labels"></div>
            <Card />
        </div>
    );
};

export default Labels;
