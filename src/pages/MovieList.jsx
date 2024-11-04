// src/pages/MovieList.js (Updated with Search)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';

function MovieList() {
  const { movies, status } = useMovies();
  console.log(JSON.stringify(movies));
  
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (query) => {
    setFilteredMovies(movies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    ));
  };

  if (status === 'loading') return <p>Loading movies...</p>;
  if (status === 'failed') return <p>Failed to load movies.</p>;

  return (
    <div className='bg-black'>
      <Slider data={movies}/>
     <div className="container-fluid p-3 p-md-5">
     <div className="row">
     {movies.map(movie => (
          <div key={movie.id} className='col-md-3 mb-4 col-6'>
           <div className="h-100 d-flex flex-column justify-content-between">
          <div>
          <img src={`${movie.poster_path}`} alt={movie.title} className='w-100 rounded' />
          <h3 className='fs-6 text-white mt-3'>{movie.title}</h3>
          </div>
            <Link to={`/movies/${movie.id}`} className='text-danger'>View Details</Link>
           </div>
          </div>
        ))}
     </div>
     </div>
    </div>
  );
}

export default MovieList;
