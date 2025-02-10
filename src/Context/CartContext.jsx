import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from './UserContext';

export const CartContext = createContext()

export default function CartContextProvider({children}) {


    let {userToken} = useContext(UserContext);
    const [totalCart, setTotalCart] = useState(null);
    const [loadingWhenUpdate, setLoadingWhenUpdate] = useState(false);
    const headers = {token:userToken};
    

    async function addToCart(productId){
        try {
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId},{headers});
            setTotalCart(null);
            getProductsFromCart();
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    async function getProductsFromCart(){
        try {
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers});
            setTotalCart(data);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    async function updateCart(count, productId ) {
         try {
            setLoadingWhenUpdate(true);
            let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},{headers});
            setTotalCart(data);
            setLoadingWhenUpdate(false);
            toast.success("Changed count");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    async function deleteItemFromeCart(productId){
        try {
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers});
            setTotalCart(data);
            toast.success("Deleted Item From Cart");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    async function clearCart(){
        try {
            await axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{headers});
            getProductsFromCart();
            toast.success("Cleared Your Cart");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    useEffect(()=>{
        if(userToken){
            getProductsFromCart();
        }else{
            setTotalCart(null);
        }
    },[userToken])


    return <CartContext.Provider value={{ addToCart, totalCart, updateCart, loadingWhenUpdate, deleteItemFromeCart, clearCart }}>
        {children}
    </CartContext.Provider>
}
