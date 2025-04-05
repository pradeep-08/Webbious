import React from "react";

const AICard = () => {
  return (
    <div className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
          The Power of Intelligent Tools
        </h2>
        <p className="text-md md:text-xl text-gray-600 mt-4">
          Our platform offers a comprehensive suite of
          <span className="text-blue-600 font-bold"> AI-Powered </span>
          solutions designed to elevate your business.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 p-4 md:h-[700px]">
        {/* AI-Powered Web Development */}
        <div className="md:col-span-2 bg-purple-100 p-4 md:p-6 rounded-2xl shadow flex items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              AI-Powered Web Development
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Next-Gen AI Websites & Web Apps
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              We build intelligent, responsive websites powered by AI-driven
              automation, personalization, and real-time user experience
              enhancements.
            </p>
          </div>
        </div>

        {/* AI Software & App Development */}
        <div className="md:col-span-2 md:row-span-2 bg-gray-900 text-white p-4 md:p-6 rounded-2xl shadow flex items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              AI Software & App Development
            </h3>
            <p className="text-sm text-gray-300 mb-2">
              Smart Software & Mobile Apps with AI
            </p>
            <p className="text-gray-200 text-sm md:text-base">
              From AI-powered mobile apps (APK/iOS) to advanced business
              software, we integrate intelligent automation, predictive
              analytics, and machine learning to build powerful, future-ready
              solutions that drive efficiency and innovation.
            </p>
          </div>
        </div>

        {/* AI Chatbots & Virtual Assistants */}
        <div className="md:col-span-2 bg-orange-100 p-4 md:p-6 rounded-2xl shadow flex items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              AI Chatbots & Virtual Assistants
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              24/7 AI Chatbots for Instant Support
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Enhance customer engagement with AI chatbots that provide
              real-time assistance, automate queries, and learn from
              interactions for smarter responses.
            </p>
          </div>
        </div>

        {/* AI-Driven E-commerce Solutions */}
        <div className="bg-gray-100 p-4 md:p-6 rounded-2xl shadow flex items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
          <div>
            <h3 className="font-bold text-lg md:text-xl">
            AI E-Commerce
            </h3>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
            Boost sales with smart recommendations, automated inventory, and chatbots that enhance shopping experiences.
            </p>
          </div>
        </div>

        {/* Intelligent UX/UI */}
        <div className="bg-blue-50 p-4 md:p-6 rounded-2xl shadow flex items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
          <div>
            <h3 className="font-bold text-lg md:text-xl">
              Intelligent UX/UI
            </h3>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              Use AI to analyze behavior, optimize interfaces, and personalize
              experiences for better retention and conversion.
            </p>
          </div>
        </div>

        {/* AI-Powered Digital Marketing */}
        <div className="md:col-span-2 bg-purple-200 p-4 md:p-6 rounded-2xl shadow flex items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              AI-Powered Digital Marketing
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Automated Marketing & AI SEO
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Maximize reach with AI-driven SEO, personalized ad targeting, and
              automated content strategies that boost traffic and conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICard;
