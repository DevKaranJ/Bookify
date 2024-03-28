import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from '../../actions/favoriteActions';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col h-screen bg-gray-200">
    <div className="flex flex-col items-center justify-center p-5">
      {loading ? (
        <div className="text-gray-700">Loading...</div>
      ) : error ? (
        <div className="text-red-600">Error: {error}</div>
      ) : favorites.length === 0 ? (
        <div className="text-gray-700">Please add some books to your favorites.</div>
      ) : (
        favorites.map(favorite => (
            <div key={favorite.id} className="flex flex-col lg:flex-row p-4 bg-white rounded-3xl shadow-lg w-full lg:w-1/2 mb-5 border-2 border-gray-100">
              <div className="w-full lg:w-1/2 h-48 lg:h-auto overflow-hidden">
                <img className="w-full h-full object-cover" src={favorite.book.cover_image_url} alt={favorite.book.title} />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col p-4">
                <Link to={`/book/${favorite.book.id}`} className="mt-2 block text-2xl font-bold mb-2 text-violet-500 hover:text-gray-600">
                  {favorite.book.title}
                </Link>
                <p className="text-gray-700">by {favorite.book.author}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Genre: {favorite.book.genre}</p>
                  <p>{favorite.book.description}</p>
                  <p>Rental Price per month: ${favorite.book.rental_price}</p>
                  <p>Available for Rent: {favorite.book.available_for_rent ? 'Yes' : 'No'}</p>
                  <p>Condition: {favorite.book.condition}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;