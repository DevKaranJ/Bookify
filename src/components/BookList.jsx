import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import { PropTypes } from 'prop-types';
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
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h2>{book.name}</h2>
          <p>{book.description}</p>
          <p>{book.renting_fee}</p>
          <p>{book.image}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BookList);