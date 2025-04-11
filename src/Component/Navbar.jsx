import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './img/fulLogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isCareersPage = location.pathname === '/careers';
    const isTeamPage = location.pathname === '/team';

    return (
        <header className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50">
            <div className="relative max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-y-2">
                    <a href="/"><img src={Logo} alt="Logo" className="h-[50px] w-auto" /></a>

                    <div className="flex items-center">
                        {isCareersPage && (
                            <span className="text-lg font-bold bg-gradient-to-r from-[#EDC4E4] via-[#6B00BE] to-[#D075DC] bg-clip-text text-transparent">
                                JOBS
                            </span>
                        )}
                        {isTeamPage && (
                            <span className="text-lg font-bold bg-gradient-to-r from-[#EDC4E4] via-[#6B00BE] to-[#D075DC] bg-clip-text text-transparent">
                                Resources
                            </span>
                        )}
                    </div>
                </div>



                <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-24">
                    <a href="#solutions" className="text-base font-medium text-gray-700 hover:text-blue-600">Solutions</a>
                    <a href="#why-us" className="text-base font-medium text-gray-700 hover:text-blue-600">Why Us?</a>
                    <a href="/team" className="text-base font-medium text-gray-700 hover:text-blue-600">Resources</a>
                    <a href="/careers" target="_blank" className="text-base font-medium text-gray-700 hover:text-blue-600">Careers</a>

                </nav>

                <div className="hidden md:block">
                    <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition">
                        Get Quote
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-blue-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <a href="/" className="text-base font-medium text-gray-700 hover:text-blue-600">Home</a>
                        <a href="#solutions" className="text-base font-medium text-gray-700 hover:text-blue-600">Solutions</a>
                        <a href="#why-us" className="text-base font-medium text-gray-700 hover:text-blue-600">Why Us?</a>
                        <a href="/team" className="text-base font-medium text-gray-700 hover:text-blue-600">Resources</a>
                        <button className="mt-2 px-5 py-2 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition">
                            Get Quote
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
