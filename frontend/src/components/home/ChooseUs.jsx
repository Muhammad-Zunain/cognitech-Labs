import React from 'react'
import '../css/ChooseUs.css'
import apostrophe from '../../assets/apostrophe.png';

function ChooseUs() {
    return (
        <>
            <div className="main-choose-wrapper">
                <span className='choose-top'></span>
                <div className="choose-wrapper">
                    <img src={apostrophe} className='aspostrophe-d' alt="" />
                    <div className="choose-header">
                        <h2>Why We  <span>Choose</span> Us?</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ducimus et optio sit iusto voluptates?</p>
                    </div>

                    <div class="choose-content-wrapper">
                        <div class="reason">
                            <div className="content">
                                <div>
                                    <i class="fa-solid fa-gears"></i>   
                                </div>
                                <div>
                                <h3>Reliable Service</h3>
                                <p>We offer consistent and reliable services that ensure you get the best experience every time.</p>  
                                </div>
                            </div>
                        </div>
                        {/* <div class="reason">
                            <h3>Affordable Pricing</h3>
                            <p>Our prices are competitive, ensuring you get value for money without compromising on quality.</p>
                        </div>
                        <div class="reason">
                            <h3>Customer Support</h3>
                            <p>Our dedicated support team is available 24/7 to assist you with any queries or concerns.</p>
                        </div>
                        <div class="reason">
                            <h3>Quality Vehicles</h3>
                            <p>We maintain a fleet of well-maintained and top-quality vehicles for your safety and comfort.</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChooseUs