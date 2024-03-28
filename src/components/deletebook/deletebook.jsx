import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, deleteBook } from '../../actions/bookActions'; // Import deleteBook action
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DeleteBook = ({ dispatch, books }) => {
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  DeleteBook.propTypes = {
    dispatch: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };

  const [selectedBooks, setSelectedBooks] = useState(() => {
    const storedSelectedBooks = localStorage.getItem('selectedBooks');
    return storedSelectedBooks ? JSON.parse(storedSelectedBooks) : [];
  });

  const handleDeleteBook = (bookId) => {
    if (selectedBooks.includes(bookId)) {
      setSelectedBooks(selectedBooks.filter(id => id !== bookId));
    } else {
      setSelectedBooks([...selectedBooks, bookId]);
    }
    dispatch(deleteBook(bookId));
  };
  

  useEffect(() => {
    localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
  }, [selectedBooks]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className='text-5xl font-semibold text-black mb-4'>Delete Book</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {books.map(book => (
          <div key={book.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 bg-white p-6 flex flex-col justify-between items-center">
              <div className="w-full text-center mb-4">
                <Link to={`/book/${book.id}`} className="block text-lg leading-7 font-light text-gray-700 hover:text-gray-600 truncate">
                  <div className="truncate">{book.title}</div>
                </Link>
              </div>
              <div className="w-full flex justify-center">
                <button 
                  onClick={() => handleDeleteBook(book.id)} 
                  className={`block text-lg leading-7 font-semibold text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out ${selectedBooks.includes(book.id) ? 'bg-gray-600 hover:bg-gray-700 text-sm' : 'bg-red-600 hover:bg-red-700'}`}
                >
                  {selectedBooks.includes(book.id) ? "Removed" : "Delete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ books: state.books.list });

export default connect(mapStateToProps)(DeleteBook);
