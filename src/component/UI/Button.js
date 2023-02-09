import React from 'react';
import classes from './Button.module.css';

function BtnCart(props) {
    // const classes = 'btn_cart ' + props.className; 
    
    return (
        <button 
            className={classes.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
          {props.children}  
        </button>
    );
}

export default BtnCart;