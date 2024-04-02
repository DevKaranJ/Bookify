import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  const openLogin = () => {
    navigate('/login');
  };

  const openSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
          <h1 className='text-5xl font-semibold text-black'>Welcome</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Please choose an option to continue.</p>
          <div className='mt-8 flex flex-col gap-y-4'>
            <button 
              onClick={openLogin}
              className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Login</button>
            <button 
              onClick={openSignup}
              className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Signup</button>
          </div>
        </div>
      </div>
      <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce"/> 
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
}

export default SplashScreen;