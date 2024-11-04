// src/pages/BookingHistory.js
import React from 'react';
import { useBookings } from '../hooks/useBookings';

function BookingHistory() {
  const { bookings, removeBooking } = useBookings();

  return (
    <div>
      <h1>Booking History</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <h3>{booking.movieName}</h3>
            <p>Showtime: {booking.showtime}</p>
            <p>Seats: {booking.seats.join(', ')}</p>
            <button onClick={() => removeBooking(booking.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingHistory;
