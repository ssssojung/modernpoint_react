import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import '../css/arrivals.scss';
import Newitem from '../json/item.json';
function NewitemSwiper(props) {
    const Niteminfo = Newitem[0][props.Newitem]
    return (
        <>
           <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper d-flex align-items-center"
            
            >

        {
            Niteminfo.map((item, index) =>{
                return(
                    <SwiperSlide key={'newbanner'+index}>
                        <div className='item_box '>
                            <img src={item.thumblink} alt="itemImg" />
                            <div className='py-3 text-dark betweenText d-flex justify-content-between'>
                                <span>{item.description}</span>
                                <span>{item.price}</span>
                            </div>
                                <p className='btn_cart'>CART</p>
                                
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