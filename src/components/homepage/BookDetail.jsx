import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBookDetails } from '../../actions/bookActions';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const BookDetail = ({ dispatch, book }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={book.cover_image_url} alt={book.title} />
      <h2>{book.title}</h2>
      <p>by {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>{book.description}</p>
      <p>Rental Price per month: {book.rental_price}</p>
      <p>Available for Rent: {book.available_for_rent ? 'Yes' : 'No'}</p>
      <p>Condition: {book.condition}</p>
      <button type="button">Add to favourite</button>
    </div>
  );
};

BookDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  book: PropTypes.object
};

const mapStateToProps = state => ({ book: state.books.selectedBook });

export default connect(mapStateToProps)(BookDetail);