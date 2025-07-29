import React from 'react';
import './ConfirmBooking.css';

const ConfirmedBooking = ({ formData, onNewBooking }) => {
  const handleReturnHome = () => {
    // Navigate to homepage - you can adjust this based on your routing setup
    window.location.href = '/';
    // Or if using React Router: navigate('/');
  };

  return (
    <div className="confirmed-booking-page">
      <div className="confirmation-container">
        <div className="success-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#F4CE14"/>
            <path d="m9 12 2 2 4-4" stroke="#495E57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1>Booking Confirmed!</h1>
        <p>Your table reservation has been successfully confirmed.</p>
        <p>We look forward to serving you at Little Lemon!</p>
        
        <div className="confirmation-details">
          <h3>Reservation Details:</h3>
          <div className="booking-summary">
            <p><strong>Date:</strong> {formData?.date || 'N/A'}</p>
            <p><strong>Time:</strong> {formData?.time || 'N/A'}</p>
            <p><strong>Occasion:</strong> {formData?.occasion || 'N/A'}</p>
            <p><strong>Section:</strong> {formData?.section || 'N/A'}</p>
            <p><strong>Table Size:</strong> {formData?.tableSize}-seater</p>
          </div>
          <p className="email-note">A confirmation email will be sent to you shortly.</p>
        </div>
        
        {/* Button container for both buttons */}
        <div className="button-container">
          <button 
            className="new-booking-btn"
            onClick={onNewBooking}
          >
            Make Another Booking
          </button>
          
          <button 
            className="return-home-btn"
            onClick={handleReturnHome}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
