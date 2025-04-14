import React, { useState } from "react";

const PricingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleOpenPopup = (planName) => {
    setSelectedPlan(planName);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({ name: "", email: "", number: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", number: "", message: "" });
    }, 3000);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-2 md:px-4 py-6 md:py-10 bg-white">

        {/* Web Development Card */}
        <div className="flex flex-col w-full max-w-xs md:max-w-none border border-blue-200 rounded-2xl px-4 py-6 md:px-8 md:py-12 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 min-h-[340px] md:min-h-[480px] mx-auto">
          <h2 className="text-xl md:text-[32px] leading-7 md:leading-[40px] font-semibold text-[#1D2939] mb-4 md:mb-8">Web<br />Development</h2>
          <button onClick={() => handleOpenPopup("Web Development")} className="w-full mb-6 md:mb-8 text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">
            Get Started
          </button>
          <div className="border-t border-dotted border-[#D0D5DD] mb-6 md:mb-10 w-full h-0"></div>
          <ul className="text-[#344054] text-sm md:text-base space-y-4 md:space-y-6">
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Custom, fast & SEO-friendly websites</li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Mobile-responsive & high-performance</li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> E-commerce & CMS integration</li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Secure hosting & maintenance</li>
          </ul>
        </div>

        {/* Brand Kit Card */}
        <div className="flex flex-col w-full max-w-xs md:max-w-none border border-blue-200 rounded-2xl shadow-lg hover:shadow-blue-300 transition-all duration-300 min-h-[340px] md:min-h-[480px] mx-auto overflow-hidden">
          <div className="bg-[#1570EF] text-white px-4 pt-6 pb-4 md:px-6 md:pt-8 md:pb-6">
            <div className="text-xs font-medium text-[#1570EF] bg-[#EFF8FF] inline-block px-3 py-1 rounded-full mb-3 md:mb-4">Most Popular</div>
            <h2 className="text-lg md:text-[28px] leading-6 md:leading-9 font-medium">Complete Brand<br />Kit</h2>
          </div>
          <div className="px-4 py-6 md:px-8 md:py-8 bg-white text-[#475467]">
            <ul className="text-sm space-y-4 md:space-y-6 mb-6 md:mb-10">
              <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Custom Logo Design</li>
              <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Website Design & Development</li>
              <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> UI/UX Design</li>
              <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Brand Identity Assets</li>
              <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Social Media & Marketing Materials</li>
              <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Brand Strategy & Positioning</li>
            </ul>
            <button onClick={() => handleOpenPopup("Complete Brand Kit")} className="w-full text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>

        {/* UI/UX Design Card */}
        <div className="flex flex-col w-full max-w-xs md:max-w-none border border-blue-200 rounded-2xl px-4 py-6 md:px-8 md:py-12 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 min-h-[340px] md:min-h-[480px] mx-auto">
          <h2 className="text-xl md:text-[32px] leading-7 md:leading-[40px] font-semibold text-[#1D2939] mb-4 md:mb-8">UI/UX<br />Design</h2>
          <button onClick={() => handleOpenPopup("UI/UX Design")} className="w-full mb-6 md:mb-8 text-sm font-semibold text-[#1570EF] border border-[#1570EF] bg-transparent rounded-full px-6 py-3 hover:bg-[#1570EF] hover:text-white hover:shadow-md transition-all duration-300">
            Get Started
          </button>
          <div className="border-t border-dotted border-[#D0D5DD] mb-6 md:mb-10 w-full h-0"></div>
          <ul className="text-[#344054] text-sm md:text-base space-y-4 md:space-y-6">
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> User-friendly & visually stunning designs</li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Wireframing & high-fidelity prototypes</li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Mobile & web app UI/UX</li>
            <li className="flex items-start gap-2"><span className="text-[#1570EF] text-lg">✔</span> Conversion-focused & accessible designs</li>
          </ul>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-lg"
              onClick={handleClosePopup}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-center mb-2 bg-gradient-to-r from-[#EDC4E4] via-[#6B00BE] to-[#D075DC] bg-clip-text text-transparent">{selectedPlan}</h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full px-4 py-2 border rounded-md" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-2 border rounded-md" />
                <input type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="Phone (optional)" className="w-full px-4 py-2 border rounded-md" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" className="w-full px-4 py-2 border rounded-md"></textarea>
                <button type="submit" className="w-full bg-[#1570EF] text-white py-2 rounded-full font-semibold hover:bg-[#0e5fd4] transition">Submit</button>
              </form>
            ) : (
              <div className="text-center py-10">
                <h4 className="text-xl font-bold mb-2 text-[#1570EF]">Thank You, {formData.name}!</h4>
                <p className="text-gray-600">Our team will contact you soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
