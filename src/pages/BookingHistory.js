import React, { useEffect, useState } from 'react';
import { useMovies } from '../hooks/useMovies';
import { Link } from 'react-router-dom';

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const { movies } = useMovies();

  const handleCancel = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  return (
    <div className="bg-black p-3 p-md-5 container-fluid">
      <center>
        <h1 className="text-white fw-bold">Booking History</h1>
        <hr />
      </center>
      {bookings.length === 0 ? (
        <p className="text-white">No bookings found.</p>
      ) : (
        <ul className="row">
          {bookings.map((booking) => {
            const movie = movies.find((m) => m.id === parseInt(booking.movieId));
            return (
              <div key={booking.id} className="col-md-3 col-6 text-white mb-4">
                <div className="h-100 d-flex flex-column justify-content-between">
                  <div>
                    <img src={movie?.poster_path} alt={movie?.title} className="w-100 rounded-3" />
                    <h3 className="fs-5 mb-3 mt-3 text-white">{movie?.title}</h3>
                    <p className="small m-0 mb-1 text-white">Showtime: {booking.showtime}</p>
                    <p className="small m-0 mb-1 text-white">Seats: {booking.seats.join(', ')}</p>
                    <p className="small m-0 mb-1 text-white">Total Price: ${booking.totalPrice}</p>
                  </div>
                  <button
                    onClick={() => handleCancel(booking.id)}
                    className="btn btn-danger mt-3"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BookingHistory;
