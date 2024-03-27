import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../actions/userActions';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistration = (event) => {
    event.preventDefault();
    const userData = { 
      name: name, 
      email: email, 
      password: password, 
      confirm_success_url: 'http://localhost:5173' 
    };

    dispatch(userRegister(userData));
    navigate('/');
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
          <h1 className='text-5xl font-semibold text-black'>Register</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
          <form onSubmit={handleRegistration} className='mt-8'>
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-lg font-medium text-black'>Name</label>
              <input
                id='name'
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your name"
                required />
            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-lg font-medium text-black'>Email</label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your email"
                required />
            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-lg font-medium text-black'>Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your password"
                required />
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
              <button
                type="submit"
                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default SignUp;