import React from 'react';


function BtnCart(props) {
    const classes = 'btn_cart ' + props.className; 
    
    return (
        <div className={classes}>
          {props.children}  
        </div>
    );
}

export default BtnCart;