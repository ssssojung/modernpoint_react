import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination, Virtual } from "swiper";

import mainbanner from '../json/home.json';
import { useState } from 'react';
import { useEffect } from 'react';


function Mainbanner(props) {
    const banner = mainbanner[1][props.mainbn];
    const [ bodyCl, bodyClchange ] = useState('bodyCl0');

  useEffect(()=>{
    document.body.classList = bodyCl;
  },[])

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
                
                //realIndex
                //activeIndex
              
                onSlideChange={(el) => {
                    
                    document.body.classList = '';
                    
                    bodyClchange('bodyCl'+ el.snapIndex )
                    document.body.classList += bodyCl;
                    
                }}
            >
                {
                banner.map((item, index)=>{
                    return(
                            <SwiperSlide key={'mainbanner'+index} virtualIndex={index} className='fullImg' style={{ backgroundImage : `url(${item.mainbannerImg})`, height:"100vh" }}>
                            </SwiperSlide>
                        )
                        
                    })
                    
                }
                
              
        </Swiper>
        </>
    );
}

export default Mainbanner;