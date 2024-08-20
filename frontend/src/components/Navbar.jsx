import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

import logo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';
import hamburgerCross from '../assets/hamburger-cross.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="nav__bar">
                <div className="nav__logo">
                    <Link to="">
                        <img src={logo} alt="Logo" width="100%" height="100%" />
                    </Link>
                </div>

                {/* <div className="hamburger" onClick={toggleMenu}>
                    <img src={hamburger} alt="Open Menu" width="100%" height="100%" />
                </div> */}

                {/* <ul className={`nav__item ${isOpen ? 'nav__item--open' : ''}`}> */}
                {/* <ul className={`nav__item`}>
                    <div className="hamburger-cross" onClick={toggleMenu}>
                        <img src={hamburgerCross} alt="Close Menu" width="100%" height="100%" />
                    </div>
                    
                    <Link to="" className="nav-link">
                        <span className='navitem_line'></span>
                        <span className='Number'>01</span>
                        <li className="link">Home</li>
                    </Link> 
                    <Link to="" className="nav-link">
                        <span className='navitem_line'></span>
                        <span className='Number'>02</span>
                        <li className="link">Portfolio</li>
                    </Link>
                    <Link to="" className="nav-link">
                        <span className='navitem_line'></span>
                        <span className='Number'>03</span>
                        <li className="link">Service</li>
                    </Link>
                    <Link to="" className="nav-link">
                        <span className='navitem_line'></span>
                        <span className='Number'>04</span>
                        <li className="link">About Us</li>
                    </Link>
                    <Link to="" className="nav-link">
                        <span className='navitem_line'></span>
                        <span className='Number'>05</span>
                        <li className="link">Contact Us</li>
                    </Link>
                </ul> */}

                
                <div className="nav_link">
                        <Link to="" className="nav-link">
                            <li className="link">Home</li>
                        </Link> 
                        <Link to="" className="nav-link">
                            
                            <li className="link">Portfolio</li>
                        </Link>
                        <Link to="" className="nav-link">
                            
                            <li className="link">Service</li>
                        </Link>
                        <Link to="" className="nav-link">
                            
                            <li className="link">About Us</li>
                        </Link>
                        <Link to="" className="nav-link">
                        
                            <li className="link">Contact Us</li>
                        </Link>
                </div>

                <div className="chat-btn">
                    <div className="button-container">
                            <a href="#" className="button">
                                Let's Chat <span> &rarr;</span>
                            </a>
                    </div>
                </div>
                
            </nav>
        </>
    );
}

export default Navbar;
