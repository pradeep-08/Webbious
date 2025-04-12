import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Component/Navbar";
import Hero from "./Component/Hero";
import AICard from "./Component/AI Card";
import AnimatePage from "./Component/Iconpage";
import PricingPage from "./Component/PricingCard";
import Projects from "./Component/Project";
import Team from "./Component/MeetourTeam";
import Footer from "./Component/fotter";
import CircleCursor from "./Component/cursor";
import CareersPage from "./Component/Jobs";
import TeamSection from "./Component/TeamSection";
import ContactUsMain from "./Component/ContactUsMain";

import "/App.css";
import ContactUsCard from "./Component/Contact";
import AboutUs from "./Component/AboutUs";
import SolutionsSection from "./Component/Solutions";
import ProjectsSection from "./Component/OurProjects";

function MainContent() {
  const [showTopNav, setShowTopNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const footerRef = useRef(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowTopNav(false);
      setShowBottomNav(true);
    } else {
      setShowTopNav(true);
      setShowBottomNav(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CircleCursor />

      <nav
        className={`transition-all duration-300 ${showTopNav ? "opacity-100" : "opacity-0"
          } pt-16`}
      >
        <Header />
      </nav>

      {/* Main Content */}
      <div className="pad pt-5">
        <Hero />
      </div>
      <AICard />
      <AnimatePage />
      <PricingPage />
      <Projects />
      <Team />
      <ContactUsCard />

      <div ref={footerRef}>
        <Footer />
      </div>

      {showBottomNav && !isFooterVisible && (
        <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.08)] md:hidden z-50 flex justify-center items-center px-4 py-3 transition-all duration-300">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Contact our Team →
          </a>
        </div>

      )}
    </div>
  );
}

function CareersContent() {
  return (
    <div className="min-h-screen bg-white">
      <CircleCursor />
      <Header />
      <CareersPage />
      <Footer />
    </div>
  );
}
function TeamsContent() {
  return (
    <div className="min-h-screen bg-white">
      <CircleCursor />
      <Header />
      <TeamSection />
      <Footer />
    </div>
  );
}

function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <CircleCursor />
      <Header />
      <ContactUsMain />
      <Footer />
    </div>
  );
}

function AboutUsSection() {
  return (
    <div className="min-h-screen bg-white">
      <CircleCursor />
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}

function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <CircleCursor />
      <Header />
      <SolutionsSection />
      <Footer />
    </div>
  );
}

function ProjectSec() {
  return (
    <div className="min-h-screen bg-white">
      <CircleCursor />
      <Header />
      <ProjectsSection />
      <Footer />
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/careers" element={<CareersContent />} />
        <Route path="/team" element={<TeamsContent />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/projects" element={<ProjectSec />} />
      </Routes>
    </Router>
  );
}

export default App;
