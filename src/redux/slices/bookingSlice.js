// src/redux/slices/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: { history: [] },
  reducers: {
    addBooking: (state, action) => {
      state.history.push(action.payload); // Adds the new booking to history
    },
    cancelBooking: (state, action) => {
      state.history = state.history.filter(booking => booking.id !== action.payload); // Removes booking by ID
    },
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
