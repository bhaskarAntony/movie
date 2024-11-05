// src/pages/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';

function MovieList({ movies, status }) {
  if (status === 'loading') return <p>Loading movies...</p>;
  if (status === 'failed') return <p>Failed to load movies.</p>;

  return (
    <div className="bg-black">
      <Slider data={movies} />
      <div className="container-fluid p-3 p-md-5">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-4 col-6">
              <div className="h-100 d-flex flex-column justify-content-between">
                <div>
                  <img
                    src={`${movie.poster_path}`}
                    alt={movie.title}
                    className="w-100 rounded bg-light mb-3"
                  />
                  <h3 className="fs-6 text-white mt-3">{movie.title}</h3>
                </div>
                <Link to={`/movies/${movie.id}`} className="text-danger">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
