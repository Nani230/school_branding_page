import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

import image from '../..//assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWide, setIsWide] = useState(window.innerWidth < 962);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const updateMedia = () => {
    setIsWide(window.innerWidth < 962);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);



  const navigate = useNavigate();

  const popupRef = useRef(null);


  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setProfileDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <div className='logo-contianer'>
          <img src={image} alt="Logo" className='logoimg' />
        </div>
        <h1 className="company-name">VisionicX</h1>
      </div>
      <div className="details">
        <div className="item">
          <Link to="/" className='subhead'>Home</Link>
        </div>
        <div className="item">
          <h1 className='subhead'>Features</h1>
        </div>
        <div className="dropdown item">

          <select className='select_tag'>
            <option value="srikakulam">Sms</option>
            <option value="vizag">Energy</option>
            <option value="hyderabad">Ai</option>
            {/* Add more cities as needed */}
          </select>
        </div>
        <div className="item">
          <Link to="/Contact" className='subhead'>Contact</Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
