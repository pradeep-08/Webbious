import React from "react";
import Pic from "./img/Project1.jpg";
import Pics from "./img/Project2.png";
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
    <div className="min-h-screen flex flex-col items-center py-16 px-6 bg-white">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          <img src={projects[0].image} alt={projects[0].alt} className="rounded-lg shadow-md w-full h-40 object-cover" />
          <img src={projects[1].image} alt={projects[1].alt} className="rounded-lg shadow-md w-full h-40 object-cover" />
          <img src={projects[2].image} alt={projects[2].alt} className="rounded-lg shadow-md w-full h-40 object-cover" />
          <img src={projects[3].image} alt={projects[3].alt} className="rounded-lg shadow-md w-full h-40 object-cover" />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Our projects are shaping the digital landscape
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            At <span className="font-semibold">Webbious</span>, we craft AI-powered apps, 
            data-driven marketing, and custom software to help businesses scale, 
            automate, and grow in a fast-evolving digital world.
          </p>
        
          <a 
            href="#" 
            className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#EDC4E4] via-[#6B00BE] to-[#D075DC] hover:opacity-80 transition-opacity duration-300"
          >
             <span className="font-bold"> Explore our work →</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
