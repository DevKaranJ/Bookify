import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBookDetails } from '../../actions/bookActions';
import { addToFavorites } from '../../actions/favoriteActions';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const BookDetail = ({ dispatch, book, isAuthenticated }) => {
  const { id } = useParams();
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  const handleAddToFavorites = () => {
    console.log('handleAddToFavorites called');
    if (isAuthenticated) {
      dispatch(addToFavorites(book.id));
      setIsAddedToFavorites(true);
    } else {
      console.log('User is not authenticated. Please log in to add to favorites.');
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg p-6 md:p-8 w-full h-full md:h-auto md:w-3/4 mx-auto mt-10">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img className="rounded-lg w-full h-64 object-cover md:h-full md:w-full" src={book.cover_image_url} alt={book.title} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
        <p className="text-gray-700">by <span className="font-semibold">{book.author}</span></p>
        <p className="text-gray-700">Genre: <span className="font-semibold">{book.genre}</span></p>
        <p className="text-gray-700 mt-4">{book.description}</p>
        <p className="text-gray-700 mt-4">Rental Price per month: <span className="font-semibold">{book.rental_price}</span></p>
        <p className="text-gray-700">Available for Rent: <span className="font-semibold">{book.available_for_rent ? 'Yes' : 'No'}</span></p>
        <p className="text-gray-700">Condition: <span className="font-semibold">{book.condition}</span></p>
        <button onClick={handleAddToFavorites}
          className={`mt-4 font-bold py-2 px-4 rounded ${isAddedToFavorites ? 'bg-green-500 hover:bg-green-700' : 'bg-orange-500 hover:bg-orange-700'} text-white`}
          type="button"
          disabled={isAddedToFavorites}
        >
          {isAddedToFavorites ? 'Added to favorites' : 'Add to favorite'}
        </button>
      </div>
    </div>
  );
};

BookDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  book: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  book: state.books.selectedBook,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(BookDetail);