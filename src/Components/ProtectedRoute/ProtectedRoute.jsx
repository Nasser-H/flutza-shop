import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
  let {verifyToken} = useContext(UserContext);
  const token = localStorage.getItem("userToken");
  verifyToken(token);
  if(token){
    return children;
  }else{
    return <Navigate to={"/sign-in"}/>
  }

}
