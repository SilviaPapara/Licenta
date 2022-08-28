import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Basket(props) {
    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate("/checkout");
    };

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 99 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <aside className="block">
            <h2> Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={cartItems.id} className="row2">
                    <div> {item.name} </div>
                    <div>
                        <button onClick={() => onAdd(item)} className="add">
                            +
                        </button>
                        <span> </span>
                        <button
                            onClick={() => onRemove(item)}
                            className="remove"
                        >
                            -
                        </button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row2">
                        <div className="col-3">
                            <strong> Items Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            {" "}
                            ${itemsPrice.toFixed(2)}
                        </div>
                    </div>

                    <div className="row2">
                        <div className="col-2">
                            <strong>Shipping</strong>
                        </div>
                        <div className="col-1 text-right">
                            {" "}
                            ${shippingPrice.toFixed(2)}
                        </div>
                    </div>

                    <hr/>

                    <div className="row2">
                        <div className="col-3">
                            {" "}
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            {" "}
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className="row2">
                        <button
                            className="Cartbutton"
                            onClick={navigateToCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
}
