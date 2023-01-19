import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { FreeMode, Pagination } from "swiper";
 import shopitem from '../json/item.json';

function Shopswiper(props) {
    //const iteminfo = shopitem[props.shopitem];
    const iteminfo = shopitem[props.objnm].shop[0].diffuser;
    console.log(iteminfo)

    return (
        
        <div className='container'>

                <h3 className='py-5'>{props.title}</h3>
                <img src={props.shop} alt="" />
                {/* <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper d-flex align-items-center"
                
                >

            {
                iteminfo.map((v, i) =>{
                    return(
                        <SwiperSlide key={'shop'+i}>
                            <p >{props.objnm}</p>
                            <div className='item_box '>
                                <img src={v.img} alt="itemImg" />
                                <div className='py-3 text-dark betweenText d-flex justify-content-between'>
                                    <span>{v.description}</span>
                                    <span>{v.price}</span>
                                </div>
                                    <p className='btn_cart'>CART</p>
                                    
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            
                </Swiper>  */}
                {/* <ul>
                {
               //console.log(shopitem[1].shop[0].diffuser)
               iteminfo.map((v, i)=>{
return <li key={'shop'+i}><img src={v.img}></img></li>
               })
                }
                </ul> */}
            
        </div>
    );
}

export default Shopswiper;