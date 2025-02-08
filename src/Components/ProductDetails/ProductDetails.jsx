import React, { useContext, useEffect, useState } from 'react'
import style from "./ProductDetails.module.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import Slider from "react-slick";
import Loading from '../Loading/Loading';


export default function ProductDetails() {
    let {id} = useParams();
    const navigate =  useNavigate();
    let {userToken} = useContext(UserContext);

    const [product, setProduct] = useState(null);
    const [relatedProductsByID, setRelatedProductsByID] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        document.title = "Product Details";
        getProduct(id);
    }, [])

    useEffect(() => {
      if(id){
        setLoading(true);
        getProduct(id)
      }
    }, [id])

    const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplaySpeed:2000,
    autoplay:true
  };
    const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    autoplaySpeed:2000,
    autoplay:true,
    centerPadding:'100px',
    swipeToSlide:true,
    rtl:true,
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

    async function getProduct(id){
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      setProduct(data.data);
      relatedProducts(data.data.category._id);
    }
    async function relatedProducts(categoryId) {
      let {data:{data}} = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
      let relatedProduct = data.filter(item => item.category._id === categoryId);
      setRelatedProductsByID(relatedProduct);
      setLoading(false);
    }

  return (
    <>
      <section className="products">
        {!loading&&<div className="flex justify-center uppercase font-bold pt-10 mb-5">
          <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
            Product Details
          </h2>
        </div>}        
        {loading?<Loading/>
          :
          <div className="flex flex-wrap gap-8 justify-center items-center py-8">
            <div className="w-1/4 ">
              <Slider {...settings}>                 
                {product.images.map((Image,index)=>
                  <img key={index} src={Image} className='w-full' alt={product.title} />
                )}
              </Slider>            
            </div>
            <div className="w-2/3 ps-2">
            <h2 className='text-3xl mb-5'>
              {product.title}
            </h2>
            <p className='mb-5 px-4'>{product.description}</p>
            <p className='text-blue-700'>{product.category.name}</p>
            <div className="flex justify-between ">
              <span className='text-lg text-main'>{product.price}.00 EGP</span>
              {userToken&&
              <div className='text-lg ms-auto pe-5'>
                <button 
                className="size-8 rounded-lg bg-[#303841] flex justify-center items-center cursor-pointer">
                  <i className="fa-regular fa-heart text-xl text-white"></i>
                  {/* <i className="fa-regular fa-heart text-xl text-white absolute"></i> */}
                  {/* <i className="fa-solid fa-heart text-xl text-main"></i> */}
                </button>                
              </div>
              }
              <span className="text-xl me-30">
                <i className="fa-solid fa-star text-[#FFD43B] me-1"></i> {product.ratingsAverage}
              </span>
            </div>
            <button className='text-white bg-[#303841]  hover:bg-main cursor-pointer focus:ring-1 focus:outline-none focus:ring-red-300 font-medium  text-sm w-full sm:w-auto px-3 py-2.5 text-center flex mt-5'>Add To Cart <div className="border ms-2 size-5 text-xs flex justify-center items-center rounded-full"><i className="fa-solid fa-plus"></i></div></button>
            </div>
          </div>
        }
            
        {!loading&&
        
        < >
          <div className="flex justify-center uppercase font-bold pt-1 mb-5">
          <h2 className="w-fit relative text-3xl tracking-wide after:w-1/3 after:h-[1px] after:bg-main after:absolute after:-bottom-3 after:start-1/2 after:-translate-x-1/2">
            Related Products
          </h2>
        </div>    
            <div className="py-6">
              <Slider {...settings2}>
                {relatedProductsByID.map((item,index)=>
                <div key={index} className="mx-5 bg-white border border-transparent  shadow-md relative group/wishList group/image overflow-hidden">   
                  <picture className='overflow-hidden block'>
                    <img className='w-full group-hover/image:scale-130 duration-300' src={item.imageCover} alt={item.title} />
                  </picture>                                        
                  <div className="card-contain">
                    <h2 className='text-center text-sm mb-2 py-2 mx-2 border-b border-b-[#ddd]  text-[#277cd9]'>{item.category.name}</h2>
                    <h3 className='text-center text-sm font-bold mb-2 relative after:absolute after:h-[0.7px] after:w-1/3 after:-bottom-[10px] after:start-1/2 after:-translate-x-1/2 after:bg-[#ddd] '>{item.title.split(" ",2).join(" ")}</h3>
                    <p className='text-center text-[14px] pt-1 pb-2'>{item.price}.00 EGP</p>
                    <button
                    className='px-3 py-[7px] mb-5 cursor-pointer block mx-auto text-white uppercase text-xs bg-[#303841] hover:bg-main duration-300 rounded-full'>
                      add to cart
                    </button>
                    {userToken&&
                    <button 
                    className="absolute size-8 rounded-full bg-[#303841] top-2  flex justify-center items-center cursor-pointer group-hover/wishList:end-2 -end-full duration-300">
                      <i className="fa-regular fa-heart text-lg text-white"></i>
                      {/* <i className="fa-regular fa-heart text-lg text-white absolute"></i> */}
                      {/* <i className="fa-solid fa-heart text-lg text-main"></i> */}
                    </button>                    
                    }
                    <div
                    className="absolute text-xs top-2 start-2 flex justify-center items-center text-white px-2 py-[2px] rounded-xl bg-[#da0a22c4]">
                      <i className="fa-solid text-sm fa-star text-[#FFD43B] me-1"></i>{product.ratingsAverage}
                    </div> 
                    <Link to={`/product-details/${item.id}`}>
                      <div
                      className="absolute hidden group-hover/image:block text-xs top-1/3 left-1/2 -translate-1/2 start-2  text-white px-4 py-2 rounded-full bg-[#232323]">
                        Viwe Details
                      </div>  
                    </Link>
                  </div>                  
                </div>
                )}
              </Slider>
        </div>
        </>
        }
        </section>
    </>
  );
}
