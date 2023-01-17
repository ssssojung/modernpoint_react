import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import mainbanner from '../json/home.json';


function Mainbanner(props) {
    const banner = mainbanner[1][props.mainbn]
    return (
        <>
           <Swiper
            spaceBetween={30}
            effect={"fade"}
            // navigation={true}
            pagination={{
            clickable: true,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            modules={[EffectFade,Pagination, Autoplay]}
            className="mySwiper"
        >
                {
                banner.map((item, index)=>{
                    return(
                            <SwiperSlide className='fullImg' style={{ backgroundImage : `url(${item.mainbannerImg})`, height:"100vh" }}>
                            </SwiperSlide>
                        )
                        
                    })
                    
                }
                
              
        </Swiper>
        </>
    );
}

export default Mainbanner;