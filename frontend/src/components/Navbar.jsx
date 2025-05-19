import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiSearch, FiMic, FiVideo, FiGrid, FiBell, FiUser, FiLogIn, FiLogOut, FiSettings, FiHelpCircle } from 'react-icons/fi';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    const profileMenuRef = useRef(null);
    const searchInputRef = useRef(null);

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
                setIsProfileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
                setIsSearchExpanded(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSearch = () => {
        setIsSearchExpanded(!isSearchExpanded);
        if (!isSearchExpanded && searchInputRef.current) {
            setTimeout(() => searchInputRef.current.focus(), 100);
        }
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Navbar */}
                <div className="flex justify-between items-center h-16">
                    {/* Left section - Logo and menu button */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <FiMenu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                        </button>

                        <div className="flex items-center">
                            <span className="text-xl font-bold text-red-600">Chitran</span>
                        </div>
                    </div>

                    {/* Middle section - Search bar */}
                    <div className={`${windowWidth < 640 ? (isSearchExpanded ? 'flex-1 mx-2' : 'hidden') : 'flex-1'} flex justify-center transition-all duration-200`}>
                        <div className={`relative flex items-center w-full max-w-xl`}>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search"
                                className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-l-full focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                                onFocus={() => windowWidth < 640 && setIsSearchExpanded(true)}
                                onBlur={() => windowWidth < 640 && !searchInputRef.current.value && setIsSearchExpanded(false)}
                            />
                            <button className="cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-5 py-2.5 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-full">
                                <FiSearch className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                            </button>
                            <button className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hidden sm:block">
                                <FiMic className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                            </button>
                        </div>
                    </div>

                    {/* Right section - Icons and profile */}
                    <div className="flex items-center space-x-3">
                        {windowWidth < 640 && !isSearchExpanded && (
                            <button
                                onClick={toggleSearch}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <FiSearch className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                            </button>
                        )}

                        {!isSearchExpanded && (
                            <>
                                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hidden sm:block">
                                    <FiVideo className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                                </button>

                                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hidden sm:block">
                                    <FiGrid className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                                </button>

                                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 relative">
                                    <FiBell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                                </button>
                            </>
                        )}

                        <div className="relative" ref={profileMenuRef}>
                            <button
                                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white hover:bg-blue-600"
                            >
                                <FiUser className="h-5 w-5" />
                            </button>

                            {/* Profile dropdown */}
                            {isProfileMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg p-1 z-50 border border-gray-200 dark:border-gray-700">
                                    <a href="#" className="flex rounded-md items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <FiUser className="mr-3" /> Your Channel
                                    </a>
                                    <a href="#" className="flex rounded-md items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <FiSettings className="mr-3" /> Settings
                                    </a>
                                    <a href="#" className="flex rounded-md items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <FiHelpCircle className="mr-3" /> Help
                                    </a>
                                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                                    <a href="#" className="flex rounded-md items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <FiLogIn className="mr-3" /> Sign In
                                    </a>
                                    <a href="#" className="flex rounded-md items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <FiLogOut className="mr-3" /> Register
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile menu - appears only on small screens */}
                {isMobileMenuOpen && windowWidth <= 768 && (
                    <div className="bg-white dark:bg-gray-900 shadow-lg pb-4">
                        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                            <a href="#" className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                                <FiUser className="mr-3" /> Your Channel
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                                <FiVideo className="mr-3" /> Trending
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                                <FiGrid className="mr-3" /> Subscriptions
                            </a>
                            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                            <a href="#" className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                                <FiLogIn className="mr-3" /> Sign In
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                                <FiLogOut className="mr-3" /> Register
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;