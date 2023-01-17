import React,{useState} from 'react';
import Activefooter from './Activefooter';
import '../css/footer.scss';
function Footer(props) {
    const [plusicon, updateclose]= useState(false);
    return (
        <section id='footer' className='py-5'>
            <div className='d-flex justify-content-between px-5'>
                <span>{plusicon ?  'ONE OBJECT, MORE VALUE.': <img class='px-5'src='../../img/home/logo_white.svg'/>}</span>
                <span className='copy'>
                    {plusicon ? 'Copyright ⓒ 모던포인트 All Rights Reserved':null}
                    </span>
                <a href="#none" onClick={()=>{updateclose(!plusicon)}} className=''>
                    {plusicon ? '+':'x'  }
                </a>
                    
            </div>
            {plusicon?null:<Activefooter/>}
        </section>
    );
}

export default Footer;