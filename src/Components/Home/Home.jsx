import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
import RecentProducts from '../RecentProducts/RecentProducts';
import MainSlider from '../MainSlider/MainSlider';
import CategorySlider from '../CategorySlider/CategorySlider';

export default function Home() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "Flutza Shop";
    }, [])  
    
  return (
    <>
      <MainSlider loading={loading} setLoading={setLoading}/>
      <CategorySlider loading={loading} setLoading={setLoading}/>
      <RecentProducts loading={loading} setLoading={setLoading}/>
    </>
  );
}
