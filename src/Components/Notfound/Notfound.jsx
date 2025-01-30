import React, { useEffect } from 'react'
import style from "./Notfound.module.css"

export default function Notfound() {
    useEffect(() => {
        document.title = "Notfound";
    }, [])
    
  return (
    <>
      <h2>Notfound</h2>
    </>
  );
}
