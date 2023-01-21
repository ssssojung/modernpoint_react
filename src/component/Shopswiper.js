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
                               
                                
                                <SwiperSlide className='slideitem' key={'shop'+i}>
                                    
                                    <p className={v.cls}>{props.objnm}</p>
                                    <div key={ 'img'+i} className='col-4 slideitem'>
                                        <img src={v.img} />
                                        <p className={ props.objnm + i}>{v.description}</p>
                                        {/* props.objnm+i랑 함께 클래스를 쓸 수 있는 방법 찾아보기 */}
                                        <p>{v.price}</p>
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