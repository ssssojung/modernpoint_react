import React,{useState} from 'react';
import Menu from './Menu';
function Header(props) {
    const [menuicon, updateclose]= useState(false);

    return (
        <div>
        <div id='header'className='position-fixed px-5 py-3' >
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <img src="../../img/home/logo_white.svg" alt="logo" />
                </div>
                <a href="#none" onClick={()=>{updateclose(!menuicon)}}>
                    {menuicon ? 'X' : '메뉴나와라' }
                </a>
            </div>
            
        </div>
        {menuicon ? <Menu/> : null}
        </div>
    );
}

export default Header;