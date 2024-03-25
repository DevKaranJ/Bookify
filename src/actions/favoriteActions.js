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
    return async (dispatch, getState) => {
      dispatch(addToFavoritesRequest());
  
      try {
        // Extract user information from the Redux state
        const userData = getState().user.userInfo;
        console.log(userData);
        console.log(userData.data.id)
        const userId = userData.data.id;
        
        // Check if user data is available and contains the user ID
       // if (userData && userData.id) {
          //const userId = userData.data.id;
          //console.log(userId);

  
          // Make the API request to add the book to favorites using the user ID
          const response = await axios.post(`/api/v1/users/${userId}/favorites`, {user_id: userId, book_id: bookId });
          console.log(response)
          dispatch(addToFavoritesSuccess(response.data.data));
        } /*else {
          // If user ID is not available, dispatch an action with an error message
          throw new Error('User ID not available');
        }
      }*/ catch (error) {
        // Dispatch an action with the error message if the request fails
        dispatch(addToFavoritesFailure(error.message));
      }
    };
  };
  
  

// Thunk action for fetching user's favorite books
export const fetchFavorites = () => {
    return async (dispatch, getState) => {
      dispatch(fetchFavoritesRequest());
  
      try {
        const userData = getState().user.userInfo;
        const userId = userData && userData.id;
  
        if (!userId) {
          throw new Error('User ID not available');
        }
  
        const response = await axios.get(`/api/v1/users/${userId}/favorites`);
        dispatch(fetchFavoritesSuccess(response.data.data));
      } catch (error) {
        dispatch(fetchFavoritesFailure(error.message));
      }
    };
  };
  