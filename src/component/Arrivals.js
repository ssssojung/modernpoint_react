import React from 'react';
import NewitemSwiper from './NewitemSwiper';
import '../css/arrivals.scss';

function Arrivals(props) {
    return (
        <>
            <section id='arrivals' className='fullImg position-relative' style={{backgroundImage : "url(../../img/arrivals/arrivals_bg.jpg)"}}>
                <div className='d-flex ' style={{height:"100vh"}}>
                    <div className='col-3 ' >
                        <div className='d-flex flex-column align-items-start titleT'>
                            <h2>New Arrivals</h2>
                            <p>가장 먼저 만나보는 모던포인트의 신제품</p>
                            <a href=""><p className='btn_box'>새로운 제품 더보기</p></a>
                        </div>
                    </div>
                    <div className='col-9 ps-2 align-item-end' >
                        <h3 className='subT'>
                            Modern Point products that pursue 'basic design'.<br/>
                            It gives you the meaning of a space to relax.
                        </h3>
                        <NewitemSwiper Newitem='iteminfo'/>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Arrivals;