import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import PropTypes from 'prop-types';

const BookList = ({ dispatch, books }) => {
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  BookList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <img src={book.image} alt={book.title} />
          <h2>{book.title}</h2>
          <p> by author </p>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BookList);