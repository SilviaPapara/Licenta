import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cart.css";
import heart from "../images/heart.png";
import heartFill from "../images/heartFill.png";

export default function Product({ product, onAdd, favProducts }) {
    const [isFavProduct, setIsFavProduct] = useState(false);

    useEffect(() => {
        console.log(favProducts);
        const initialIsFav =
            favProducts.find((favProduct) => favProduct === product.id) !==
            undefined;

        setIsFavProduct(initialIsFav);
    }, [favProducts]);

    const addToFavProducts = () => {
        try {
            const url = "http://localhost:8000/api/add-fav-products";
            const email = localStorage.getItem("userEmail");

            axios.post(url, { email, productId: product.id }).then(() => {
                setIsFavProduct(true);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const removeFromFavProducts = () => {
        try {
            const url = "http://localhost:8000/api/remove-fav-products";
            const email = localStorage.getItem("userEmail");

            axios.post(url, { email, productId: product.id }).then(() => {
                setIsFavProduct(false);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="productDiv">
            <img
                className="cafeluts"
                src={product.image}
                alt={product.name}
            ></img>
            <h5 className="productName1">
                <strong>{product.name}</strong>
            </h5>
            <h6>{product.description}</h6>
            <div className="priceSize">${product.price}</div>
            <div>
                <button className="Cartbutton " onClick={() => onAdd(product)}>
                    Add to cart
                </button>
            </div>

            {localStorage.getItem("token") ? (
                <img
                    onClick={
                        isFavProduct ? removeFromFavProducts : addToFavProducts
                    }
                    className="inimioara"
                    src={isFavProduct ? heartFill : heart}
                    alt=""
                />
            ) : null}
        </div>
    );
}
