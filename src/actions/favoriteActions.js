import axios from 'axios';

// Action Types
export const ADD_TO_FAVORITES_REQUEST = 'ADD_TO_FAVORITES_REQUEST';
export const ADD_TO_FAVORITES_SUCCESS = 'ADD_TO_FAVORITES_SUCCESS';
export const ADD_TO_FAVORITES_FAILURE = 'ADD_TO_FAVORITES_FAILURE';
export const FETCH_FAVORITES_REQUEST = 'FETCH_FAVORITES_REQUEST';
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const FETCH_FAVORITES_FAILURE = 'FETCH_FAVORITES_FAILURE';

// Action Creators
export const addToFavoritesRequest = () => ({
  type: ADD_TO_FAVORITES_REQUEST,
});

export const addToFavoritesSuccess = (favorite) => ({
  type: ADD_TO_FAVORITES_SUCCESS,
  payload: favorite,
});

export const addToFavoritesFailure = (error) => ({
  type: ADD_TO_FAVORITES_FAILURE,
  payload: error,
});

export const fetchFavoritesRequest = () => ({
  type: FETCH_FAVORITES_REQUEST,
});

export const fetchFavoritesSuccess = (favorites) => ({
  type: FETCH_FAVORITES_SUCCESS,
  payload: favorites,
});

export const fetchFavoritesFailure = (error) => ({
  type: FETCH_FAVORITES_FAILURE,
  payload: error,
});

// Thunk action for adding a book to favorites
export const addToFavorites = (bookId) => {
    const headers = {
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    };
    if (!headers['access-token'] || !headers['client'] || !headers['uid']) {
      console.error('User is not authenticated');
      return;
    }
    return async (dispatch, getState) => {
      dispatch(addToFavoritesRequest());
      try {
        const userData = getState().user.userInfo;
        console.log(userData);
        const userId = userData.data.id;
        console.log(userId, bookId);
        const response = await axios.post(`http://127.0.0.1:3000/api/v1/users/${userId}/favorites`, {
          headers,
          book_id: bookId // Only include book_id if needed
        });
        console.log(response);
        // dispatch(addToFavoritesSuccess(response.data.data)); // Uncomment if needed
      } catch (error) {
        dispatch(addToFavoritesFailure(error.message));
      }
    };
  };
  
  export const fetchFavorites = (bookId) => {
    const headers = {
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    };
    if (!headers['access-token'] || !headers['client'] || !headers['uid']) {
      console.error('User is not authenticated');
      return;
    }
    return async (dispatch, getState) => {
      dispatch(addToFavoritesRequest());
      try {
        const userData = getState().user.userInfo;
        console.log(userData);
        const userId = userData.data.id;
        console.log(userId); // No need to log bookId here (already sent in the request)
        const response = await axios.get(`http://127.0.0.1:3000/api/v1/users/${userId}/favorites`); // Use GET method
        console.log(response);
        // dispatch(addToFavoritesSuccess(response.data.data));  // Uncomment if needed
      } catch (error) {
        dispatch(fetchFavoritesFailure(error.message));
      }
    };
  };
  