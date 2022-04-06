import React from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";

const Signup = () => {
    return (
        <main className="auth_container main">
            <form>
                <section className="title">
                    <h2>Sign Up</h2>
                </section>

                <div className="fullname__container">
                    <div className="input__container name">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Type here"
                            id="firstname"
                        />
                    </div>
                    <div className="input__container name">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Type here"
                            id="lastname"
                        />
                    </div>
                </div>

                <div className="input__container email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type here"
                        id="email"
                    />
                </div>

                <div className="input__container password">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="Must be atleast 8 characters"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>

                <div className="signup__container-cta">
                    <input type="checkbox" name="updates" id="updates" />
                    <label htmlFor="updates">Sign up for email updates</label>
                </div>

                <div className="btn signup__btn">Sign Up</div>

                <div className="login__container">
                    <p>
                        Already have an Account?
                        <Link to={"/login"}>
                            <strong>Log In</strong>
                        </Link>
                    </p>
                </div>

                <section className="copy legal">
                    <p>
                        <span className="small">
                            By continuing, you agree to accept our
                            <br />
                            <Link to={"/"}>Privacy Policy</Link> &amp;
                            <Link to={"/"}>Terms of Service</Link>.
                        </span>
                    </p>
                </section>
            </form>
        </main>
    );
};

export default Signup;
