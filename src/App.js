// src/App.js

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MovieDetails from './components/MovieDetails.js';
import './App.css';
import MovieList from './components/MovieList.js';

const App = () => {
  return (
    
      <div className="App">
        <HashRouter>
          <Routes>
          <Route path="/"  element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/movies/:id" element={<MovieList />} />
          <Route path="/movies/:id/:movie_id" element={<MovieDetails />} />          </Routes>
         
        </HashRouter>
      </div>
    
  );
};

export default App;
