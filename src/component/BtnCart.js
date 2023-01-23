import React from 'react';
import '../css/style.scss';

function BtnCart(props) {
    const classes = 'btn_cart ' + props.className; 
    return (
        <div className={classes}>
          {props.children}  
        </div>
    );
}

export default BtnCart;