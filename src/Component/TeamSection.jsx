import React from "react";

const team = [
    {
        name: "Pradeep",
        role: "Founder & CEO",
        desc: "Driving innovation and strategic leadership across all fronts of the organization.",
        image: "https://ui-avatars.com/api/?name=Pradeep&background=ccc&color=fff&rounded=true",
    },
    {
        name: "Muthu",
        role: "Cheif Operating Officer",
        desc: "Ensures smooth daily operations and aligns teams with the company's goals.",
        image: "https://ui-avatars.com/api/?name=Muthu&background=ccc&color=fff&rounded=true",
    },
    {
        name: "Naveen",
        role: "Cheif Techinal Officer",
        desc: "Leads the tech roadmap and oversees the engineering and product innovation.",
        image: "https://ui-avatars.com/api/?name=Naveen&background=ccc&color=fff&rounded=true",
    },
    {
        name: "Rajesh",
        role: "Lead Programmer",
        desc: "Heads backend architecture, ensuring scalability and security of systems.",
        image: "https://ui-avatars.com/api/?name=Rajesh&background=ccc&color=fff&rounded=true",
    },
    {
        name: "Ajith Kumar",
        role: "Android Developer",
        desc: "Designs and delivers seamless mobile experiences for Android users.",
        image: "https://ui-avatars.com/api/?name=Ajith+Kumar&background=ccc&color=fff&rounded=true",
    },
];


export default function TeamSection() {
    return (
        <div className="bg-gradient-to-br from-[#ecf4ff] to-[#ffffff] py-24 mt-20 px-4 sm:px-6 lg:px-20 rounded-3xl">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-block px-3 py-1 text-xs font-semibold bg-[#e0f2fe] text-[#0f62fe] rounded-full mb-4">
                    We’re Hiring!
                </div>
                <h2 className="text-4xl font-extrabold text-[#111827] mb-2">Let’s Meet Our Team</h2>
                <p className="text-[#6b7280] mb-8 max-w-2xl mx-auto">
                    Gravida in fermentum et sollicitudin ac orci phasellus egestas. Molestie a iaculis at erat pellentesque adipiscing commodo.
                </p>
                <div className="flex justify-center gap-4 mb-12">
                    <button className="px-5 py-2 border border-gray-300 rounded-full font-medium text-[#111827] hover:bg-gray-100 transition">
                        About Us
                    </button>
                    <a href="/careers"><button className="px-5 py-2 bg-[#0f62fe] text-white rounded-full font-medium hover:bg-[#0053d4] transition">
                        Job Openings
                    </button></a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-[#f8f9fa] p-6 rounded-[28px] shadow-none text-center border border-[#f1f3f4] hover:shadow-md transition"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-base font-semibold text-[#202124]">{member.name}</h3>
                            <p className="text-sm text-[#5f36f5] font-medium mb-2">{member.role}</p>
                            <p className="text-sm text-[#5f6368] mb-4">{member.desc}</p>
                            <div className="flex justify-center gap-5 text-[#5f6368] text-xl">
                                <a href="#" aria-label="X">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 8a6 6 0 016 6v6h-3v-6a3 3 0 00-6 0v6h-3v-6a6 6 0 016-6z" />
                                        <path d="M2 9h3v12H2z" />
                                        <circle cx="3.5" cy="4.5" r="1.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
