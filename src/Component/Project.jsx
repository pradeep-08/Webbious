import React from "react";
import Pic from "./img/Project1.jpg";
import Pics from "./img/Project2.jpg";
import Picse from "./img/Project3.jpg";
import Picses from "./img/Project4.jpg";

const projects = [
  { image: Pic, alt: "Office Desk with Documents" },
  { image: Pics, alt: "Team Meeting" },
  { image: Picse, alt: "Person Writing Notes" },
  { image: Picses, alt: "UX Design Planning" },
];



const Projects = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center ">
        {/* Left Side - Responsive Grid of Color Divs (hidden on mobile) */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          {/* Top Left - Tall */}
          <img
            src={projects[2].image} alt={projects[3].alt}
            className="w-full h-full object-cover sm:h-64 col-span-1 row-span-2 rounded-2xl shadow-m"
          />
          {/* Top Right - Large */}
          <img
            src={projects[0].image} alt={projects[3].alt}
            className="w-full h-full object-fill sm:h-64 col-span-1 sm:col-span-2 row-span-2 rounded-2xl shadow-md"
          />
          {/* Bottom Left - Wide (Increased height) */}
          <img
            src={projects[1].image} alt={projects[3].alt}
            className="w-full object-cover h-36 sm:h-40 col-span-1 sm:col-span-2 rounded-xl shadow-md"
          />
          {/* Bottom Right - Small (Increased height) */}
          <img
            src={projects[3].image} alt={projects[3].alt}
            className="w-full h-48  object-fill sm:h-40 col-span-1 rounded-xl shadow-md"
          />
        </div>

         {/* Right Side - Text Content */}
         <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Our projects are <br className="hidden sm:block" /> shaping the digital <br className="hidden sm:block" /> landscape
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            At <span className="font-semibold">Webbious</span>, we craft AI-powered apps,
            data-driven marketing, and custom software to help businesses scale,
            automate, and grow in a fast-evolving digital world.
          </p>
          <a href="#" className="text-purple-600 font-semibold hover:underline text-lg sm:text-base">
            Explore our work →
          </a>
        </div>
      </div>
           {/* Keyframe animation style */}
           <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 10s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;
