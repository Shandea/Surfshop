import "./WetsuitCards.css"
import wetsuit from "../../assets/wetsuits.json"
import React, { useState, useEffect } from 'react';



const WetsuitCards = () => {
    const [product, setProduct] = useState(wetsuit);
  
  
    
  
    return (
      <div className="accessoryWholePage">
        <h1 className='welcomeTitle'>Wetsuits</h1>
    
        <div className='accessorySection'>
          <div className='accessoryRow'>
            {product.map((data, index) => (
              <div className='accessoryCard' key={index}>
                 <img className='imgSize' src={require(`../../assets/wetsuitPics/${data.image}`)} alt="Avatar"/>
                  <p>{data.model}</p>
                  <button className='shopbtn'>Shop</button>
             
                  
                  
  
              </div>
            ))}
          </div>
        </div>
  
      </div>
    );
  };
  
  export default WetsuitCards;