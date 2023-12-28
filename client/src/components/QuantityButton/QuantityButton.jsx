import React from 'react';
import './quantityButton.css'

const QuantityButton = ({ quantity, onIncrement, onDecrement }) => {
    return (
        <>
        
            <div className='container-button'>
          
                <button className='q-button' onClick={onDecrement}>-</button>
                <span className='span'>{quantity}</span>

                <button className='q-button' onClick={onIncrement}>+</button>
                
                <button className='addToCart'>Add to Cart</button>
            </div>

            
        </>
    );
};

export default QuantityButton;