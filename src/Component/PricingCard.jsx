
import React from "react";

const PricingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-2 md:px-4 py-6 md:py-10 bg-white">
      
      {/* Web Development */}
      <div className="flex flex-col w-full max-w-xs md:max-w-none border border-blue-200 rounded-2xl px-4 py-6 md:px-8 md:py-12 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 min-h-[340px] md:min-h-[480px] mx-auto">
        <h2 className="text-xl md:text-[32px] leading-7 md:leading-[40px] font-semibold text-[#1D2939] mb-4 md:mb-8">
          Web<br />Development
        </h2>
        <button className="w-full mb-6 md:mb-8 text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">
          Get Started
        </button>
        <div className="border-t border-dotted border-[#D0D5DD] mb-6 md:mb-10 w-full h-0"></div>
        <ul className="text-[#344054] text-sm md:text-base space-y-4 md:space-y-6">
          <li className="flex items-start gap-2"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Custom, fast & SEO-friendly websites</span></li>
          <li className="flex items-start gap-2"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Mobile-responsive & high-performance</span></li>
          <li className="flex items-start gap-2"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">E-commerce & CMS integration</span></li>
          <li className="flex items-start gap-2"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Secure hosting & maintenance</span></li>
        </ul>
      </div>

      {/* Complete Brand Kit */}
      <div className="flex flex-col w-full max-w-xs md:max-w-none border border-blue-200 rounded-2xl shadow-lg hover:shadow-blue-300 transition-all duration-300 min-h-[340px] md:min-h-[480px] mx-auto overflow-hidden">
        <div className="bg-[#1570EF] text-white px-4 pt-6 pb-4 md:px-6 md:pt-8 md:pb-6">
          <div className="text-xs font-medium text-[#1570EF] bg-[#EFF8FF] inline-block px-3 py-1 rounded-full mb-3 md:mb-4">Most Popular</div>
          <h2 className="text-lg md:text-[28px] leading-6 md:leading-9 font-medium">Complete Brand<br />Kit</h2>
        </div>
        <div className="px-4 py-6 md:px-8 md:py-8 bg-white text-[#475467]">
          <ul className="text-sm space-y-4 md:space-y-6 mb-6 md:mb-10">
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Custom Logo Design</span></li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Website Design & Development</span></li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">UI/UX Design</span></li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Brand Identity Assets</span></li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Social Media & Marketing Materials</span></li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Brand Strategy & Positioning</span></li>
          </ul>
          <button className="w-full text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="flex flex-col w-full max-w-xs md:max-w-none border border-blue-200 rounded-2xl px-4 py-6 md:px-8 md:py-12 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 min-h-[340px] md:min-h-[480px] mx-auto">
        <h2 className="text-xl md:text-[32px] leading-7 md:leading-[40px] font-semibold text-[#1D2939] mb-4 md:mb-8">
          UI/UX<br />Design
        </h2>
        <button className="w-full mb-6 md:mb-8 text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">
          Get Started
        </button>
        <div className="border-t border-dotted border-[#D0D5DD] mb-6 md:mb-10 w-full h-0"></div>
        <ul className="text-[#344054] text-sm md:text-base space-y-4 md:space-y-6">
          <li className="flex items-start gap-2"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">User-friendly & visually stunning designs</span></li>
          <li className="flex items-start gap-2"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Wireframing & high-fidelity prototypes</span></li>
          <li className="flex items-start gap-2"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Mobile & web app UI/UX</span></li>
          <li className="flex items-start gap-2"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Conversion-focused & accessible designs</span></li>
        </ul>
      </div>
    </div>
  );
};



export default PricingPage;


