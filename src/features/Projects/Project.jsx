import React from "react";
import Pic from "../../assets/images/Project1.jpg";
import Pics from "../../assets/images/Project2.jpg";
import Picse from "../../assets/images/Project3.jpg";
import Picses from "../../assets/images/Project4.jpg";

const projects = [
  { image: Pic, alt: "Office Desk with Documents" },
  { image: Pics, alt: "Team Meeting" },
  { image: Picse, alt: "Person Writing Notes" },
  { image: Picses, alt: "UX Design Planning" },
];



const Projects = () => {
  return (
    <div className="bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center ">
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-4 w-full cursor-pointer">
          <img
            src={projects[2].image} alt={projects[3].alt}
            className="zoom-animation w-full h-full object-cover sm:h-64 col-span-1 row-span-2 rounded-2xl shadow-m transition-transform duration-300 hover:scale-105"
          />
          <img
            src={projects[0].image} alt={projects[3].alt}
            className="zoom-animation w-full h-full object-fill sm:h-64 col-span-1 sm:col-span-2 row-span-2 rounded-2xl shadow-md"
          />
          <img
            src={projects[1].image} alt={projects[3].alt}
            className="zoom-animation w-full object-cover h-36 sm:h-40 col-span-1 sm:col-span-2 rounded-xl shadow-md"
          />
          <img
            src={projects[3].image} alt={projects[3].alt}
            className="zoom-animation w-full h-48  object-fill sm:h-40 col-span-1 rounded-xl shadow-md"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-4xl font-bold text-[#4A4A4A] mb-6 leading-tight">
            Our projects are <br className="hidden sm:block" /> shaping the digital <br className="hidden sm:block" /> landscape
          </h2>
          <p className="text-gray-600 mb-8 text-lg sm:text-base">
            At <span className="font-semibold">Webbious</span>, we craft AI-powered apps,
            data-driven marketing, and custom software to help businesses scale,
            automate, and grow in a fast-evolving digital world.
          </p>
          {/* <a href="/projects" className="btn-shine font-semibold text-lg sm:text-base">
            <span className="text-xl font-bold bg-transparent ">
              Explore our work →
            </span>
          </a> */}
          <a
            href="/projects"
            rel="noopener noreferrer"
            className="btn-shine bg-black  transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-black text-lg no-underline whitespace-nowrap"
          >
            Get early access →
          </a>

        </div>
      </div>
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

    @keyframes slowZoom {
    0% { transform: scale(0.9); }
    50% { transform: scale(1.0); }
    100% { transform: scale(1); }
  }

  .zoom-animation {
    animation: slowZoom 10s ease-in-out ;
    transition: transform 10s ease-in-out;
  }


      `}</style>

    </div>
  );
};

export default Projects;
