// src/components/MovieList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MovieNav from './MovieNav';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const {id}=useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://movie-reviewer-backend.onrender.com/movies/');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);


  return (
    <div className="container">
        <MovieNav />
      <h2>Movies</h2>
      <div className="row">
        {movies.map((movie, index) => (
          <div key={index} className="col-lg-4 pb-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">
                  <strong>Genre: </strong>{movie.genres}<br/>
                  <strong>Year: </strong>{movie.release_year}<br/>
                  
                </p>
                <div className="row">
                  <Link
                    to={"/movies/"+id+"/"+movie._id}
                    className="btn btn-primary col-lg-5 mx-1 mb-1"
                  >
                    View Reviews
                  </Link>
                  <a
                    href={`https://www.imdb.com/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary col-lg-5 mx-1 mb-1"
                  >
                    IMDb
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
