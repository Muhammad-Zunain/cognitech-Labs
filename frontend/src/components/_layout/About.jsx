import React from 'react'
import AboutCognitech from '../about/AboutCognitech'
import About2 from '../home/About.jsx';
function About() {
    const containerStyles = {
        backgroundColor: '#1e143b',
        borderRadius: '8px',
        marginTop: '2rem',
        padding: '0 0 8rem 0',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '4rem',
      };
  return (
   <>
     <div className='f-service-header'>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nulla nihil ea quia iste nesciunt maiores numquam at aut est?</p>
            </div>
    <div className='container' style={containerStyles}>
        <AboutCognitech/>
    </div>
   </>
  )
}

export default About