import React, { useEffect, useState } from "react";
import axios from "axios";
import "./account.css";
import Navbar2 from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function MyAccount() {
    const LogOut = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("username", "");
        localStorage.setItem("userEmail", "");
        localStorage.setItem("cartItems", "");
    };

    const [name, setName] = useState(localStorage.getItem("username"));

    useEffect(async () => {
        const url = "http://localhost:8000/api/users";
        const res = await axios.get(url, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        // console.log(res);
        // console.log(res.data.user.name);
    });

    // const restrict = () => {
    if (!localStorage.getItem("token")) {
        window.location.href = "/";
    }
    // };

    const YourComponent = () => {
        const navigate = useNavigate();

        const handleClick = () => {
            navigate("/path/to/push");
        };
    };

    return (
        <>
            <div className="titleAccount">
                <h2>Welcome, {name}</h2>
            </div>

            <div>
                <a href="/order-history">
                    <button className="butonCont">Order History</button>
                </a>
                <br></br>
                <a href="/savedItems">
                    <button className="butonCont">Saved Items</button>
                </a>
                <br></br>

                <a href="/">
                    <button className="butonCont">
                        {" "}
                        Delete Account
                    </button>
                </a>

                <br></br>
                <hr className="linie" />

                <a href="/">
                    <button onClick={LogOut} className="butonLogOut">
                        {" "}
                        Log Out
                    </button>
                </a>
            </div>
        </>
    );
}
