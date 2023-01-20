import React,{useState} from 'react';
import '../css/shop.scss';
import Shopswiper from './Shopswiper';

function Shop(props) {
    const [shopnm, shopnmupdate] = useState(['ALL','diffuser']);
    const btnupdate = (e) => {
        e = e || window.event;
        const itemnm = e.target.getAttribute('datasrc').split(',');
        shopnmupdate(itemnm);
    }
    return (
        <section id='shop'>
            {console.log(shopnm)}
            <div className='container d-flex justify-content-start'>
                <a onClick={(e)=>{btnupdate(e)}} datasrc={['ALL','all']} className='px-3'>ALL</a>
                <a onClick={(e)=>{btnupdate(e)}} datasrc={['DIFFUSER','diffuser']} className='px-3'>DIFFUSER</a>
                <a onClick={(e)=>{btnupdate(e)}} datasrc={['LAMP','lamp']} className='px-3'>LAMP</a>
                <a onClick={(e)=>{btnupdate(e)}} datasrc={['ETC','etc']} className='px-3'>ETC</a>
            </div>
            
            <Shopswiper title={shopnm[0]} objnm={shopnm[1]} />
            
        </section>
    );
}

export default Shop;