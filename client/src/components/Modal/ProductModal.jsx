import React from "react";
import Modal from 'react-modal';
import './productModal.css';
import l1 from '../../assets/longboardPics/L1.JPG';
import l2 from '../../assets/longboardPics/L1.JPG';
import l3 from '../../assets/longboardPics/L1.JPG';
import l4 from '../../assets/longboardPics/L1.JPG';
import l5 from '../../assets/longboardPics/L1.JPG';
import l6 from '../../assets/longboardPics/L1.JPG';
import l7 from '../../assets/longboardPics/L1.JPG';
import l8 from '../../assets/longboardPics/L1.JPG';
import l9 from '../../assets/longboardPics/L1.JPG';
import l10 from '../../assets/longboardPics/L1.JPG';
import oip from '../../assets/shortboardPics/OIP.jpg'
import oip1 from '../../assets/shortboardPics/OIP1.jpg'
import oip2 from '../../assets/shortboardPics/OIP2.jpg'
import oip3 from '../../assets/shortboardPics/OIP3.jpg'
import oip4 from '../../assets/shortboardPics/OIP4.jpg'
import oip5 from '../../assets/shortboardPics/OIP5.jpg'
import oip6 from '../../assets/shortboardPics/OIP6.jpg'
import oip7 from '../../assets/shortboardPics/OIP7.jpg'
import oip8 from '../../assets/shortboardPics/OIP8.jpg'
import oip9 from '../../assets/shortboardPics/OIP9.jpg'
import w6 from '../../assets/wetsuitPics/W6.jpg'
import w7 from '../../assets/wetsuitPics/W6.jpg'
import w8 from '../../assets/wetsuitPics/W6.jpg'
import w9 from '../../assets/wetsuitPics/W6.jpg'
import w10 from '../../assets/wetsuitPics/W6.jpg'
import w1 from '../../assets/wetsuitPics/W6.jpg'
import w2 from '../../assets/wetsuitPics/W6.jpg'
import w3 from '../../assets/wetsuitPics/W6.jpg'
import w4 from '../../assets/wetsuitPics/W6.jpg'
import w5 from '../../assets/wetsuitPics/W6.jpg'
import leash from '../../assets/accessoriesPics/leash.jpg'
import traction from '../../assets/accessoriesPics/tractionpad.jpg'
import fins from '../../assets/accessoriesPics/fins.jpg'
import bag from '../../assets/accessoriesPics/bag.jpg'
import roofrack from '../../assets/accessoriesPics/roofrack.webp'
import wax from '../../assets/accessoriesPics/wax.jpg'
import key from '../../assets/accessoriesPics/key.jpg'
import poncho from '../../assets/accessoriesPics/poncho.webp'
import hat from '../../assets/accessoriesPics/hat.jpeg'
import surflock from '../../assets/accessoriesPics/surflock.jpg'





const ProductModal = ({ isOpen, closeModal, product }) => {


    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Product Modal"
            >


                {product.image.map((item, index) => {
                    switch (item) {
                        case "L1.JPG":
                            product.image = l1;
                            break;
                        case "L2.JPG":
                            product.image = l2;
                            break;
                        case "L3.JPG":
                            product.image = l3;
                            break;
                        case "L4.JPG":
                            product.image = l4;
                            break;
                        case "L5.JPG":
                            product.image = l5;
                            break;
                        case "L6.JPG":
                            product.image = l6;
                            break;
                        case "L7.JPG":
                            product.image = l7;
                            break;
                        case "L8.JPG":
                            product.image = l8;
                            break;
                        case "L9.JPG":
                            product.image = l9;
                            break;
                        case "L10.JPG":
                            product.image = l10;
                            break;
                        case "OIP.jpg":
                            product.image = oip;
                            break;
                        case "OIP1.jpg":
                            product.image = oip1;
                            break;
                        case "OIP2.jpg":
                            product.image = oip2;
                            break;
                        case "OIP3.jpg":
                            product.image = oip3;
                            break;
                        case "OIP4.jpg":
                            product.image = oip4;
                            break;
                        case "OIP5.jpg":
                            product.image = oip5;
                            break;
                        case "OIP6.jpg":
                            product.image = oip6;
                            break;
                        case "OIP7.jpg":
                            product.image = oip7;
                            break;
                        case "OIP8.jpg":
                            product.image = oip8;
                            break;
                        case "OIP9.jpg":
                            product.image = oip9;
                            break;
                        case "W6.jpg":
                            product.image = w6;
                            break;
                        case "W7.jpg":
                            product.image = w7;
                            break;
                        case "W8.jpg":
                            product.image = w8;
                            break;
                        case "W9.jpg":
                            product.image = w9;
                            break;
                        case "W10.jpg":
                            product.image = w10;
                            break;
                        case "W1.jpg":
                            product.image = w1;
                            break;
                        case "W2.jpg":
                            product.image = w2;
                            break;
                        case "W3.jpg":
                            product.image = w3;
                            break;
                        case "W4.jpg":
                            product.image = w4;
                            break;
                        case "W5.jpg":
                            product.image = w5;
                            break;
                        case "leash.jpg":
                            product.image = leash;
                            break;
                        case "tractionpad.jpg":
                            product.image = traction;
                            break;
                        case "fins.jpg":
                            product.image = fins;
                            break;
                        case "bag.jpg":
                            product.image = bag;
                            break;
                        case "roofrack.webp":
                            product.image = roofrack;
                            break;
                        case "wax.jpg":
                            product.image = wax;
                            break;
                        case "key.jpg":
                            product.image = key;
                            break;
                        case "poncho.webp":
                            product.image = poncho;
                            break;
                        case "hat.jpeg":
                            product.image = hat;
                            break;
                        case "surflock.jpg":
                            product.image = surflock;
                            break;



                        default:
                            product.image = l1;
                    }

                    return (
                        <img src={product.image} />
                    )
                })}

                {console.log(product.image)}



                <h2>{product.model}</h2>
                <p>{product.description}</p>
                <p>Price ${product.price}</p>



                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </>
    )
}

export default ProductModal