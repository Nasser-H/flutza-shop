import React, { useEffect, useState } from 'react'
import style from "./CategorySlider.module.css"
import axios from 'axios';
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';

export default function CategorySlider(props) {
  let { loading}= props;
    const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    autoplaySpeed:3000,
    autoplay:true,
    pauseOnHover:false,
    responsive:[
        {
          breakpoint:401,
          settings:{
            slidesToShow:1
          }
        },
        {
          breakpoint:480,
          settings:{
            slidesToShow:2
          }
        },
        {
          breakpoint:640,
          settings:{
            slidesToShow:3
          }
        },
        {
          breakpoint:768,
          settings:{
            slidesToShow:4
          }
        },
        {
          breakpoint:1024,
          settings:{
            slidesToShow:5
          }
        },
      ]    
  };

  function getCategories(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  let {data, isLoading} = useQuery({
    queryKey:['siderCategory'],
    queryFn:getCategories
  })

  return (
    <>
      {!isLoading&&!loading&&
        <Slider {...settings}>
          {data?.data.data.map((category,index)=>
          <div key={index}>
            <img  src={category.image} alt={category.name} className='w-full h-[200px]' />
            <p className='text-center'>{category.name}</p>
          </div>
          )}
        </Slider>      
      }
    </>
  );
}
