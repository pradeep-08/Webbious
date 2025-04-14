import React, { useState } from 'react';
import {
    FaPaintBrush, FaCode, FaSearch, FaPenNib,
    FaChartLine, FaStar, FaCheck, FaTimes
} from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const steps = [1, 2];

const ContactUsMain = () => {
    const [step, setStep] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState(["Website design", "Website development"]);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const options = [
        { title: "Website design", description: "I need a website design.", icon: <FaPaintBrush size={24} /> },
        { title: "Website development", description: "I need a website built.", icon: <FaCode size={24} /> },
        { title: "SEO Optimization", description: "Help me grow organically.", icon: <FaChartLine size={24} /> },
        { title: "Something else", description: "We're here to help!", icon: <FaStar size={24} /> },
    ];

    const toggleOption = (title) => {
        setSelectedOptions(prev =>
            prev.includes(title) ? prev.filter(opt => opt !== title) : [...prev, title]
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-between pt-28 pb-10 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-40 max-w-screen-2xl mx-auto gap-14">

            {/* Left Side */}
            <section className="w-full max-w-md text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Hi, have a project in <span className="text-[#1a73e8]">mind</span><span className="text-[#1a73e8]">?</span>
                </h1>
                <p className="text-lg text-[#5f6368] mb-6">
                    We’d love to collaborate! Let us know what you’re after.
                </p>
                <img
                    src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Creative Workspace"
                    className="w-full rounded-xl shadow-lg object-cover max-h-[600px] hidden md:block"
                />
            </section>

            {/* Right Side */}
            <div className="w-full max-w-md">
                {/* Get Quote label */}
                <div className="hidden md:block text-center mb-3">
                    <span className="text-[#000000]  text-2xl md:text-2xl font-bold mb-4 ">Contact Us</span>
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.3 }}
                            className="w-full bg-gray-50 rounded-xl p-6 space-y-6"
                        >
                            {/* Mobile Layout */}
                            <div className="flex flex-col gap-4 md:hidden">
                                <div className="flex flex-wrap gap-4">
                                    {options.map(option => (
                                        <label key={option.title} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedOptions.includes(option.title)}
                                                onChange={() => toggleOption(option.title)}
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className={`text-sm ${option.title === "Brand Kit" ? "text-purple-600" : "text-gray-900"}`}>
                                                {option.title}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {options.map(option => {
                                    const isSelected = selectedOptions.includes(option.title);
                                    return (
                                        <div
                                            key={option.title}
                                            onClick={() => toggleOption(option.title)}
                                            className={`relative cursor-pointer p-4 border rounded-md text-center transition-all duration-300 flex flex-col items-center space-y-2 ${isSelected ? 'border-blue-600 shadow' : 'border-gray-200 hover:border-blue-400'
                                                }`}
                                        >
                                            <div className={`absolute top-3 right-3 h-5 w-5 flex items-center justify-center rounded-full border-2 ${isSelected ? 'bg-gray-700 text-white border-gray-700' : 'border-gray-400'
                                                }`}>
                                                {isSelected && <FaCheck size={12} />}
                                            </div>
                                            <div className="text-blue-600">{option.icon}</div>
                                            <h3 className="font-semibold text-gray-900">{option.title}</h3>
                                            <p className="text-sm text-gray-600">{option.description}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
                            >
                                Continue
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full bg-gray-50 rounded-xl p-6 space-y-6"
                        >
                            <div className="absolute top-4 left-4">
                                <button onClick={() => setStep(1)} className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Selected Services:</p>
                                <div className="flex flex-wrap items-center gap-2">
                                    {selectedOptions.map(service => (
                                        <span key={service} className="relative text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full pr-5">
                                            {service}
                                            <button
                                                onClick={() => toggleOption(service)}
                                                className="absolute -top-1 -right-1 text-blue-800 text-[10px] bg-white rounded-full h-4 w-4 flex items-center justify-center shadow hover:bg-gray-100"
                                            >
                                                <FaTimes />
                                            </button>
                                        </span>
                                    ))}
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-xs px-3 py-1 text-[#1a73e8] bg-blue-100 rounded-full hover:bg-blue-200 font-medium"
                                    >
                                        + Add
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition">
                                Get a Quote
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="flex gap-2 mt-10 cursor-pointer justify-center">
                    {steps.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setStep(i + 1)}
                            className={`h-3 w-10 rounded-full transition-all duration-300 ${step === i + 1 ? 'bg-blue-600' : 'bg-blue-100'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactUsMain;
