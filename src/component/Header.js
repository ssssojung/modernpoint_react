import React,{useState} from 'react';
// import Menu from './Menu';/
function Header(props) {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
    return (
        
        <>
            <div id='header'className='position-fixed px-5 pt-4' >
                <div className='d-flex justify-content-end align-items-center'>
                    <div className='logo'>
                        <img src="../../img/home/logo_white.svg" alt="logo" />
                    </div>
                    <a href="#none" className='btn_menu' onClick={handleToggle}>
                        {isActive ? <img src="../../img/home/menu_icon.svg" alt="" /> : <i className='xi-close-thin'></i>}
                    </a>
                </div>
            </div>
            <div id='menu' className={isActive ? "d-none" : "d-block"}>
                    <div className='  fullImg text-white'style={{backgroundImage:"url(../../img/home/menu.jpg)"}}>
                        <div className=' px-5 flex-column menuT ' >
                            <h2 className='mb-5 pb-5'>
                                ONE OBJECT, MORE VALUE<br/>
                                <span>하나의 사물, 공간의 가치를 더하다.</span>
                            </h2>
                            <a href='#arrivals'><p className='py-5'>NEW ARRIVALS</p></a>
                            <a href='#shop'><p className='py-5'>SHOP</p></a>
                            <a href='#brandstory'><p className='py-5'>BRAND STORY</p></a>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Header;