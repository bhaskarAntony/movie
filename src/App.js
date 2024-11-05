// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import BookingHistory from './pages/BookingHistory';
import MovieDetails from './pages/MovieDetails';
import { useMovies } from './hooks/useMovies';
import Header from './components/header/Header';
import './App.css'

function App() {
  const { movies, status } = useMovies();
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (query) => {
    setFilteredMovies(
      movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies.length>0?filteredMovies:movies} status={status} />} />
        <Route path="/bookings" element={<BookingHistory />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
