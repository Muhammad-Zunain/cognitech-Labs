import React from 'react';

import Hero from './home/Hero.jsx';
import Service from './home/Service.jsx';
import About from './home/About.jsx';
import ChooseUs from './home/ChooseUs.jsx';
import Technology from './home/Technology.jsx';

const Home = () => {
    return (
        <>
            <div style={{backgroundColor: '#1e143b',
                        borderRadius: '8px',
                        marginTop: '2rem',
                        padding: '8rem 0 18rem 0' }} 
                        className='container'>

                <Hero />
                <About />
                <Service />
                <ChooseUs />
                
            </div>

            <Technology />
        </>

    );
}

export default Home;
