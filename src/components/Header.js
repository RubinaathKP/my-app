import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav"; // Import the new Nav component
import "./Header.css";
import logo from "./Logo.svg"; // Adjust path accordingly

const Header = () => {
  return (
    <header className="lemon-header">
      <div className="nav-logo">
        <Link to="/" aria-label="Little Lemon Home">
          <img src={logo} alt="Little Lemon Restaurant Logo" className="logo-img" height="48" />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
