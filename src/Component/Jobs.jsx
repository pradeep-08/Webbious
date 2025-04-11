import React, { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";

const jobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    status: "Cultural Fit",
    description: "Cultural fit, or cultural adequacy, is the harmony between a professional’s values and a company’s culture.",
    location: "Chennai, India",
    type: "Full time",
    experience: "5+ years"
  },
  {
    id: 2,
    title: "UX Designer (Growth & Conversion)",
    status: "Tech Evaluation",
    description: "Work on optimizing user conversion paths through data-driven UX strategies.",
    location: "Chennai, India",
    type: "Full time",
    experience: "3-5 years"
  },
  {
    id: 3,
    title: "Frontend Engineer – React.js Expert",
    status: "Hiring Stage",
    description: "Work with cutting-edge technology in a fast-paced environment to build scalable frontend solutions.",
    location: "Remote",
    type: "Full time",
    experience: "3-5 years"
  },
  {
    id: 4,
    title: "Backend Developer – Node.js & API Integration",
    status: "Interviewing",
    description: "Develop RESTful APIs and manage backend services in cloud-native architectures.",
    location: "Chennai, India",
    type: "Full time",
    experience: "2-4 years"
  },
  {
    id: 5,
    title: "AI/ML Engineer – Predictive Analytics",
    status: "Resume Review",
    description: "Design and deploy intelligent machine learning models in production-grade systems.",
    location: "Hybrid (Chennai + Remote)",
    type: "Full time",
    experience: "5+ years"
  },
  {
    id: 6,
    title: "Junior QA Engineer",
    status: "Initial Screening",
    description: "Assist in testing web and mobile applications for bugs, usability and performance.",
    location: "Chennai, India",
    type: "Full time",
    experience: "0-1 year"
  },
  {
    id: 7,
    title: "Support Analyst – Freshers Welcome",
    status: "Open",
    description: "Provide first-level technical support and escalate complex issues.",
    location: "Chennai, India",
    type: "Full time",
    experience: "0-1 year"
  },
  {
    id: 8,
    title: "Java Backend Developer – Spring Boot & Microservices",
    status: "Hiring Stage",
    description: "Build scalable microservices using Spring Boot and integrate with cloud platforms.",
    location: "Remote",
    type: "Full time",
    experience: "3-6 years"
  },
  {
    id: 9,
    title: "AI Intern – Computer Vision",
    status: "Open",
    description: "Assist the AI team in developing vision-based algorithms and dataset training.",
    location: "Chennai, India",
    type: "Internship",
    experience: "0 years (final year students welcome)"
  },
  {
    id: 10,
    title: "Data Science Intern",
    status: "Initial Screening",
    description: "Support data exploration, cleaning, and predictive model building for internal tools.",
    location: "Remote",
    type: "Internship",
    experience: "0 years"
  },
  {
    id: 11,
    title: "DevOps Engineer – CI/CD & Monitoring",
    status: "Tech Evaluation",
    description: "Automate infrastructure, manage CI/CD pipelines, and monitor system performance.",
    location: "Chennai, India",
    type: "Full time",
    experience: "2-4 years"
  },
  {
    id: 12,
    title: "DevOps Intern",
    status: "Resume Review",
    description: "Learn and support basic DevOps practices such as deployment scripts, logs, and monitoring.",
    location: "Hybrid (Chennai + Remote)",
    type: "Internship",
    experience: "0 years"
  },
  {
    id: 13,
    title: "Frontend Intern – React.js",
    status: "Open",
    description: "Work closely with frontend team to build reusable React components and pages.",
    location: "Chennai, India",
    type: "Internship",
    experience: "0 years"
  },
  {
    id: 14,
    title: "Junior Backend Developer – Node.js",
    status: "Open",
    description: "Support in building backend APIs and databases for scalable web apps.",
    location: "Chennai, India",
    type: "Full time",
    experience: "0-1 year"
  },
  {
    id: 15,
    title: "Sales Manager – B2B Enterprise",
    status: "Interviewing",
    description: "Lead and expand enterprise sales pipelines. Strong understanding of solution-based B2B selling required.",
    location: "Chennai, India",
    type: "Full time",
    experience: "4-7 years"
  },
  {
    id: 16,
    title: "Business Analyst – Digital Transformation",
    status: "Hiring Stage",
    description: "Work closely with clients and tech teams to gather requirements and translate them into actionable insights.",
    location: "Hybrid (Chennai + Remote)",
    type: "Full time",
    experience: "2-4 years"
  },
  {
    id: 17,
    title: "Data Analyst – Insights & Reporting",
    status: "Resume Review",
    description: "Analyze business data and generate reports for strategy, planning, and performance evaluation.",
    location: "Chennai, India",
    type: "Full time",
    experience: "1-3 years"
  },
  {
    id: 18,
    title: "Product Manager – SaaS",
    status: "Tech Evaluation",
    description: "Define product roadmaps and collaborate across engineering, design, and marketing teams.",
    location: "Remote",
    type: "Full time",
    experience: "3-6 years"
  },
  {
    id: 19,
    title: "Project Coordinator – Entry Level",
    status: "Open",
    description: "Assist project managers in planning, documentation, and progress tracking. Great for freshers.",
    location: "Chennai, India",
    type: "Full time",
    experience: "0-1 year"
  }

];



const typingWords = ["experience", "talent", "skills", "ideas"];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const filteredJobs = jobs.filter(job => {
    const matchesTitle = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExperience = appliedFilters.length === 0 || appliedFilters.includes(job.experience);
    return matchesTitle && matchesExperience;
  });

  useEffect(() => {
    if (typingWords[wordIndex]) {
      if (charIndex <= typingWords[wordIndex].length) {
        setDisplayText(typingWords[wordIndex].slice(0, charIndex));
        const timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setWordIndex((wordIndex + 1) % typingWords.length);
          setCharIndex(0);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, wordIndex]);

  const handleCheckboxChange = (value) => {
    setCheckedFilters(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    setAppliedFilters(checkedFilters);
    setShowFilterDropdown(false);
  };

  const clearFilters = () => {
    setCheckedFilters([]);
    setAppliedFilters([]);
  };

  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] px-4 md:px-10 lg:px-24 pt-40 pb-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          We bring a wealth of <span className="text-[#1a73e8]">{displayText}</span><span className="text-[#1a73e8]">|</span> from a wide range of backgrounds
        </h1>
        <p className="text-lg text-[#5f6368]">
          We hire top talent and empower them with tools, support, and a culture of excellence.
        </p>
      </section>

      <section className="mb-14 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">In progress (2)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.slice(0, 2).map((job) => (
            <div key={job.id} className="border border-[#dadce0] p-6 rounded-xl shadow-sm bg-[#f8f9fa]">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <div className="text-sm text-[#5f6368] mb-2">{job.status}</div>
              <p className="text-[#3c4043] mb-4">{job.description}</p>
              <button onClick={() => setSelectedJob(job)} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">See details</button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">All jobs</h2>

        <div className="relative mb-6">
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setShowFilterDropdown(prev => !prev)}
              className="flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-100"
            >
              <FiFilter className="text-gray-600" /><HiChevronDown className="text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Search job titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {appliedFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="ml-2 text-sm text-blue-600 underline hover:text-blue-800"
              >
                Clear Filters
              </button>
            )}
          </div>

          {showFilterDropdown && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded shadow-md w-full max-w-md p-4">
              <div className="mb-3 text-sm font-medium text-gray-700">Experience</div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {["0-1 year", "2-4 years", "3-5 years", "5+ years"].map((label) => (
                  <label key={label} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={checkedFilters.includes(label)}
                      onChange={() => handleCheckboxChange(label)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
              <button
                onClick={applyFilter}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Apply Filters
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="border border-[#dadce0] p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center bg-[#f8f9fa]">
              <div>
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="text-sm text-[#5f6368]">{job.location} – {job.type} – {job.experience}</p>
              </div>
              <button onClick={() => setSelectedJob(job)} className="mt-2 md:mt-0 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Apply now</button>
            </div>
          ))}
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-xl relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-2 right-2 text-[#5f6368] hover:text-[#1d1d1f] text-xl font-bold"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold mb-2 text-[#1d1d1f]">{selectedJob.title}</h3>
            <p className="text-sm text-[#5f6368] mb-2">{selectedJob.location} – {selectedJob.type} – {selectedJob.experience}</p>
            <div className="text-sm text-[#3c4043] mb-4">{selectedJob.status}</div>
            <p className="mb-4 text-[#3c4043]">{selectedJob.description}</p>
            <div className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-full bg-red-50 w-max">
              <div className="w-4 h-4 rounded-full border-2 border-dashed border-red-500 animate-spin"></div>
              <span className="text-sm font-medium">We are facing an issue, our dev team is working on it.</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <button className="bg-[#0f9d58] text-white px-4 py-2 rounded hover:bg-[#0b7e46]">
                Apply now
              </button>


            </div>
          </div>
        </div>
      )}
    </div>
  );
}
