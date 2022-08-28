import React from "react";
import "./Livrare.css";

export default function Livrare() {
    return (
        <>
            <div className="livrare">
                <div className="bigText1">
                    <h1 className="deliveryText1">DELIVERY</h1>
                    <hr className="linie1"></hr>
                    <br></br>
                    <h4 className="h4Livrare">
                        {" "}
                        - Shipping is free for purchases above $100 -
                    </h4>
                </div>
                <br></br>
                <div className="pozitionareBox">
                    <div className="deliveryBox2">
                        <h3>COURIER</h3>
                        <h6>
                            For Courier Delivery, select the "Courier" option
                            from the shopping cart. Delivery will be made
                            through the Cargus delivery service, the payment for
                            the item and the delivery will be taken upon
                            completion of the delivery.
                        </h6>
                    </div>

                    <div className="deliveryBox3">
                        <h3>PICKUP FROM COFFEE SHOP</h3>
                        <h6>
                            You can pick up your favorite products from our shop
                            at Boulevard Decebal Nr.9, Piatra Neamt.<br></br>
                            You can also give us a call to prepare your order
                            before.
                        </h6>
                    </div>
                </div>
                <br></br>
                <br></br>
                <h2 className="bigText1">RETURN POLICY</h2>
                <h6 className="retur">
                    We do not accept the return of products.
                    <br></br>
                    But if the products are damaged in any way by courier,
                    please send us pictures with evidence to the email address,
                    and we will send you new products.
                </h6>
            </div>
        </>
    );
}
