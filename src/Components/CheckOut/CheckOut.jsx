import React, { useContext, useEffect, useState } from 'react'
import style from "./CheckOut.module.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function CheckOut() {
  useEffect(() => {
    document.title = "Check Out";
  }, [])

  let { totalCart } = useContext(CartContext);
  const headers = { token: localStorage.getItem("userToken") };

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  async function checkOut(shippingAddress) {
    try {
      setLoading(true);
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${totalCart?.data._id}?url=https://flutza-shop.vercel.app`, { shippingAddress }, { headers });
      toast.success(data.status);
      setLoading(false);
      location.href = data.session.url;
    } catch (error) {
      setApiError(error.response.data.message);
      setLoading(false);
    }

  }
  const validationSchema = Yup.object().shape({
    details: Yup.string().required("Details is a required"),
    phone: Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/, "Must be a valid Egyptian number with 11 digits starting with 01 \nex.(01061132684)."),
    city: Yup.string().required("City is a required")
  });
  const formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: ""
    },
    validationSchema,
    onSubmit: checkOut
  });

  return <>
    <section className="py-10 px-12">
      <div className="flex justify-center uppercase font-bold">
        <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
          Check Out
        </h2>
      </div>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto pt-10">
        {apiError && <div className="text-white text-lg  mb-6 flex justify-center">
          <div className="bg-red-500 w-fit py-1 px-3 flex">
            <div className="me-1 mt-[6.9px] rounded-full size-4 border bg-white flex justify-center items-center"><i className="fa-solid fa-exclamation text-sm text-main"></i></div>Failed : {apiError}</div>
        </div>}
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="details" id="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" " />

          <label htmlFor="details"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Details
          </label>
          {formik.errors.details && formik.touched.details && <div className="text-red-500 text-sm mt-2 ms-2">{formik.errors.details}</div>}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" " />

          <label htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Enter Your phone
          </label>
          {formik.errors.phone && formik.touched.phone && <div className="text-red-500 text-sm mt-2 ms-2">{formik.errors.phone}</div>}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" " />

          <label htmlFor="city"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Enter Your city
          </label>
          {formik.errors.city && formik.touched.city && <div className="text-red-500 text-sm mt-2 ms-2">{formik.errors.city}</div>}
        </div>


        <button type="submit" disabled={loading}
          className={`text-white bg-[#303841] ${loading ? "bg-gray-600" : "hover:bg-main cursor-pointer"}  focus:ring-1 focus:outline-none focus:ring-red-300 font-medium  text-sm w-full sm:w-auto px-3 py-2.5 text-center`}>
          <span className="pe-2">{loading ? "Loading" : "Pay Now"}</span>
          {loading ?
            <i className="fa-solid fa-spinner fa-spin-pulse"></i> :
            <i className="fa-solid fa-arrow-right-long -mb-1"></i>
          }
        </button>
      </form>
    </section>
  </>

}
