import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import officeImage from "../../assets/images/heroImage.png";
import UnderLine from "../../assets/images/underLine.png"
import { AiFillThunderbolt } from "react-icons/ai";

export default function Hero() {
  return (
    <div className="relative min-h-[75vh] bg-white overflow-hidden">
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
                <img src={UnderLine} alt="Logo" className="h-[15px] mt-5 w-auto hidden md:block" />
              </span>
            </h1>
            <div className="mt-20 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <a href="/contact" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center px-5 py-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition sm:bg-black sm:border sm:border-black sm:text-white">
                  <span className="p-2 sm:p-2 mr-4 sm:mr-5 rounded-full bg-black sm:bg-white ">
                    {/* <img
                      width="24"
                      height="24"
                      className="block sm:hidden invert" // icon white in mobile
                      src="https://img.icons8.com/material-outlined/24/000000/lightning-bolt--v1.png"
                      alt="lightning-bolt"
                    />
                    <img
                      width="24"
                      height="24"
                      className="hidden sm:block" // icon black in desktop
                      src="https://img.icons8.com/material-outlined/24/000000/lightning-bolt--v1.png"
                      alt="lightning-bolt"
                    /> */}<span className='width-24 height-24 bg-white text-black'><AiFillThunderbolt /></span>
                   
                  </span>
                  <span className="sm:font-bold btn-shine text-white"> Start To Grow</span>
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}



