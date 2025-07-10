import React, { useEffect, useState } from "react";
import muthu from "../../assets/images/muthu.jpeg"
import naveen from "../../assets/images/naveen.jpeg"
import { FaSearch } from "react-icons/fa";
import { PiHandTapBold } from "react-icons/pi";
import { TiInfoLarge } from "react-icons/ti";
import { Helmet } from "react-helmet-async";



const team = [
    {
        name: "Pradeep",
        role: "Founder & CEO",
        desc: "Driving innovation and strategic leadership across all fronts of the organization.",
        image: "https://ui-avatars.com/api/?name=Pradeep&background=ccc&color=fff&rounded=true",
    },
    {
        name: "Muthu",
        role: "Chief Operating Officer (COO)",
        desc: "Ensures smooth daily operations and aligns teams with the company's goals.",
        image: muthu,
    },
    {
        name: "Naveen",
        role: "Chief Technical Officer (CTO)",
        desc: "Leads the tech roadmap and oversees the engineering and product innovation.",
        image: naveen,
    },
    {
        name: "Rajesh",
        role: "Lead Programmer",
        desc: "Heads backend architecture, ensuring scalability and security of systems.",
        image: "https://ui-avatars.com/api/?name=Rajesh&background=ccc&color=fff&rounded=true",
    },
    {
        name: "Ajith Kumar",
        role: "Senior Android Developer",
        desc: "Designs and delivers seamless mobile experiences for Android users.",
        image: "https://ui-avatars.com/api/?name=Ajith+Kumar&background=ccc&color=fff&rounded=true",
    },
];

export default function TeamSection() {
    const [isApplyNow, setIsApplyNow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsApplyNow((prev) => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const buttonText = isApplyNow ? "Apply Now" : "Job Openings";
    const buttonIcon = isApplyNow
        ? <PiHandTapBold />
        : <FaSearch />;

    return (
        <>
            <Helmet>
                <title>Meet the Webbious Team | People Behind the Magic</title>
                <meta name="description" content="Meet our creative and technical minds. At Webbious, our people drive our success." />
                <link rel="canonical" href="https://webbious.com/team" />
                <meta name="keywords" content="Webbious team, CEO of Webbious, COO of Webbious, frontend developers, backend developers, AI engineers, software development team, leadership team Webbious, who is the CEO of Webbious, core team Webbious, tech experts, company team members, meet our developers" />
                <meta property="og:title" content="Webbious Team" />
                <meta property="og:description" content="Get to know the experts building the future of tech at Webbious." />
                <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Team",
      "url": "https://webbious.com/team",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webbious.com" },
          { "@type": "ListItem", "position": 2, "name": "Team", "item": "https://webbious.com/team" }
        ]
      }
    }
  `}</script>
            </Helmet>

            <div className="bg-gradient-to-br from-[#ffffff] to-[#ffffff] py-24 mt-20 px-4 sm:px-6 lg:px-20 rounded-3xl">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block px-3 py-1 text-xs font-semibold bg-[#e0f2fe] text-[#0f62fe] rounded-full mb-4">
                        🔥 We’re Hiring!
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A4A4A] leading-tight">
                        Let's Meet Our Team
                    </h2>
                    <p className="text-[#6b7280] mb-8 max-w-2xl mx-auto">
                        Meet the passionate team behind our innovation—driven by expertise, creativity, and a shared mission to deliver impactful solutions.
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
                        {/* <a href="/about">
                        <button className="px-5 py-2 border border-gray-300 rounded-full font-medium text-[#111827] hover:bg-gray-100 transition flex items-center gap-2">
                             <img
                                width="24"
                                height="24"
                                src="https://img.icons8.com/sf-regular-filled/50/about.png"
                                alt="about"
                            /> 
                            <TiInfoLarge />

                            About Us
                        </button>
                    </a> */}
                        <a href="/about">
                            <button className="px-5 py-2 border border-gray-300 rounded-full font-medium text-[#111827] hover:bg-gray-100 transition flex items-center gap-2">
                                <span className="text-lg"><TiInfoLarge /></span>
                                About Us
                            </button>
                        </a>

                        <a href="/careers">
                            <button className="px-5 py-2 bg-[#0f62fe] text-white rounded-full font-medium hover:bg-[#0053d4] transition flex items-center gap-2">
                                {/* <img width="16" height="16" src={buttonIcon} alt="button-icon" /> */}
                                <span className="text-white text-sm">{buttonIcon}</span>

                                {buttonText}
                            </button>
                        </a>
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

                {/* Perks & Benefits Section */}
                <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6">Perks and Benefits</h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        Our remote-first culture is built on flexibility, wellness, and growth. We offer top-tier benefits designed to support productivity, work-life balance, and long-term career success in a dynamic, inclusive environment.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            { title: "WORK FROM ANYWHERE", desc: "Enjoy the freedom of remote work with our fully distributed team model." },
                            { title: "HEALTH & WELLNESS", desc: "Comprehensive health insurance and mental wellness support for you and your family." },
                            { title: "FITNESS REWARDS", desc: "Stay active with monthly reimbursements for gym memberships or fitness apps." },
                            { title: "CUTTING-EDGE TOOLS", desc: "We equip you with the latest MacBook and premium productivity tools." },
                            { title: "GENEROUS PAID TIME OFF", desc: "Take time to recharge with 22+ vacation days and official holidays every year." },
                            { title: "LEARNING & DEVELOPMENT", desc: "Get reimbursed for courses, certifications, and conferences to boost your skills." },
                            { title: "FAMILY SUPPORT", desc: "Paid parental leave and flexible schedules for new and growing families." },
                            { title: "REMOTE WORK STIPENDS", desc: "Monthly budgets for home office setup, internet, and coffee runs." },
                            { title: "RETIREMENT SAVINGS", desc: "Contribute to 401(k) or RRSP with matching options to secure your future." },
                            { title: "SOCIAL IMPACT DAYS", desc: "Get paid time off to volunteer or support causes you're passionate about." },
                            { title: "TEAM RETREATS", desc: "Meet in person at annual off-sites to collaborate, innovate, and celebrate wins." }
                        ].map((perk, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl shadow border border-gray-100 hover:shadow-md transition">
                                <h3 className="text-sm font-semibold uppercase text-indigo-600 mb-2">{perk.title}</h3>
                                <p className="text-gray-600 text-sm">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}
