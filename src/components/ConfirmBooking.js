import React, { useEffect, useRef } from 'react';
import './ConfirmedBooking.css';

const ConfirmedBooking = ({ formData, onNewBooking }) => {
  const headingRef = useRef(null);

  // Focus management for screen readers
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const handleReturnHome = () => {
    // Navigate to homepage - you can adjust this based on your routing setup
    window.location.href = '/';
    // Or if using React Router: navigate('/');
  };

  return (
    <div className="confirmed-booking-page" role="main" aria-labelledby="confirmation-heading">
      <div className="confirmation-container">
        <div className="success-icon" aria-hidden="true">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" role="img" aria-label="Success checkmark">
            <circle cx="12" cy="12" r="10" fill="#F4CE14"/>
            <path d="m9 12 2 2 4-4" stroke="#495E57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <h1 id="confirmation-heading" ref={headingRef} tabIndex="-1">
          Booking Confirmed!
        </h1>
        
        <p>Your table reservation has been successfully confirmed.</p>
        <p>We look forward to serving you at Little Lemon!</p>
        
        <section className="confirmation-details" aria-labelledby="details-heading">
          <h2 id="details-heading">Reservation Details:</h2>
          <div className="booking-summary">
            <dl>
              <dt>Date:</dt>
              <dd>{formData?.date || 'N/A'}</dd>
              <dt>Time:</dt>
              <dd>{formData?.time || 'N/A'}</dd>
              <dt>Occasion:</dt>
              <dd>{formData?.occasion || 'N/A'}</dd>
              <dt>Section:</dt>
              <dd>{formData?.section || 'N/A'}</dd>
              <dt>Table Size:</dt>
              <dd>{formData?.tableSize ? `${formData.tableSize}-seater` : 'N/A'}</dd>
            </dl>
          </div>
          <p className="email-note">
            A confirmation email will be sent to you shortly.
          </p>
        </section>
        
        {/* Button container */}
        <div className="button-container" role="group" aria-label="Next actions">
          <button 
            className="new-booking-btn"
            onClick={onNewBooking}
            aria-describedby="new-booking-help"
          >
            Make Another Booking
          </button>
          <div id="new-booking-help" className="sr-only">
            Start a new reservation process
          </div>
          
          <button 
            className="return-home-btn"
            onClick={handleReturnHome}
            aria-describedby="return-home-help"
          >
            Return to Home
          </button>
          <div id="return-home-help" className="sr-only">
            Go back to the main website homepage
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
