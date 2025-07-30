import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="lemon-nav" aria-label="Main Navigation">
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>       {/* This link */}
        <li><NavLink to="/specials">Specials</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li><NavLink to="/booking">Reservations</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
