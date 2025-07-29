import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = () => {
  return (
    <div className="booking-page">
      <header>
        <h1>Reserve a Table</h1>
        <p>Book your table at Little Lemon restaurant</p>
      </header>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
