import React from 'react';
import officeImage from "./img/heroImage.png";

function Hero() {
  return (
    <section 
      className="relative flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between pb-16 px-16 py-16 bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${officeImage})` }}
    >
      {/* Text Section */}
      <div className="relative bg-black/50 p-6 rounded-lg text-center md:text-left max-w-lg">
        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          Empowering Businesses with Next-Gen Software & Digital Solutions
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Discover cutting-edge tools and services tailored to boost productivity and help your business thrive in today’s digital landscape.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Grow Your Business Now
        </button>
      </div>

      {/* Right Image for Desktop View */}
      <img 
        src={officeImage} 
        alt="Office setting" 
        className="hidden md:block w-full md:w-1/2 rounded-lg shadow-lg"
      />
    </section>
  );
}

export default Hero;
