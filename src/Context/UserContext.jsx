import axios from "axios";
import { createContext, useEffect, useState } from "react"


export const UserContext = createContext()

export default function UserContextProvider({children}) {

    useEffect(()=>{
        const token = localStorage.getItem("userToken");
        if(token){
            setUserToken(token);
            verifyToken(token);
        }
    },[])

    async function verifyToken(token){
    if(token){    
        try {
        await axios.get("https://ecommerce.routemisr.com/api/v1/auth/verifyToken", {headers: {"token": token,}});
        } catch (error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("userToken"); 
            setUserToken(null);  
        }
        }
    }
  };

    const [userToken, setUserToken] = useState(null);
    const [userVerifyCode, setUserVerifyCode] = useState(false);
    const [userResetPassword, setUserResetPassword] = useState(false);

  return <UserContext.Provider value={{ userToken, setUserToken, verifyToken, setUserVerifyCode, userVerifyCode, userResetPassword, setUserResetPassword }}>
    {children}
  </UserContext.Provider>
}
