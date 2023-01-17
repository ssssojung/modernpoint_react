import React from 'react';
import Header from './Header';
function Menu(props) {
    return (
        <div className='d-flex flex-column fullImg text-white'style={{backgroundImage:"url(../../img/home/menu.jpg)"}}>
            <div className='col-6'>
                <Header/>
                <h2>
                    ONE OBJECT, MORE VALUE<br/>
                    하나의 사물, 공간의 가치를 더하다.
                </h2>
                <p>NEW ARRIVALS</p>
                <p>SHOP</p>
                <p>BRAND STORY</p>
            </div>
        </div>
    );
}

export default Menu;