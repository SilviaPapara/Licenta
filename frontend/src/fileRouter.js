import React, {useEffect, useState} from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Shop2 from "./pages/Shop2";
import Livrare from "./pages/Livrare/Livrare";
import AboutUs from "./pages/AboutUs/AboutUs";
import LogIn1 from "./pages/LogIn/LogIn1";
import Register from "./pages/Register/Register";
import SavedItem from "./pages/SavedItems/SavedItems";
import MyAccount from "./pages/Account/MyAccount";
import ConfirmOrder from "./pages/Confirm_Order/ConfirmOrder";
import Adress from "./pages/Adress/Adress";
import Checkout from "./pages/Checkout/Checkout";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import axios from "axios";
import data from "./pages/data";

export default function Router() {
    let initialCartItems = localStorage.getItem('cartItems');

    initialCartItems = initialCartItems ? JSON.parse(initialCartItems) : [];

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [favProducts, setFavProducts] = useState([]);
    const { products } = data;

    useEffect(() => {
        try {
            const url = "http://localhost:8000/api/get-fav-products";
            const email = localStorage.getItem("userEmail");

            axios.post(url, { email }).then((res) => {
                setFavProducts(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const onAdd = (product) => {
        let newCartItem = [];
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            newCartItem = cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                );
        } else {
            newCartItem = [...cartItems, { ...product, qty: 1 }]
        }

        setCartItems(newCartItem);
        localStorage.setItem('cartItems', JSON.stringify(newCartItem));
    };

    const onRemove = (product) => {
        let newCartItem = [];
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            newCartItem = cartItems.filter((x) => x.id !== product.id);
        } else {
            newCartItem = cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                );
        }

        setCartItems(newCartItem);
        localStorage.setItem('cartItems', JSON.stringify(newCartItem));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/livrare" element={<Livrare />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route
                    path="/Shop2"
                    element={
                        <Shop2
                            products={products}
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            favProducts={favProducts}
                        />
                    }
                />
                <Route
                    path="/checkout"
                    element={<Checkout cartItems={cartItems} />}
                />
                <Route path="/login1" element={<LogIn1 />} />
                <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
                <Route path="/register" element={<Register />} />
                <Route path="/myAccount" element={<MyAccount />} />
                <Route path="/savedItems" element={
                    <SavedItem
                        products={products}
                        favProducts={favProducts}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    />}
                />
                <Route path="/adress" element={<Adress />} />
                <Route path="/order-history" element={<OrderHistory />} />
            </Routes>
        </BrowserRouter>
    );
}
