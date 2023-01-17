import React,{useState} from 'react';
// import Menu from './Menu';/
function Header(props) {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
    return (
        
        <>
            <div id='header'className='position-fixed px-5 py-3' >
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <img src="../../img/home/logo_white.svg" alt="logo" />
                    </div>
                    <a href="#none" className='btn_menu' onClick={handleToggle}>
                        <span>메뉴 만들거</span>
                    </a>
                </div>
            </div>
            <div id='menu' className={isActive ? "d-none" : "d-block"}>
                    <div className='d-flex  fullImg text-white'style={{backgroundImage:"url(../../img/home/menu.jpg)"}}>
                        <div className='col-6 flex-column ' >
                            <h2 className=''>
                                ONE OBJECT, MORE VALUE<br/>
                                <span>하나의 사물, 공간의 가치를 더하다.</span>
                            </h2>
                            <a href='#arrivals'><p>NEW ARRIVALS</p></a>
                            <a href='#shop'><p>SHOP</p></a>
                            <a href='#brandstory'><p>BRAND STORY</p></a>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Header;