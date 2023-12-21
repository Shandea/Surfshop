import React, { useState, useEffect } from 'react';

import './LongboardCards.css'

import longboard from '../../assets/longboard.json'


const LongboardCards = () => {
    const [product, setProduct] = useState(longboard);
  
  
    
  
    return (
      <div className="accessoryWholePage">
        <h1 className='welcomeTitle'>Longboards</h1>
    
        <div className='accessorySection'>
          <div className='accessoryRow'>
            {product.map((data, index) => (
              <div className='accessoryCard' key={index}>
                 <img className='imgSize' src={require(`../../assets/longboardPics/${data.image}`)} alt="Avatar"/>
                  <p>{data.model}</p>
                  <button className='shopbtn'>Shop</button>
             
                  
                  
  
              </div>
            ))}
          </div>
        </div>
  
      </div>
    );
  };
  
  export default LongboardCards;