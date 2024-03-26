const bookReducer = (state = { list: [], userBooks: [], error: null, isAdded: false, selectedBook: null }, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return { ...state, list: action.payload };
    case 'FETCH_BOOK':
      return { ...state, selectedBook: action.payload };
    case 'ADD_BOOK_SUCCESS':
      return { ...state, isAdded: true, error: null, list: [...state.list, action.payload] };
    case 'ADD_BOOK_FAILURE':
      return { ...state, error: action.payload };
    case 'DELETE_BOOK_FETCH_SUCCESS':
      return { ...state, userBooks: action.payload };
    case 'DELETE_BOOK_FETCH_FAILURE':
    return { ...state, error: action.payload};
    default:
      return state;
  }
};

export default bookReducer;
