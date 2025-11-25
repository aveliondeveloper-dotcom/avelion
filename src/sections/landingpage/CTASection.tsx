import React from "react";
import LionImage from "../../images/logos/avelion-logo.svg";

export default function CTASection() {
  return (
    <section
      id="cta-final"
      className="relative w-full py-32 px-6 text-center bg-avelion-neutral-900 text-white overflow-hidden"
    >
       {/* Línea luminosa institucional */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[80%] h-px
          bg-gradient-to-r from-transparent via-avelion-primary to-transparent
          opacity-60
        "
      />

      {/* Contenido principal */}
      <div className="relative z-20 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-5xl font-semibold text-avelion-mint mb-8">
          Es momento de operar con precisión.
        </h2>

        <p className="text-3xl md:text-3xl text-avelion-neutral-100 mb-12">
          Ingeniería elegante para marcas con visión.
        </p>

        <button className="px-10 py-4 bg-avelion-mint hover:bg-avelion-teal text-avelion-neutral-900 rounded-2xl text-lg font-semibold transition-all">
          Agendar reunión
        </button>
      </div>

      {/* León estático con efecto reverse parallax */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={LionImage}
          alt="León Avelion"
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[120px] opacity-[0.18]
            animate-reverseParallax
          "
        />
      </div>

      {/* Glow inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[280px]
        bg-[radial-gradient(circle_at_bottom,rgba(3,248,228,0.12),transparent)]
        pointer-events-none z-10"
      ></div>
    </section>
  );
}
