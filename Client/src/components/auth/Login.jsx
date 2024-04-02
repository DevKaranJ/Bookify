import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../actions/userActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, error } = useSelector(state => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/booklist');
    }
  }, [navigate, userInfo]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className='w-full max-w-lg lg:max-w-xl px-4 lg:px-10 py-10 lg:py-20 rounded-3xl bg-white border-2 border-gray-100'>
          <h1 className='text-3xl lg:text-5xl font-semibold text-black'>Login</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
          {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
          <form onSubmit={handleLogin} className='mt-8'>
            <div className='flex flex-col'>
              <label className='text-lg font-medium text-black'>Email</label>
              <input 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your email"/>
            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-lg font-medium text-black'>Password</label>
              <input 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your password"
                type="password"/>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
              <button 
                type="submit"
                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign in</button>
              <button 
                onClick={() => navigate('/signup')}
                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Go to Signup</button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex relative w-1/2 h-screen items-center justify-center bg-gray-200">
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce"/> 
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default Login;
