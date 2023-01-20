import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
 import shop from '../json/shop.json';

function Shopswiper(props) {
    const iteminfo = shop[props.objnm];
    // console.log(iteminfo[0].diffuser.img);
     console.log('----',shop,props.objnm, iteminfo)

    return (
        
        <div className='container'>

                <h3 className='py-5'>{props.title}</h3>
                
                
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                     className='mySwiper d-flex align-items-center'
                    
                    >
                    <ul className={'row ' +props.objnm}>
                    {
                        iteminfo.map((v, i) =>{
                            return(
                               
                                
                                <SwiperSlide key={'shop'+i}>
                                    
                                    <p >{props.objnm}</p>
                                    <div key={ 'img'+i} className={'col-4 '+ props.objnm + i}>
                                        <img src={v.img} />
                                        <span>{v.description}</span>
                                        <span>{v.price}</span>
                                        <p className='btn_cart'>CART</p>
                                    </div> 
                                            

                                        
                                </SwiperSlide>
                            )
                        })
                    }
                    </ul>
                
                    </Swiper>
                    
                
                
            
        </div>
    );
}

export default Shopswiper;
                 
                
                 
// function Shopswiper(props) {
//     const iteminfo = shop[props.objnm];
 
//     return (
        
//         <div className='container'>

//                 <h3 className='py-5'>{props.title}</h3>
//                 <ul className={'row ' +props.objnm}>
//                 {
//                     iteminfo.img.map((v, i)=>{
//                             return (
//                             <li key={ 'img'+i} className={'col-4 '+ props.objnm + i}>
//                             <img src={v} />
//                             </li>
//                             )
//                     })
//                 }
//                 </ul>
            
//         </div>
//     );
// }                