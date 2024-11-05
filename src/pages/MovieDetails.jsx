// src/pages/MovieDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import { useBookings } from '../hooks/useBookings';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function MovieDetails() {
  const { id } = useParams();
  const { movies } = useMovies();
  const { bookMovie } = useBookings();
  const movie = movies.find(m => m.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedShowtime, setSelectedShowtime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleCloseConfirmation = () => setShowConfirmation(false);

  const handleBooking = () => {
    const booking = {
      id: Date.now(),
      movieId:id,
      movieName: movie.title,
      showtime: selectedShowtime,
      seats: selectedSeats,
      totalPrice: selectedSeats.length * 300,
    };
    bookMovie(booking);
    handleCloseModal();
    setShowConfirmation(true); 
  };

  const toggleSeatSelection = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const showtimes = ["10:00 AM - 1:00 PM", "2:00 PM - 4:00 PM", "5:00 PM - 7:00 PM"];

  const seatLayout = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['C1', 'C2', 'C3', 'C4', 'C5'],
    ['D1', 'D2', 'D3', 'D4', 'D5']
  ];

  return movie ? (
    <div>
      <section className="" style={{background:`linear-gradient(#00000086, #000), url(${movie.poster_path}) no-repeat center`, backgroundSize:'cover', minHeight:'80vh'}}>
        <div className="main container-fluid p-3 p-md-5" style={{backdropFilter:'blur(10px)'}}>
          <div className="row">
            <div className="col-md-3 mb-4 mb-md-0">
              <img src={movie.poster_path} alt="logo" className="w-100 rounded-4" />
            </div>
            <div className="col-md-9">
              <h1 className="fs-1 fw-bold text-white">{movie.title}</h1>
              <p className="fs-5 text-light">{movie.overview}</p>
              <p className="text-danger">Releasing on {movie.release_date}</p>
              <div className="rating text-white mt-3">
                <i className="bi bi-star-fill text-warning"></i> {movie.rating} Rating
              </div>
              <div className="mt-3 text-white">
                <i className="bi bi-clock text-danger"></i> {movie.duration}
              </div>
              <button className="btn btn-danger mt-3 px-3 rounded-pill p-2" onClick={handleShowModal}>
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Tickets for {movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="showtime">
              <Form.Label>Select Showtime</Form.Label>
              <Form.Control as="select" value={selectedShowtime} onChange={(e) => setSelectedShowtime(e.target.value)}>
                <option value="">Select a showtime</option>
                {showtimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="seats" className="mt-4">
              <Form.Label>Select Seats</Form.Label>
              <div className="seat-layout">
                {seatLayout.map((row, rowIndex) => (
                  <Row key={rowIndex} className="justify-content-center mb-2">
                    {row.map((seat) => (
                      <Col xs={2} md={1} key={seat} className="text-center">
                        <Form.Check
                          type="checkbox"
                          label={seat}
                          checked={selectedSeats.includes(seat)}
                          onChange={() => toggleSeatSelection(seat)}
                        />
                      </Col>
                    ))}
                  </Row>
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mt-4">
              <Form.Label>Total Seats Selected: {selectedSeats.length}</Form.Label>
              <br />
              <Form.Label>Total Price: ${selectedSeats.length * 10}</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleBooking} disabled={!selectedShowtime || selectedSeats.length === 0}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showConfirmation} onHide={handleCloseConfirmation} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for booking! Your seats are confirmed for {selectedShowtime}.</p>
          <p>Movie: {movie.title}</p>
          <p>Seats: {selectedSeats.join(', ')}</p>
          <p>Total Price: &#8377; {selectedSeats.length * 10}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseConfirmation}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : <p>Loading...</p>;
}

export default MovieDetails;
