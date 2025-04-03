import React from "react";
import { 
  FaReact, FaPython, FaJs, FaAws, FaGit, FaAndroid, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiMongodb, SiTailwindcss, SiFigma, SiMongoose, SiSass, 
  SiNextdotjs, SiMysql, SiAdobe, SiGithub, SiGoogleanalytics, 
  SiPostgresql, SiDocker, SiKubernetes, SiFlutter, SiTypescript, 
  SiFirebase, SiGraphql, SiRedux, SiLaravel, SiDjango 
} from "react-icons/si";
import { motion } from "framer-motion";

function AnimatePage() {
  // Animation Variants
  const floatingVariants = {
    animate: {
      y: [0, -8, 0], 
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Tech Icons (Positioned closer to Title)
  const topIcons = [
    { icon: <FaReact className="text-blue-500" />, position: "top-2" },
    { icon: <FaPython className="text-gray-700" />, position: "top-2" },
    { icon: <FaJs className="text-yellow-500" />, position: "top-2" },
    { icon: <FaAws className="text-orange-500" />, position: "top-2" },
    { icon: <FaGit className="text-red-500" />, position: "top-2" },
    { icon: <SiMongodb className="text-green-600" />, position: "top-2" },
    { icon: <FaAndroid className="text-green-500" />, position: "top-2" },
    { icon: <SiMongoose className="text-black" />, position: "top-2" },
    { icon: <SiTailwindcss className="text-blue-400" />, position: "top-2" },
    { icon: <SiFigma className="text-gray-600" />, position: "top-2" }
  ];

  const bottomIcons = [
    { icon: <SiSass className="text-pink-500" />, position: "bottom-2" },
    { icon: <SiNextdotjs className="text-black" />, position: "bottom-2" },
    { icon: <SiMysql className="text-blue-600" />, position: "bottom-2" },
    { icon: <SiAdobe className="text-red-500" />, position: "bottom-2" },
    { icon: <SiGithub className="text-black" />, position: "bottom-2" },
    { icon: <SiGoogleanalytics className="text-yellow-600" />, position: "bottom-2" },
    { icon: <FaHtml5 className="text-red-500" />, position: "bottom-2" },
    { icon: <FaCss3Alt className="text-blue-600" />, position: "bottom-2" },
    { icon: <SiPostgresql className="text-blue-400" />, position: "bottom-2" },
    { icon: <SiDocker className="text-blue-500" />, position: "bottom-2" }
  ];

  return (
    <div className="animation flex flex-col items-center justify-center">
    <section className="relative flex flex-col items-center justify-center bg-white h-[86vh] w-[90vw] px-4">
      {/* Title Section (Centered) */}
      <div className="text-center ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Our <span className="text-blue-600">Tech Stack</span> – Future-Ready Technologies
        </h2>
        <p className="text-gray-500 text-sm md:text-lg mt-1 max-w-lg mx-auto">
          We build powerful digital experiences using the latest and most advanced technologies.
        </p>
      </div>

      {/* Floating Tech Logos at the Top (Closer to Title) */}
      <div className="absolute top-10 w-full flex justify-center space-x-4 pointer-events-none">
        {topIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="text-2xl md:text-3xl lg:text-4xl"
            variants={floatingVariants}
            animate="animate"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Logos at the Bottom (Closer to Title) */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-4 pointer-events-none">
        {bottomIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="text-2xl md:text-3xl lg:text-4xl"
            variants={floatingVariants}
            animate="animate"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default AnimatePage;

