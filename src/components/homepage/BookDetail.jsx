import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBookDetails } from '../../actions/bookActions';
import { addToFavorites } from '../../actions/favoriteActions'; // Import the new action
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const BookDetail = ({ dispatch, book, isAuthenticated }) => { // Add isAuthenticated to props
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  const handleAddToFavorites = () => {
    console.log('handleAddToFavorites called');
    if (isAuthenticated) {
      dispatch(addToFavorites(book.id)); // Dispatch the action to add to favorites
    } else {
      // Handle case where user is not authenticated (e.g., show a message or redirect to login)
      console.log('User is not authenticated. Please log in to add to favorites.');
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg p-6 md:p-0 w-full h-full md:h-auto md:w-3/4 mx-auto">
      <div className="w-full md:w-1/2">
        <img className="rounded-lg w-full h-64 object-cover md:h-full md:w-full" src={book.cover_image_url} alt={book.title} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-gray-700">by {book.author}</p>
        <p className="text-gray-700">Genre: {book.genre}</p>
        <p className="text-gray-700 mt-2">{book.description}</p>
        <p className="text-gray-700">Rental Price per month: {book.rental_price}</p>
        <p className="text-gray-700">Available for Rent: {book.available_for_rent ? 'Yes' : 'No'}</p>
        <p className="text-gray-700">Condition: {book.condition}</p>
        <button 
          onClick={handleAddToFavorites} // Call handleAddToFavorites function on button click
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" 
          type="button"
        >
          Add to favorite
        </button>
      </div>
    </div>
  );
};

BookDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  book: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired, // Add isAuthenticated prop type
};

const mapStateToProps = state => ({ 
  book: state.books.selectedBook,
  isAuthenticated: state.user.isAuthenticated, // Map isAuthenticated from Redux state
});

export default connect(mapStateToProps)(BookDetail);
