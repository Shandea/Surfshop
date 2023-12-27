    import './ShortboardCard.css'
    import shortboard from './shortboard.json'
    import React, { useState, useEffect } from 'react';


    const ShortboardCards = () => {
        const [product, setProduct] = useState(shortboard);
      
      
        
      
        return (
          <div className="accessoryWholePage">
            <h1 className='welcomeTitle'>Shortboards</h1>
        
            <div className='accessorySection'>
              <div className='accessoryRow'>
                {product.map((data, index) => (
                  <div className='accessoryCard' key={index}>
                     <img className='imgSize' src={require(`../../../public/assets/accessoriesPics/${data.image}`)} alt="Avatar"/>
                      <p>{data.model}</p>
                      <button className='shopbtn'>Shop</button>
                 
                      
                      
      
                  </div>
                ))}
              </div>
            </div>
      
          </div>
        );
      };
      
      export default ShortboardCards;