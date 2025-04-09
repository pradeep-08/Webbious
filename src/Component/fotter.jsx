import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import logo from "./img/TeckStack/logo.png"
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black pt-10 pb-4">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
                
                <div className="mb-6 md:mb-0">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                </div>

                <ul className="flex flex-col sm:flex-row gap-4 text-center font-semibold mb-6 md:mb-0">
                    <li><a href="#" className="hover:text-purple-600">Home</a></li>
                    <li><a href="#" className="hover:text-purple-600">About Us</a></li>
                    <li><a href="#" className="hover:text-purple-600">Careers</a></li>
                    <li><a href="#" className="hover:text-purple-600">Contact</a></li>
                </ul>

                <div className="flex gap-4 text-2xl">
                    <a href="#"><FaFacebookF className="text-blue-600 hover:scale-110 transition" /></a>
                    <a href="#"><FaXTwitter className="hover:text-black hover:scale-110 transition" /></a>
                    <a href="#"><FaInstagram className="hover:text-pink-500 hover:scale-110 transition" /></a>
                    <a href="#"><FaLinkedinIn className="text-blue-700 hover:scale-110 transition" /></a>
                    <a href="#"><FaWhatsapp className="text-green-500 hover:scale-110 transition" /></a>
                </div>
            </div>

            <div className="text-[80px] md:text-[300px] font-extrabold text-gray-300 text-center opacity-50 select-none leading-none">
                Webbious
            </div>

            <p className="text-center font-medium text-sm">
                Copyrights © 2025 <span className="font-bold">Webbious.</span> All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
