import React, { useEffect } from 'react'
import style from "./TemplateName.module.css"

export default function TemplateName() {
    useEffect(() => {
        document.title = "TemplateName";
    }, [])
    
  return <>
  
      <h2>TemplateName</h2>
    </>

}
