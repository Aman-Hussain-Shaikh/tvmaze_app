// BookingForm.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieName, movieDetails } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));

    // Redirect to success page or home page
    navigate('/booking/success');
  };

  return (
    <div className='conn'>
      <h2>Book Movie Ticket</h2>
      <h3>Movie Name : {movieName}</h3>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for user details */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
