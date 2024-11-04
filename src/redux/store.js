// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    bookings: bookingReducer,
  },
});
