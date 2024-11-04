// src/pages/MovieDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import { useBookings } from '../hooks/useBookings';

function MovieDetails() {
  const { id } = useParams();
  const { movies } = useMovies();
  const { bookMovie } = useBookings();
  const movie = movies.find(m => m.id === parseInt(id));

  const handleBooking = () => {
    const booking = {
      id: Date.now(),
      movieName: movie.title,
      showtime: '7:00 PM',
      seats: [1, 2],
    };
    bookMovie(booking);
  };

  return movie ? (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  ) : <p>Loading...</p>;
}

export default MovieDetails;
