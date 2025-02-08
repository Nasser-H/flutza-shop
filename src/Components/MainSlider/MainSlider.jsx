import React, { useEffect } from 'react'
import style from "./MainSlider.module.css"
import banner1 from '../../assets/store-image/images/ad.jpg'
import banner2 from '../../assets/store-image/images/ad2.jpg'
import slider1 from '../../assets/store-image/images/slider-image-1.jpeg'
import slider2 from '../../assets/store-image/images/slider-image-2.jpeg'
import slider3 from '../../assets/store-image/images/slider-image-3.jpeg'
import Slider from 'react-slick'

export default function MainSlider(props) {
  let {loading}= props;
    const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplaySpeed:3000,
    autoplay:true,
    pauseOnHover:false
  };    
  return (
    <>
      {!loading&&
      <div className="flex justify-center items-center">
        <div className="lg:w-3/4 w-2/3">
        <Slider {...settings}>
        <img src={slider1} className='w-full h-[400px]' alt="slider1" />
        <img src={slider2} className='w-full h-[400px]' alt="slider2" />
        <img src={slider3} className='w-full h-[400px]' alt="slider3" />
        </Slider>
        </div>
        <div className="lg:w-1/4 w-1/3">
          <img src={banner1} className='w-full h-[200px]' alt="flutza-banner-1" />
          <img src={banner2} className='w-full h-[200px]' alt="flutza-banner-2" />
        </div>        
      </div>      
      }
    </>
  );
}
