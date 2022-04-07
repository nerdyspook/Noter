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

                    <div className="join btn">Join Now</div>
                    <Link to="/notes" className="link">
                        Already have an account?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;
