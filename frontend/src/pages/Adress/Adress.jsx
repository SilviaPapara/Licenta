import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Adress.css";

export default function Adress() {

    return (
        <body>
            <div className="containerr">
                <form action="#">
                    <div className="form_first">
                        <div class="details personal">
                            <div class="fields">
                                <div class="input-field">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div class="input-field">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div class="input-field">
                                    <label>Mobile Number</label>
                                    <input
                                        type="number"
                                        placeholder="Enter mobile number"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="details ID">
                            <div class="fields">
                                <div class="input-field">
                                    <label>Country</label>
                                    <input
                                        type="text"
                                        placeholder="Enter ID type"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="details ID">
                            <div class="fields">
                                <div class="input-field">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        placeholder="Enter ID type"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="details ID">
                            <div class="fields">
                                <div class="input-field">
                                    <label>Street</label>
                                    <input
                                        type="text"
                                        placeholder="Enter ID type"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="details ID">
                            <label>Street Number</label>
                            <input
                                type="text"
                                placeholder="Enter ID type"
                                required
                            />
                        </div>

                        <div class="details ID">
                            <div class="fields">
                                <div class="input-field">
                                    <label>Zip Code</label>
                                    <input
                                        type="text"
                                        placeholder="Enter ID type"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form second">
                        <div class="details family">
                            <div class="buttons">
                                <div class="backBtn">
                                    <i class="uil uil-navigator"></i>
                                    <span class="btnText">Submit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    );
}
