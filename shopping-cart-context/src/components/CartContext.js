import React,{createContext,useState} from "react";

//create context
export const CartContext=createContext();

//context provider component
export const CartProvider=({children})=>{
    const[cart,setCart]=useState([]);
    const addToCart=(product)=>{
        setCart((prevCart)=>[...prevCart,product]);
    }
    const removeFromCart=(id)=>{
        setCart((prevCart)=>{
            const index=prevCart.findIndex(item=>item.id===id);
            if(index===-1) return prevCart;
            const newCart=[...prevCart];
            newCart.splice(index,1);
            return newCart;
        })
    }
    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};