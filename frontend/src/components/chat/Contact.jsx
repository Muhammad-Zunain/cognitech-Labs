import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Contact.css";

function Contact() {
    const containerStyles = {
        backgroundColor: '#1e143b',
        borderRadius: '8px',
        marginTop: '2rem',
        padding: '8rem 4rem 8rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '6rem',
    };


    return (
        <>
            <div className='f-service-header'>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nulla nihil ea quia iste nesciunt maiores numquam at aut est?</p>
            </div>
            <div className="container main_contact_wrapper">
                <div className='contact_style_left'></div> 
                <div className='contact_style_right'></div> 
                <div className="contact__cognitech" >
                    <h3>Do you have any question?</h3>
                    <div className="contact__info">
                        <input className="user_name" type="text" placeholder="Your Name" id="name" />
                        <input className="user_email" type="email" placeholder="Your Email" id="email" />
                        <input className="ph_no" type="tel" placeholder="Your Phone" id="phonenumber" maxLength="11" />
                    </div>
                    <textarea className="message" name="message" id="message" placeholder="Your Message"></textarea>

                    <button className="primary-button">
                        <span className="top"></span>
                        <Link to="/Contact" className="primary-button-text">Send Message</Link>
                        <span className="bottom"></span>
                    </button>
                </div>
            </div>
        </>
    );
}


export default Contact