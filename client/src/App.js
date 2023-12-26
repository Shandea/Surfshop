import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import './global.css'

function App() {
  return (
    // <h1>Surf's Up</h1>
    <>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>


    </>
  );
}

export default App;
