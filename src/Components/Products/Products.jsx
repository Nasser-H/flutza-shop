import React, { useEffect, useState } from 'react'
import style from "./Products.module.css"
import RecentProducts from '../RecentProducts/RecentProducts';

export default function Products() {
    useEffect(() => {
        document.title = "Products";
    }, [])
  const [loading, setLoading] = useState(true);

  return <>
    <RecentProducts setLoading={setLoading} />
    </>
}
