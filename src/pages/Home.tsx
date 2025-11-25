import React from "react";

// Sections
import HeroSection from "../sections/landingpage/HeroSection";
import ValuePromiseSection from "../sections/landingpage/ValuePromiseSection";
import AboutSection from "../sections/landingpage/AboutSection";
import ModulesSection from "../sections/landingpage/ModulesSection";
import RealCaseSection from "../sections/landingpage/RealCaseSection";
import WhyAvelionSection from "../sections/landingpage/WhyAvelion";
import TestimonialSection from "../sections/landingpage/TestimonialSection";
import CTASection from "../sections/landingpage/CTASection";
import FooterSection from "../sections/landingpage/FooterSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ValuePromiseSection />
      <ModulesSection/>
      <RealCaseSection/>
      <WhyAvelionSection/>
      <TestimonialSection/>
      <CTASection />
      <FooterSection />
    </div>
  );
}
