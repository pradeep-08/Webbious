import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import officeImage from "./img/heroImage.png";
import UnderLine from "./img/underLine.png"

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

          <div className="bg-black h-[400px] bg-opacity-40 p-6 rounded-xl sm:bg-transparent sm:p-0 sm:rounded-none transition-all duration-300">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Empowering Businesses with
              <br />

              <span className="text-white sm:text-blue-600">
                <TypeAnimation
                  sequence={[
                    'Next-Gen', 4000,
                    'Modern', 4000,
                    'Smart', 4000,
                    'Innovative', 4000,
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
                <span className="text-white sm:text-blue-600">.</span>
                {/* Underline effect */}
                <img src={UnderLine} alt="Logo" className="h-[15px] mt-5 w-auto hidden md:block" />
              </span>
            </h1>

            <div className="mt-8 sm:mt-5">
              <button className="border mt-10  text-white sm:text-blue-600 sm:border-blue-600 px-6 py-3  rounded-md font-medium transition-all duration-300">
                Grow Your Business Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}



