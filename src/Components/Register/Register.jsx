import React, { useContext, useEffect, useState } from 'react'
import style from "./Register.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';

export default function Register() {

    useEffect(() => {
        document.title = "Account Register";
    }, [])

    const [apiError, setApiError] = useState(null);
    const [loading, setLoading] = useState(false);
    let {userToken , setUserToken} = useContext(UserContext);

    const navigate =  useNavigate()    

    async function register(values){
    try {
      setLoading(true);
      let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values);
      setUserToken(data.token);      
      localStorage.setItem("userToken",data.token);
      navigate('/');      
      setLoading(false);
    } catch (error) {
      setApiError(error.response.data.message);
      setLoading(false);
    }
    }

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required").email("must be a valid email"),
      password: Yup.string().required("Password is required").matches(/^[a-zA-Z][a-zA-Z0-9]{5,15}$/,"must be :- \n* Start with a letter (either uppercase or lowercase). \n* Be between 6 and 16 characters in total. \n* Can only contain letters (A-Z or a-z) and numbers (0-9) \n- ex.(Nasser123)"),
      rePassword: Yup.string().required("re-Password is required").oneOf([Yup.ref('password')],"Password and re-entered password do not match"),
      phone: Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}$/,"Must be a valid Egyptian number with 11 digits starting with 01 \nex.(01061132684).")
    });
    
    const formik = useFormik({
      initialValues:{
        "name": "",
        "email":"",
        "password":"",
        "rePassword":"",
        "phone":""        
      },
      validationSchema,
      onSubmit: register
    })

  return <>
      <section className="py-10 px-12">
        <div className="flex justify-center uppercase font-bold">
          <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
            Account Register
          </h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto pt-10">
        {apiError&&<div className="text-white text-lg  mb-6 flex justify-center">
          <div className="bg-red-500 w-fit py-1 px-3 flex">
           <div className="me-1 mt-[6.9px] rounded-full size-4 border bg-white flex justify-center items-center"><i className="fa-solid fa-exclamation text-sm text-main"></i></div>Failed : {apiError}</div>
        </div>}         
          <div className="relative z-0 w-full mb-5 group">
            <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="name" id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>

            <label htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your Name :
            </label>
            {formik.errors.name&&formik.touched.name&&<div className="text-red-500 text-sm mt-2 ms-2">
              {formik.errors.name}
            </div>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>
            <label htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your e-mail :
            </label>
            {formik.errors.email&&formik.touched.email&&<div className="text-red-500 text-sm mt-2 ms-2 whitespace-pre-wrap">
              {formik.errors.email}
            </div>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Create Your Password :
            </label>
            {formik.errors.password&&formik.touched.password&&<div className="text-red-500 text-sm mt-2 ms-2 whitespace-pre-wrap">
              {formik.errors.password}
            </div>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="rePassword" id="rePassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>
            <label htmlFor="rePassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Re-enter Your Password :</label>
            {formik.errors.rePassword&&formik.touched.rePassword&&<div className="text-red-500 text-sm mt-2 ms-2">
              {formik.errors.rePassword}
            </div>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name="phone" id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "/>
            <label htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Enter Your Phone : </label>
            {formik.errors.phone&&formik.touched.phone&&<div className="text-red-500 text-sm mt-2 ms-2 whitespace-pre-wrap">
              {formik.errors.phone}
            </div>}
          </div>

          <button type="submit" disabled={loading}
            className={`text-white bg-[#303841] ${loading? "bg-gray-600":"hover:bg-main cursor-pointer"}  focus:ring-1 focus:outline-none focus:ring-red-300 font-medium  text-sm w-full sm:w-auto px-3 py-2.5 text-center`}>
            <span className="pe-2">{loading?"Loading":"Register"}</span> 
            {loading?
            <i className="fa-solid fa-spinner fa-spin-pulse"></i>:
            <i className="fa-solid fa-arrow-right-long -mb-1"></i>
            }
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
