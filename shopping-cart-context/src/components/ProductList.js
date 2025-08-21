import React,{useContext} from "react";
import { CartContext } from "./CartContext";

const products=[ {id:1, name:"banana",price:10},
                 {id:2, name:"apple", price:20},
                 {id:3, name:"orange", price:15},
                 {id:4, name:"mango", price:16} ];

const ProductList =()=>{
    const {addToCart}=useContext(CartContext);
    return(
        <div>
            <h2>products</h2>
            {products.map((product)=>(
                <div key={product.id}>
                    {product.name} : {product.price}
                    <button onClick={()=>addToCart(product)} style={{fontSize:"20px",padding:"10px"}}>Add to Cart</button>
                </div>

            ))}
        </div>
    );
}
export default ProductList;