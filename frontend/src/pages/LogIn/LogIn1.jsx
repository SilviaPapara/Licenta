import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn1.css";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        if (input.type === "email") {
            localStorage.setItem("userEmail", input.value);
        }
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/auth";
            const res = await axios.post(url, data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.user.name);
            navigate("/myAccount");
            navigate(0);
            console.log(res);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                setError("Login Failed: Your email or password is incorrect");
            }
        }
    };

    return (
        <div className="login_container">
            <div className="login_form_container">
                <div className="left1">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="input"
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type="submit" className="green_btn">
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="right1">
                    <h1>New Here ?</h1>
                    <Link to="/register">
                        <button type="button" className="white_btn">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
