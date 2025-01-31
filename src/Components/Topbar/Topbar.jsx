import React, { useContext, useEffect } from "react";
import style from "./Topbar.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Topbar() {
  
  let {userToken , setUserToken} = useContext(UserContext);

  function logout(){
    setUserToken(null);
    localStorage.removeItem("userToken");
  }
  
  return (
    <>
      <header className="lg:bg-[#303841] text-sm bg-main flex justify-between text-center text-white px-12 py-2">
        <div className="flex w-1/3 items-center space-x-4 ">
          <a
            href="https://www.facebook.com/profile.php?id=100004291441295"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="http://wa.me/201061132684" target="_blank">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/nasser-hussein/" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Nasser-H" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className=" w-1/3 lg:block hidden">
          <a className="hover:underline" href="mailto:nasser.h0404@gmail.com">
            nasser.h0404@gmail.com
          </a>
        </div>
        <div className="w-1/3 flex justify-end">
          <ul className="flex space-x-6">
            <li className="lg:flex justify-center items-center hidden">
              <div className="size-4 border flex justify-center items-center text-xs border-main bg-main rounded-full me-1">
                5
              </div>
              Wish list <i className="fa-regular fa-heart ms-1"></i>
            </li>
            {userToken?
            <li>
              <button onClick={()=>logout()} className="cursor-pointer">Logout <i className="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal"></i></button>
            </li>:<>
            <li>
              <Link to={'/sign-in'}>
                Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </Link>
            </li>
            <li>
              <Link to={"/sign-up"}>Register</Link>
            </li>            
            </>}
          </ul>
        </div>
      </header>
    </>
  );
}
