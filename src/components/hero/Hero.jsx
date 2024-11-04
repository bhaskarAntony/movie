import React from 'react'
import './style.css'
function Hero({data}) {
  return (
   <section className="hero" style={{background:`linear-gradient(#00000086, #000), url(${data.poster_path}) no-repeat center`, backgroundSize:'cover', minHeight:'80vh'}}>
        <div className="row p-3 p-md-5">
            <div className="col-md-8 mb-md-0 mb-4">
              <div className='d-flex flex-column justify-content-end left h-100 align-items-start'>
              <h1 className="fs-1 fw-bold text-white">{data.title}</h1>
              <p className="fs-5 text-white">{data.overview}</p>
              <p className="text-danger">Releasing on {data.release_date}</p>
              <div className="rating text-white mt-3">
              <i class="bi bi-star-fill text-warning"></i> {data.rating} Rating
              </div>
              <div className="mt-3 text-white">
              <i class="bi bi-clock text-danger"></i> {data.duration}
              </div>
              <button className="btn btn-danger mt-3 px-3 rounded-pill p-2">Book Ticket</button>
              </div>
            </div>
        </div>
   </section>
  )
}

export default Hero