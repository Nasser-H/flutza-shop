import React, { useEffect } from 'react'
import style from "./Footer.module.css"
import Logo from "./../../assets/Flutza Store Logo/flutza-logo.png";
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <>
      <footer className="bg-[#232323] pt-18">

        <div className="flex flex-wrap justify-center text-white pb-8">
          <div className="lg:w-1/3 w-full flex flex-col justify-center items-center pb-8 lg:pb-0">
            <picture className="w-fit mx-auto block ">
              <img src={Logo} className="w-60" alt="flutza-logo" />
            </picture>
            <div className="icons flex justify-center p-6">
              <ul className="text-white text-2xl flex space-x-5">
                <a
                  target="_blank"
                  className="relative group/facebook"
                  href="https://www.facebook.com/profile.php?id=100004291441295"
                >
                  <li className=" size-12 border flex justify-center items-center rounded-full border-[#277CD9] bg-[#277CD9] hover:border-main hover:bg-main duration-400">
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <div className="bg-main hidden hover:hidden group-hover/facebook:block absolute -top-10 start-1/2 -translate-x-1/2 px-2 py-1 text-sm">
                    <span className="relative">
                      Facebook{" "}
                      <div className="absolute top-5 start-1/2 -translate-x-1/2 size-4 border-t-main border-t-10 border-x-transparent border-e-10 border-s-10"></div>
                    </span>
                  </div>
                </a>
                <a
                  target="_blank"
                  className="relative group/whatsapp"
                  href="http://wa.me/201061132684"
                >
                  <li className=" size-12 border flex justify-center items-center rounded-full border-[#277CD9] bg-[#277CD9] hover:border-main hover:bg-main duration-400">
                    <i className="fa-brands fa-whatsapp"></i>
                  </li>
                  <div className="bg-main hidden hover:hidden group-hover/whatsapp:block absolute -top-10 start-1/2 -translate-x-1/2 px-2 py-1 text-sm">
                    <span className="relative">
                      Whatsapp{" "}
                      <div className="absolute top-5 start-1/2 -translate-x-1/2 size-4 border-t-main border-t-10 border-x-transparent border-e-10 border-s-10"></div>
                    </span>
                  </div>
                </a>
                <a
                  target="_blank"
                  className="relative group/linkedin"
                  href="https://www.linkedin.com/in/nasser-hussein/"
                >
                  <li className=" size-12 border flex justify-center items-center rounded-full border-[#277CD9] bg-[#277CD9] hover:border-main hover:bg-main duration-400">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <div className="bg-main hidden hover:hidden group-hover/linkedin:block absolute -top-10 start-1/2 -translate-x-1/2 px-2 py-1 text-sm">
                    <span className="relative">
                      Linkedin{" "}
                      <div className="absolute top-5 start-1/2 -translate-x-1/2 size-4 border-t-main border-t-10 border-x-transparent border-e-10 border-s-10"></div>
                    </span>
                  </div>
                </a>
                <a
                  target="_blank"
                  className="relative group/github"
                  href="https://github.com/Nasser-H"
                >
                  <li className=" size-12 border flex justify-center items-center rounded-full border-[#277CD9] bg-[#277CD9] hover:border-main hover:bg-main duration-400">
                    <i className="fa-brands fa-github"></i>
                  </li>
                  <div className="bg-main hidden hover:hidden group-hover/github:block absolute -top-10 start-1/2 -translate-x-1/2 px-2 py-1 text-sm">
                    <span className="relative">
                      Github{" "}
                      <div className="absolute top-5 start-1/2 -translate-x-1/2 size-4 border-t-main border-t-10 border-x-transparent border-e-10 border-s-10"></div>
                    </span>
                  </div>
                </a>
              </ul>
            </div>            
          </div>
          <div className="lg:w-1/3 w-1/2 border-l-0 lg:border-l border-t-0 border-b-0 border-[#BEBEBE] border">
            <div className="mx-auto w-fit">
              <h2 className="text-xl mx-auto w-fit font-bold uppercase  relative after:w-1/2 after:h-[1px] after:bg-main after:absolute after:-bottom-2 after:start-0">
                Custom Links
              </h2>
              <ul className="pt-5 text-base font-normal text-[#BEBEBE] w-fit">
                <Link to={'/wishList'} className="hover:text-main">
                  <li>Wish List</li>
                </Link>
                <Link to={'/cart'} className="hover:text-main">
                  <li>Cart</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 w-1/2">
            <div className="mx-auto w-fit">
              <h2 className="text-xl font-bold uppercase  relative after:w-1/2 after:h-[1px] after:bg-main after:absolute after:-bottom-2 after:start-0">
                Custom Links
              </h2>
              <ul className="pt-5 text-base font-normal text-[#BEBEBE] w-fit">
                <Link to={'/products'} className="hover:text-main">
                  <li>Products</li>
                </Link>
                <Link to={'/categories'} className="hover:text-main">
                  <li>Catgories</li>
                </Link>
                <Link to={'/brands'} className="hover:text-main">
                  <li>Brands</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#303841] lg:px-12 px-5 py-3 text-[#BEBEBE]">
          <div className="flex justify-between items-center">
            <p className='text-sm'>Copyright © 2025, Your Store, All Rights Reserved</p>
            <ul className='lg:text-3xl text-xl flex space-x-4'>
              <li><i className="fa-brands fa-cc-visa"></i></li>
              <li><i className="fa-brands fa-cc-mastercard"></i></li>
              <li><i className="fa-brands fa-cc-paypal"></i></li>
              <li><i className="fa-brands fa-cc-stripe"></i></li>
              <li><i className="fa-brands fa-cc-discover"></i></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
