import React from 'react';
import NewitemSwiper from './NewitemSwiper';
import Button from './UI/Button';

import '../css/arrivals.scss';

function Arrivals(props) {
    return (
        <>
            <section id={props.section[1].id} 
                className='fullImg position-relative py-5 d-flex flex-column justify-content-center' 
                style={{backgroundImage : "url(../../img/arrivals/arrivals_bg.jpg)"}}>

                <div className='row mx-auto py-5 container-fluid  ' >
                    <div className='col-lg-3 d-flex flex-column justify-content-center' >
                        <div className='titleT'>
                            <h2>New Arrivals</h2>
                            <p>가장 먼저 만나보는 모던포인트의 신제품</p>
                            <Button>새로운 제품 더보기</Button>
                        </div>
                    </div>
                    <div className='col-lg-9 ps-lg-2 align-item-lg-end d-flex flex-column justify-content-center' >
                        <div >
                            <h3 className='subT mb-5 pb-5 font14161824'>
                                Modern Point products that pursue 'basic design'.<br/>
                                It gives you the meaning of a space to relax.
                            </h3>
                            <NewitemSwiper Newitem='iteminfo'/>
                        </div>
                        
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Arrivals;