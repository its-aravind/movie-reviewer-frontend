// src/components/AddReview.js

import React, { useState } from 'react';
import axios from 'axios';
const AddReview = ({ movieId , userId}) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post('https://movie-reviewer-backend.onrender.com/movies/'+userId+"/"+movieId+"/reviews", { rating, comment });
      setMessage('Review added successfully!');
      window.location.reload();
      setRating('');
      setComment('');
    } catch (err) {
      setMessage('Failed to add review.');
    }
  };

  return (
    <div>
      <h3>Add Review</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Add Review</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddReview;
