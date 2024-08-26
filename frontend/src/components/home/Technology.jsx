import React from 'react';
import react from '../../assets/react-logo.png';
import '../css/Technology.css';

function Technology() {
    return (
        <>
            <div className="about-header">
                        <h2>Technologies We <span>Work</span> With </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ducimus et optio sit iusto voluptates?</p>
                    </div> 
            <div className="marquee__about__tech">
                
                <div className="marquee">
                    <div className="marquee__inner">
                        {[...Array(10)].map((_, index) => (
                            <React.Fragment key={index}>
                                <div className="marquee__item">
                                    <img className="tech-logo" src={react} alt="React Logo" />
                                </div>
                                <div className="marquee__line"></div> {/* Line centered between logos */}
                            </React.Fragment>
                        ))}
                        {/* Duplicate the items to create a seamless scroll */}
                        {[...Array(10)].map((_, index) => (
                            <React.Fragment key={`dup-${index}`}>
                                <div className="marquee__item">
                                    <img className="tech-logo" src={react} alt="React Logo" />
                                </div>
                                <div className="marquee__line"></div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Technology;
