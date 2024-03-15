// src/App.js
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;