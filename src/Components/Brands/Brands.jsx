import React, { useEffect } from 'react'
import style from "./Brands.module.css"

export default function Brands() {
    useEffect(() => {
        document.title = "Brands";
    }, [])
    
  return (
    <>
      <h2>Brands</h2>
    </>
  );
}
