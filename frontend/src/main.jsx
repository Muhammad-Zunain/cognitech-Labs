import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  Navbar  from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx'

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Home/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
);
