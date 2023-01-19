import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
// import shopitem from '../json/item.json';

function Shopswiper(props) {
    // const iteminfo = shopitem[1][props.shopI]
    return (
        <>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper d-flex align-items-center"
            
            >

                {/* {
                    Niteminfo.map((item, index) =>{
                        return( */}
                            <SwiperSlide>
                                리액트1
                                {/* <div className='item_box '>
                                    <img src={item[0].img} alt="itemImg" />
                                    <div className='py-3 betweenText d-flex justify-content-between'>
                                        <span>{item[0].description}</span>
                                        <span>{item[0].price}</span>
                                    </div>
                                        <p className='btn_cart'>CART</p>
                                        
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                            리액트2
                            </SwiperSlide>
                            <SwiperSlide>
                            리액트3
                            </SwiperSlide>
                        {/* )
                    })
                }
         */}
      </Swiper> 
        </>
    );
}

export default Shopswiper;