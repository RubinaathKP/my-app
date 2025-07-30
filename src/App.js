import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';        // Import your About component
import Home from './components/Hero';          // If you have a home component
import Specials from './components/Specials';  // Other pages
import Testimonials from './components/Testimonials';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />    {/* Header with nav links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />            {/* Route for About */}
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add other routes as needed */}
      </Routes>
      <About />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
