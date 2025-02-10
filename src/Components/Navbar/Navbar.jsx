import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import Logo from "./../../assets/Flutza Store Logo/flutza-logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

export default function Navbar() {

  let {totalCart} = useContext(CartContext);
  let {wishList} = useContext(WishListContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-wrap justify-between items-center px-6 py-0 lg:py-5 bg-[#232323]">
        <div className="search lg:px-6 w-full lg:w-1/4 lg:order-first order-last mb-4 lg:mb-0">
          <form className="p-5 rounded-full border border-[#505050] hover:border-[#6D767D] active:border-main overflow-hidden flex relative">

            <div className="absolute start-0 end-0  top-0 bottom-0 ">
              <input
                type="text"
                className="absolute outline-0 lg:text-xs text-base hover:border-[#6D767D] border-[#505050] start-0 end-0 text-white top-0 bottom-0 px-5 p-3"
                placeholder="Search here..."
              />
              <button className="flex justify-center items-center absolute border-s cursor-pointer hover:border-[#6D767D] border-[#505050] end-0 start-9/12 top-0 bottom-0">
                <i className="fa-solid fa-magnifying-glass text-xl text-main"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="p-3 lg:hidden space-x-5">
          <button onClick={()=>setIsOpen(true)} className="text-white text-2xl cursor-pointer">
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link to={'/wishList'} className="text-white text-2xl relative">
            <i className="fa-regular fa-heart"></i>
            {wishList&&<div className="count absolute -top-1/12 -end-9/12 text-xs p-1 border size-4 flex justify-center items-center rounded-full bg-main border-main">
              {wishList?.count}
            </div>}
          </Link>
        </div>
        <div className="logo lg:-ms-14 w-44">
          <img className="w-100" src={Logo} alt="flutza logo" />
        </div>
        <div className="p-6 -me-10 sm:-me-40 md:-me-66 lg:hidden">
          <Link to={'/cart'} className="text-white text-xl relative">
            <i className="fa-solid fa-cart-shopping"></i>
            {totalCart&&<div className="count absolute -top-1/12 -end-9/12 text-xs p-1 border size-4 flex justify-center items-center rounded-full bg-main border-main">
              {totalCart?.numOfCartItems}
            </div>}
          </Link>
        </div>
        <Link to={'/cart'}>
          <div className="cart pe-5 hidden lg:block">
            <div className="text-white border px-3 lg:px-6 py-2 rounded-full border-[#505050] hover:border-[#6D767D]">
              {totalCart?.numOfCartItems} item(s) - {totalCart?.data?.totalCartPrice} EGP
              <i className="fa-solid fa-cart-arrow-down text-main ps-3"></i>
            </div>
          </div>
        </Link>
      </nav>
      {/* for mobile */}
      <div
        className={`absolute top-0 bottom-0 z-50 start-0 end-2/12 ${isOpen? `translate-x-0`:`-translate-x-full`} duration-500 lg:hidden bg-white text-2xl`}>
        <div className="fix text-white bg-main py-2 px-4 flex justify-between">
          <span className="font-semibold">MENU</span>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="menu">
          <ul className="ps-5 space-y-4 pt-5">
            <li >
              <Link className="flex justify-between text-[#6D767D] hover:text-main duration-500" to={'/'}>
                <span> Home </span>
                <span className="size-9 flex justify-center items-center rounded-full me-5 border ">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </Link>
            </li>
            <li >
              <Link className="flex justify-between text-[#6D767D] hover:text-main duration-500" to={'/products'}>
                <span> Proudcts </span>
                <span className="size-9 flex justify-center items-center rounded-full me-5 border ">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </Link>
            </li>
            <li >
              <Link className="flex justify-between text-[#6D767D] hover:text-main duration-500" to={'/categories'}>
                <span> Categories </span>
                <span className="size-9 flex justify-center items-center rounded-full me-5 border ">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </Link>
            </li>
            <li >
              <Link className="flex justify-between text-[#6D767D] hover:text-main duration-500" to={'/brands'}>
                <span> Brands </span>
                <span className="size-9 flex justify-center items-center rounded-full me-5 border ">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
      {/* last menu navbar */}
      {!isOpen&&<div className="navgation-menu sticky top-0 z-40 bg-main flex justify-center items-center text-white font-semibold uppercase">
        <ul className="flex ">
          <Link to={'/'}><li className="border-y-0 border-e-0 px-2 md:px-4 lg:px-5 py-2 border border-neutral-600 md:tracking-[0.15rem] hover:bg-black duration-300">Home</li></Link>
          <Link to={'/products'}><li className="border-y-0 border-e-0 px-2 md:px-4 lg:px-5 py-2 border border-neutral-600 md:tracking-[0.15rem] hover:bg-black duration-300">Products</li></Link>
          <Link to={'/categories'}><li className="border-y-0 border-e-0 px-2 md:px-4 lg:px-5 py-2 border border-neutral-600 md:tracking-[0.15rem] hover:bg-black duration-300">Categories</li></Link>
          <Link to={'/brands'}><li className="border-y-0 px-2 md:px-4 lg:px-5 py-2 border border-neutral-600 md:tracking-[0.15rem] hover:bg-black duration-300">Brands</li></Link>
        </ul>
      </div>}

    </>
  );
}
