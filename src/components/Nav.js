import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = () => closeMenu();

  return (
    <nav className="lemon-nav" aria-label="Main Navigation">
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        onClick={toggleMenu}
      >
        <span className="hamburger"></span>
      </button>

      <ul
        id="primary-navigation"
        className={`nav-links ${isMenuOpen ? "active" : ""}`}
        onClick={handleLinkClick}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#specials">Specials</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#booking">Reservations</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
