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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {books.map(book => (
        <div key={book.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={book.cover_image_url} alt={book.title} />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <Link to={`/book/${book.id}`} className="mt-2 block text-lg leading-7 font-semibold text-gray-900 hover:text-gray-600">
                {book.title}
              </Link>
              <p className="mt-3 text-base leading-6 text-gray-500">
                by {book.author}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm leading-5 text-gray-500">
                <p>Available for Rent: {book.available_for_rent ? 'Yes' : 'No'}</p>
              </div>
              <div className="text-sm leading-5 text-gray-500">
                <p>${book.rental_price}<br/>per month</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({ books: state.books.list });

export default connect(mapStateToProps)(BookList);