import React from "react";
import Header from "./Component/Navbar";
import Hero from "./Component/Hero";
import AICard from "./Component/AI Card";
import AnimatePage from "./Component/Iconpage";
import PricingPage from "./Component/PricingCard";
import Projects from "./Component/Project";
import Team from "./Component/MeetourTeam";
import ContactUs from "./Component/Contact";





function App() {
  return (
    <div className="min-h-screen">
      <nav className="pt-16">
        <Header />
      </nav>
      <div className="pad pt-5">
      <Hero/>
      </div>
      <AICard/>
      <AnimatePage/>
      <PricingPage/>
      <Projects/>
      <Team/>
      <ContactUs/>



    

    </div>
  );
}

export default App;
