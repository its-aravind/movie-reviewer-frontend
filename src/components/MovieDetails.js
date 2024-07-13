// src/components/MovieDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddReview from './AddReview';
import { useParams } from 'react-router-dom';
import MovieNav from './MovieNav';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id, movie_id } = useParams(); // Extracting both user ID and movie ID

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://movie-reviewer-backend-2.onrender.com/movies/${movie_id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    fetchMovie();
  }, [movie_id]);

  return (
    <div className="container mt-4">
        <MovieNav />

      {movie ? (
        <div>
          <h2 className="mb-3">{movie.name}</h2>
          <p><strong>Release Year:</strong> {movie.release_year}</p>
          <p><strong>Average Rating:</strong> {movie.average_rating}</p>
          <h3>Reviews</h3>
          <ul className="list-group mb-4">
            {movie.reviews.map((review) => (
              <li key={review._id} className="list-group-item">
                {review.rating} stars: {review.comment}
              </li>
            ))}
          </ul>
          <AddReview movieId={movie_id} userId={id} />
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetails;
