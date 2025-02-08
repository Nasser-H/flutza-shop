import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartContextProvider({children}) {

    const [cart, setCart] = useState(null);
    const [totalCart, setTotalCart] = useState(null);
    const headers = {token:localStorage.getItem("userToken")};

    async function addToCart(productId){
        try {
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId},{headers});
            setCart(data);
            setTotalCart(null);
            getProductsFromCart();
        } catch (error) {
            console.log(error);
        }
    }
    async function getProductsFromCart(){
        try {
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers});
            setTotalCart(data)
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getProductsFromCart();
    },[])


    return <CartContext.Provider value={{ cart, addToCart, totalCart }}>
        {children}
    </CartContext.Provider>
}
