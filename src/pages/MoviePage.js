// src/pages/MoviePage.js

import React from 'react';
// import MovieDetails from '../components/MovieDetails';
import MovieDetails from '../components/MovieDetails'

const MoviePage = ({ match }) => {
  return (
    <div>
      <MovieDetails/>
    </div>
  );
};

export default MoviePage;
