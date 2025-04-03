import React from "react";
import ContactI from "./img/contact.jpg"
import ContactU from "./img/contacts.jpg"


const ContactUs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-4xl flex">
                {/* Left Section */}
                <div className="w-1/2 pr-8">
                    <h1 className="text-3xl font-bold text-purple-600 mb-4">Contact our team</h1>
                    <p className="text-gray-600 mb-6">
                        Have questions about our product or scaling your business? We're here for you!
                        Chat with our team <span className="text-purple-600 font-bold">24/7</span> and get onboard in just 5 minutes.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <img src={ContactU} alt="A representative assisting a customer" className="rounded-lg w-full md:w-100 pl-2" />
                        <img src={ContactI} alt="Team members collaborating on a project" className="rounded-lg w-full md:w-full p-10" />
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full p-2 border rounded-lg" />
                        <input type="email" placeholder="Email" className="w-full p-2 border rounded-lg" />
                        <input type="tel" placeholder="Phone" className="w-full p-2 border rounded-lg" />

                        <div className="flex flex-wrap gap-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox" /> <span>Web Development</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox" /> <span>UI/UX Design</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-purple-600" /> <span className="text-purple-600">Brand Kit</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox" /> <span>Others</span>
                            </label>
                        </div>

                        <textarea placeholder="Message" className="w-full p-16 border rounded-lg"></textarea>
                        <button className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700">Get a Quote</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
