import React, { useEffect } from 'react'
import style from "./Home.module.css"

export default function Home() {

    useEffect(() => {
        document.title = "Flutza Shop";
    }, [])  
    
  return (
    <>
      <h2 className='bg-amber-200'>Home</h2>
    </>
  );
}
