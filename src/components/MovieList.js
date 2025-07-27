import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MovieNav from './MovieNav';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://movie-reviewer-backend-2.onrender.com/movies/");
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name && movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluix px-4">
      <MovieNav />
      <h2 className="text-center my-4 text-dark">🎬 Explore Movies</h2>

      <div className="row mb-4">
        <div className="col-md-8 offset-md-2">
          <input
            type="text"
            className="form-control form-control-lg rounded-pill shadow-sm"
            placeholder="🔍 Search by movie name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="row g-4">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              className="card h-100 border-0 shadow-sm rounded-4"
              style={{
                backgroundColor: '#1e1e2f',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div
                className="rounded-top"
                style={{
                  height: '300px',
                  backgroundImage: `url(${movie.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderTopLeftRadius: '1rem',
                  borderTopRightRadius: '1rem',
                }}
              />
              <div className="card-body text-white d-flex flex-column">
                <h5 className="card-title text-center">{movie.name}</h5>
                <p className="card-text text-center mb-3">
                  <strong>Year:</strong> {movie.release_year}
                </p>
                <div className="mt-auto d-flex justify-content-around">
                  <Link
                    to={`/movies/${id}/${movie._id}`}
                    className="btn btn-outline-light btn-sm"
                  >
                    View Reviews
                  </Link>
                  <a
                    href="https://www.imdb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-warning btn-sm"
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
