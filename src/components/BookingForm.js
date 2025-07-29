import React, { useState, useEffect } from 'react';
import './BookingForm.css';

// Reusable custom dropdown component
const CustomSelect = ({ options, value, onChange, placeholder, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-wrapper">
      <div 
        className={`custom-select ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        id={id}
      >
        <span className="selected-value">
          {selectedOption || placeholder}
        </span>
        <span className={`dropdown-arrow ${isOpen ? 'rotate' : ''}`}></span>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={option}
              className={`dropdown-option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [area, setArea] = useState('');
  const [tableSize, setTableSize] = useState('');
  const [minDate, setMinDate] = useState('');

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const occasionOptions = ['Birthday', 'Anniversary'];
  const areaOptions = ['Indoor', 'Outdoor'];
  const tableOptions = ['2-seater', '3-seater', '4-seater', '5-seater', '6-seater', '8-seater'];

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setMinDate(formattedDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && time && guests > 0 && occasion && area && tableSize) {
      console.log('Reservation details:', { date, time, guests, occasion, area, tableSize });
      alert("Reservation submitted successfully!");
    } else {
      alert("Please fill out all required fields correctly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date" 
          value={date}
          min={minDate}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <CustomSelect
          options={availableTimes}
          value={time}
          onChange={setTime}
          placeholder="Select a time"
          id="res-time"
        />
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <CustomSelect
          options={occasionOptions}
          value={occasion}
          onChange={setOccasion}
          placeholder="Select occasion"
          id="occasion"
        />
      </div>

      <div className="form-field">
        <label htmlFor="area">Seating Area</label>
        <CustomSelect
          options={areaOptions}
          value={area}
          onChange={setArea}
          placeholder="Select area"
          id="area"
        />
      </div>

      <div className="form-field">
        <label htmlFor="table-size">Table Size</label>
        <CustomSelect
          options={tableOptions}
          value={tableSize}
          onChange={setTableSize}
          placeholder="Select table size"
          id="table-size"
        />
      </div>

      <div className="form-field">
        <input 
          type="submit" 
          value="Make Your Reservation" 
          className="submit-btn"
        />
      </div>
    </form>
  );
};

export default BookingForm;
