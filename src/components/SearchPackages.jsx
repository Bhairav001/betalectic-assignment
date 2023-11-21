// SearchPackages.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchPackages = ({ addToFavorites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchPackages = async () => {
    try {
      const response = await axios.get(`https://api.npms.io/v2/search?q=${searchTerm}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching packages:', error);
    }
  };

  const handleAddToFavorites = (packageName, reason) => {
    // Add validation logic here
    addToFavorites({ packageName, reason });
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100">
      <input
        className="p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Search for NPM packages"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={searchPackages}
      >
        Search
      </button>

      <ul className="mt-4">
        {searchResults.map((result) => (
          <li key={result.package.name} className="mb-2 p-2 border border-gray-300 rounded">
            <span className="mr-2">{result.package.name}</span> - {result.package.description}
            <button
              className="ml-2 p-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={() => handleAddToFavorites(result.package.name, 'My favorite because...')}
            >
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPackages;
