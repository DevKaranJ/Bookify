import React, { useState, useEffect } from 'react';
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

  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleDeleteBook = (bookId) => {
    if (selectedBooks.includes(bookId)) {
      setSelectedBooks(selectedBooks.filter(id => id !== bookId));
    } else {
      setSelectedBooks([...selectedBooks, bookId]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {books.map(book => (
        <div key={book.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-1 bg-white p-6 flex flex-row justify-between items-center">
            <div className="w-3/4"> {/* Set width to 70% for the title */}
              <Link to={`/book/${book.id}`} className="mt-2 block text-lg leading-7 font-light text-gray-700 hover:text-gray-600 truncate">
                <div className="truncate">{book.title}</div>
              </Link>
            </div>
            <div className="w-1/4 flex justify-end"> {/* Set width to 30% for the button and align to end */}
              <button 
                onClick={() => handleDeleteBook(book.id)} 
                className={`mt-2 block text-lg leading-7 font-semibold text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out ${selectedBooks.includes(book.id) ? 'bg-gray-600 hover:bg-gray-700 text-sm' : 'bg-red-600 hover:bg-red-700'}`}
              >
                {selectedBooks.includes(book.id) ? "Remove" : "Delete"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({ books: state.books.list });

export default connect(mapStateToProps)(BookList);
