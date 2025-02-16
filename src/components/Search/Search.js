import React, { useState } from 'react';
import './Search.css'; // We'll create the CSS file for styling

const SearchBlood = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Call your API to get blood availability and filter results
    // Example: fetchBloodDonors(query).then(data => setResults(data));
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for blood type or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      <div className="results-container">
        {/* Display search results here */}
        {results.length > 0 ? (
          results.map(result => (
            <div key={result.id} className="result-item">
              {result.name} - {result.bloodType}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBlood;
