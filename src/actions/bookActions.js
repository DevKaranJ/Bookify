import axios from 'axios';

export const fetchBooks = () => async dispatch => {
  const headers = {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid')
  };

  if (!headers['access-token'] || !headers['client'] || !headers['uid']) {
    console.error('User is not authenticated');
    return;
  }

  const response = await axios.get('http://127.0.0.1:3000/api/v1/books', { headers });
  dispatch({ type: 'FETCH_BOOKS', payload: response.data });
};

export const fetchBookDetails = (id) => async dispatch => {
  const headers = {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid')
  };

  if (!headers['access-token'] || !headers['client'] || !headers['uid']) {
    console.error('User is not authenticated');
    return;
  }

  const response = await axios.get(`http://127.0.0.1:3000/api/v1/books/${id}`, { headers });
  dispatch({ type: 'FETCH_BOOK', payload: response.data });
};