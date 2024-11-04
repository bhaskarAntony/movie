// src/hooks/useBookings.js
import { useDispatch, useSelector } from 'react-redux';
import { addBooking, cancelBooking } from '../redux/slices/bookingSlice';

export const useBookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.history);

  const bookMovie = (booking) => {
    dispatch(addBooking(booking));
  };

  const removeBooking = (id) => {
    dispatch(cancelBooking(id));
  };

  return { bookings, bookMovie, removeBooking };
};
