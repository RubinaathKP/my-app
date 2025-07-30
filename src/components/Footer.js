import React from 'react';
import './Footer.css';
import logo from './Logo.svg'; // Path to your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="brand-column">
          <img src={logo} alt="Brand Logo" className="footer-logo" />
          <p className="brand-tagline"></p>
        </div>
        <div className="info-column">
          <h4>Contact Us</h4>
          <p>23, Lemon St<br/>Chicago, Illinois</p>
          <p>Phone: +91 75500 17900</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="links-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/specials">Specials</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          {/* Place your social icons here, e.g. using FontAwesome */}
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>© {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
