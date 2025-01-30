import React, { useEffect } from 'react'
import style from "./Register.module.css"
import { Link } from 'react-router-dom';

export default function Register() {
    useEffect(() => {
        document.title = "Account Register";
    }, [])
    
  return <>
      <section className="py-10 px-12">
        <div className="text-white text-lg  mb-4 flex justify-center">
          <div className="bg-red-500 w-fit py-1 px-6 flex">
           <div className="me-1 mt-2 rounded-full size-4 border bg-white flex justify-center items-center"><i class="fa-solid fa-exclamation text-sm text-main"></i></div>WARNING : console.error();</div>
        </div>
        <div className="flex justify-center uppercase font-bold">
          <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
            Account Register
          </h2>
        </div>
        <form className="max-w-md mx-auto pt-10">
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="name" id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>

            <label htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your Name :
            </label>
            <div className="text-red-500 text-sm mt-2 ms-2">
              console.error();
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>
            <label htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your e-mail :
            </label>
            <div className="text-red-500 text-sm mt-2 ms-2">
              console.error();
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Create Your Password :
            </label>
            <div className="text-red-500 text-sm mt-2 ms-2">
              console.error();
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="rePassword" id="rePassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>
            <label htmlFor="rePassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Re-enter Your Password</label>
            <div className="text-red-500 text-sm mt-2 ms-2">
              console.error();
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-[#303841] hover:bg-main cursor-pointer focus:ring-1 focus:outline-none focus:ring-red-300 font-medium  text-sm w-full sm:w-auto px-3 py-2.5 text-center">
            <span className="pe-2">Register</span>
            <i className="fa-solid fa-arrow-right-long -mb-1"></i>
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?
            <Link to={"/sign-in"} className="text-main hover:underline ps-1">
              Login here
            </Link>
          </p>
        </form>
      </section>
    </>;
}
