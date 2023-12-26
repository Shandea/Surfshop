import React from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css'
import logo from '../../assets/SurfsUpTranparent.png';
import cartIcon from '../../assets/cartYellow.png';


const Navbar = () => {

    const location = useLocation();

    const isLinkActive = (to) => {
        return location.pathname === to;
    }



    return (
        <>
            <header>
                <div className="nav-container">
                    <div className="logo-container">
                        <img className="nav-logo" alt="Logo" src={logo} />

                        <ul>
                            <li>Surf's Up</li>
                            <li>Surf Shop</li>

                        </ul>
                    </div>
                    <nav>
                        <Link to='/' className={isLinkActive('/') ? 'active' : ''} >Login</Link>

                        <Link>
                            <img src={cartIcon} className="cart-icon" alt="Cart" />
                        </Link>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Navbar