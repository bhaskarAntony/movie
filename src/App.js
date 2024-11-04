// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import BookingHistory from './pages/BookingHistory';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <header>
            <h1>Movie Booking Application</h1>
            
          </header> */}
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/movies" />} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/bookings" element={<BookingHistory />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
