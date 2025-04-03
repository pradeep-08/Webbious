import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Web Development",
    features: [
      "Custom, fast & SEO-friendly websites",
      "Mobile-responsive & high-performance",
      "E-commerce & CMS integration",
      "Secure hosting & maintenance",
    ],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    title: "Complete Brand Kit",
    features: [
      "Custom Logo Design",
      "Website Design & Development",
      "UI/UX Design",
      "Brand Identity Assets",
      "Social Media & Marketing Materials",
      "Brand Strategy & Positioning",
    ],
    buttonText: "Contact Sales",
    highlight: true,
  },
  {
    title: "UI/UX Design",
    features: [
      "User-friendly & visually stunning designs",
      "Wireframing & high-fidelity prototypes",
      "Mobile & web app UI/UX",
      "Conversion-focused & accessible designs",
    ],
    buttonText: "Get Started",
    highlight: false,
  },
];

const PricingPage = () => {
  return (
    <div className="price flex  items-center justify-center ">
    <div className="min-h-screen flex flex-col items-center py-6 px-6 bg-gray-50  h-[86vh] w-[90vw]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Choose Your <span className="text-blue-600">Plan</span>
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mb-6">
        Select the best package that suits your business needs. Our plans are designed to help you grow efficiently.
      </p>

      <div className="grid gap-12 w-full max-w-6xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 text-center border 
            ${plan.highlight ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-white"}`}
          >
            {plan.highlight && (
              <p className="text-sm text-blue-600 font-semibold mb-2">Most Popular</p>
            )}
            <h3 className={`text-2xl font-semibold mb-4 ${plan.highlight ? "text-blue-700" : "text-gray-900"}`}>
              {plan.title}
            </h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-green-500" /> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg border font-semibold transition duration-300 
              ${plan.highlight ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700" : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PricingPage;
