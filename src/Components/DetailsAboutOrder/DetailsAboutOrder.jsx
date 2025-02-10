import React, { useEffect } from 'react'
import style from "./DetailsAboutCart.module.css"
import { jwtDecode } from 'jwt-decode';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import axios from 'axios';

export default function DetailsAboutOrder() {
    useEffect(() => {
        document.title = "Details About Order";
    }, [])
    const token = localStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    const {id} = useParams()

    function getOrder() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`);
    }
    let { data, isLoading, isError, isFetching } = useQuery({
        queryKey: ['getOrder'],
        queryFn: getOrder
    });

    return <>
        {isLoading ? <Loading /> :
            <section className="py-10 px-12">
                <div className="flex justify-center uppercase font-bold">
                    <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
                        Order #{id}
                    </h2>
                </div>
                <Link to={'/allorders'} className='mt-5 text-center block border rounded-lg w-fit mx-auto px-5 py-2 bg-[#232323] hover:bg-main duration-300 text-white'>
                Back To All Orders
                </Link>
                <div className="relative overflow-x-auto mt-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {data?.data.find(item => item?.id == id).cartItems.map((item, index) =>
                                <tr key={index} className="bg-white border-b border-gray-200">
                                    <td className="px-6 py-4">
                                        <img src={item.product.imageCover} className='w-10 border border-main rounded-2xl' alt={item.product.title} />
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.product.title} <span className='font-bold'>x {item.count}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}.00 EGP
                                    </td>
                                </tr>
                            )}
                            <tr className="bg-white border-b border-gray-200">
                                <td className="px-6 py-4">
                                   
                                </td>
                                <td className="px-6 ps-15 py-4 font-bold">
                                   Total:
                                </td>
                                <td className="px-6 py-4 font-bold">
                                    {data?.data.find(item => item?.id == id).totalOrderPrice}.00 EGP
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        }
    </>

}
