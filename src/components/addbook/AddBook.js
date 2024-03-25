// CreateBookForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../actions/bookActions';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    cover_image_url: '',
    rental_price: '',
    available_for_rent: '',
    condition: '',
    user_id: '' 
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitBook = (e) => {
    const userId = userInfo.data.id
    e.preventDefault();
    dispatch(addBook(formData, userId));
  };



  return (
    <form className="create-book-form" onSubmit={handleSubmitBook}>
      <label className="form-label">
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-input" />
      </label>
      <label className="form-label">
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} className="form-input" />
      </label>
      <label className="form-label">
        Genre:
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} className="form-input" />
      </label>
      <label className="form-label">
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} className="form-textarea" />
      </label>
      <label className="form-label">
        Cover Image URL:
        <input type="text" name="cover_image_url" value={formData.cover_image_url} onChange={handleChange} className="form-input" />
      </label>
      <label className="form-label">
        Rental Price:
        <input type="number" name="rental_price" value={formData.rental_price} onChange={handleChange} className="form-input" />
      </label>
      <label className="form-label">
        Available for Rent:
        <input type="checkbox" name="available_for_rent" checked={formData.available_for_rent} onChange={handleChange} className="form-checkbox" />
      </label>
      <label className="form-label">
        Condition:
        <input type="text" name="condition" value={formData.condition} onChange={handleChange} className="form-input" />
      </label>
      <button type="submit" className="form-submit-button">Create Book</button>
    </form>
  );
};

export default AddBook;
