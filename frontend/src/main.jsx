import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  Navbar  from './components/Navbar.jsx';
import './index.css';
import Hero from './components/Hero.jsx';
import Atom from './components/Atom.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <Hero/>
    
    </BrowserRouter>
  </StrictMode>,
);
