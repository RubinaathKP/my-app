import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";

// Component that controls scroll to section based on URL hash or path
const ScrollHandler = () => {
  const location = useLocation();
  React.useEffect(() => {
    // For route paths like /about, map them to section ids
    const pathToIdMap = {
      "/": "home",
      "/about": "about",
      "/specials": "specials",
      "/testimonials": "testimonials",
      "/booking": "booking"
    };
    const sectionId = pathToIdMap[location.pathname] || "home";

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return null; // no UI - just effect
};

function App() {
  return (
    <>
      <Header />
      <ScrollHandler />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="specials">
          <Specials />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="booking">
          <BookingForm />
        </section>
      </main>
      <Footer />
      <Routes>
        {/* Redirect route paths to home + scroll */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/specials" element={<Navigate to="/#specials" replace />} />
        <Route path="/testimonials" element={<Navigate to="/#testimonials" replace />} />
        <Route path="/booking" element={<Navigate to="/#booking" replace />} />
        <Route path="/" element={null} />
        {/* You can add login or separate booking page routes here if needed */}
      </Routes>
    </>
  );
}

export default App;
