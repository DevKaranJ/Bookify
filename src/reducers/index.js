import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import userReducer from './userReducer';

export default combineReducers({
  books: bookReducer,
  user: userReducer,
});