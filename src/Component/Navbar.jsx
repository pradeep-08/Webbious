import React, { useState } from 'react';
import Logo from './img/fulLogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-18 flex justify-between items-center px-8 py-4 bg-white text-black shadow-lg z-10">
         
                <img src={Logo} alt="Logo" className="h-[60px] w-auto" />
                
            

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-gray-700 hover:text-blue-700 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Navigation Section */}
            <nav
                className={`${menuOpen ? 'block' : 'hidden'
                    } md:flex flex-col md:flex-row items-center bg-white w-full md:w-auto absolute md:relative top-16 md:top-0 left-0 md:left-auto shadow-md md:shadow-none p-4 md:p-0 z-20`}
                aria-label="Main Navigation"
            >
                <a
                    href="#solutions"
                    className="block text-lg font-bold py-2 px-4 text-gray-700 hover:text-blue-700"
                >
                    Solutions
                </a>
                <a
                    href="#why-us"
                    className="block text-lg font-bold py-2 px-4 text-gray-700 hover:text-blue-700"
                >
                    Why Us?
                </a>
                <a
                    href="#resources"
                    className="block text-lg font-bold py-2 px-4 text-gray-700 hover:text-blue-700"
                >
                    Resources
                </a>
                <button className="block px-4 py-2 mt-2 bg-blue-700 text-white font-bold rounded-lg transform hover:scale-105 transition-transform md:mt-0">
                    Get Quote
                </button>
            </nav>
        </header>
    );
};

export default Header;

