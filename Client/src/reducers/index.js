import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import userReducer from './userReducer';
import favoriteReducer from './favoriteReducer'; // Import favoriteReducer

export default combineReducers({
  books: bookReducer,
  user: userReducer,
  favorite: favoriteReducer, // Include favoriteReducer
});
