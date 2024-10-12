import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import aboutService from '../../assets/service-image.jpg';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/FrontService.css';

function FrontEndService() {
  const projects = [
    {
      title: "Mobile Application Project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta atque ipsam reiciendis adipisci.",
      technologies: ["Flutter", "React Native", "Dart"],
      images: [aboutService, aboutService, aboutService],
      alt: "Mobile Application Images"
    },
    {
      title: "Web Development Project",
      description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: [aboutService, aboutService, aboutService],
      alt: "Web Development Images"
    },
  ];

  const mainSwiperRef = useRef(null);
  const imageSwiperRefs = useRef([]);

  return (
    <>
      <div className='f-service-header'>
        <h2>front end development</h2>
        <p>Encompasses building and maintaining websites, including front-end (user interface) development.</p>
      </div>

      <div className='container' style={{
        backgroundColor: '#1e143b',
        borderRadius: '8px',
        marginTop: '2rem',
        padding: '8rem 0 8rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="service-technology-content">
          <h1>Our Technology <br /> Stack</h1>
          <p>If you dream it we can build it. We use a wide range of technologies and platforms. Our technology stack enables us to implement any feature for our clients.</p>
        </div>

        <div className='about-service-section'>
          <img src={aboutService} alt="" className='about-service-img' />
          <div className="about-service-content">
            <h3>Experience The Difference Of Working With Excellence</h3>
            <p>Choose us for custom development solutions that go beyond the traditional. Witness our work and our dedicated team of experts who are committed to your success and delivering excellence in every project.</p>
          </div>
        </div>

        <div className="work-wrapper">
          <Swiper
            ref={mainSwiperRef}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            style={{height:'500px'}}
            modules={[Navigation]}
            onSlideChange={() => console.log('slide change')}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-wrapper">
                  <div className="work-wrapper-content">
                    <h1 className='text-outline'>0{index + 1}</h1>
                    <h2>{project.title}</h2>
                    <p style={{ textAlign: 'justify' }}>{project.description}</p>
                    <div className="tech-div">
                      {project.technologies.map((tech, idx) => (
                        <p key={idx}>{tech}{idx < project.technologies.length - 1 ? ', ' : ''}</p>
                      ))}
                    </div>
                  </div>

                  <div className="work-wrapper-images">
                    <Swiper
                      ref={(el) => (imageSwiperRefs.current[index] = el)}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation={{
                        nextEl: `.inner-swiper-button-next-${index}`,
                        prevEl: `.inner-swiper-button-prev-${index}`,
                      }}
                      modules={[Navigation]}
                      className="project-images-swiper"
                    >
                      {project.images.map((image, imgIdx) => (
                        <SwiperSlide key={imgIdx}>
                          <img className='swiper-image' src={image} alt={`${project.alt} ${imgIdx + 1}`} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="image-nav">
                      <div className={`inner-swiper-button-prev inner-swiper-button-prev-${index}`}><i class='bx bx-chevron-left'></i></div>
                      <div className={`inner-swiper-button-next inner-swiper-button-next-${index}`}><i class='bx bx-chevron-right'></i></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Navigation Buttons for the main Swiper */}
            <div className="swiper-button-prev swiper-button-prev"></div>
            <div className="swiper-button-next swiper-button-next"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default FrontEndService;
