// src/components/AddReview.js

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const AddReview = ({ movieId, userId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://movie-reviewer-backend-2.onrender.com/movies/${userId}/${movieId}/reviews`, { rating, comment });
      setMessage('Review added successfully!');
      window.location.reload();
      setRating(0);
      setComment('');
    } catch (err) {
      setMessage('Failed to add review.');
    }
  };

  return (
    <div className="container mt-3">
      <h3>Add Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="star-rating mb-3">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <span
                  className="fa fa-star"
                  style={{ color: ratingValue <= rating ? '#ffc107' : '#e4e5e9' }}
                ></span>
              </label>
            );
          })}
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Review</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default AddReview;
