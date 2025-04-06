// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const pricingPlans = [
//   {
//     title: "Web Development",
//     features: [
//       "Custom, fast & SEO-friendly websites",
//       "Mobile-responsive & high-performance",
//       "E-commerce & CMS integration",
//       "Secure hosting & maintenance",
//     ],
//     buttonText: "Get Started",
//     highlight: false,
//   },
//   {
//     title: "Complete Brand Kit",
//     features: [
//       "Custom Logo Design",
//       "Website Design & Development",
//       "UI/UX Design",
//       "Brand Identity Assets",
//       "Social Media & Marketing Materials",
//       "Brand Strategy & Positioning",
//     ],
//     buttonText: "Contact Sales",
//     highlight: true,
//   },
//   {
//     title: "UI/UX Design",
//     features: [
//       "User-friendly & visually stunning designs",
//       "Wireframing & high-fidelity prototypes",
//       "Mobile & web app UI/UX",
//       "Conversion-focused & accessible designs",
//     ],
//     buttonText: "Get Started",
//     highlight: false,
//   },
// ];

// const PricingPage = () => {
//   return (
//     <div className="price flex  items-center justify-center ">
//     <div className="min-h-screen flex flex-col items-center py-6 px-6 bg-gray-50  h-[86vh] w-[90vw]">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//         Choose Your <span className="text-blue-600">Plan</span>
//       </h2>
//       <p className="text-gray-600 text-center max-w-2xl mb-6">
//         Select the best package that suits your business needs. Our plans are designed to help you grow efficiently.
//       </p>

//       <div className="grid gap-12 w-full max-w-6xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {pricingPlans.map((plan, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 text-center border 
//             ${plan.highlight ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-white"}`}
//           >
//             {plan.highlight && (
//               <p className="text-sm text-blue-600 font-semibold mb-2">Most Popular</p>
//             )}
//             <h3 className={`text-2xl font-semibold mb-4 ${plan.highlight ? "text-blue-700" : "text-gray-900"}`}>
//               {plan.title}
//             </h3>
//             <ul className="text-gray-600 mb-6 space-y-2">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="flex items-center justify-center gap-2">
//                   <FaCheckCircle className="text-green-500" /> {feature}
//                 </li>
//               ))}
//             </ul>
//             <button
//               className={`w-full py-2 rounded-lg border font-semibold transition duration-300 
//               ${plan.highlight ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700" : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"}`}
//             >
//               {plan.buttonText}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default PricingPage;

import React from "react";

const PricingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-10 bg-white">
      {/* Web Development */}
      <div className="flex flex-col w-full border border-blue-200 rounded-2xl px-8 py-12 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 min-h-[480px]">
        <h2 className="text-[32px] leading-[40px] font-semibold text-[#1D2939] mb-8 ">Web<br />Development</h2>
        <button className="w-full mb-8 text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">Get Started</button>
        <div className="border-t border-dotted border-[#D0D5DD] mb-10 w-full h-0"></div>
        <ul className="text-[#344054] text-base space-y-12">
          <li className="flex items-start gap-3"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Custom, fast & SEO-friendly websites</span></li>
          <li className="flex items-start gap-3"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Mobile-responsive & high-performance</span></li>
          <li className="flex items-start gap-3"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">E-commerce & CMS integration</span></li>
          <li className="flex items-start gap-3"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Secure hosting & maintenance</span></li>
        </ul>
      </div>

      {/* Complete Brand Kit */}
      <div className="flex flex-col justify-between w-full border border-blue-200 rounded-2xl shadow-lg hover:shadow-blue-300 transition-all duration-300 min-h-[480px] overflow-hidden">
        <div className="bg-[#1570EF] text-white px-6 pt-8 pb-6">
          <div className="text-xs font-medium text-[#1570EF] bg-[#EFF8FF] inline-block px-3 py-1 rounded-full mb-4">Most Popular</div>
          <h2 className="text-[28px] leading-9 font-medium">Complete Brand<br />Kit</h2>
        </div>
        <div className="px-8 py-8 bg-white text-[#475467]">
          <ul className="text-sm space-y-6 mb-10">
            <li className="flex items-start gap-3"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Custom Logo Design</span></li>
            <li className="flex items-start gap-3"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Website Design & Development</span></li>
            <li className="flex items-start gap-3"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">UI/UX Design</span></li>
            <li className="flex items-start gap-3"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Brand Identity Assets</span></li>
            <li className="flex items-start gap-3"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Social Media & Marketing Materials</span></li>
            <li className="flex items-start gap-3"><span className="text-[#1570EF] text-lg">✔</span> <span className="font-medium">Brand Strategy & Positioning</span></li>
          </ul>
          <button className="w-full text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">Contact Sales</button>
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="flex flex-col w-full border border-blue-200 rounded-2xl px-8 py-12 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 min-h-[480px]">
        <h2 className="text-[32px] leading-[40px] font-semibold text-[#1D2939] mb-8">UI/UX<br />Design</h2>
        <button className="w-full mb-8 text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">Get Started</button>
        <div className="border-t border-dotted border-[#D0D5DD] mb-10 w-full h-0"></div>
        <ul className="text-[#344054] text-base space-y-12">
          <li className="flex items-start gap-3"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">User-friendly & visually stunning designs</span></li>
          <li className="flex items-start gap-3"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Wireframing & high-fidelity prototypes</span></li>
          <li className="flex items-start gap-3"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Mobile & web app UI/UX</span></li>
          <li className="flex items-start gap-3"><span className="text-[#7F56D9] text-lg">✔</span> <span className="font-medium">Conversion-focused & accessible designs</span></li>
        </ul>
      </div>
    </div>
  );
};

export default PricingPage;


