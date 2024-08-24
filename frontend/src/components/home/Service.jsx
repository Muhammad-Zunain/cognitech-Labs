import React from 'react'

import { Link } from 'react-router-dom';
import ServiceCustomDevelopment from '../../assets/service5.png';
import ServiceMobileDevelopment from '../../assets/service4.png';
import ServiceBackendDevelopment from '../../assets/service3.png';
import ServiceFrontendDevelopment from '../../assets/service2.png';
import ServiceUIDevelopment from '../../assets/service1.png';
import ServiceCigitalMarketing from '../../assets/service6.png';
import '../css/Service.css'


function Service() {
    return (
        <>
            <div className="main-service-wrapper">
                <div className="service-header">
                        <h2>Our <span>Services</span></h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ducimus et optio sit iusto voluptates?</p>
                    
                </div>

                <div className="service-provide">
                    <div className="service-main">
                        <div className="service-content">
                            <img src={ServiceCustomDevelopment} className="service-technology-img" alt="" />
                            <h3>Custom Development</h3>
                            <p style={{ textAlign: "justify" }}>The team shapes your projects better by bringing in our skilled professionals who perfectly fit your needs. This offers smooth collaboration and boosts productivity for optimal results.</p>
                            <div className="services">
                                <span>Mern</span>
                                <span>Mean</span>
                                <span>Django</span>
                                <span>...</span>
                            </div>

                            <button className=" hero-button">
                                <span className='top'></span>
                                <Link to="" className='primary-button'>
                                    Read More <span> &rarr;</span>
                                </Link>
                                <span className='bottom'></span>
                            </button>
                        </div>
                    </div>
                    <div className="service-main">
                        <div className="service-content">
                            <img src={ServiceUIDevelopment} className="service-technology-img" alt="" />
                            <h3>UI/UX Design</h3>
                            <p style={{ textAlign: "justify" }}>We turn your ideas into eye-catching designs. Our focus is on making designs that users love, with interfaces that are easy to understand. This not only connects with your audience but also enhances how people see your brand.</p>
                            <div className="services">
                                <span>Figma</span>
                                <span>...</span>
                            </div>

                            <button className=" hero-button">
                                <span className='top'></span>
                                <Link to="" className='primary-button'>
                                    Read More <span> &rarr;</span>
                                </Link>
                                <span className='bottom'></span>
                            </button>
                        </div>
                    </div>
                    <div className="service-main">
                        <div className="service-content">
                            <img src={ServiceMobileDevelopment} className="service-technology-img" alt="" />
                            <h3>Mobile Development</h3>
                            <p >We use the newest technologies to create mobile solutions that work well on any device. Our focus is on making them flexible, scalable, and perfectly suited to meet the specific needs of your audience and business goals.</p>
                            <div className="services">
                                <span>Flutter</span>
                                <span>...</span>
                            </div>

                            <button className=" hero-button">
                                <span className='top'></span>
                                <Link to="" className='primary-button'>
                                    Read More <span> &rarr;</span>
                                </Link>
                                <span className='bottom'></span>
                            </button>
                        </div>
                    </div>
                    <div className="service-main">
                        <div className="service-content">
                            <img src={ServiceFrontendDevelopment} className="service-technology-img" alt="" />
                            <h3>Front-end Development</h3>
                            <p >The team mixes good looks with practicality in our front-end development. Our solutions ensure websites not only look great but also work well on different devices. </p>
                            <div className="services">
                                <span>React js</span>
                                <span>Next js</span>
                                <span>Angular</span>
                                <span>...</span>
                            </div>

                            <button className=" hero-button">
                                <span className='top'></span>
                                <Link to="" className='primary-button'>
                                    Read More <span> &rarr;</span>
                                </Link>
                                <span className='bottom'></span>
                            </button>
                        </div>
                    </div>
                    <div className="service-main">
                        <div className="service-content">
                            <img src={ServiceBackendDevelopment} className="service-technology-img" alt="" />
                            <h3>Back-end Development</h3>
                            <p >The applied tech behind your digital solutions is strong. Our back-end development ensures smooth handling of data, strong security, and top performance, so your operations can grow and run efficiently.</p>
                            <div className="services">
                                <span>Node js</span>
                                <span>Python</span>
                                <span>...</span>
                            </div>

                            <button className=" hero-button">
                                <span className='top'></span>
                                <Link to="" className='primary-button'>
                                    Read More <span> &rarr;</span>
                                </Link>
                                <span className='bottom'></span>
                            </button>
                        </div>
                    </div>
                    <div className="service-main">
                        <div className="service-content">
                            <img src={ServiceCigitalMarketing} className="service-technology-img" alt="" />
                            <h3>Digital Markeing</h3>
                            <p >Time to make sure more people notice you online. Our smart digital marketing plans improve how visible and engaging you are, leading to more people choosing your brand. This helps your business grow and stay competitive in the digital world.</p>
                            <div className="services">
                                <span>SEO</span>
                                <span>...</span>
                            </div>

                            <button className=" hero-button">
                                <span className='top'></span>
                                <Link to="" className='primary-button'>
                                    Read More <span> &rarr;</span>
                                </Link>
                                <span className='bottom'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service