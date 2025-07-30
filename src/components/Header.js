import React from "react";
import Nav from "./Nav";
import "./Header.css";
import logo from "./Logo.svg";

const Header = () => {
  return (
    <header className="lemon-header">
      <div className="nav-logo">
        <a href="#home" aria-label="Little Lemon Home">
          <img
            src={logo}
            alt="Little Lemon Restaurant Logo"
            className="logo-img"
            height="48"
          />
        </a>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
