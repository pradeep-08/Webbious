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
          {[

            {
              Icon: FaXTwitter,
              href: "https://x.com/Webbious_IN",
              color: "text-black",
            },
            {
              Icon: FaInstagram,
              href: "https://www.instagram.com/webbious/",
              color: "text-pink-500",
            },
            {
              Icon: FaLinkedinIn,
              href: "https://www.linkedin.com/company/webbious/posts/?feedView=all",
              color: "text-blue-700",
            },
            {
              Icon: FaWhatsapp,
              href: "https://wa.me/8939748901",
              color: "text-green-500",
            },
            {
              Icon: FaFacebookF,
              href: "#",
              color: "text-blue-600",
            },
          ].map(({ Icon, href, color }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all"
            >
              <Icon className={color} />
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
