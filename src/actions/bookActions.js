import axios from 'axios';

export const fetchBooks = () => async dispatch => {
  // get the headers from local storage
  const headers = {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid')
  };

  const response = await axios.get('http://127.0.0.1:3000/api/v1/books', { headers });
  dispatch({ type: 'FETCH_BOOKS', payload: response.data });
};