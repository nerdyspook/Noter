import React from "react";
import "./Profile.scss";

const Profile = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    const { firstName, lastName, email } = userDetails;

    return (
        <div className="profile__container container">
            <div className="option__title">Profile</div>
            <div className="data">
                <div className="firstname">
                    First Name : <span>{firstName}</span>
                </div>
                <div className="lastname">
                    Last Name : <span>{lastName}</span>
                </div>
                <div className="email">
                    Email : <span>{email}</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
