import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

function Header({ onSearch }) {
  const [view, setView] = useState(false);

  const handleSearch = (query) => {
    onSearch(query);
  };

  return (
    <div className="bg-black shadow" style={{ position: 'sticky', top: '0px', zIndex: '1020' }}>
      <header className="p-3 bg-black d-flex flex-wrap align-items-center gap-2 justify-content-between">
        <Link to="/" className="d-flex align-items-center nav-link">
          <h1 className="fs-2 fw-bold">
            <i className="bi bi-ticket-perforated-fill text-danger"></i> <span className="text-white">Book</span>
          </h1>
        </Link>

        <nav className="d-flex gap-3 align-items-center">
          <Link to="/" className="nav-link text-white">Movies</Link>
          <Link to="/bookings" className="nav-link text-white">Booking History</Link>
          <i
            className={`fs-4 text-danger bi ${!view ? 'bi-search' : 'bi-x-lg'}`}
            onClick={() => setView(!view)}
            style={{ cursor: 'pointer' }}
          ></i>
        </nav>
      </header>
      {view && <SearchBar onSearch={handleSearch} />}
    </div>
  );
}

export default Header;
