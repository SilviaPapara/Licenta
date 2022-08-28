import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register1.css";

const Signup = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.password !== data.confirmPassword) {
            setError("The two passwords did not match.");
        } else {
            try {
                console.log("-------------------------------");
                const url = "http://localhost:8000/api/users";
                const { data: res } = await axios.post(url, data);
                navigate("/login1");
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data);
                }
            }
        }
    };

    return (
        <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                    <h1>Have an account?</h1>
                    <Link to="/login1">
                        <button type="button" className="white_btn">
                            Log In
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <form className="form_container_2" onSubmit={handleSubmit}>
                        <h1 className="Create">Create Account</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                            value={data.username}
                            required
                            className="input"
                        />

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
                            minlength="8"
                            className="input"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            onChange={handleChange}
                            required
                            minlength="8"
                            className="input"
                        />
                        {error && <div class="text-danger">{error}</div>}
                        <button type="submit" className="green_btn">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
