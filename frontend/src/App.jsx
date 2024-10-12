
import { Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';
import FrontEndService from './components/service/FrontEndService'
import './index.css';
import Navbar from './components/_layout/Navbar';
import Footer from './components/_layout/Footer';
import Home from './components/_layout/Home';
// import About from './components/_layout/About';

function App() {



  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home  />} />
        {/* <Route path='/About' element={<About/>} /> */}
        <Route path='/service/frontend' element={<FrontEndService />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
