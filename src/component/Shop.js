import React,{useState} from 'react';
import '../css/shop.scss';
import Shopswiper from './Shopswiper';

function Shop(props) {
    const [shopnm, shopnmupdate] = useState(['ALL','allitem']);
    const btnupdate = (e) => {
        const itemnm = e.target.getAttribute('datasrc').split(',');
        shopnmupdate(itemnm);
    }
    return (
        <section id='shop'>
            <div className='container d-flex justify-content-start'>
                <button onClick={btnupdate} datasrc={['allitem']}>ALL</button>
                <button onClick={btnupdate} datasrc={['allitem']}>DIFFUSER</button>
                <button onClick={btnupdate} datasrc={['allitem']}>LAMP</button>
                <button onClick={btnupdate} datasrc={['allitem']}>ETC</button>
            </div>
            <Shopswiper />
            {/* shopI="shop" */}
        </section>
    );
}

export default Shop;