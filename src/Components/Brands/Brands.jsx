import React, { useContext, useEffect } from 'react'
import style from "./Brands.module.css"
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import { SearchContext } from '../../Context/SearchContext';

export default function Brands() {

  let { searchProducts } = useContext(SearchContext);
  function getBrands(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  let { data, isLoading, isError, isFetching } = useQuery({
    queryKey:['getBrands'],
    queryFn:getBrands
  });

  
    useEffect(() => {
        document.title = "Top Brands";
    }, [])
    
  return <>
    {isLoading ? <Loading /> :
      <section className="py-10 px-12">
        <div className="flex justify-center uppercase font-bold">
          <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
            Top brands
          </h2>
        </div>        
        <div className="flex w-full flex-wrap justify-center my-16 gap-8">
          {data?.data.data.filter(item => item?.name.toLowerCase().includes(searchProducts?.search?.toLowerCase())).map((brand,index)=>
            <div key={index} className="lg:w-1/6 w-4/6 sm:w-1/3 md:w-1/4 overflow-hidden relative drop-shadow-xl  group">
              <img src={brand.image} className='w-full group-hover:scale-120 duration-200' alt={brand.name} />
              <p className='bg-main text-white w-full absolute bottom-0 h-8 translate-y-full group-hover:translate-y-0 duration-200'>
                <span className='absolute top-1/2 start-1/2 -translate-1/2 w-full text-center font-bold'>
                  {brand.name}
                </span>
              </p>

            </div>
          )}
          

        </div>           
      </section>
    }

    </>

}
