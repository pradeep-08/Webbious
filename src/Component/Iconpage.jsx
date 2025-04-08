import js from "../Component/img/TeckStack/js.png"
import node from './img/TeckStack/js.png'
import React, { useState, useEffect } from 'react';


const firstRowLogos = [
  { src: 'https://cdn.simpleicons.org/firebase', alt: 'Firebase' },
  { src: 'https://cdn.simpleicons.org/gitlab', alt: 'GitLab' },
  { src: 'https://cdn.simpleicons.org/netlify', alt: 'Netlify' },
  { src: 'https://cdn.simpleicons.org/nodedotjs', alt: 'Node.js' },
  { src: 'https://cdn.simpleicons.org/googleanalytics', alt: 'Google Analytics' },
  { src: 'https://cdn.simpleicons.org/mongodb', alt: 'MongoDB' },
  { src: 'https://cdn.simpleicons.org/figma', alt: 'Figma' },
  { src: 'https://cdn.simpleicons.org/javascript', alt: 'JavaScript' },
  { src: 'https://cdn.simpleicons.org/sass', alt: 'Sass' },
];

const secondRowLogos = [
  { src: 'https://cdn.simpleicons.org/n8n', alt: 'n8n' },
  { src: 'https://cdn.simpleicons.org/jira', alt: 'Jira' },
  { src: 'https://cdn.simpleicons.org/framer', alt: 'Framer' },
  { src: 'https://cdn.simpleicons.org/googlecolab', alt: 'Google Colab' },
  { src: 'https://cdn.simpleicons.org/python', alt: 'Python' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/canva', alt: 'Canva' },
  { src: 'https://cdn.simpleicons.org/node.js', alt: 'Node.js' },
  { src: 'https://cdn.simpleicons.org/react', alt: 'React' },
];

const AnimatePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalLogos = Math.max(firstRowLogos.length, secondRowLogos.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalLogos);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalLogos]);

  return (
    <>
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-left {
            animation: marquee-left 50s linear infinite;
          }
          .animate-marquee-right {
            animation: marquee-right 50s linear infinite;
          }
        `}
      </style>

      <div className="w-full max-w-7xl mx-auto px-1">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold ">
          Our <span className="text-blue-600 font-bold">Tech Stack</span> – Future-Ready Technologies
        </h1>

        <div className="relative group">
          <div className="py-12 overflow-hidden space-y-10 group-hover:blur-sm transition duration-300 bg-transparent relative">
            {/* Gradient edges */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white/100 via-white/40 to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white/100 via-white/40 to-transparent pointer-events-none z-10" />

            {[firstRowLogos, secondRowLogos].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`whitespace-nowrap flex space-x-20 min-h-[120px] ${rowIndex === 0 ? 'animate-marquee-left' : 'animate-marquee-right'}`}
              >
                {row.concat(row).map((logo, index) => {
                  const isActive = index % row.length === activeIndex % row.length;
                  return (
                    <div
                      key={index}
                      className={`w-24 h-28 flex flex-col items-center justify-center text-center space-y-2 transition-all duration-500 ease-out ${isActive ? 'scale-110' : 'scale-100'
                        }`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={`h-16 w-16 object-contain transition-all duration-500 ease-out ${isActive ? 'grayscale-0' : 'grayscale'}`}
                      />
                      <span className={`text-m text-gray-700 ${isActive ? 'font-bold' : 'font-normal'}`}>{logo.alt}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="text-black text-xl sm:text-2xl font-semibold transition-all duration-500 transform opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-105">
              Contact our Team →
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatePage;





