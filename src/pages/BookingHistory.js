// src/pages/BookingHistory.js
import React, { useEffect, useState } from 'react';
import { useBookings } from '../hooks/useBookings';
import { useMovies } from '../hooks/useMovies';
import { Link } from 'react-router-dom';

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage on component mount
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const { movies } = useMovies();

  return (
    <div className='bg-black p-3 p-md-5'>
    <center>
    <h1 className='text-white fw-bold'>Booking History</h1>
    <hr/>
    </center>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <div key={booking.id} className='col-md-3 col-6 text-white'>
             {
           
              <div className="h-100 d-flex flex-column justify-content-between">
              <div>
              <img src={`${ movies.find(m => m.id === parseInt(booking.movieId)).poster_path}`} alt={ movies.find(m => m.id === parseInt(booking.movieId)).title} className='w-100 rounded-3' />
               <h3 className='fs-5 mb-3 mt-3 text-white'>{ movies.find(m => m.id === parseInt(booking.movieId)).title}</h3>
                  <p className='small m-0 mb-1 text-white'>Showtime: {booking.showtime}</p>
                  <p className='small m-0 mb-1 text-white'>Seats: {booking.seats.join(', ')}</p>
                  <p className='small m-0 mb-1 text-white'>Total Price: ${booking.totalPrice}</p>
            
              </div>
                <Link to={`/movies/${ movies.find(m => m.id === parseInt(booking.movieId)).id}`} className='btn-danger btn mt-3'>Cancel</Link>
               </div>
             }
            </div>
          ))}

        {/* {movies.map(movie => (
          <div key={movie.id} className='col-md-3 mb-4 col-6'>
           <div className="h-100 d-flex flex-column justify-content-between">
          <div>
          <img src={`${movie.poster_path}`} alt={movie.title} className='w-100 rounded' />
           <h3>{booking.movieName}</h3>
              <p>Showtime: {booking.showtime}</p>
              <p>Seats: {booking.seats.join(', ')}</p>
              <p>Total Price: ${booking.totalPrice}</p>
          <h3 className='fs-6 text-white mt-3'>{movie.title}</h3>
          </div>
            <Link to={`/movies/${movie.id}`} className='text-danger'>Cancel</Link>
           </div>
          </div>
        ))} */}
        </ul>
      )}
    </div>
  );
}

export default BookingHistory;
