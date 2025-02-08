import React, { useContext, useEffect } from 'react'
import style from "./Cart.module.css"
import { CartContext } from '../../Context/CartContext';
import Loading from '../Loading/Loading';

export default function Cart() {

  let {totalCart} = useContext(CartContext);

    useEffect(() => {
        document.title = "Cart";
    }, [])
    
  return <>
      
      {totalCart?
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
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody >
              {totalCart.data.products.map((product,index)=>
                  <tr key={index} className="bg-transparent border-b border-gray-200 group/image hover:bg-[#00000029]">
                    <td className="p-4 ps-10">
                      <img src={product.product.imageCover} className="w-16 group-hover/image:border rounded-xl border-main md:w-32 max-w-full max-h-full" alt={product.product.title} />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {product.product.title}
                    </td>
                    <td className="px-6 py-4 ">
                      <div className="flex items-center">
                        <button className="inline-flex cursor-pointer items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                          </svg>
                        </button>
                        <div>
                          <input type="tel" readOnly id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block px-2.5 py-1 text-center outline-0" placeholder={product.count} required />
                        </div>
                        <button className="inline-flex cursor-pointer items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                      {product.price} EGP
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-red-600 hover:underline">Remove</a>
                    </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      :<Loading/>
    }


    </>
}
