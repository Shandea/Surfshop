import './sideNav.css' 
import React, { useState, useEffect } from 'react';




const SideNav = () => {




    return (
        <>
        <div className='navContainer'>

            <div className='navTitle'>SurfBoards</div>
            <div className='navLink'>Longboards</div>
            <div className='navLink'>ShortBoards</div>
            <div className='navLink'>Wetsuits</div>
            <div className='navLink'>Accessories</div>

        </div>
        </>
    )
}

export default SideNav