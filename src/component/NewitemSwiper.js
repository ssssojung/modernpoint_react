import React from 'react';
import BtnCart from './UI/BtnCart';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import '../css/arrivals.scss';
import Newitem from '../json/item.json';
function NewitemSwiper(props) {
    const Niteminfo = Newitem[props.Newitem]
    return (
        <>
           <Swiper
            slidesPerView={1.5}
            spaceBetween={10}  
            //centerMode={true}       
            
            className="mySwiper"
            breakpoints={{
             
              991:{
              slidesPerView:3 ,
              spaceBetween :10            
              },
              1440:{
              slidesPerView:3,
              spaceBetween : 30
              }
              
              }}

            
            >

        {
            Niteminfo.map((item, index) =>{
                return(
                    <SwiperSlide key={'newbanner'+index}>
                        <div className='item_box '>
                            <img src={item.thumblink} alt="itemImg" />
                            <div className='py-3 text-dark betweenText d-lg-flex d-md-block d-sm-flex justify-content-between'>
                                <span className='d-block'>{item.description}</span>
                                <span className='d-block'>{item.price}</span>
                            </div>
                                <BtnCart className='cart'>CART</BtnCart>
                                
                        </div>
                    </SwiperSlide>
                )
            })
        }
        
            </Swiper> 
        </>
    );
}

export default NewitemSwiper;