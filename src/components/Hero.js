import React from "react";
import {Link, Routes, Router } from 'react-router-dom';
import "./Hero.css";
import heroImage from "./restauranfood.jpg";
import BookingPage from "./BookingPage";
import Specials from "./Specials";

const Hero = () => {
  return (
    <section className="hero-section" aria-label="Introduction to Little Lemon restaurant">
      <div className="hero-text">
        <h1 tabIndex="0">Little Lemon Chicago</h1>
        <p>
          Your destination for fresh, authentic Mediterranean cuisine made from locally sourced ingredients.
          Experience the flavors of the Mediterranean in the heart of Chicago.
        </p>
        <div className="hero-buttons">
          <Link to='/BookingPage' className="btn btn-primary" aria-label="Reserve a table at Little Lemon">
            Reserve a Table
          </Link>
          <Link to="/Specials" className="btn btn-secondary" aria-label="View Little Lemon specials menu">
            View Specials
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src={heroImage} 
          alt="Delicious Mediterranean dishes at Little Lemon restaurant" 
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
