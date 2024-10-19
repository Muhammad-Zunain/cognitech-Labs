import React from 'react'
import "../css/AboutCogni.css"


import logo from '../../assets/brainlogo.png';

function AboutCognitech() {
    return (
        <>
            <div className='brain-cogni-logo'>
                <div className="choose-header about-cogni">
                    <h2>About <span>Cognitech</span></h2>
                </div>
                <img src={logo} alt="" />
            </div>
        </>
    )
}

export default AboutCognitech