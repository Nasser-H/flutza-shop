import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import WishList from "./Components/WishList/WishList.jsx";
import Products from "./Components/Products/Products.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Brands from "./Components/Brands/Brands.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.jsx";
import VerifyCode from "./Components/VerifyCode/VerifyCode.jsx";


const routers = createBrowserRouter([{
  path:'',element:<Layout/> ,children: [
    {path:'sign-up' , element:<Register/>},
    {path:'sign-in' , element:<Login/>},
    {path:'forgot-password' , element:<ForgetPassword/>},
    {path:'verify-code' , element:<VerifyCode/>},
    {index:true , element:<Home/>},
    {path:'cart' , element:<Cart/>},
    {path:'wishList' , element:<WishList/>},
    {path:'products' , element:<Products/>},
    {path:'categories' , element:<Categories/>},
    {path:'brands' , element:<Brands/>},

  ]
}])
function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
