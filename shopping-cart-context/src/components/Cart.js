import React, { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    return (
        <>
            <h2>Shopping Cart:</h2>
            <div>
                {cart.length === 0 ?
                    (<p> Cart is empty!!</p>)
                    : (
                        cart.map((product) => (
                            <div key={product.id} >
                                {product.name} : {product.price}
                                <button onClick={() => removeFromCart(product.id)} 
                                                    style={{ fontSize:"20px", padding: "10px" }}>
                                    remove From Cart
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    );
};
export default Cart;