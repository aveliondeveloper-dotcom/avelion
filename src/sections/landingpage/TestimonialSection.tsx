import React from "react";
import landingData from "../../data/landingpage.json";

import ConstructoraIcon from "../../images/avatar/avatar-constructora.svg";
import SateliteIcon from "../../images/avatar/avatar-fibermanager.svg";
import EmotiLandIcon from "../../images/avatar/avatar-emotiland.svg";
import FiberManagerIcon from "../../images/avatar/avatar-satelite.svg";

type TestimonialItem = {
  author: string;
  quote: string;
  photo: string;
};

const photoMap: Record<string, string> = {
  "constructora.png": ConstructoraIcon,
  "satelite.png": SateliteIcon,
  "emotiland.png": EmotiLandIcon,
  "startup-logistica.png": FiberManagerIcon,
};

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialItem[] = landingData.landingPage.testimonials.items;

  return (
    <section
      id={landingData.landingPage.testimonials.id}
      className="relative pb-20 bg-gradient-to-b from-[#0D0D0D] via-[#111111] to-[#0D0D0D] text-white overflow-hidden"
    >
      {/* Glow full-width detrás del título */}
      <div className="relative w-full mb-12 py-4">
        <span
          className="
              absolute inset-0
              w-screen left-1/2 -translate-x-1/2
              bg-[linear-gradient(135deg,rgba(3,248,228,0.22),transparent)]
              pointer-events-none
              opacity-100
            "
        ></span>

        <h2 className="text-4xl lg:text-4xl font-semibold text-center ">
          {landingData.landingPage.testimonials.title}
        </h2>
      </div>
      <div className="container mx-auto px-6 lg:px-20">


        <ul className="space-y-8">
          {testimonials.map((item: TestimonialItem, index: number) => (
            <li
              key={index}
              className="flex items-start space-x-6 bg-[#1A1A1A]/60 backdrop-blur-md p-5 rounded-2xl transition-all duration-500 hover:translate-x-2 hover:shadow-xl"
            >
              <img
                src={photoMap[item.photo]}
                alt={item.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
              />
              <div className="flex-1">
                <p className="text-gray-300 text-lg font-display mb-2 italic">"{item.quote}"</p>
                <span className="text-white font-semibold text-md">{item.author}</span>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default TestimonialSection;
