import React, { useState } from 'react';
import './LongboardCards.css'
import ProductModal from '../Modal/ProductModal';
import longboardData from './longboard.json'

const LongboardCards = ({ modalIsOpen, setModalIsOpen, selectedProduct, setSelectedProduct }) => {

  const [products, setProducts] = useState(longboardData)


  const openModal = (product) => {
    setSelectedProduct(product)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setModalIsOpen(false)
  }


  return (
    <div className="accessoryWholePage">
      <h1 className='welcomeTitle'>Longboards</h1>

      <div className='accessorySection'>
        <div className='accessoryRow'>
          {products.map((data, index) => (
            <div className='accessoryCard' key={index}>
              <img className='imgSize' src={require(`../../assets/longboardPics/${data.image}`)} alt="Avatar" />
              <p>{data.model}</p>
              <button className='shopbtn' onClick={() => openModal(data)}>Shop</button>




            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          product={selectedProduct}
        />
      )}

    </div>


  );
};

export default LongboardCards;