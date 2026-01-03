import React, { useEffect, useState } from "react";
import muthu from "../../assets/images/muthu.jpeg";
import naveen from "../../assets/images/naveen.jpeg";
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
    linkedin: "https://linkedin.com/in/pradeep-t-1b97491aa",
  },
  {
    name: "Muthu",
    role: "Chief Operating Officer (COO)",
    desc: "Ensures smooth daily operations and aligns teams with the company's goals.",
    image: muthu,
    linkedin: "https://linkedin.com/in/muthu-r-a9947b276",
  },
  {
    name: "Naveen",
    role: "Chief Technical Officer (CTO)",
    desc: "Leads the tech roadmap and oversees the engineering and product innovation.",
    image: naveen,
    linkedin: "https://linkedin.com/in/naveen-raj-910a14218",
  },
  {
    name: "Rajesh",
    role: "Chief Architect",
    desc: "Designs and governs the core system architecture, ensuring high performance, scalability, security, and long-term technical vision across all platforms.",
    image: "https://ui-avatars.com/api/?name=Rajesh&background=ccc&color=fff&rounded=true",
    linkedin: "https://linkedin.com/in/rajesh-r-26070327a",
  },
  {
    name: "Ajith Kumar",
    role: "Senior Android Developer",
    desc: "Designs and delivers seamless mobile experiences for Android users.",
    image: "https://ui-avatars.com/api/?name=Ajith+Kumar&background=ccc&color=fff&rounded=true",
    linkedin: "https://linkedin.com/in/ajith-kumar-647569218",
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
  const buttonIcon = isApplyNow ? <PiHandTapBold /> : <FaSearch />;

  return (
    <>
      <Helmet>
        <title>Meet the Webbious Team | People Behind the Magic</title>
        <meta
          name="description"
          content="Meet our creative and technical minds. At Webbious, our people drive our success."
        />
        <link rel="canonical" href="https://webbious.com/team" />
        <meta
          name="keywords"
          content="Webbious team, CEO of Webbious, CTO of Webbious, Chief Architect Webbious, software development team"
        />
      </Helmet>

      <div className="bg-gradient-to-br from-[#ffffff] to-[#ffffff] py-24 mt-20 px-4 sm:px-6 lg:px-20 rounded-3xl">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-3 py-1 text-xs font-semibold bg-[#e0f2fe] text-[#0f62fe] rounded-full mb-4">
            🔥 We’re Hiring!
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A4A4A]">
            Let's Meet Our Team
          </h2>

          <p className="text-[#6b7280] mb-8 max-w-2xl mx-auto">
            Meet the passionate team behind our innovation—driven by expertise,
            creativity, and a shared mission to deliver impactful solutions.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <a href="/about">
              <button className="px-5 py-2 border border-gray-300 rounded-full font-medium flex items-center gap-2">
                <TiInfoLarge /> About Us
              </button>
            </a>

            <a href="/careers">
              <button className="px-5 py-2 bg-[#0f62fe] text-white rounded-full font-medium flex items-center gap-2">
                {buttonIcon}
                {buttonText}
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] p-6 rounded-[28px] text-center border border-[#f1f3f4] hover:shadow-md transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />

                <h3 className="text-base font-semibold text-[#202124]">
                  {member.name}
                </h3>

                <p className="text-sm text-[#5f36f5] font-medium mb-2">
                  {member.role}
                </p>

                <p className="text-sm text-[#5f6368] mb-4">
                  {member.desc}
                </p>

                <div className="flex justify-center gap-5 text-[#5f6368] text-xl">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="hover:text-[#0A66C2] transition"
                  >
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6">
            Perks and Benefits
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our remote-first culture is built on flexibility, wellness, and growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "WORK FROM ANYWHERE", desc: "Enjoy the freedom of remote work with our fully distributed team model." },
              { title: "HEALTH & WELLNESS", desc: "Comprehensive health insurance and mental wellness support." },
              { title: "FITNESS REWARDS", desc: "Monthly reimbursements for gym memberships or fitness apps." },
              { title: "CUTTING-EDGE TOOLS", desc: "Latest MacBook and premium productivity tools." },
              { title: "GENEROUS PAID TIME OFF", desc: "22+ vacation days and official holidays." },
              { title: "LEARNING & DEVELOPMENT", desc: "Reimbursement for courses and certifications." },
              { title: "FAMILY SUPPORT", desc: "Paid parental leave and flexible schedules." },
              { title: "REMOTE WORK STIPENDS", desc: "Home office and internet support." },
              { title: "RETIREMENT SAVINGS", desc: "401(k) or RRSP matching options." },
              { title: "SOCIAL IMPACT DAYS", desc: "Paid time to volunteer." },
              { title: "TEAM RETREATS", desc: "Annual off-sites to collaborate and celebrate." }
            ].map((perk, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow border border-gray-100">
                <h3 className="text-sm font-semibold uppercase text-indigo-600 mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-600 text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
