import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import Route from "./fileRouter.js";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import "./style/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Route />
        <Footer />
        <ToastContainer />
    </React.StrictMode>,
    document.getElementById("root")
);
