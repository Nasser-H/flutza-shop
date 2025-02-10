import React, { useEffect } from 'react'
import style from "./AllOrders.module.css"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function AllOrders() {
  useEffect(() => {
    document.title = "All Orders";
  }, [])
  const token = localStorage.getItem("userToken");
  const decoded = jwtDecode(token);

  function getAllOrders() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`);
  }
  let { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ['allOrders'],
    queryFn: getAllOrders
  });

  return <>
    {isLoading ? <Loading /> :
      <section className="py-10 px-12">
        <div className="flex justify-center uppercase font-bold">
          <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
            All Orders
          </h2>
        </div>
        <div className="relative overflow-x-auto mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order
                </th>
                <th scope="col" className="px-6 py-3">
                  Date Create
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  paid At
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivered
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Cart Contents
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item, index) =>
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td className="px-6 py-4">
                    #{item.id}
                  </td>
                  <td className="px-6 py-4">
                    {item.createdAt.split("T", 1)}
                  </td>
                  <td className="px-6 py-4">
                    {item.isPaid ? "Paid" : "unpaid"}
                  </td>
                  <td className="px-6 py-4">
                    {item.paidAt.split("T", 1)}
                  </td>
                  <td className="px-6 py-4">
                    {item.isDelivered ? "yes" : "is Waiting"}
                  </td>
                  <td className="px-6 py-4">
                    {item.totalOrderPrice}.00 EGP for {item.cartItems.length} items
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/details-order/${item.id}`} className='border border-[#EFECEC] hover:bg-black hover:text-white hover:border-black px-3 py-1 rounded-full bg-[#EFECEC]'>
                      view <i className="fa-solid fa-eye fa-2xs"></i>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>        
      </section>
    }
  </>

}
