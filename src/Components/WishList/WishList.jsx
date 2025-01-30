import React, { useEffect } from 'react'
import style from "./WishList.module.css"

export default function WishList() {
    useEffect(() => {
        document.title = "WishList";
    }, [])
    
  return (
    <>
      <h2>WishList</h2>
    </>
  );
}
