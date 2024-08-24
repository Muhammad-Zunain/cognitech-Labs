import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './css/Footer.css';

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-1 footer">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer-1-content">
              <p>eSpark Consultants value close, transparent cooperation and encourage our Clients to participate actively in the project development life cycle.</p>
            </div>
            <div className="footer-lower">
              <Link><i class="fa-brands fa-facebook"></i></Link>
              <Link><i class="fa-brands fa-facebook-messenger"></i></Link>
              <Link><i class="fa-brands fa-linkedin"></i></Link>
              <Link><i class="fa-brands fa-twitter"></i></Link>   
            </div>

        </div>
        <div className="footer-2 footer">
          <h2><span class="about-line"></span>Services </h2>
          <ul>
            <li><i class="fa-solid fa-angle-right"></i><Link>Mobile App Development</Link></li>
            <li><i class="fa-solid fa-angle-right"></i><Link>Front End Development</Link></li>
            <li><i class="fa-solid fa-angle-right"></i><Link>Back End Development</Link></li>
            <li><i class="fa-solid fa-angle-right"></i><Link>Full Stack Development</Link></li>
            <li><i class="fa-solid fa-angle-right"></i><Link>UI/UX Design</Link></li>
            
          </ul>
        </div>
        <div className="footer-3 footer">
          <h2><span class="about-line"></span>Company </h2>
          <ul>
            <li><i class="fa-solid fa-diamond"></i><Link>Portfolio</Link></li>
            <li><i class="fa-solid fa-diamond"></i><Link>Career</Link></li>
            <li><i class="fa-solid fa-diamond"></i><Link>Blogs</Link></li>
          </ul>
        </div>
        <div className="footer-4 footer">
          <h2><span class="about-line"></span>Contact</h2>
          <ul>
            <li><img width="30px" height="20px" src="https://esparkconsultants.com/wp-content/uploads/2024/01/flag-symbolism-Pakistan-design-Islamic.png" class="attachment-full size-full wp-image-5962" alt="" decoding="async"/>Pakistan</li>
            <li><i class="fa-solid fa-phone"></i>+92 33333333</li>
            <li><i class="fa-solid fa-envelope"></i>info@esparkconsultants.com</li>
            <li><i class="fa-solid fa-location-dot"></i>401/A Blossom Trade Centre, Block 1 Gulistan-e-Johar, Karachi, 74300</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-1">
          <p><span>Copyright</span> &copy; Cognitech Labs</p>
        </div>
        <div className="footer-bottom-2">
          <Link>Terms and Policy</Link>
        </div>

      </div>
    </div>
  )
}
