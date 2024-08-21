import React from 'react'
import './css/Hero.css'


function Hero() {
    return (
        <>
            <div className='hero-container container'>
                <div className='main-title-hero'>
                    <span className='title-line-m'></span>
                    <span className='title-line'></span>
                    <div className='hero-title'>
                        <p>SOFTWARE PRODUCT DEVELOPMENT COMPANY</p>
                    </div>
                </div>

                <div className="main-body">
                    <div className="main-body-header">
                        <h2>Your <span>Product.</span> Your <span>Idea.</span></h2>
                        <h2>Our <span>Innovation</span> and</h2>
                        <h2>Engineering.</h2>

                    </div>
                    <div className="main-body-content">
                        <p>Accelerate your vision with our comprehensive suite of software development and growth services.</p>
                    </div>
                </div>

                <div className="main-body-footer">
                    <div className="button-container">
                        <a href="#" className="button">
                            See My Work <span> &rarr;</span>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero