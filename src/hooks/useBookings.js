// src/hooks/useBookings.js
import { useDispatch, useSelector } from 'react-redux';
import { addBooking, cancelBooking } from '../redux/slices/bookingSlice';
import { useEffect } from 'react';

export const useBookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.history);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    storedBookings.forEach(booking => dispatch(addBooking(booking)));
  }, [dispatch]);

  const bookMovie = (booking) => {
    dispatch(addBooking(booking));
    const updatedBookings = [...bookings, booking];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings)); 
  };

  const removeBooking = (id) => {
    dispatch(cancelBooking(id));
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings)); 
  };

  return { bookings, bookMovie, removeBooking };
};
