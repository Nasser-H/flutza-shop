import React, { useContext, useEffect } from 'react'
import style from "./Cart.module.css"
import { CartContext } from '../../Context/CartContext';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Cart() {

  let { totalCart, updateCart, loadingWhenUpdate, deleteItemFromeCart, clearCart, loadingWhenClear } = useContext(CartContext);

  // console.log(totalCart);
  
    useEffect(() => {
        document.title = "Cart";
    }, [])
    
  return <>
      
      {totalCart?
      <>
        <div className="flex justify-center py-6 uppercase font-bold relative">
          <h2 className="w-fit text-3xl tracking-wide text-center">
            Cart Contents
          </h2>
     
        </div>     
        <div className="flex lg:flex-row flex-col  p-6 justify-between">
          <div className="border-2 w-fit mx-auto lg:mb-0 mb-2 border-main px-4 py-1 rounded-full uppercase">total price : 
            <span className='text-main font-bold'> {totalCart?.data?.totalCartPrice}.00 EGP</span></div>
          <button onClick={() => clearCart()} disabled={loadingWhenClear||!totalCart?.numOfCartItems}
          className="border-2 w-fit mx-auto lg:mt-0 mt-2 order-last lg:order-0 border-[#303841ab] cursor-pointer bg-[#303841ab] text-white px-4 py-1 rounded-full uppercase">
            Clear Your Cart 
            </button>
          <div className="border-2 w-fit mx-auto  border-main px-4 py-1 rounded-full uppercase">
            total number of items : <span className='font-bold text-main'>{totalCart?.numOfCartItems}</span></div>
          </div> 
          <div className="py-2 mb-4 flex justify-between">
          <Link to={'/allorders'}
            className='text-white ms-16 inline-block bg-[#303841] hover:bg-main cursor-pointer focus:ring-1 focus:outline-none focus:ring-red-300 font-medium  text-base w-full sm:w-auto px-8 py-2.5 text-center rounded-xl'>
              All Old Orders
            </Link>    
          <Link to={totalCart?.numOfCartItems > 0 && 'check-out'}
            className='text-white me-16 inline-block bg-[#303841] hover:bg-main cursor-pointer focus:ring-1 focus:outline-none focus:ring-red-300 font-medium  text-base w-full sm:w-auto px-8 py-2.5 text-center rounded-xl'>
              Check Out {totalCart?.numOfCartItems>0&& <>:<br />{totalCart?.data?.totalCartPrice}.00 EGP</>}
            </Link>    
          </div>   
        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 x-5">
            <thead className="text-xs text-white uppercase bg-[#303841ab]">
              <tr>
                <th scope="col" className="px-6 py-3 ps-20">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 ps-28">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 ps-18">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3 ps-20">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody >
              {totalCart?.data?.products.map((product,index)=>
                  <tr key={index} className="bg-transparent border-b border-gray-200 group/image hover:bg-[#00000029]">
                    <td className="p-4 ps-10">
                      <img src={product.product.imageCover} className="w-16 group-hover/image:border rounded-xl border-main md:w-32 max-w-full max-h-full" alt={product.product.title} />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      <Link className='hover:text-main hover:underline' to={`/product-details/${product.product._id}`}>{product.product.title}</Link>
                    </td>
                    <td className="px-6 py-4 ">
                      <div className="flex items-center">
                        <button disabled={product.count<=1||loadingWhenUpdate} onClick={()=>updateCart(--product.count,product.product._id)}
                          className={`inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500  border border-gray-300 rounded-full focus:outline-none  ${product.count<=1||loadingWhenUpdate?"bg-gray-300":"bg-white hover:bg-gray-100 cursor-pointer"} focus:ring-2 focus:ring-gray-200`} type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                          </svg>
                        </button>
                        <div>
                          <input type="tel" readOnly id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block px-2.5 py-1 text-center outline-0"
                           placeholder={product.count} required />
                        </div>
                        <button onClick={()=>updateCart(++product.count,product.product._id)}
                        className={`inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-full focus:outline-none ${loadingWhenUpdate?"bg-gray-300":"bg-white hover:bg-gray-100 cursor-pointer"} focus:ring-2 focus:ring-gray-200`} type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                      {product.price}.00 EGP x {product.count} = {product.price * product.count}.00 EGP
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={()=>deleteItemFromeCart(product.product._id)}
                      className="font-medium text-red-600 hover:underline cursor-pointer">Remove</button>
                    </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
      :<Loading/>
    }


    </>
}
