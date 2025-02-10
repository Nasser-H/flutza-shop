import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedCheckOut({children}) {

    let { totalCart } = useContext(CartContext);
    if (totalCart?.numOfCartItems>0){
        return children;
    }else{
        return <Navigate to={'/cart'}/>
    }

}
