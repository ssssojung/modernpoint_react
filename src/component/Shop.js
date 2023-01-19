import React,{useState} from 'react';
import '../css/shop.scss';
import Shopswiper from './Shopswiper';
// import shopitem from '../json/item.json';

function Shop(props) {
    const [shopnm, shopnmupdate] = useState(['ALL','shop']);
    const btnupdate = (e) => {
        const itemnm = e.target.getAttribute('datasrc').split(',');
        shopnmupdate(itemnm);
    }
    return (
        <section id='shop'>
            {console.log(shopnm)}
            <div className='container d-flex justify-content-start'>
                <button onClick={btnupdate} datasrc={['ALL','all']}>ALL</button>
                <button onClick={btnupdate} datasrc={['DIFFUSER','diffuser']}>DIFFUSER</button>
                <button onClick={btnupdate} datasrc={['LAMP','lamp']}>LAMP</button>
                <button onClick={btnupdate} datasrc={['ETC','etc']}>ETC</button>
            </div>
            
            <Shopswiper shopitem='shop' title={shopnm[0]} objnm={shopnm[1]} />
            
        </section>
    );
}

export default Shop;