import React from "react";
import Meet from "./img/MeetOurTeam.jpg";
import HiringBg from "./img/Hiring.jpg";

const Team = () => {
  return (
    <div className="team flex items-center justify-center">
      <div className="min-h-screen flex flex-col items-center bg-white px-4 sm:px-6 py-10 sm:py-20 w-full max-w-[1200px]">
        
        {/* Meet Our Team Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A4A4A] leading-tight">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Need expert guidance or have a project in mind? Our management team is here to help.
              Whether you're looking for custom software solutions, AI-driven strategies, or digital
              transformation consulting, we’re ready to collaborate.
            </p>
            <a href="#" className="font-semibold text-base sm:text-lg">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#EDC4E4] via-[#6B00BE] to-[#D075DC] bg-clip-text text-transparent">
                Get in Touch →
              </span>
            </a>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <img
              src={Meet}
              alt="Team"
              className="rounded-lg shadow-md object-cover w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-6 text-center md:text-left max-w-sm sm:max-w-md">
              <p className="italic text-gray-600 text-sm sm:text-base leading-relaxed">
                "At Webbious, we build more than software—we shape the future. Our solutions drive
                innovation, impact, and keep you ahead of the competition."
              </p>
              <p className="text-gray-900 font-bold text-base sm:text-lg mt-2">Pradeep</p>
              <p className="text-gray-600 text-sm">CEO & Founder of Webbious</p>
            </div>
          </div>
        </div>

        {/* Join Our Team Section */}
        <div
          className="mt-16 sm:mt-20 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-cover bg-center rounded-lg p-6 text-white shadow-lg"
          style={{ backgroundImage: `url(${HiringBg})` }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            We Are Hiring – Join Our Team!
          </h2>
          <p className="text-sm sm:text-base md:text-lg hidden sm:block">
            Grow your career with Webbious! Be part of an innovative and dynamic team.
          </p>
          <a
            href="#"
            className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 text-sm sm:text-base"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
