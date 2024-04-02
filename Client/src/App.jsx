import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/auth/SplashScreen';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import BookList from './components/homepage/BookList';
import BookDetail from './components/homepage/BookDetail';
import Navigation from './components/NavPanel/Navigation';
import { Provider } from 'react-redux';

import Favorites from './components/favorites/Favorites';

import AddBook from './components/addbook/AddBook';
import DeleteBook from './components/deletebook/deletebook';



const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navigation />

        <div>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetail />} />

            <Route path="/favorites" element={<Favorites />} />

            <Route path="/addbook" element={<AddBook />} />
            <Route path="/deletebook" element={<DeleteBook />} />

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;