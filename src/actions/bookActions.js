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

export const addABook = (bookData) => async dispatch => {
  const headers = {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid')
  };

  if (!headers['access-token'] || !headers['client'] || !headers['uid']) {
    console.error('User is not authenticated');
    return;
  }

  try {
    const response = await axios.post('http://127.0.0.1:3000/api/v1/books', bookData, {
      headers: headers,
    });

    dispatch({ type: 'ADD_BOOK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_BOOK_FAILURE', payload: error.response.data.errors[0] });
    console.error('Error adding book:', error);
  }
};

// delete book fetch

// export const deleteBooksFetch = (userId) => async dispatch => {
//   console.log(userId)
//   const headers = {
//     'access-token': localStorage.getItem('access-token'),
//     'client': localStorage.getItem('client'),
//     'uid': localStorage.getItem('uid')
//   };

//   if (!headers['access-token'] || !headers['client'] || !headers['uid']) {
//     console.error('User is not authenticated');
//     return;
//   }

//   const response = await axios.get('http://127.0.0.1:3000/api/v1/books/mybooks', { 
//     headers,
//     user_id: userId,
//   });
//   dispatch({ type: 'USER_BOOKS_FETCH_SUCCESS', payload: response.data });
// };
