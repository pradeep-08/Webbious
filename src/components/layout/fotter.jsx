// import React from 'react';
// import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
// import logo from "../../assets/images/TeckStack/logo.png"
// const Footer = () => {
//     return (
//         <footer className="bg-gray-100 text-black pt-10 pb-4">
//             <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">

//                 <div className="mb-6 md:mb-0">
//                   <a href="/"><img  src={logo} alt="Logo" className="w-16 h-16" /></a>  
//                 </div>

//                 <ul className="flex flex-col sm:flex-row gap-4 text-center font-semibold mb-6 md:mb-0">
//                     <li><a href="/" className="hover:text-purple-600">Home</a></li>
//                     <li><a href="/team" className="hover:text-purple-600">Team</a></li>
//                     <li><a href="/about" className="hover:text-purple-600">About Us</a></li>
//                     <li><a href="/careers" className="hover:text-purple-600">Careers</a></li>
//                     <li><a href="contact" className="hover:text-purple-600">Contact</a></li>
//                 </ul>

//                 <div className="flex gap-4 text-2xl">
//                     <a href="#"><FaFacebookF className="text-blue-600 hover:scale-110 transition" /></a>
//                     <a href="#"><FaXTwitter className="hover:text-black hover:scale-110 transition" /></a>
//                     <a href="#"><FaInstagram className="hover:text-pink-500 hover:scale-110 transition" /></a>
//                     <a href="#"><FaLinkedinIn className="text-blue-700 hover:scale-110 transition" /></a>
//                     <a href="#"><FaWhatsapp className="text-green-500 hover:scale-110 transition" /></a>
//                 </div>
//             </div>

//             <div className="text-6xl sm:text-8xl md:text-[150px] lg:text-[220px] xl:text-[300px] font-extrabold text-gray-300 text-center opacity-50 select-none leading-none break-words overflow-hidden">
//                 Webbious
//             </div>


//             <p className="text-center font-medium text-sm">
//                 Copyrights © 2025 <span className="font-bold">Webbious.</span> All Rights Reserved.
//             </p>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import logo from "../../assets/images/TeckStack/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black pt-12 pb-6 relative overflow-hidden">
      {/* Top Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6"
      >
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </a>

        {/* Nav Links */}
        <ul className="flex flex-col sm:flex-row gap-4 text-center font-semibold">
          {["Home", "Team", "About Us", "Careers", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="hover:text-purple-600 transition duration-300 hover:underline underline-offset-4"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp].map((Icon, idx) => (
            <motion.a
              href="#"
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all"
            >
              <Icon
                className={`${
                  idx === 0
                    ? "text-blue-600"
                    : idx === 1
                    ? "text-black"
                    : idx === 2
                    ? "text-pink-500"
                    : idx === 3
                    ? "text-blue-700"
                    : "text-green-500"
                }`}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Giant Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="text-6xl sm:text-8xl md:text-[150px] lg:text-[220px] xl:text-[300px] font-extrabold text-gray-300 text-center opacity-50 select-none leading-none break-words mt-8"
      >
        Webbious
      </motion.div>

      {/* Copyright */}
      <p className="text-center font-medium text-sm mt-6">
        Copyrights © 2025 <span className="font-bold">Webbious.</span> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
