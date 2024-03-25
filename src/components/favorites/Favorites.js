import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from '../../actions/favoriteActions';

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites, loading, error } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
