import React from 'react';
import Menu from './Menu';

function Header(props) {
    const menu = <Menu/>
    return (
        <div id='header'className='position-fixed px-5 py-3' >
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <img src="../../img/home/logo_white.svg" alt="logo" />
                </div>
                <a href={menu}>메뉴나와라</a>
            </div>
            
        </div>
    );
}

export default Header;