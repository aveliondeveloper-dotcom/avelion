import React, { useRef, useEffect, useState } from "react";
import landingData from "../../data/landingpage.json";

import IconSenior from "../../images/icons/senior.svg";
import IconStrategy from "../../images/icons/strategy.svg";
import IconMinimalist from "../../images/icons/minimalist.svg";
import IconResults from "../../images/icons/results.svg";
import IconIntegration from "../../images/icons/integration.svg";
import Background from "../../images/background/why-avelion-bg.jpg";

const iconMap = {
  "Senior desde el primer pixel": IconSenior,
  "Estrategia + creatividad + ingeniería": IconStrategy,
  "Visión minimalista premium": IconMinimalist,
  "Resultados medibles desde la primera semana": IconResults,
  "Integración total de branding, marketing y software": IconIntegration,
};

// Función LERP para suavizado
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

const WhyAvelion: React.FC = () => {
  const sectionData = landingData.landingPage.whyAvelion;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const targetOffset = useRef(0);

  // Actualiza targetOffset en scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const offset = window.scrollY - containerRef.current.offsetTop;
      targetOffset.current = offset * 0.3; // factor de parallax
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animación fluida
  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setScrollOffset(prev => lerp(prev, targetOffset.current, 0.1));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      id={sectionData.id}
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Fondo parallax fluido */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
          transform: `translateY(${scrollOffset}px)`,
          transition: "transform 0.1s linear",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      <div className="relative z-10 max-w-6xl px-6 flex flex-col items-start gap-12">
        <h2 className="text-4xl md:text-5xl font-semibold font-display leading-tight text-avelion-primary">
          {sectionData.title}
        </h2>

        <ul className="flex flex-col gap-6">
          {sectionData.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-4 opacity-0 transform -translate-x-12 animate-slideIn animation-delay-${idx * 150}`}
            >
              <img
                src={iconMap[bullet as keyof typeof iconMap]}
                alt=""
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg md:text-xl font-display">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideIn { animation: slideIn 0.6s forwards; }
          .animation-delay-0 { animation-delay: 0s; }
          .animation-delay-150 { animation-delay: 0.15s; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-450 { animation-delay: 0.45s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </section>
  );
};

export default WhyAvelion;
