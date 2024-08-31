
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element />
      </Routes>

      <Footer/>

    </>
  )
}

export default App
