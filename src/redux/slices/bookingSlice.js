import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: { history: [] },
  reducers: {
    addBooking: (state, action) => {
      state.history.push(action.payload);
    },
    cancelBooking: (state, action) => {
      state.history = state.history.filter(booking => booking.id !== action.payload); 
    },
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
