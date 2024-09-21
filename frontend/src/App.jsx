
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/home/About';
import Service from './components/Service';

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Service' element={<Service/>} />
      </Routes>

      <Footer/>

    </>
  )
}

export default App
