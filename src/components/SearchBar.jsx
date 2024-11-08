import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
 <div className="container-fluid">
    <div className="row">
    <div className="col-md-3">
    <div className="d-flex align-items-center p-3">
     <div className="search d-flex  w-100  align-items-center">
   
     <input
      type="text"
      // value={query}
      onChange={handleInputChange}
      className='w-100'
      placeholder="Search movies..."
    />
     <button className='btn btn-danger'> <i class="bi bi-search"></i></button>
   </div>
   
  </div>
    </div>
 </div>
 </div>
  );
}

export default SearchBar;
