import React from "react";
import "./SavedItems.css";
import Product from "../Product";

export default function SavedItems({ products, favProducts, onAdd, onRemove }) {
    const favProductsInfo = favProducts.map((favProduct) => {
        return products.find((product) => product.id === favProduct);
    });

    return (
        <>
            <h3 className="favText">
                <strong>Saved Items</strong>
            </h3>
            <hr></hr>
            <div className="BigText">
                {favProductsInfo.map((product) => (
                    <Product
                        key={favProductsInfo.id}
                        product={product}
                        onAdd={onAdd}
                        favProducts={favProducts}
                    ></Product>
                ))}
            </div>
        </>
    );
}
