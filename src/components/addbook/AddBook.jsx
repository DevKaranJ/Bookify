import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addABook } from '../../actions/bookActions';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.user);
  const { isAdded, error } = useSelector((state) => state.books);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const initialFormData = {
    title: '',
    author: '',
    genre: '',
    description: '',
    cover_image_url: '',
    rental_price: '',
    available_for_rent: false,
    condition: '',
    user_id: userId,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitBook = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    dispatch(addABook(formData));
  };

  useEffect(() => {
    if (isAdded && isSubmitted) {
      setMessage('Book is Successfully Added');
      navigate('/booklist');
    } else if (error && isSubmitted) {
      setMessage('Sorry, something happened');
    }
  }, [isAdded, isSubmitted, error, navigate]);

  return (
    <div className="add-book-container">
      <h2 className='addbook-form-title'>Add Book Form </h2>
      {error && <div className="error-message">{error}</div>}
      {message && !error && <div className="success-message">{message}</div>}
      <form className="add-book-form" onSubmit={handleSubmitBook}>
        <input required type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="form-input" />
        <input required type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="form-input" />
        <input required type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} className="form-input" />
        <textarea required name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="form-textarea" />
        <input required type="text" name="cover_image_url" placeholder="Cover Image URL" value={formData.cover_image_url} onChange={handleChange} className="form-input" />
        <input required type="number" name="rental_price" placeholder="Rental Price" value={formData.rental_price} onChange={handleChange} className="form-input" />
        <label className="form-label">
          <input type="checkbox" name="available_for_rent" checked={formData.available_for_rent} onChange={handleChange} className="form-checkbox" />
          Available for Rent
        </label>
        <input required type="text" name="condition" placeholder="Condition" value={formData.condition} onChange={handleChange} className="form-input" />
        <button type="submit" className="form-submit-button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
