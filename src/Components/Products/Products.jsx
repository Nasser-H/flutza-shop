import React, { useEffect } from 'react'
import style from "./Products.module.css"

export default function Products() {
    useEffect(() => {
        document.title = "Products";
    }, [])
    
  return (
    <>
      <h2>Products</h2>
    </>
  );
}
