import React, { useEffect, useRef } from "react";
import data from "../../data/landingpage.json";
import heroBg from "../../images/background/hero-bg.jpg";
import lionLogo from "../../images/logos/avelion-logo.svg";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  /* -----------------------------------------
     Parallax fuerte
  ------------------------------------------*/
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${y * 0.35}px)`;
      }

      if (subtitleRef.current) {
        subtitleRef.current.style.transform = `translateY(${y * 0.28}px)`;
      }

      if (ctaRef.current) {
        ctaRef.current.style.transform = `translateY(${y * 0.22}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -----------------------------------------
     Scroll hacia CTA section
  ------------------------------------------*/
  const handleScrollToCTA = () => {
    const cta = document.getElementById("cta-final");
    if (cta) cta.scrollIntoView({ behavior: "smooth" });
  };

  const hero = data.landingPage.hero;

  return (
    <section
      id={hero.id}
      className="
        relative w-full min-h-screen
        flex items-center justify-center
        overflow-hidden text-white
        bg-black
      "
    >
      {/* Fondo fijo */}
      <div
        className="
          absolute inset-0 bg-cover bg-center bg-no-repeat
        "
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* León fijo encima del fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={lionLogo}
          alt="Avelion Logo"
          className="
            w-[280px] md:w-[340px]
            opacity-90 select-none
          "
        />
      </div>

      {/* -----------------------------------------
         LAYER OSCURECEDOR (sin blur)
         — oscurece fondo y león
      ------------------------------------------*/}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* -----------------------------------------
         Contenido con parallax fuerte
      ------------------------------------------*/}
      <div className="relative z-20 text-center max-w-4xl px-6">
        {/* TÍTULO */}
        <h1
          ref={titleRef}
          className="
            font-display font-bold
            text-4xl md:text-6xl
            tracking-wide leading-tight
            mb-6 
            text-avelion-mint
            animate-fadeInSlow
          "
        >
          {hero.title}
        </h1>

        {/* SUBTÍTULO */}
        <p
          ref={subtitleRef}
          className="text-4xl md:text-3xl font-display font-semibold  text-avelion-neutral-50 mb-12 mt-12"
        >
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleScrollToCTA}
            className="
              px-10 py-4 rounded-xl font-semibold
              bg-avelion-primary text-black
              shadow-lg shadow-avelion-primary/25
              transition-all duration-300
              hover:scale-[1.05]
            "
          >
            {hero.ctaPrimary}
          </button>

          <a
            href={`#${data.landingPage.modules.id}`}
            className="
              px-10 py-4 rounded-xl font-semibold
              border border-avelion-primary text-avelion-primary
              hover:bg-avelion-primary/10
              transition-all duration-300
            "
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
