import React from 'react';

const solutions = [
    {
        title: 'Web Development',
        description:
            'Crafting responsive and user-friendly websites that provide seamless user experiences. Our web solutions are optimized for performance and scalability.',
        imageUrl:
            'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Mobile Applications',
        description:
            'Developing intuitive mobile applications for both Android and iOS platforms. We focus on creating apps that engage users and drive business growth.',
        imageUrl:
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'E-commerce Solutions',
        description:
            'Building robust e-commerce platforms that offer smooth shopping experiences. From product listings to secure payment gateways, we handle it all.',
        imageUrl:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'UI/UX Design',
        description:
            'Designing visually appealing and user-centric interfaces. Our design philosophy ensures that aesthetics meet functionality.',
        imageUrl:
            'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Cloud Integration',
        description:
            'Leveraging cloud technologies to enhance the scalability and reliability of your applications. We ensure smooth integration with cloud services for optimal performance.',
        imageUrl:
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Cybersecurity',
        description:
            'Implementing top-notch security measures to protect your digital assets. We prioritize data protection and compliance with industry standards.',
        imageUrl:
            'https://images.unsplash.com/photo-1624969862644-791f3dc98927?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const SolutionsSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
                    Our Solutions
                </h2>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Base Layer */}
                            <div className="bg-white relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                                <img
                                    className="h-48 w-full object-cover"
                                    src={solution.imageUrl}
                                    alt={solution.title}
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600">{solution.description}</p>

                                    {/* Mobile Contact Button */}
                                    <div className="mt-4 md:hidden">
                                        <button className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay for Desktop */}
                            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition duration-300 hidden md:block">
                                <img
                                    src={solution.imageUrl}
                                    alt={solution.title}
                                    className="w-full h-full object-cover blur-sm"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-6">
                                    <h3 className="text-2xl font-semibold mb-2">
                                        {solution.title}
                                    </h3>
                                    <p className="text-sm mb-4">{solution.description}</p>
                                    <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
