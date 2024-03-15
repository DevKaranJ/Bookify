import axios from 'axios';

export const fetchBooks = () => async dispatch => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/books');
  dispatch({ type: 'FETCH_BOOKS', payload: response.data });
};

export const fetchBookDetails = (id) => async dispatch => {
  const response = await axios.get(`http://127.0.0.1:3000/api/v1/books/${id}`);
  dispatch({ type: 'FETCH_BOOK', payload: response.data });
};