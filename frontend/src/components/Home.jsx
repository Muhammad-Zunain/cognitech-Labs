import React from 'react';
import Hero from './home/Hero.jsx';
import Service from './home/Service.jsx';
import About from './home/About.jsx';

const Home = () => {
    const bg = {}
    return (
        <div style={{
            backgroundColor: '#1e143b',
            borderRadius: '8px',
            marginTop: '2rem'
        }} className='container'>
            
            <Hero />
            <Service />
            <About/>
        </div>

    );
}

export default Home;
