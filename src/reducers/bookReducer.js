const bookReducer = (state = { list: [], selectedBook: null }, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return { ...state, list: action.payload };
    case 'FETCH_BOOK':
      return { ...state, selectedBook: action.payload };
    default:
      return state;
  }
};

export default bookReducer;