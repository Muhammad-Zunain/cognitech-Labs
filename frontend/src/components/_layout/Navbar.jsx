import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import hamburgerCross from '../../assets/hamburger-cross.png';

function Navbar({ handleClick, open }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className="overlay"
                onClick={handleClick}
                style={{
                    opacity: open ? 1 : 0,
                    visibility: open ? 'visible' : 'hidden',
                    transition: 'opacity 0.5s, visibility 0.5s',
                }}
            >
            </div>

            <nav className="nav__bar container">

                <div className="nav__logo">
                    <Link to="">
                        <img src={logo} alt="Logo" />
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
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/" className="nav-link">
                            Portfolio
                        </Link>


                        <Link className="nav-link" onClick={() => {
                            handleClick()

                        }}>
                            Service
                        </Link>

                        <Link to="/About" className="nav-link">
                            About Us
                        </Link>
                    </div>

                    <button className="primary-button">
                        <span className="top"></span>
                        <Link to="/Contact" className="primary-button-text">Let's Chat</Link>
                        <span className="bottom"></span>
                    </button>
                </ul>

            </nav>

            <ul onClick={(e) => e.stopPropagation()} className='dropdown-menu' style={{
                left: open ? '0%' : '-200%'
            }}>
                <div className="side__nav__logo">
                    <Link to="">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <li>
                    <i class="fa-solid fa-diamond"></i><Link to={`/service/${"frontend"}`} onClick={() => {
                        handleClick()
                    }} service-name="FrontEnd">Front End Development</Link>
                </li>
                <li>
                    <i service-name="BackEnd" class="fa-solid fa-diamond"></i><Link to={`/service/${"backend"}`} onClick={handleClick}>Back End Development</Link>
                </li>
                <li>
                    <i class="fa-solid fa-diamond"></i><Link to="" onClick={handleClick} >App Development</Link>
                </li>
                <li>
                    <i class="fa-solid fa-diamond"></i> <Link to="" onClick={handleClick}>Custom Web Development</Link>
                </li>
                <li>
                    <i class="fa-solid fa-diamond"></i><Link to="" onClick={handleClick}>UI/UX Design</Link>
                </li>
            </ul>


        </>
    );
}

export default Navbar;
