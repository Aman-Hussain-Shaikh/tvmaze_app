// SuccessPage.jsx
import React from 'react';

const SuccessPage = () => {
  // Retrieve user details from local storage
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }} className='con'>
      <h1>Booking Successful!</h1>
      {userDetails && (
        <div style={{ marginTop: '20px' }}>
          <h3>Thank you, {userDetails.name}, for booking your ticket!</h3>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
