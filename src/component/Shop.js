import React,{useState} from 'react';
import '../css/shop.scss';
import Shopswiper from './Shopswiper';

function Shop(props) {
    const [shopnm, shopnmupdate] = useState(['ALL','diffuser']);
    const btnupdate = (e) => {
        // e = e || window.event;
        const itemnm = e.target.getAttribute('datasrc').split(',');
        shopnmupdate(itemnm);
    }
    return (
        <section id={props.section[2].id}>
            {/* {console.log(shopnm)} */}
            <div class="container-fluid py-5" >
                <div className='container d-flex justify-content-center mt-5'>
                    <a onClick={(e)=>{btnupdate(e)}} datasrc={['ALL','all']} className='px-3'>ALL</a>
                    <a onClick={(e)=>{btnupdate(e)}} datasrc={['DIFFUSER','diffuser']} className='px-3'>DIFFUSER</a>
                    <a onClick={(e)=>{btnupdate(e)}} datasrc={['LAMP','lamp']} className='px-3'>LAMP</a>
                    <a onClick={(e)=>{btnupdate(e)}} datasrc={['ETC','etc']} className='px-3'>ETC</a>
                </div>
                
                <Shopswiper title={shopnm[0]} objnm={shopnm[1]} />
            </div>
            
            
        </section>
    );
}

export default Shop;