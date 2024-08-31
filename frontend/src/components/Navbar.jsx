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
            <nav className="nav__bar container">

                <div className="nav__logo">
                    <Link to="">
                        <img src={logo} alt="Logo"  />
                    </Link>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <img src={hamburger} alt="Open Menu" width="100%" height="100%" />
                </div>

                <ul className={`nav__item-v ${isOpen ? 'nav__item--open' : ''}`}>
               
                    <div className="hamburger-cross" onClick={toggleMenu}>
                        <img src={hamburgerCross} alt="Close Menu" width="100%" height="100%" />
                    </div>

                    <Link to="" className="navLink">
                        <span className='navitem_line'></span>
                        <span className='Number'>01</span>
                        <li className="link">Home</li>
                    </Link>
                    <Link to="" className="navLink">
                        <span className='navitem_line'></span>
                        <span className='Number'>02</span>
                        <li className="link">Portfolio</li>
                    </Link>
                    <Link to="" className="navLink">
                        <span className='navitem_line'></span>
                        <span className='Number'>03</span>
                        <li className="link">Service</li>
                    </Link>
                    <Link to="" className="navLink">
                        <span className='navitem_line'></span>
                        <span className='Number'>04</span>
                        <li className="link">About Us</li>
                    </Link>
                    <Link to="" className="navLink">
                        <span className='navitem_line'></span>
                        <span className='Number'>05</span>
                        <li className="link">Contact Us</li>
                    </Link>
                </ul>

                <ul className="nav__item">
                    <div className="nav__links">

                        <Link to="" className="nav-link">
                            Home
                        </Link>
                        <Link to="" className="nav-link">
                            Portfolio
                        </Link>
                        <Link to="" className="nav-link">
                            Service
                        </Link>
                        <Link to="" className="nav-link">
                            About Us
                        </Link>
                    </div>

                    <button>
                        <span className="top"></span>
                        <Link to="" className="primary-button">Let's Chat</Link>
                        <span className='bottom'></span>
                    </button>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;
