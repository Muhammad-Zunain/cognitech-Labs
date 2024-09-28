import React from 'react'
import { Link } from 'react-router-dom';
import '../css/FrontService.css';
import {Swiper, SwiperSlide} from 'swiper/react'

import project from './serviceWorkJson.json'
import react from '../../assets/react-logo.png';
import aboutService from '../../assets/service-image.jpg';
import aboutService1 from '../../assets/about1.png';


import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



function FrontEndService() {
  return (
    <>
      <div className='f-service-header'>
        <h2>
          front end development
        </h2>
        <p>Encompasses building and maintaining websites, including front-end (user interface) development.</p>
      </div>

      <div style={{
        backgroundColor: '#1e143b',
        borderRadius: '8px',
        marginTop: '2rem',
        padding: '8rem 0 18rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
        className='container'>

        <div className="service-technology-content">
          <div className='service-box-style-1'></div>
          <h1>
            Our Technology <br />
            Stack
          </h1>
          <p>If you dream it we can build it. We use wide ranging technologies and platforms. Our technology stack enables us to implement any feature for our clients.</p>
        </div>
        <div className='service-box-style-2'></div>
        <div className="service-tectnolnogy-stack">
          <img src={react} alt="" />
          <img src={react} alt="" />
          <img src={react} alt="" />
          <img src={react} alt="" />
          <img src={react} alt="" />
          <img src={react} alt="" />
          <img src={react} alt="" />
          <img src={react} alt="" />
        </div>
        <div className='about-service-section'>
          <img src={aboutService} alt="" className='about-service-img' />
          <div className="about-service-content">
            <h3>
              Experience The Difference Of Working With Excellence </h3>
            <p>Choose us for custom development solutions that go beyond the traditional. Witness our work and our dedicated team of experts who are committed to your success and delivering excellence in every project. Let’s collaborate and turn your vision into reality with our innovative custom development services.</p>
          </div>
        </div>

        <div className="work-wrapper">
          <div className="work-wrapper-content">
            <h1 className='text-outline'>01</h1>
            <h2>Mobile Application <br /> Project</h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta atque ipsam reiciendis adipisci.</p>
            <div className="tech-div">
              <p>Flutter, </p>
              <p>Flutter, </p>
              <p>Flutter</p>
            </div>
          </div>
          <div className="work-wrapper-carousel">
          <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img className='swiper-image' src={aboutService} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img className='swiper-image' src={aboutService} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img className='swiper-image' src={aboutService} alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img className='swiper-image' src={aboutService1} alt="Slide 4" /></SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev "></div>
        <div className="swiper-button-next "></div>

          </div>
        </div>
      </div>

    </>
  )
}

export default FrontEndService