
import { Route, Routes, useLocation } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Service from './components/_layout/Service'
import './index.css';
import Navbar from './components/_layout/Navbar';
import Footer from './components/_layout/Footer';
import Home from './components/_layout/Home';
// import About from './components/_layout/About';

function App() {
  const location = useLocation()
  const [open, setOpen] = useState(false);    // Service Overlay
  const handleClick = () => {
    setOpen(!open)

  };

  useEffect(()=>{
      setOpen(false)
  }, [location.pathname])



  return (
    <>
      <Navbar handleClick={handleClick} open={open}/>

      <Routes>
        <Route path='/' element={<Home  />} />
        {/* <Route path='/About' element={<About/>} /> */}
        <Route path='/service/:serviceName' element={<Service />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
