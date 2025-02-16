import React, { useState } from 'react';

const SearchBlood = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Call your API to get blood availability and filter results
    // Example: fetchBloodDonors(query).then(data => setResults(data));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for blood type or location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {/* Display search results here */}
        {results.map(result => (
          <div key={result.id}>{result.name} - {result.bloodType}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBlood;
