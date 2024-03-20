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
    <div>
      {books.map(book => (
        <div key={book.id}>
          <img src={book.cover_image_url} alt={book.title} />
          <Link to={`/book/${book.id}`}>{book.title}</Link>
          <p> by author </p>
          <p>{book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>{book.description}</p>
          <p>Rental Price per : {book.rental_price}</p>
          <p>Available for Rent: {book.available_for_rent ? 'Yes' : 'No'}</p>
          <p>Condition: {book.condition}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books.list });

export default connect(mapStateToProps)(BookList);