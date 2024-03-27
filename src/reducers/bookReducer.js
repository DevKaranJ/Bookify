const bookReducer = (state = { 
  list: [],
  error: null,
  isAdded: false,
  isDeleted: false, 
  selectedBook: null 
}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return { ...state, list: action.payload };
    case 'FETCH_BOOK':
      return { ...state, selectedBook: action.payload };
    case 'ADD_BOOK_SUCCESS':
      return { ...state, isAdded: true, error: null, list: [...state.list, action.payload] };
    case 'ADD_BOOK_FAILURE':
      return { ...state, isAdded: false, error: action.payload };
    case 'DELETE_BOOKS_SUCCESS':
      const remainingBooks = state.list.filter(book => !action.payload.includes(book.id));
      return { ...state, isDeleted: true, error: null, list: remainingBooks };
    case 'DELETE_BOOKS_FAILURE':
      return { ...state, isDeleted: false, error: action.payload};
    default:
      return state;
  }
};

export default bookReducer;
