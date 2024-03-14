// src/App.js
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList';

function App() {
  return (
    <Provider store={store}>
      <BookList />
    </Provider>
  );
}

export default App;