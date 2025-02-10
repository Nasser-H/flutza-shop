import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { UserContext } from './UserContext';

export const WishListContext = createContext();

export default function WishListContextProvider({children}) {

    const [wishList, setWishList] = useState(null);
    const [wishListArrID, setWishListArrID] = useState(null);
    const [wishListIsLoading, setWishListIsLoading] = useState(false);

    let {userToken} = useContext(UserContext);

    const headers = {"token": userToken};

    async function addProductToWishList(productId){
        try {
            setWishListIsLoading(true);
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId},{headers});
            getWishlist();
            getWishlist();
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    async function removeFromWishList(ProductID){
        try {
            setWishListIsLoading(true);
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${ProductID}`,{headers});
            toast.success(data.message);
            getWishlist();
        } catch (error) {
            toast.error(error.response.data.message);            
        }
    }
    async function getWishlist(){
        try {
            let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers});
            setWishList(data);
            setWishListArrID(data.data.map(item => item._id));
            setWishListIsLoading(false);
        } catch (error) {
            toast.error(error.response.data.message);            
        }
    }
    
    useEffect(()=>{
        if(userToken){
            getWishlist();
        }else{
            setWishListArrID(null);
            setWishList(null);
        }
    },[userToken])
    return <WishListContext.Provider value={{ addProductToWishList, wishList, wishListArrID, wishListIsLoading, removeFromWishList }}>
        {children}
    </WishListContext.Provider>
}
