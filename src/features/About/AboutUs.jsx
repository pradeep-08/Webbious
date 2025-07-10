import React from 'react';
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About Webbious | Empowering Innovation</title>
                <meta name="description" content="Learn more about Webbious, our mission, and our team of passionate technologists driving digital transformation." />
                <link rel="canonical" href="https://webbious.com/about" />
                <meta name="keywords" content="About Webbious, tech company profile, web development team, AI company mission, software development journey, digital innovation team" />
                <meta property="og:title" content="About Webbious" />
                <meta property="og:description" content="Discover the people and vision behind Webbious." />
                <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "About",
      "url": "https://webbious.com/about",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://webbious.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://webbious.com/about"
          }
        ]
      }
    }
  `}</script>
            </Helmet>
            <div className="max-w-6xl mx-auto px-6 pt-36 pb-24 text-gray-800">
                <h1 className="text-4xl font-bold text-center mb-5 text-[#000000]">About Us</h1>
                <p className="text-center text-lg text-gray-600 mb-16">Empowering innovation through design, development, and digital excellence.</p>

                {/* Who We Are - Image Left */}
                <section className="mb-24 flex flex-col md:flex-row items-center gap-10">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="Teamwork"
                        className="rounded-lg w-full md:w-1/2 h-64 object-cover"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                        <p className="leading-relaxed">
                            At <span className="font-semibold text-[#0f62fe]">Webbious</span>, we are passionate about leveraging technology to create innovative solutions that drive success for our clients. Our team is dedicated to delivering high-quality web development and digital services tailored to meet the unique needs of each project.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a href="/about" target="_blank" rel="noopener noreferrer"><button className="px-6 py-2 border border-gray-300 rounded-full font-medium text-[#111827] hover:bg-gray-100 transition">About Us</button></a>
                            <a href="/careers" target="_blank" rel="noopener noreferrer"><button className="px-6 py-2 bg-[#0f62fe] text-white rounded-full font-medium hover:bg-[#0053d4] transition">Job Openings</button></a>
                        </div>
                    </div>
                </section>

                {/* Our Mission - Image Right */}
                <section className="mb-24 flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                        <p className="leading-relaxed">
                            Our mission is to empower businesses by providing cutting-edge digital solutions that enhance their online presence and operational efficiency. We strive to build lasting partnerships through transparency, commitment, and excellence in every endeavor.
                        </p>
                        <a href="/projects"> <button className="mt-6 px-6 py-2 bg-[#0f62fe] text-white rounded-full font-medium hover:bg-[#0053d4] transition">Our Projects</button></a>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                        alt="Mission"
                        className="rounded-lg w-full md:w-1/2 h-64 object-cover"
                    />
                </section>

                {/* Our Services - Image Left */}
                <section className="mb-24 flex flex-col md:flex-row items-center gap-10">
                    <img
                        src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
                        alt="Services"
                        className="rounded-lg w-full md:w-1/2 h-64 object-cover"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
                        <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                            <li>Custom Web Development</li>
                            <li>User Experience (UX) and User Interface (UI) Design</li>
                            <li>E-commerce Solutions</li>
                            <li>Mobile Application Development</li>
                            <li>Digital Marketing Strategies</li>
                        </ul>
                        <a href="/contact" target="_blank" rel="noopener noreferrer"><button className="mt-6 px-6 py-2 bg-[#0f62fe] text-white rounded-full font-medium hover:bg-[#0053d4] transition">Contact Us</button></a>
                    </div>
                </section>

                {/* Our Team */}
                <section className="mb-24">
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                        alt="Team"
                        className="rounded-lg mb-4 w-full h-64 object-cover"
                    />
                    <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
                    <p className="leading-relaxed">
                        Our team comprises skilled professionals with diverse backgrounds in technology and design. We foster a collaborative environment that encourages innovation and continuous learning, ensuring we stay ahead in the ever-evolving digital landscape.
                    </p>
                    <a href="/team" target="_blank" rel="noopener noreferrer"><button className="mt-6 px-6 py-2 bg-[#0f62fe] text-white rounded-full font-medium hover:bg-[#0053d4] transition">Meet Our Team</button></a>
                </section>

                {/* Why Choose Us - Image Right */}
                <section className="mb-24 flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
                        <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                            <li><strong>Client-Centric Approach</strong>: We prioritize our clients' goals and work closely with them to achieve desired outcomes.</li>
                            <li><strong>Innovative Solutions</strong>: Our team embraces creativity and innovation to deliver unique and effective solutions.</li>
                            <li><strong>Quality Assurance</strong>: We are committed to maintaining high standards of quality in all our projects.</li>
                            <li><strong>Timely Delivery</strong>: We understand the importance of deadlines and strive to deliver projects on time.</li>
                        </ul>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="Why Choose Us"
                        className="rounded-lg w-full md:w-1/2 h-64 object-cover"
                    />
                </section>

                {/* Contact */}
                <section className="pb-12">
                    <img
                        src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
                        alt="Contact"
                        className="rounded-lg mb-4 w-full h-64 object-cover"
                    />
                    <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                    <p className="leading-relaxed">
                        We would love to hear from you! Whether you're interested in our services or have any questions, feel free to reach out to us at <a href="mailto:contact@webbious.com" className="text-[#0f62fe] underline">contact@webbious.com</a>.
                    </p>
                </section>
            </div>
        </>

    );
};

export default AboutUs;
