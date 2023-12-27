import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AccessoryCards from './components/Accessory Cards/AccessoryCards'
import LongboardCards from './components/Longboard Cards/LongboardCards'
import ShortboardCards from './components/Shortboards Cards/ShortboardCards';
import WetsuitCards from './components/Wetsuit Cards/WetsuitCards';
import './global.css'

function App() {
  return (

    <>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/longboards' element={<LongboardCards />} />
        <Route path='/shortboards' element={<ShortboardCards />} />
        <Route path='/wetsuits' element={<WetsuitCards />} />
        <Route path='/accessories' element={<AccessoryCards />} />



      </Routes>
    
    
     {/* <AccessoryCards/> */}
     {/* <LongboardCards/> */}
     {/* <ShortboardCards/> */}
     {/* <WetsuitCards/> */}



    </>
  );
}

export default App;
