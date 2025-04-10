import React, { useEffect, useRef, useState } from "react";
import Header from "./Component/Navbar";
import Hero from "./Component/Hero";
import AICard from "./Component/AI Card";
import AnimatePage from "./Component/Iconpage";
import PricingPage from "./Component/PricingCard";
import Projects from "./Component/Project";
import Team from "./Component/MeetourTeam";
import ContactUs from "./Component/Contact";
import Footer from "./Component/fotter";
import '/App.css';

function App() {
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
        threshold: 0.1, // adjust as needed
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
      {/* Top Navbar */}
      <nav
        className={`transition-all duration-300 ${
          showTopNav ? "opacity-100" : "opacity-0"
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
      <ContactUs />

      <div ref={footerRef}>
        <Footer />
      </div>

      {showBottomNav && !isFooterVisible && (
        <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.08)] md:hidden z-50 flex justify-center items-center px-4 py-3 transition-all duration-300">
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
            Contact our Team →
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
