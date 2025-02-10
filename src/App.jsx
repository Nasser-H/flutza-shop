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
import UserContextProvider from "./Context/UserContext.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import Notfound from "./Components/Notfound/Notfound.jsx";
import RestrictedRoute from "./Components/RestrictedRoute/RestrictedRoute.jsx";
import ResetPassword from "./Components/ResetPassword/ResetPassword.jsx";
import ProudectVerifyCodeRoute from "./Components/ProudectVerifyCodeRoute/ProudectVerifyCodeRoute.jsx";
import ProdectedResetPassword from "./Components/ProdectedResetPassword/ProdectedResetPassword.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import CartContextProvider from "./Context/CartContext.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WishListContextProvider from "./Context/WishListContext.jsx";


const routers = createBrowserRouter([{
  path:'',element:<Layout/> ,children: [
    {path:'sign-up' , element:<RestrictedRoute><Register/></RestrictedRoute>},
    {path:'sign-in' , element:<RestrictedRoute><Login/></RestrictedRoute>},
    {path:'forgot-password' , element:<RestrictedRoute><ForgetPassword/></RestrictedRoute>},
    {path:'verify-code' , element:<RestrictedRoute><ProudectVerifyCodeRoute><VerifyCode/></ProudectVerifyCodeRoute></RestrictedRoute>},
    {path:'reset-password' , element:<RestrictedRoute><ProdectedResetPassword><ResetPassword/></ProdectedResetPassword></RestrictedRoute>},
    {index:true , element:<Home/>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'wishList' , element:<ProtectedRoute><WishList/></ProtectedRoute>},
    {path:'products' , element:<Products/>},
    {path:'product-details/:id' , element:<ProductDetails/>},
    {path:'categories' , element:<Categories/>},
    {path:'brands' , element:<Brands/>},
    {path:'*' , element:<Notfound/>},

  ]
}])
const queryClient  = new QueryClient();
function App() {
  return (
    <>
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>          
          <WishListContextProvider>
            <RouterProvider router={routers}></RouterProvider>
            <Toaster/>
          </WishListContextProvider>
        </CartContextProvider>
      </QueryClientProvider>
    </UserContextProvider>
    </>
  );
}

export default App;
