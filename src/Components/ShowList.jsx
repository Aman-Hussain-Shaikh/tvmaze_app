// ShowList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div className="container mt-5 con cen">
    <h1 className="text-center mb-4">Movie List</h1>
    <ul className="list-unstyled">
      {shows.map(({ show }) => (
        <li key={show.id} className="card mb-3">
          <Link to={`/show/${show.id}`} className="custom-link">
            <span style={{ fontWeight: 'bold' }}>{show.name}</span> - {show.type}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ShowList;
