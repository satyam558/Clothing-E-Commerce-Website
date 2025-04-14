import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';

import '../css/Slider.css';
import { useEffect, useState } from "react";

const Slider = ()=>{
  const [product,setProducts] = useState([]);
  async function showApi(){
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    setProducts(data);
  }
  useEffect(()=>{
     showApi();
  },[])
    return(
        <>
        <div className="bg-white py-5">
          <div className="mx-auto p-2 " style={{maxWidth: "550px", textAlign:"center", lineHeight:"25px" }}>
            <h1 className="display-4" style={{fontFamily:"serif"}}>New Collections</h1>
            <p className="text-secondary fs-6 py-3" style={{fontFamily:"revert-layer"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa alias voluptas ea fugiat necessitatibus praesentium quasi odit optio obcaecati id. Aliquam, fugit labore magni quaerat blanditiis fuga eligendi illo repudiandae!</p>
          </div>
          <Swiper navigation={true} loop={true} modules={[Navigation]} spaceBetween={30} slidesPerView ={3} className="mySwiper px-5">
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[1]?.image} alt="" />
                   <h5>{product[1]?.title}</h5>
                   <p>{product[1]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[2]?.image} alt="" />
                   <h5>{product[2]?.title}</h5>
                   <p>{product[2]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[3]?.image} alt="" />
                   <h5>{product[3]?.title}</h5>
                   <p>{product[3]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[16]?.image} alt="" />
                   <h5>{product[16]?.title}</h5>
                   <p>{product[16]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[5]?.image} alt="" />
                   <h5>{product[5]?.title}</h5>
                   <p>{product[5]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[6]?.image} alt="" />
                   <h5>{product[6]?.title}</h5>
                   <p>{product[6]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[7]?.image} alt="" />
                   <h5>{product[7]?.title}</h5>
                   <p>{product[7]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[14]?.image} alt="" />
                   <h5>{product[14]?.title}</h5>
                   <p>{product[14]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[15]?.image} alt="" />
                   <h5>{product[15]?.title}</h5>
                   <p>{product[15]?.description.substr(0,82)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[19]?.image} alt="" />
                   <h5>{product[19]?.title}</h5>
                   <p>{product[19]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[18]?.image} alt="" />
                   <h5>{product[18]?.title}</h5>
                   <p>{product[18]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="image-container">
                   <img src={product[17]?.image} alt="" />
                   <h5>{product[17]?.title}</h5>
                   <p>{product[17]?.description.substr(0,135)}</p>
                   <a href="#">discover now</a>
               </div>
             </SwiperSlide>
             
          </Swiper>
        </div>
        </>
    )
}

export default Slider;