import React from "react";
import Modal from 'react-modal';
import './productModal.css';



const ProductModal = ({ isOpen, closeModal, product }) => {


    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Product Modal"
            >
                
                <img src={product.image} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price ${product.price}</p>
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </>
    )
}

export default ProductModal