import React, { useState, useRef } from "react";
import axios from "axios";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems }) {
    const formRef = useRef();
    const [basicInfo, setBasicInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        fullAddress: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const handleBasicInfoChange = (event) => {
        setBasicInfo({
            ...basicInfo,
            [event.target.name]: event.target.value,
        });
    };

    function selectOnlyThis(id) {
        var myCheckbox = document.getElementsByName("myCheckbox");
        Array.prototype.forEach.call(myCheckbox, function (el) {
            el.checked = false;
        });
        id.checked = true;
    }

    const sendOrder = (event) => {
        if (formRef.current.checkValidity()) {
            try {
                const url = "http://localhost:8000/api/order";
                const email = localStorage.getItem("userEmail");
                const res = axios
                    .post(url, { basicInfo , cartItems, email })
                    .then(() => {});
                console.log(res.message);
            } catch (error) {
                console.log(error);
            }
            console.log("navigate");
            navigateToConfirmOrder();
        }
    };

    const navigate = useNavigate();

    const navigateToConfirmOrder = () => {
        navigate("/ConfirmOrder");
    };

    let totalPrice = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
    totalPrice = totalPrice >= 100 ? totalPrice : totalPrice + 10;

    return (
        <div className="py-4 tot">
            <div className="container1">
                <div className="row">
                    <div className="wrapper1">
                        <div className="card">
                            <div className="card-header, info1">
                                <h4> Contact Information </h4>
                            </div>

                            <form
                                ref={formRef}
                                className="card-body, adresaDesign"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                className="form-control"
                                                onChange={handleBasicInfoChange}
                                                value={basicInfo.firstName}
                                                required="required"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                className="form-control"
                                                onChange={handleBasicInfoChange}
                                                value={basicInfo.lastName}
                                                required="required"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Phone Number</label>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                className="form-control"
                                                onChange={handleBasicInfoChange}
                                                value={basicInfo.phoneNumber}
                                                required="required"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Email Adress </label>
                                            <input
                                                type="email"
                                                name="emailAddress"
                                                className="form-control"
                                                onChange={handleBasicInfoChange}
                                                value={basicInfo.emailAddress}
                                                required="required"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label> Full Adress </label>
                                            <textarea
                                                rows="3"
                                                name="fullAddress"
                                                className="form-control"
                                                onChange={handleBasicInfoChange}
                                                value={basicInfo.fullAddress}
                                                required="required"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> City </label>
                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control"
                                                onChange={handleBasicInfoChange}
                                                value={basicInfo.city}
                                                required="required"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> State </label>
                                            <input
                                                type="text"
                                                name="state"
                                                className="form-control"
                                                onChange={handleBasicInfoChange}
                                                value={basicInfo.state}
                                                required="required"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Zip Code </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                className="form-control"
                                                onChange={handleBasicInfoChange}
                                                value={basicInfo.zipCode}
                                                required="required"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3 text-end">
                                            <input
                                                type="submit"
                                                value="Place Order"
                                                className="butonOrder"
                                                onClick={sendOrder}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-5 trimitere">
                            <table className="table table-bordered tabela">
                                <thead>
                                    <tr>
                                        <th width="50%">Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.price}$</td>
                                            <td>{item.qty}</td>
                                            <td>{item.price * item.qty}$</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <strong>Total sum: {totalPrice}$</strong>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
