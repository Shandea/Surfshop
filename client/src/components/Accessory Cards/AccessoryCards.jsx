import React, { useState } from 'react';
import './AccessoryCards.css';
import accessory from'./accessories.json'


const AccessoryCards = () => {
    const [product, setProduct] = useState(accessory);
  
  
    
  
    return (
      <div className="accessoryWholePage">
        <h1 className='welcomeTitle'>Accessories</h1>
    
        <div className='accessorySection'>
          <div className='accessoryRow'>
            {product.map((data, index) => (
              <div className='accessoryCard' key={index}>
                 <img className='imgSize' src={require(`../../assets/accessoriesPics/${data.image}`)} alt="Avatar"/>
                  <p>{data.model}</p>
                  <button className='shopbtn'>Shop</button>
             
                  
                  
  
              </div>
            ))}
          </div>
        </div>
  
      </div>
    );
  };
  
  export default AccessoryCards;