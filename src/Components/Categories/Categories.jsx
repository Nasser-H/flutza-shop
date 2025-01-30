import React, { useEffect } from 'react'
import style from "./Categories.module.css"

export default function Categories() {
    useEffect(() => {
        document.title = "Categories";
    }, [])
    
  return (
    <>
      <h2>Categories</h2>
    </>
  );
}
