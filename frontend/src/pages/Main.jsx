import React from "react";
import Product from "./Product";
import "./Cart.css";

export default function Main({ products, onAdd, favProducts }) {
    return (
        <main className="block">
            <h3 className="h2Class">
                <strong>
                Our Coffee Selections
                </strong>
          
            </h3>
            <hr></hr>
            <div className="Produse">
                {products.map((product) => (
                    <Product
                        key={products.length}
                        product={product}
                        onAdd={onAdd}
                        favProducts={favProducts}
                    ></Product>
                ))}
            </div>
        </main>
    );
}
