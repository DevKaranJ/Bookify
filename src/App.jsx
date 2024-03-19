import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Navigation from './components/NavPanel/Navigation';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
