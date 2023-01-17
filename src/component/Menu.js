import React from 'react';
// import { Link } from "react-router-dom";
// import Header from './Header';
function Menu(props) {

    return (
        <div className='d-flex  fullImg text-white'style={{backgroundImage:"url(../../img/home/menu.jpg)"}}>
            <div className='col-6 flex-column ' >
                <h2 className=''>
                    ONE OBJECT, MORE VALUE<br/>
                    <span>하나의 사물, 공간의 가치를 더하다.</span>
                </h2>
                <a href=''><p>NEW ARRIVALS</p></a>
                <a href=''><p>SHOP</p></a>
                <a href=''><p>BRAND STORY</p></a>
            </div>
        </div>
    );
}

export default Menu;