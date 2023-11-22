// Favorites.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Favorites = ({ favorites, removeFromFavorites, addToFavorites }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleViewPackage = (packageName) => {
    setShowModal(true);
    setSelectedPackage(packageName);
  };

  const handleEditPackage = (packageName) => {
    console.log('Editing package:', packageName);
  };

  const handleDeletePackage = (packageName) => {
    removeFromFavorites(packageName);
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    addToFavorites(storedFavorites);
  }, [addToFavorites]);

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 mt-10">Welcome to the favorite NPM packages</h2>

      {favorites.length === 0 ? (
        <div className="mb-8">
          <p>You don't have any favs yet, please add.</p>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => navigate('/favorites')}
          >
            Add Fav
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Package Name</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map((favorite) => (
                <tr key={favorite.packageName} className="border-b border-gray-300">
                  <td className="py-2 px-4">{favorite.packageName}</td>
                  <td className="py-2 px-4">
                    <button
                      className="mr-2 p-1 bg-green-500 text-white rounded hover:bg-green-700"
                      onClick={() => handleViewPackage(favorite.packageName)}
                    >
                      View
                    </button>
                    <button
                      className="mr-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                      onClick={() => handleEditPackage(favorite.packageName)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-1 bg-red-500 text-white rounded hover:bg-red-700"
                      onClick={() => handleDeletePackage(favorite.packageName)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4 rounded">
          <div className="bg-white p-4 rounded">
            <p className="text-gray-800">Viewing package: {selectedPackage}</p>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
