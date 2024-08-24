import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  Navbar  from './components/Navbar.jsx';
import Home from './components/Home.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <Navbar />
    <Hero/>
    
=======
      <Navbar />
      <Home/>
>>>>>>> 7e4338e1b15ba96e45311ec31eb0cf557d8c9d53
    </BrowserRouter>
  </StrictMode>,
);
