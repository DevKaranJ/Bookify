import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        const resizeListener = () => {
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        };

        resizeListener();

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    const closeNavPanel = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        localStorage.removeItem('id');
        navigate('/');
    };

    const isAuthPage = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login';
    if (isAuthPage) {
        return null;
    }

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 blur z-50"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Navigation Panel - Mobile */}
            {isMobile && (
                <nav className={`fixed top-0 left-0 w-1/2 h-full bg-violet-500 text-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col justify-center h-full">
                        <div className="p-5">
                            <h1 className="text-3xl font-semibold">Bookify</h1>
                            <div className="text-lg mt-8">
                                <Link to="/booklist" className="block mt-4 text-white hover:text-gray-200" onClick={closeNavPanel}>
                                    Books
                                </Link>
                                <Link to="/favorites" className="block mt-4 text-white hover:text-gray-200" onClick={closeNavPanel}>
                                    My Favorites
                                </Link>
                                <Link to="/addbook" className="block mt-4 text-white hover:text-gray-200" onClick={closeNavPanel}>
                                    Add Book
                                </Link>
                                <Link to="/deletebook" className="block mt-4 text-white hover:text-gray-200" onClick={closeNavPanel}>
                                    Delete Book
                                </Link>
                                <button 
                                    onClick={handleLogout} 
                                    className="block mt-4 text-white hover:text-gray-200"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="lg:hidden p-5 text-white hover:text-gray-200"
                        >
                            Close
                        </button>
                    </div>
                </nav>
            )}

            {/* Navigation Panel - Desktop */}
            {!isMobile && (
                <nav className="hidden lg:flex lg:justify-end lg:items-center bg-violet-500 text-white py-4 px-8">
                    <h1 className="text-3xl font-semibold mr-auto">Bookify</h1>
                    <div className="text-lg flex items-center">
                        <Link to="/booklist" className="text-white hover:text-gray-200 mr-4">
                            Books
                        </Link>
                        <Link to="/favorites" className="text-white hover:text-gray-200 mr-4">
                            My Favorites
                        </Link>
                        <Link to="/addbook" className="text-white hover:text-gray-200 mr-4">
                            Add Book
                        </Link>
                        <Link to="/deletebook" className="text-white hover:text-gray-200 mr-4">
                            Delete Book
                        </Link>
                        <button 
                            onClick={handleLogout} 
                            className="text-white hover:text-gray-200"
                        >
                            Logout
                        </button>
                    </div>
                </nav>
            )}

            {/* Nav Icon - Mobile */}
            {isMobile && (
                <div className="fixed top-0 left-0 z-50 lg:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-3 text-black hover:text-gray-200"
                    >
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
};

export default Navigation;
