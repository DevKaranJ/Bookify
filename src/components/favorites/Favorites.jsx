import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from '../../actions/favoriteActions';

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites, loading, error } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(fetchFavorites());
    console.log("Fetched favorites:", favorites);
  }, [dispatch]);

  return (
    <div>
      <h2>My Favorites</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : favorites.length > 0 ? (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              {favorite.book ? favorite.book.title : 'Unknown Title'}
            </li>
          ))}
        </ul>
      ) : (
        <div>No favorites yet.</div>
      )}
    </div>
  );
};

export default Favorites;
