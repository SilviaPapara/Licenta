import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrderHistory.css";

export default () => {
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        try {
            const url = "http://localhost:8000/api/order-history";
            const email = localStorage.getItem("userEmail");

            axios.post(url, { email }).then((res) => {
                setOrderHistory(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);
    console.log(orderHistory);
    
    return orderHistory.map((order) => (
        <div className="border border-dark m-5">
           
            <div>{new Date(order.orderDate).toString()}</div>
            <div className="historyArrange">
                <div>
                    <h2>
                        <strong>Items:</strong>
                    </h2>
                </div>
                {order.cartItems.map((item) => (
                    <div>
                        <h4>{item.name}</h4>
                        <h5>{item.description}</h5>
                        <h5> Quantity: {item.qty}</h5>
                        <div className="priceSize">${item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    ));
};
