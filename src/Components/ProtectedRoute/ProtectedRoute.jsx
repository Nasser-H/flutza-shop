import React, { useEffect } from 'react'
import style from "./ProtectedRoute.module.css"

export default function ProtectedRoute() {
    useEffect(() => {
        document.title = "ProtectedRoute";
    }, [])
    
  return (
    <>
      <h2>ProtectedRoute</h2>
    </>
  );
}
