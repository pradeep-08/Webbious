import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import officeImage from "./img/heroImage.png";

// function Hero() {
//   return (
//     <section 
//       className="relative flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between pb-16 px-16 py-16 bg-gray-100 bg-cover bg-center"
//       style={{ backgroundImage: `url(${officeImage})` }}
//     >
//       {/* Text Section */}
//       <div className="relative bg-black/50 p-6 rounded-lg text-center md:text-left max-w-lg">
//         <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
//           Empowering Businesses with Next-Gen Software & Digital Solutions
//         </h2>
//         <p className="text-lg text-gray-200 mb-6">
//           Discover cutting-edge tools and services tailored to boost productivity and help your business thrive in today’s digital landscape.
//         </p>
//         <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
//           Grow Your Business Now
//         </button>
//       </div>

//       {/* Right Image for Desktop View */}
//       <img 
//         src={officeImage} 
//         alt="Office setting" 
//         className="hidden md:block w-full md:w-1/2 rounded-lg shadow-lg"
//       />
//     </section>
//   );
// }

// export default Hero;


// import React from "react";
export default function Hero() {
  return (
    <div className="relative min-h-[75vh] bg-white overflow-hidden">
      {/* Image Content as background */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 md:w-2/3 sm:w-full z-0">
        <img
          src={officeImage}
          alt="Office setting"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center lg:justify-start min-h-[75vh] px-6 lg:px-24 py-12">
        <div className="max-w-4xl w-full text-center lg:text-left text-gray-100 sm:text-black transition-colors duration-500">

          <div className="bg-black bg-opacity-40 p-6 rounded-xl sm:bg-transparent sm:p-0 sm:rounded-none transition-all duration-300">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Empowering Businesses with
              <br />

              <span className="text-white sm:text-blue-600">
                <TypeAnimation
                  sequence={[
                    'Next-Gen', 4000,
                    'Modern', 4000,
                    'Smart', 4000,
                    'Next-Gen', 4000,
                  ]}
                  wrapper="span"
                  speed={3}
                  repeat={Infinity}
                />
              </span>{" "}
              <span className="transition-colors duration-500">
                Software & Digital
              </span>
              <br />
              <span className="relative inline-block">
                <span className="transition-colors duration-500">
                  Solutions
                </span>
                <span className="text-blue-600">.</span>
                {/* Underline effect */}
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-200 -z-10 transform -translate-y-1/2 rotate-1"></span>
              </span>
            </h1>

            <div className="mt-8">
              <button className="border text-white sm:text-blue-600 sm:border-blue-600 px-6 py-3 rounded-md font-medium transition-all duration-300">
                Grow Your Business Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}



