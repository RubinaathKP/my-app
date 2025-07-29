import React, { useState, useEffect } from "react";
import ConfirmedBooking from "./ConfirmBooking";
import "./BookingForm.css";

// Mock API function to fetch available tables based on date, time, and section
const fetchAvailableTables = async (date, time, section) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock API response - in real app, this would be an actual API call
  const mockAvailability = {
    indoor: {
      '18:00': [
        { size: 2, available: true, id: 'indoor-2-1' },
        { size: 4, available: true, id: 'indoor-4-1' },
        { size: 6, available: false, id: 'indoor-6-1' },
        { size: 8, available: true, id: 'indoor-8-1' }
      ],
      '19:00': [
        { size: 2, available: false, id: 'indoor-2-1' },
        { size: 4, available: true, id: 'indoor-4-1' },
        { size: 6, available: true, id: 'indoor-6-1' },
        { size: 8, available: false, id: 'indoor-8-1' }
      ],
      '20:00': [
        { size: 2, available: true, id: 'indoor-2-1' },
        { size: 4, available: false, id: 'indoor-4-1' },
        { size: 6, available: true, id: 'indoor-6-1' },
        { size: 8, available: true, id: 'indoor-8-1' }
      ],
      '21:00': [
        { size: 2, available: true, id: 'indoor-2-1' },
        { size: 4, available: true, id: 'indoor-4-1' },
        { size: 6, available: false, id: 'indoor-6-1' },
        { size: 8, available: false, id: 'indoor-8-1' }
      ]
    },
    outdoor: {
      '18:00': [
        { size: 2, available: true, id: 'outdoor-2-1' },
        { size: 2, available: true, id: 'outdoor-2-2' },
        { size: 4, available: false, id: 'outdoor-4-1' },
        { size: 4, available: true, id: 'outdoor-4-2' }
      ],
      '19:00': [
        { size: 2, available: false, id: 'outdoor-2-1' },
        { size: 2, available: true, id: 'outdoor-2-2' },
        { size: 4, available: true, id: 'outdoor-4-1' },
        { size: 4, available: false, id: 'outdoor-4-2' }
      ],
      '20:00': [
        { size: 2, available: true, id: 'outdoor-2-1' },
        { size: 2, available: false, id: 'outdoor-2-2' },
        { size: 4, available: true, id: 'outdoor-4-1' },
        { size: 4, available: true, id: 'outdoor-4-2' }
      ],
      '21:00': [
        { size: 2, available: false, id: 'outdoor-2-1' },
        { size: 2, available: false, id: 'outdoor-2-2' },
        { size: 4, available: true, id: 'outdoor-4-1' },
        { size: 4, available: false, id: 'outdoor-4-2' }
      ]
    }
  };

  const tables = mockAvailability[section]?.[time] || [];
  // Only return available tables
  return tables.filter(table => table.available);
};

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    section: "",
    tableSize: "",
    occasion: "",
  });

  const [availableTables, setAvailableTables] = useState([]);
  const [minDate, setMinDate] = useState('');

  // Set minimum date to today
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setMinDate(formattedDate);
  }, []);

  // Fetch available tables when date, time, and section change
  useEffect(() => {
    const fetchTables = async () => {
      if (formData.date && formData.time && formData.section) {
        setIsLoading(true);
        try {
          const tables = await fetchAvailableTables(formData.date, formData.time, formData.section);
          setAvailableTables(tables);
        } catch (error) {
          console.error('Error fetching tables:', error);
          setAvailableTables([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setAvailableTables([]);
      }
    };

    fetchTables();
  }, [formData.date, formData.time, formData.section]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset table size when section changes
    if (name === 'section' || name === 'time') {
      setFormData((prevData) => ({
        ...prevData,
        tableSize: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call for booking submission
    const submitAPI = async (data) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Submitting form data:", data);
      return true; // Simulate successful submission
    };

    try {
      const isSuccess = await submitAPI(formData);
      
      if (isSuccess) {
        setSubmittedData(formData);
        setIsSubmitted(true);
      } else {
        alert("There was an error submitting your booking. Please try again.");
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      alert("There was an error submitting your booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewBooking = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      date: "",
      time: "",
      section: "",
      tableSize: "",
      occasion: "",
    });
    setAvailableTables([]);
  };

  // Show confirmation page if submitted
  if (isSubmitted) {
    return (
      <ConfirmedBooking 
        formData={submittedData} 
        onNewBooking={handleNewBooking}
      />
    );
  }

  return (
    <div className="booking-container">
      <h2>Book your table at Little Lemon restaurant</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="date">Choose date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date}
            min={minDate}
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-field">
          <label htmlFor="time">Choose time</label>
          <select id="time" name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Select time</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="section">Seating Area</label>
          <select id="section" name="section" value={formData.section} onChange={handleChange} required>
            <option value="">Select seating area</option>
            <option value="indoor">Indoor Dining</option>
            <option value="outdoor">Outdoor Terrace</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="tableSize">Table size</label>
          <select 
            id="tableSize" 
            name="tableSize" 
            value={formData.tableSize} 
            onChange={handleChange} 
            required
            disabled={!formData.section || !formData.time || isLoading}
          >
            <option value="">
              {isLoading ? "Loading available tables..." : 
               !formData.section || !formData.time ? "Select seating area and time first" :
               availableTables.length === 0 ? "No tables available" :
               "Select table size"}
            </option>
            {availableTables.map((table, index) => (
              <option
                key={`${table.id}-${index}`}
                value={table.size}
                className="available-table"
              >
                {table.size}-seater table
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Casual">Casual Dining</option>
          </select>
        </div>

        <button 
          type="submit" 
          className={`submit-btn ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              Processing...
            </>
          ) : (
            'Submit Reservation'
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
