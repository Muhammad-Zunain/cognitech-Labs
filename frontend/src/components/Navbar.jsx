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

                    <button className="primary-button">
                        <Link to="">Let's Chat</Link>
                    </button>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;
