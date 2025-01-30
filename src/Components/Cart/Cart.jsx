import React, { useEffect } from 'react'
import style from "./Cart.module.css"

export default function Cart() {
    useEffect(() => {
        document.title = "Cart";
    }, [])
    
  return (
    <>
      <h2>Cart</h2>
    </>
  );
}
