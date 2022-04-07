import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
    return (
        <div className="box container">
            <div className="shadow_box">
                <div className="contain">
                    <div className="brand">Noter</div>
                    <h2 className="tagline1">Meet your modern</h2>
                    <h2 className="tagline2">Note Taking App</h2>

                    <p className="details">
                        Manage your daily tasks and workflow in a moders way and
                        boost your efficiency without any efforts.
                    </p>

                    <Link to="/signup" className="join btn">
                        Join Now
                    </Link>
                    <Link to="/login" className="link">
                        Already have an account?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;
