import React from 'react';
import BtnCart from './UI/BtnCart';

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
        
        <div className=''>
            <div className='mb-5 pb-5  px-xxl-0 px-3 px-md-5'>

           

                <h3 className='pt-3 pb-5 text-center'>{props.title}</h3>
                
                
                    <Swiper
                    slidesPerView={1.5}
                    spaceBetween={10}
                    
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
                   
                     className='mySwiper'
                    
                    >
                    <ul className={'row ' +props.objnm}>
                    {
                        iteminfo.map((v, i) =>{
                            return(
                               
                                
                                <SwiperSlide className='slideitem' key={'shop'+i}>
                                    
                                    <p className={v.cls}>{props.objnm}</p>
                                    <div key={ 'img'+i} >
                                        <img src={v.img} className='img-fluid' />
                                        <p className={ props.objnm + i}>{v.description}</p>
                                        {/* props.objnm+i랑 함께 클래스를 쓸 수 있는 방법 찾아보기 */}
                                        <p>{v.price}</p>
                                        <BtnCart className='cart'>CART</BtnCart>
                                    </div> 
                                            

                                        
                                </SwiperSlide>
                            )
                        })
                    }
                    </ul>
                
                    </Swiper>
                    
                
                
            
        </div>
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