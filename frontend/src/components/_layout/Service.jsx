// import React from 'react'
// import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.png';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useState, useEffect, useRef } from 'react';
// function Service() {
//   const [open, setOpen] = useState(false);    // Service Overlay
//   const handleClick = () => setOpen(!open);

//   return (
//     <>
//     <div
//                 className="overlay"
//                 onClick={handleClick}
//                 style={{
//                     opacity: open ? 1 : 0,
//                     visibility: open ? 'visible' : 'hidden',
//                     transition: 'opacity 0.5s, visibility 0.5s', 
                    
//                 }}
//             >
                
//             </div>
//      <ul onClick={(e) => e.stopPropagation()} className='dropdown-menu' style={{
//                 left: open ? '0%' : '-100%'
//             }}>
//                  <div className="side__nav__logo">
//                     <Link to="">
//                         <img src={logo} alt="Logo" />
//                     </Link>
//                 </div>
//                 <li>
//                     <i class="fa-solid fa-diamond"></i><Link to="frontend">Front End Development</Link>
//                 </li>
//                 <li>
//                     <i class="fa-solid fa-diamond"></i><Link to="">Back End Development</Link>
//                 </li>
//                 <li>
//                     <i class="fa-solid fa-diamond"></i><Link to="">App Development</Link>
//                 </li>
//                 <li>
//                     <i class="fa-solid fa-diamond"></i> <Link to="">Custom Web Development</Link>
//                 </li>
//                 <li>
//                     <i class="fa-solid fa-diamond"></i><Link to="">UI/UX Design</Link>
//                 </li>
//             </ul>

//     </>
//   )
// }

// export default Service