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
      <section className="" style={{background:`linear-gradient(#00000086, #000), url(${movie.poster_path}) no-repeat center`, backgroundSize:'cover', minHeight:'80vh'}}>
        <div className="main container-fluid p-3 p-md-5" style={{backdropFilter:'blur(10px)'}}>
          <div className="row">
            <div className="col-md-3 mb-4 mb-md-0">
              <img src={movie.poster_path} alt="logo" className="w-100 rounded-4" />
            </div>
            <div className="col-md-9">
              <h1 className="fs-1 fw-bold text-white">{movie.title}</h1>
              <p className="fs-5 text-light">{movie.overview}</p>
              <p className="text-danger">Releasing on {movie.release_date}</p>
              <div className="rating text-white mt-3">
              <i class="bi bi-star-fill text-warning"></i> {movie.rating} Rating
              </div>
              <div className="mt-3 text-white">
              <i class="bi bi-clock text-danger"></i> {movie.duration}
              </div>
              <button className="btn btn-danger mt-3 px-3 rounded-pill p-2">Book Ticket</button>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  ) : <p>Loading...</p>;
}

export default MovieDetails;
