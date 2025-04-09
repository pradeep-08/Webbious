import React from "react";
import Meet from "./img/MeetOurTeam.jpg";
import HiringBg from "./img/Hiring.jpg";

const Team = () => {
  return (
    <div className="team  flex items-center justify-center">
    <div className="min-h-screen flex flex-col items-center bg-white px-6 py-20 h-[86vh] w-[90vw]">
      {/* Meet Our Team Section */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] leading-tight">Meet Our Team</h2>
          <p className="text-base mb-8 sm:text-lg text-gray-600 leading-relaxed">
            Need expert guidance or have a project in mind? Our management team is here to help.
            Whether you're looking for custom software solutions, AI-driven strategies, or digital
            transformation consulting, we’re ready to collaborate.
          </p>
          <a href="#" className="font-semibold text-lg sm:text-base">
            <span className="text-xl font-bold bg-gradient-to-r from-[#EDC4E4] via-[#6B00BE] to-[#D075DC] bg-clip-text text-transparent">
              Get in Touch →
            </span>
          </a>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <img
            src={Meet}
            alt="Team"
            className="rounded-lg shadow-md object-cover w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[350px] transition-transform duration-300 hover:scale-205"
          />
          <div className="mt-6 text-center md:text-left max-w-xs sm:max-w-sm md:max-w-md">
            <p className="italic text-gray-600 text-base sm:text-lg leading-relaxed">
              "At Webbious, we build more than software—we shape the future. Our solutions drive
              innovation, impact, and keep you ahead of the competition."
            </p>
            <p className="text-gray-900 font-bold text-lg mt-2">Pradeep</p>
            <p className="text-gray-600 text-sm">CEO & Founder of Webbious</p>
          </div>
        </div>
      </div>
      
      {/* Join Our Team Section - Single Line Layout */}
      <div 
        className="mt-20 w-full max-w-7xl flex items-center justify-between bg-cover bg-center rounded-lg p-6 text-white shadow-lg"
        style={{ backgroundImage: `url(${HiringBg})` }}
      >
        <h2 className="text-xl sm:text-2xl font-bold">We Are Hiring – Join Our Team!</h2>
        <p className="hidden sm:block text-lg">Grow your career with Webbious! Be part of an innovative and dynamic team.</p>
        <a
          href="#"
          className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
    </div>
  );
};

export default Team;

