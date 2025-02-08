import React, { useContext, useEffect, useState } from 'react'
import style from "./RecentProducts.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import Loading from '../Loading/Loading';
import { CartContext } from '../../Context/CartContext';

export default function RecentProducts(props) {
  let {setLoading , loading}= props;
  
  useEffect(()=>{
    getProducts();
  },[])


  let {addToCart} = useContext(CartContext)
  const [products, setProducts] = useState([]);

  let {userToken} = useContext(UserContext)

  async function getProducts(){
    let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
    setProducts(data.data);
    setLoading(false);
  }
    
  return (
    <>
      <section className="products">
        {loading?<Loading/>
          :
            <div className="flex flex-wrap gap-5 justify-center py-6">
              {products.map((product,index)=>  
                <div key={index} className="w-1/6 bg-white border border-transparent hover:border-main shadow-md relative group/wishList group/image overflow-hidden cursor-pointer">
                  <Link to={`/product-details/${product.id}`}>
                    <picture className='overflow-hidden block'>
                      <img className='w-full group-hover/image:scale-130 duration-300' src={product.imageCover} alt={product.title} />
                    </picture>
                  </Link>                    
                  <div className="card-contain">
                    <h2 className='text-center text-sm mb-2 py-2 mx-2 border-b border-b-[#ddd]  text-[#277cd9]'>{product.category.name}</h2>
                    <h3 className='text-center text-sm font-bold mb-2 relative after:absolute after:h-[0.7px] after:w-1/3 after:-bottom-[10px] after:start-1/2 after:-translate-x-1/2 after:bg-[#ddd] '>{product.title.split(" ",2).join(" ")}</h3>
                    <p className='text-center text-[14px] pt-1 pb-2'>{product.price}.00 EGP</p>
                    <button onClick={()=>addToCart(product.id)}
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
                  </div>                  
                </div>
              )}
            </div>

        }
      </section>
    </>
  );
}
