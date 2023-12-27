import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AccessoryCards from './components/Accessory Cards/AccessoryCards'
import LongboardCards from './components/Longboard Cards/LongboardCards'
import ShortboardCards from './components/Shortboards Cards/ShortboardCards';
import WetsuitCards from './components/Wetsuit Cards/WetsuitCards';
import './global.css'

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);



  return (

    <>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/longboards'
          element={
            <LongboardCards
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />}
        />

        <Route path='/shortboards'
          element={
            <ShortboardCards
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />}
        />

        <Route
          path='/wetsuits'
          element={
            <WetsuitCards
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />}
        />

        <Route path='/accessories'
          element={
            <AccessoryCards
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />}
        />



      </Routes>


      {/* <AccessoryCards/> */}
      {/* <LongboardCards/> */}
      {/* <ShortboardCards/> */}
      {/* <WetsuitCards/> */}



    </>
  );
}

export default App;
