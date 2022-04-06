import React from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";

const Login = () => {
    return (
        <main className="auth_container main">
            <form>
                <div className="title">
                    <h2>Log In</h2>
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

                <div className="input__container-cta">
                    <div className="checkbox">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember"> Remember me </label>
                    </div>
                    <Link to={"/"} className="forgot">
                        Forgot your password?
                    </Link>
                </div>

                <div className="btn login__btn">Log In</div>

                <div className="login__container">
                    <p>
                        Not a Member?
                        <Link to={"/signup"}>
                            <strong>Sign Up</strong>
                        </Link>
                    </p>
                </div>

                <div className="copy legal">
                    <p>
                        <span className="small">
                            By continuing, you agree to accept our
                            <br />
                            <Link to={"/"}>Privacy Policy</Link> &amp;
                            <Link to={"/"}>Terms of Service</Link>.
                        </span>
                    </p>
                </div>
            </form>
        </main>
    );
};

export default Login;
