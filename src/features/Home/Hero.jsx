import React from 'react';
import { Helmet } from "react-helmet-async";
import { FaApple } from "react-icons/fa";
import { Users, ClipboardList } from "lucide-react";
import officeImage from "../../assets/images/heroImage.png";
import { VscLightbulbSparkle } from 'react-icons/vsc';
import { PiTrendUpFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <Helmet>
        <title>Webbious | Cutting-Edge Software & AI Solutions</title>
        <meta name="description" content="Webbious delivers modern software, AI, and digital solutions to empower businesses online. Explore our capabilities." />
        <link rel="canonical" href="https://webbious.com/" />
        <meta property="og:title" content="Webbious | Your Tech Partner" />
        <meta name="keywords" content="Web development company, AI software solutions, custom web apps, full-stack development, frontend backend services, react js development, modern web solutions, digital transformation services" />
        <meta property="og:description" content="Explore innovative tech services—from AI tools to web development—by Webbious." />
        <meta property="og:url" content="https://webbious.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Home",
      "url": "https://webbious.com",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://webbious.com"
          }
        ]
      }
    }
  `}</script>
      </Helmet>

      <div className="relative min-h-screen bg-[#FDFDFD] overflow-hidden flex items-center justify-center pt-14 pb-12 lg:pt-8 lg:pb-24">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column */}
          <div className="w-full lg:w-[50%] flex flex-col items-center text-center lg:items-start lg:text-left z-10 lg:pr-8 xl:pr-12">
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100/80 rounded-full mb-8">
              <PiTrendUpFill className="w-4 h-4 text-black" />
              <span className="text-sm font-semibold text-gray-900">Innovative Digital Solutions for Growing Brands</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-gray-900 leading-[1.1] mt-0">
              Empowering Businesses with<br className="hidden sm:block" /> <span className="sm:hidden"> </span>
              <span className='text-[#1877F2]'>Next-Gen</span> Software,<br className="hidden sm:block" /> <span className="sm:hidden"> </span>
              <span className="font-medium">UI/UX</span> & Digital Solutions.
            </h1>

            {/* Subheading */}
            <p className="text-gray-500 text-base md:text-lg mt-5 max-w-[440px] leading-relaxed">
              We craft modern websites, intuitive user experiences, and custom software solutions that turn ideas into impactful digital products.
            </p>

            {/* Input & Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <Link to="/contact"><button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                Start To Grow
              </button></Link>
            </div>

            {/* Avatars */}
            <div className="mt-10 flex flex-col lg:flex-row items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=47" className="w-10 h-10 rounded-full border-2 border-[#FDFDFD] object-cover" alt="avatar 1" />
                <img src="https://i.pravatar.cc/100?img=32" className="w-10 h-10 rounded-full border-2 border-[#FDFDFD] object-cover" alt="avatar 2" />
                <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full border-2 border-[#FDFDFD] object-cover" alt="avatar 3" />
              </div>
              <p className="text-sm font-medium text-gray-900 text-center lg:text-left">
                <span className="font-bold">Trusted for</span>{" "}
                <span className="text-gray-400 font-normal">web design, product UI/UX, software development, and digital transformation.</span>
              </p>
            </div>
          </div>

          {/* Right Column - Hidden on mobile, visible on lg screens and up */}
          <div className="hidden lg:flex w-full lg:w-[50%] relative z-0 mt-12 lg:mt-0 justify-center lg:justify-end">
            {/* The image container */}
            <div className="relative w-full max-w-[500px] lg:max-w-none xl:max-w-[650px] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/4.5] overflow-visible flex-shrink-0">
              <img
                src={officeImage}
                alt="Office setting"
                className="w-full h-full object-cover rounded-[32px] sm:rounded-[40px] shadow-2xl"
              />

              {/* Floating Card 1: Collaboration */}
              <div className="absolute -left-4 sm:-left-12 lg:-left-20 xl:-left-28 top-[40%] bg-white p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 sm:gap-5 w-60 sm:w-72 xl:w-[300px] transform -translate-y-1/2 transition-transform hover:-translate-y-[52%] cursor-pointer">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-[15px]">Collaboration</h3>
                  <p className="text-[13px] text-gray-500 mt-1 leading-snug">Collab with others for content creation</p>
                </div>
                <div className="text-gray-800 shrink-0">
                  <Users size={24} strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating Card 2: Project */}
              <div className="absolute left-2 sm:-left-4 lg:-left-8 xl:-left-16 top-[65%] bg-white p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 sm:gap-5 w-56 sm:w-64 xl:w-[280px] transform -translate-y-1/2 transition-transform hover:-translate-y-[52%] cursor-pointer">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-[14px] sm:text-[15px]">Project</h3>
                  <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1 leading-snug">Create projects to hire talents</p>
                </div>
                <div className="text-gray-800 shrink-0">
                  <ClipboardList size={22} strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating Card 3: AI Solutions (Top Right) */}
              <div className="absolute right-0 sm:-right-8 lg:-right-12 xl:-right-16 top-[20%] bg-white p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 sm:gap-5 w-60 sm:w-72 xl:w-[300px] transform -translate-y-1/2 transition-transform hover:-translate-y-[52%] cursor-pointer">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-[14px] sm:text-[15px]">AI Solutions</h3>
                  <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1 leading-snug">Smart models to automate tasks</p>
                </div>
                <div className="text-gray-800 shrink-0">
                  <VscLightbulbSparkle size={24} />
                </div>
              </div>

              {/* Floating Card 4: Scalability (Bottom Right) */}
              <div className="absolute right-4 sm:-right-0 lg:-right-4 xl:-right-8 top-[85%] bg-white p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 sm:gap-5 w-56 sm:w-64 xl:w-[280px] transform -translate-y-1/2 transition-transform hover:-translate-y-[52%] cursor-pointer">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-[14px] sm:text-[15px]">Scalability</h3>
                  <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1 leading-snug">Built to scale with your business</p>
                </div>
                <div className="text-gray-800 shrink-0">
                  <PiTrendUpFill size={24} />
                </div>
              </div>

              {/* Pagination Dots (bottom) */}
              {/* <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2 pb-4">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
