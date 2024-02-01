// ShowDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    // Navigate to the booking page with the required state
    navigate(`/booking/${id}`, { state: { movieName: show.name, movieDetails: show } });
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }} className='con'>
        <img
          src={show.image && show.image.medium}
          alt={show.name}
          style={{ marginRight: '20px' }}
        />
        <div className='con'>
          <h1>{show.name}</h1>
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          <button onClick={handleBookTicket}>Book Movie Ticket</button>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
