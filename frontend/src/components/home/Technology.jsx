import React from 'react';
import react from '../../assets/react-logo.png';
import python from '../../assets/python-logo.png';
import mongo from '../../assets/mongo-logo.png';
import sql from '../../assets/sql-logo.png';
import flutter from '../../assets/flutter-logo.png';
import node from '../../assets/node-logo.png';
import tailwind from '../../assets/tailwind-logo.png';
import wordpress from '../../assets/wordpress-logo.png';
import django from '../../assets/django-logo.png';
import '../css/Technology.css';

function Technology() {
    const Logo = [react, python ,mongo, sql, flutter, node, tailwind, wordpress, django]
    return (
        <>
            <div className='tech-wrapper'>
                <div className="tech-header">
                    <h2><span>Technologies</span> We Work With </h2>
                    
                </div>
                <div className="marquee__about__tech">

                    <div className="marquee">
                        <div className="marquee__inner">
                            {Logo.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="marquee__item">
                                        <img className="tech-logo" src={item} alt="Logo" />
                                    </div>
                                    <div className="marquee__line"></div>
                                </React.Fragment>
                            ))}
                            {Logo.map((val, index) => (
                                <React.Fragment key={`dup-${index}`}>
                                    <div className="marquee__item">
                                        <img className="tech-logo" src={val} alt="Logo" />
                                    </div>
                                    <div className="marquee__line"></div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Technology;
