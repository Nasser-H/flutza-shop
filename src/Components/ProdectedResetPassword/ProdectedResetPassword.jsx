import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Navigate } from 'react-router-dom';

export default function ProdectedResetPassword({children}) {
  let { userResetPassword } = useContext(UserContext);

  if(userResetPassword){
    return children;
  }else{
    return <Navigate to={"/sign-in"} />
  }
}
