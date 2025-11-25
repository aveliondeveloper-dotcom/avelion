import React from "react";
import aboutData from "../data/about-page.json";

import IntroSection from "../sections/about-page/IntroSection";
import StorySection from "../sections/about-page/StorySection";
import BrandPillarsSection from "../sections/about-page/BrandPillarsSection";
import VisionSection from "../sections/about-page/VisionSection";
import ValuesSection from "../sections/about-page/ValuesSection";
import TeamPreviewSection from "../sections/about-page/TeamPreviewSection";
import FooterSection from "../sections/landingpage/FooterSection";
export default function About() {
  return (
    <main className="bg-avelion-neutral-900 text-avelion-neutral-50">
      <IntroSection data={aboutData.intro} />
      <StorySection data={aboutData.story} />
      <BrandPillarsSection data={aboutData.pillars} />
      <VisionSection data={aboutData.vision} />
      <ValuesSection data={aboutData.values} />
      <TeamPreviewSection data={aboutData.team} />
      <FooterSection/>
    </main>
  );
}
