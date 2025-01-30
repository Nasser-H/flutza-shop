import React, { useEffect } from "react";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Topbar from "../Topbar/Topbar.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout() {

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="min-h-screen bg-[url(assets/bg-1.jpg)] bg-repeat bg-center">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
