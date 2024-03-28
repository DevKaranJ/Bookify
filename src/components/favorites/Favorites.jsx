import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from '../../actions/favoriteActions';

const Favorites = () => {
  const dispatch = useDispatch();
  // Select favorites data from the Redux store state
  const favorites = useSelector(state => state.favorite.favorites);
  const loading = useSelector(state => state.favorite.loading);
  const error = useSelector(state => state.favorite.error);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-2xl font-semibold mb-4 text-orange-600">My Favorites</h2>
      {loading ? (
        <div className="text-gray-700">Loading...</div>
      ) : error ? (
        <div className="text-red-600">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {favorites.map(favorite => (
            <div key={favorite.id} className="bg-gray-100 rounded-md p-4">
              <h3 className="text-lg font-semibold text-green-600">{favorite.book.title}</h3>
              <p className="text-gray-600">by {favorite.book.author}</p>
              <p className="text-gray-600">Genre: {favorite.book.genre}</p>
              <p className="text-gray-600 mt-2">{favorite.book.description}</p>
              <p className="text-gray-600">Rental Price per month: {favorite.book.rental_price}</p>
              <p className="text-gray-600">Available for Rent: {favorite.book.available_for_rent ? 'Yes' : 'No'}</p>
              <p className="text-gray-600">Condition: {favorite.book.condition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
