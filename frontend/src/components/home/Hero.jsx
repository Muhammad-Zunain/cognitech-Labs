import React from 'react'
import { Link } from 'react-router-dom';

import '../css/Hero.css'


function Hero() {
    return (
        <>
            <div className='hero-container'>
                <div className='main-title-hero'>
                    <span className='title-line-m'></span>
                    <span className='title-line'></span>
                    <div className='hero-title'>
                        <p>SOFTWARE PRODUCT DEVELOPMENT COMPANY</p>
                    </div>
                </div>

                <div className="main-body">
                    <div className="main-body-header">
                        <h1>Your <span>Product.</span> <br style={{display:'none'}}/> Your <span>Idea.</span></h1>
                        <h1>Our <span>Innovation</span><br style={{display:'none'}}/> and</h1>
                        <h1>Engineering.</h1>
                    </div>
                    <div className="main-body-content">
                        <p>Accelerate your vision with our comprehensive suite of software development and growth services.</p>
                    </div>
                </div>

                <button className=" hero-button">
                    <span className='top'></span>
                        <Link to="" className='primary-button'>
                            See My Work <span> &rarr;</span>
                        </Link>
                    <span className='bottom'></span>
                </button>
            </div>

        </>
    )
}

export default Hero;