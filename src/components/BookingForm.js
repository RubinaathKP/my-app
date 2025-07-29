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
  const [errors, setErrors] = useState({});
  
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
          setErrors(prev => ({...prev, tableSize: 'Failed to load available tables'}));
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

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ''}));
    }

    // Reset table size when section or time changes
    if (name === 'section' || name === 'time') {
      setFormData((prevData) => ({
        ...prevData,
        tableSize: "",
      }));
      if (errors.tableSize) {
        setErrors(prev => ({...prev, tableSize: ''}));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    if (!formData.section) newErrors.section = 'Please select a seating area';
    if (!formData.tableSize) newErrors.tableSize = 'Please select a table size';
    if (!formData.occasion) newErrors.occasion = 'Please select an occasion';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Announce validation errors to screen readers
      const errorMessage = 'Please correct the errors in the form';
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = errorMessage;
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
      return;
    }
    
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
        
        // Announce success to screen readers
        const successMessage = 'Booking submitted successfully';
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = successMessage;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
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
    setErrors({});
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
      <header>
        <h1 id="booking-form-title">Book your table at Little Lemon restaurant</h1>
      </header>
      
      <form 
        className="booking-form" 
        onSubmit={handleSubmit}
        aria-labelledby="booking-form-title"
        noValidate
      >
        {/* Date Field */}
        <div className="form-field">
          <label htmlFor="date" className={errors.date ? 'error-label' : ''}>
            Choose date *
          </label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date}
            min={minDate}
            onChange={handleChange} 
            required 
            aria-required="true"
            aria-invalid={errors.date ? 'true' : 'false'}
            aria-describedby={errors.date ? 'date-error' : 'date-help'}
          />
          <div id="date-help" className="sr-only">
            Select your preferred reservation date. Cannot be in the past.
          </div>
          {errors.date && (
            <div id="date-error" className="error-message" role="alert" aria-live="polite">
              {errors.date}
            </div>
          )}
        </div>

        {/* Time Field */}
        <div className="form-field">
          <label htmlFor="time" className={errors.time ? 'error-label' : ''}>
            Choose time *
          </label>
          <select 
            id="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            required
            aria-required="true"
            aria-invalid={errors.time ? 'true' : 'false'}
            aria-describedby={errors.time ? 'time-error' : 'time-help'}
          >
            <option value="">Select time</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
          <div id="time-help" className="sr-only">
            Select your preferred dining time from available slots.
          </div>
          {errors.time && (
            <div id="time-error" className="error-message" role="alert" aria-live="polite">
              {errors.time}
            </div>
          )}
        </div>

        {/* Section Field */}
        <div className="form-field">
          <label htmlFor="section" className={errors.section ? 'error-label' : ''}>
            Seating Area *
          </label>
          <select 
            id="section" 
            name="section" 
            value={formData.section} 
            onChange={handleChange} 
            required
            aria-required="true"
            aria-invalid={errors.section ? 'true' : 'false'}
            aria-describedby={errors.section ? 'section-error' : 'section-help'}
          >
            <option value="">Select seating area</option>
            <option value="indoor">Indoor Dining</option>
            <option value="outdoor">Outdoor Terrace</option>
          </select>
          <div id="section-help" className="sr-only">
            Choose between indoor dining room or outdoor terrace seating.
          </div>
          {errors.section && (
            <div id="section-error" className="error-message" role="alert" aria-live="polite">
              {errors.section}
            </div>
          )}
        </div>

        {/* Table Size Field */}
        <div className="form-field">
          <label htmlFor="tableSize" className={errors.tableSize ? 'error-label' : ''}>
            Table size *
          </label>
          <select 
            id="tableSize" 
            name="tableSize" 
            value={formData.tableSize} 
            onChange={handleChange} 
            required
            aria-required="true"
            aria-invalid={errors.tableSize ? 'true' : 'false'}
            aria-describedby={errors.tableSize ? 'tableSize-error' : 'tableSize-help'}
            disabled={!formData.section || !formData.time || isLoading}
            aria-disabled={!formData.section || !formData.time || isLoading}
          >
            <option value="">
              {isLoading ? "Loading available tables..." : 
               !formData.section || !formData.time ? "Select seating area and time first" :
               availableTables.length === 0 ? "No tables available for selected time and area" :
               "Select table size"}
            </option>
            {availableTables.map((table, index) => (
              <option
                key={`${table.id}-${index}`}
                value={table.size}
                className="available-table"
              >
                Table for {table.size} {table.size === 1 ? 'person' : 'people'}
              </option>
            ))}
          </select>
          <div id="tableSize-help" className="sr-only">
            Select table size based on your party size. Only available tables are shown.
          </div>
          {errors.tableSize && (
            <div id="tableSize-error" className="error-message" role="alert" aria-live="polite">
              {errors.tableSize}
            </div>
          )}
        </div>

        {/* Occasion Field */}
        <div className="form-field">
          <label htmlFor="occasion" className={errors.occasion ? 'error-label' : ''}>
            Occasion *
          </label>
          <select 
            id="occasion" 
            name="occasion" 
            value={formData.occasion} 
            onChange={handleChange} 
            required
            aria-required="true"
            aria-invalid={errors.occasion ? 'true' : 'false'}
            aria-describedby={errors.occasion ? 'occasion-error' : 'occasion-help'}
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday Celebration</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Date Night">Date Night</option>
            <option value="Business Meeting">Business Meeting</option>
            <option value="Family Dinner">Family Dinner</option>
            <option value="Casual">Casual Dining</option>
          </select>
          <div id="occasion-help" className="sr-only">
            Let us know the occasion so we can make your experience special.
          </div>
          {errors.occasion && (
            <div id="occasion-error" className="error-message" role="alert" aria-live="polite">
              {errors.occasion}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className={`submit-btn ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
          aria-disabled={isLoading}
          aria-describedby="submit-help"
        >
          {isLoading ? (
            <>
              <span className="loading-spinner" aria-hidden="true"></span>
              <span aria-live="polite">Processing your reservation...</span>
            </>
          ) : (
            'Submit Reservation'
          )}
        </button>
        <div id="submit-help" className="sr-only">
          Click to submit your table reservation. All fields marked with asterisk are required.
        </div>
      </form>
      
      {/* Screen reader only instructions */}
      <div className="sr-only" aria-live="polite" aria-atomic="true" id="form-instructions">
        This form allows you to make a table reservation. All fields marked with an asterisk are required. 
        Use Tab to navigate through fields and Enter or Space to activate buttons and select options.
      </div>
    </div>
  );
};

export default BookingForm;
