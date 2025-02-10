import React, { useContext, useEffect } from 'react'
import style from "./WishList.module.css"
import { Link } from 'react-router-dom';
import { WishListContext } from '../../Context/WishListContext';
import Loading from '../Loading/Loading';
import { CartContext } from '../../Context/CartContext';

export default function WishList() {

  let {wishList, wishListIsLoading, removeFromWishList} = useContext(WishListContext);
  let {addToCart} = useContext(CartContext);

    useEffect(() => {
        document.title = "My Wish List";
    }, [])
    
  return <>
          {wishListIsLoading?<Loading/>:
          <>
        <div className="flex justify-center py-6 uppercase font-bold relative">
          <h2 className="w-fit text-3xl tracking-wide text-center">
            My wish List
          </h2>
        </div>     
        <div className="border-2 w-fit mx-auto lg:mb-0 mb-2 border-main px-4 py-1 rounded-full uppercase">My wish count : 
          <span className='text-main text-lg font-bold'> {wishList?.count}</span>
        </div>
        <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-b-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 x-5">
            <thead className="text-xs text-white uppercase bg-[#303841ab]">
              <tr>
                <th scope="col" className="px-6 py-3 ps-20">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 ps-22">
                  Price
                </th>

                <th scope="col" className="px-6  ps-12 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody >
                {wishList?.data?.map((product,index)=>
                <tr key={index} className="bg-transparent border-b border-gray-200 group/image hover:bg-[#00000029]">
                    <td className="p-4 ps-10">
                      <img src={product.imageCover} className="w-16 group-hover/image:border rounded-xl border-main md:w-32 max-w-full max-h-full" 
                      alt={product.title} />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 text-center">
                      <Link className='hover:text-main hover:underline' to={`/product-details/${product._id}`}>{product.title}</Link>
                    </td>
                    <td className="px-6 py-4 ps-18">
                      <span className='text-base text-black'>{product.price} EGP</span>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={()=>removeFromWishList(product._id)}
                      className="font-medium ps-5 text-red-600 hover:underline cursor-pointer block mb-5">
                        Remove
                      </button>
                      <button onClick={()=>addToCart(product._id)}
                      className="font-medium text-[#08c]  hover:bg-main hover:text-white cursor-pointer border border-main px-2 py-1 rounded-lg">
                        Add To Cart
                      </button>
                    </td>
                  </tr> 
                )}
            </tbody>
          </table>
        </div>
        </>
          }
      </>


}
