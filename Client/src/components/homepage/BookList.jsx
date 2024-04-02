import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/bookActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookList = ({ dispatch, books }) => {
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  BookList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center p-5">
      <h1 className='text-5xl font-semibold text-black mb-4'>Book</h1>
        {books.map(book => (
          <div key={book.id} className="flex flex-col lg:flex-row p-4 bg-white rounded-3xl shadow-lg w-full lg:w-1/2 mb-5 border-2 border-gray-100">
            <div className="w-full lg:w-1/2 h-48 lg:h-auto overflow-hidden">
              <img className="w-full h-full object-cover" src={book.cover_image_url} alt={book.title} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col p-4">
              <Link to={`/book/${book.id}`} className="mt-2 block text-2xl font-bold mb-2 text-violet-500 hover:text-gray-600">
                {book.title}
              </Link>
              <p className="text-gray-700">by {book.author}</p>
              <div className="mt-2 text-sm text-gray-500">
                <p>Available for Rent: {book.available_for_rent ? 'Yes' : 'No'}</p>
                <p>${book.rental_price}<br/>per month</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ books: state.books.list });

export default connect(mapStateToProps)(BookList);