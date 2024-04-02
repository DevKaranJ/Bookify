import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addABook } from '../../actions/bookActions';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAdded, error } = useSelector((state) => state.books);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const userId = localStorage.getItem('id');
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
    dispatch(addABook({ book: formData }));
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
    <div className="flex w-full justify-center items-center pt-20 pb-20" style={{ height: 'calc(100vh - <NavbarHeight>)' }}>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
          <h1 className='text-5xl font-semibold text-black'>Add Book</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Please enter book details.</p>
          {message && <div className={error ? "error-message" : "success-message"}>{message}</div>}
          <form onSubmit={handleSubmitBook} className='mt-8'>
          {Object.keys(initialFormData).filter(key => key !== 'user_id').map((key, index) => (
  <div className='flex flex-col mt-4' key={index}>
    <label htmlFor={key} className='text-lg font-medium text-black'>{key}</label>
    {key === 'available_for_rent' || key === 'condition' ? (
      <select
        id={key}
        name={key}
        value={formData[key]}
        onChange={handleChange}
        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-black'
        required={key !== 'available_for_rent'}
      >
        <option value="">Select {key}</option>
        {key === 'available_for_rent' ? (
          <>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </>
        ) : (
          <>
            <option value="new">New</option>
            <option value="used">Used</option>
          </>
        )}
      </select>
    ) : (
      <input
        id={key}
        name={key}
        value={formData[key]}
        onChange={handleChange}
        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-black'
        placeholder={`Enter ${key}`}
        required={key !== 'available_for_rent'} 
        type={key === 'rental_price' ? 'number' : 'text'}
      />
    )}
  </div>
))}
  <div className='mt-8 flex flex-col gap-y-4'>
    <button
      type="submit"
      className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
      Add Book
    </button>
  </div>
</form>
        </div>
      </div>
    </div>
  );
}
export default AddBook;