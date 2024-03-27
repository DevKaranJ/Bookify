import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isAuthPage = location.pathname === '/' || location.pathname === '/signup';

    if (isAuthPage) {
        return null;
    }

    const handleLogout = () => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        localStorage.removeItem('id');
        navigate('/');
    };

    return (
        <nav className="flex flex-wrap items-center justify-between p-5 bg-violet-500 text-white">
            <h1 className="text-3xl font-semibold">Bookify</h1>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`${isOpen ? 'flex' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end`}>
    <div className="text-sm">
        <Link to="/booklist" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            Books
        </Link>
        <Link to="/favorites" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            My Favorites
        </Link>
        <Link to="/addbook" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            Add Book
        </Link>
        <Link to="/deletebook" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">
            Delete Book
        </Link>
        <button 
            onClick={handleLogout} 
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
        >
            Logout
        </button>
    </div>
</div>
        </nav>
    );
};

export default Navigation;