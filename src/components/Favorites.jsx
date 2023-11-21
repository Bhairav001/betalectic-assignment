// Favorites.js
import React, { useState } from 'react';

const Favorites = ({ favorites, removeFromFavorites }) => {
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleRemoveFromFavorites = (packageName) => {
    setConfirmDelete(packageName);
  };

  const confirmDeletion = () => {
    removeFromFavorites(confirmDelete);
    setConfirmDelete(null);
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Your Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.packageName} className="mb-2 p-2 border border-gray-300 rounded">
            <span className="mr-2">{favorite.packageName}</span> - {favorite.reason}
            <button
              className="ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => handleRemoveFromFavorites(favorite.packageName)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {confirmDelete && (
        <div className="mt-4 p-2 border border-gray-300 rounded">
          <p>Are you sure you want to remove {confirmDelete} from your favorites?</p>
          <button
            className="ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={confirmDeletion}
          >
            Yes
          </button>
          <button
            className="ml-2 p-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            onClick={() => setConfirmDelete(null)}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
