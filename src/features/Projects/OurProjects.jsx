import React from 'react';

const ProjectsSection = () => {
    const project = {
        name: 'Suji Hair & Makeup',
        description:
            'Suji Hair & Makeup is a visually captivating, SEO-optimized website crafted for Sujithira’s beauty brand. It showcases bridal makeup, traditional mehandi, and saree draping services with a mobile-friendly, elegant layout. Developed by Webbious — a top-tier web design agency — this platform offers a seamless user experience, streamlined booking, and performance-driven architecture built to scale.',
        imageUrl: 'https://sujihairandmakeup.com/assets/hero-CpGA9mP5.jpeg',
        link: 'https://sujihairandmakeup.com/',
        testimonial: {
            name: 'Sujithira – Founder, Suji Hair & Makeup',
            avatar: 'https://sujihairandmakeup.com/assets/2-Xj8ZWRpC.jpeg',
            quote: `
Partnering with Webbious was one of the best decisions I made for my brand. They understood my vision from day one and transformed it into a beautiful online presence.
The team was responsive, professional, and incredibly easy to work with. Thanks to them, I now have a platform that truly represents my work and connects me with more clients!
Special thanks to Pradeep for his leadership, Muthu for managing everything so smoothly, and Naveen for delivering a technically flawless and fast-loading site.
      `,
            stars: 5,
        },
    };

    return (
        <section className="bg-white py-16 px-4 pt-36 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Our Projects</h2>

                <p className="text-center text-gray-600 text-sm mb-6">
                    You could be our next success story.
                </p>

                <div className="flex justify-center mb-14">
                    <a
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded-md transition duration-300"
                    >
                        Contact Us
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left: Project Card */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <img
                            className="h-64 w-full object-cover"
                            src={project.imageUrl}
                            alt={project.name}
                        />
                        <div className="p-5">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                            <p className="text-gray-600 text-sm mb-5">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 text-sm hover:underline font-medium"
                            >
                                Visit Website →
                            </a>
                        </div>
                    </div>

                    {/* Right: Testimonial Card */}
                    <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-100">
                        {/* Star Rating */}
                        <div className="flex items-center mb-2">
                            {[...Array(project.testimonial.stars)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-4 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.147c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.946c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.946a1 1 0 00-.364-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.147a1 1 0 00.95-.69l1.286-3.946z" />
                                </svg>
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="italic text-gray-700 text-sm leading-relaxed mb-4 whitespace-pre-line">
                            "{project.testimonial.quote.trim()}"
                        </p>

                        {/* Avatar and Name */}
                        <div className="flex flex-col items-start">
                            <img
                                src={project.testimonial.avatar}
                                alt="Sujithira"
                                className="w-12 h-12 rounded-full object-cover mb-2"
                            />
                            <p className="text-xs text-gray-800 font-medium">
                                – {project.testimonial.name}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Footer Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                        You're the Next.
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-6">
                        Let our next project be yours. You could be the next success story.
                        Connect with us to spark a new revolution for your business.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
                    >
                        Let's Connect
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
