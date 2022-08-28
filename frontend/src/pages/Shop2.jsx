import React from "react";
import Main from "./Main";
import Basket from "./Basket";
import "./Cart.css";

function App({ cartItems, onAdd, onRemove, favProducts, products }) {
    return (
        <div className="total">
            <Main onAdd={onAdd} products={products} favProducts={favProducts} />
            <div className="row1">
                <Basket
                    onAdd={onAdd}
                    onRemove={onRemove}
                    cartItems={cartItems}
                />
            </div>
        </div>
    );
}

export default App;
