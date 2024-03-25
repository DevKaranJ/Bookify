import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

  // Check if the current location is either sign-in or sign-up
  const isAuthPage = location.pathname === '/' || location.pathname === '/signup';

  // If it's an authentication page, don't render the navigation
  if (isAuthPage) {
    return null;
  }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Bookify</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/booklist" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Books
                    </Link>
                    <Link to="/favorites" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        My Favorites
                    </Link>
                    <Link to="/addbook" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Add Book
                    </Link>
                    <Link to="/delete" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                        Delete Book
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;