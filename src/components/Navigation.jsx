import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Books</Link>
                </li>
                <li>
                    <Link to="/favorites">My Favorites</Link>
                </li>
                <li>
                    <Link to="/add">Add Book</Link>
                </li>
                <li>
                    <Link to="/delete">Delete Book</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
