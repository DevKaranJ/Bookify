import {
    ADD_TO_FAVORITES_REQUEST,
    ADD_TO_FAVORITES_SUCCESS,
    ADD_TO_FAVORITES_FAILURE,
    FETCH_FAVORITES_REQUEST,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
  } from '../actions/favoriteActions';
  
  const initialState = {
    favorites: [],
    loading: false,
    error: null,
  };
  
  const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_FAVORITES_REQUEST:
      case FETCH_FAVORITES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_TO_FAVORITES_SUCCESS:
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
          loading: false,
          error: null,
        };
      case FETCH_FAVORITES_SUCCESS:
        return {
          ...state,
          favorites: action.payload,
          loading: false,
          error: null,
        };
      case ADD_TO_FAVORITES_FAILURE:
      case FETCH_FAVORITES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default favoriteReducer;
  