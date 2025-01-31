import React, { useContext, useEffect, useState } from 'react'
import style from "./ResetPassword.module.css"
import { UserContext } from '../../Context/UserContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    useEffect(() => {
        document.title = "Reset-Password";
        setUserVerifyCode(false);
    }, [])

    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);        

    const navigate =  useNavigate()

    let {setUserVerifyCode, setUserResetPassword, setUserToken} = useContext(UserContext);

    async function resetPassword(values){
      try {
        setLoading(true)
        let {data} = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",values);        
        setApiError(null);
        setUserToken(data.token);
        localStorage.setItem("userToken",data.token);
        setUserResetPassword(false);
        navigate('/');
        setLoading(false);           
      } catch (error) {
        setApiError(error.response.data.message);
        setLoading(false);        
      }
    }

    const validationSchema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("must be a valid email"),
      newPassword: Yup.string().required("Password is required").matches(/^[a-zA-Z][a-zA-Z0-9]{5,15}$/,"must be :- \n* Start with a letter (either uppercase or lowercase). \n* Be between 6 and 16 characters in total. \n* Can only contain letters (A-Z or a-z) and numbers (0-9) \n- ex.(Nasser123)")
    });    

    const formik = useFormik({
      initialValues:{
        email:"",
        newPassword:""
      },
      validationSchema,
      onSubmit:resetPassword
    });    

    // Account Reset Password
  return <>
      <section className="py-10 px-12">
        <div className="flex justify-center uppercase font-bold">
          <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
            Account Login 
          </h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto pt-10">
        {apiError&&<div className="text-white text-lg  mb-6 flex justify-center">
          <div className="bg-red-500 w-fit py-1 px-3 flex">
           <div className="me-1 mt-[6.9px] rounded-full size-4 border bg-white flex justify-center items-center"><i className="fa-solid fa-exclamation text-sm text-main"></i></div>Failed : {apiError}</div>
          </div>}           
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>

            <label htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your E-mail :
            </label>
            {formik.errors.email&&formik.touched.email&&<div className="text-red-500 text-sm mt-2 ms-2">{formik.errors.email}</div>}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="newPassword" id="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>

            <label htmlFor="newPassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your New Password :
            </label>
            {formik.errors.newPassword&&formik.touched.newPassword&&<div className="text-red-500 text-sm mt-2 ms-2 whitespace-pre-wrap">{formik.errors.newPassword}</div>}
          </div>
      

          <button type="submit" disabled={loading}
            className={`text-white bg-[#303841] ${loading? "bg-gray-600":"hover:bg-main cursor-pointer"}  focus:ring-1 focus:outline-none focus:ring-red-300 font-medium  text-sm w-full sm:w-auto px-3 py-2.5 text-center`}>
            <span className="pe-2">{loading?"Loading":"Reset Password"}</span> 
            {loading?
            <i className="fa-solid fa-spinner fa-spin-pulse"></i>:
            <i className="fa-solid fa-arrow-right-long -mb-1"></i>
            }
          </button>

        </form>
      </section>  
  </>;
}
