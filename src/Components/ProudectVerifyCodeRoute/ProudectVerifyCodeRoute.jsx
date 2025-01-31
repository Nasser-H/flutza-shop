import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Navigate } from 'react-router-dom';



export default function ProudectVerifyCodeRoute({children}) {

  let {userVerifyCode} = useContext(UserContext); 
  if(userVerifyCode){
    return children;
  }else{
    return <Navigate to={"/sign-in"} />
  }
  
}
