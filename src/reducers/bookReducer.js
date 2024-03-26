const bookReducer = (state = { list: [], isAdded: false, selectedBook: null }, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return { ...state, list: action.payload };
    case 'FETCH_BOOK':
      return { ...state, selectedBook: action.payload };
    case 'ADD_BOOK':
      return { ...state, isAdded: true, list: [...state.list, action.payload] }; 
    default:
      return state;
  }
};

export default bookReducer;