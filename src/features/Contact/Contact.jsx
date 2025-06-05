// import React from "react";
// import ContactU from "../../assets/images/contacts.jpg"
// import ContactI from "../../assets/images/contact.jpg"

// const ContactUsCard = () => {
//     return (
//         <div className=" min-h-[85vh] flex items-center justify-center">
//             <div className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-[0px_1px_18px_-3px_rgba(0,_0,_0,_0.1)] w-full max-w-4xl flex flex-col md:flex-row">

//                 <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
//                     <h2 className="text-3xl sm:text-3xl font-bold text-purple-600 mb-4">Contact our team</h2>
//                     <p className="text-gray-600 mb-4 sm:mb-6">
//                         Have questions about our product or scaling your business? We're here for you!
//                         Chat with our team <span className="text-purple-600 font-bold">24/7</span> and get onboard in just 5 minutes.
//                     </p>
//                     <div className="hidden md:flex flex-wrap gap-4">
//                         <img src={ContactU} alt="A representative assisting a customer" className="rounded-lg w-1/2" />
//                         <img src={ContactI} alt="Team members collaborating on a project" className="rounded-lg w-1/2" />
//                     </div>
//                 </div>

//                 <div className="w-full md:w-1/2 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
//                     <form className="space-y-4">
//                         <input type="text" placeholder="Name" className="w-full p-2 border rounded-lg" />
//                         <input type="email" placeholder="Email" className="w-full p-2 border rounded-lg" />
//                         <input type="tel" placeholder="Phone" className="w-full p-2 border rounded-lg" />

//                         <div className="flex flex-wrap gap-2">
//                             <label className="flex items-center space-x-2">
//                                 <input type="checkbox" className="form-checkbox" /> <span>Web Development</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input type="checkbox" className="form-checkbox" /> <span>UI/UX Design</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input type="checkbox" className="form-checkbox text-purple-600" /> <span className="text-purple-600">Brand Kit</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input type="checkbox" className="form-checkbox" /> <span>Others</span>
//                             </label>
//                         </div>

//                         <textarea placeholder="Message" className="w-full p-4 sm:p-6 border rounded-lg"></textarea>
//                         <button className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700">Get a Quote</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactUsCard;


import React from "react";
import { motion } from "framer-motion";
import ContactU from "../../assets/images/contacts.jpg";
import ContactI from "../../assets/images/contact.jpg";

const ContactUsCard = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-white via-purple-50 to-white px-4 py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-xl w-full max-w-6xl grid md:grid-cols-2 gap-8 p-6 md:p-10"
      >
        {/* LEFT SECTION */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-purple-700 mb-4">
            Contact Our Team
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Questions about our services or scaling your product?
            <br />
            Our team is available <span className="text-purple-700 font-bold">24/7</span> to help!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ContactU}
              alt="Representative"
              className="rounded-xl object-cover h-32 sm:h-40 w-full shadow-sm"
            />
            <img
              src={ContactI}
              alt="Team collaboration"
              className="rounded-xl object-cover h-32 sm:h-40 w-full shadow-sm"
            />
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-purple-50 p-6 rounded-2xl shadow-inner"
        >
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-500"
            />

            {/* Services */}
            <div className="flex flex-wrap gap-3">
              {["Web Dev", "UI/UX", "Brand Kit", "Others"].map((service) => (
                <label key={service} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-purple-600" />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-purple-600 text-white font-semibold p-3 rounded-lg hover:bg-purple-700 transition-all duration-300"
            >
              Get a Quote
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUsCard;
