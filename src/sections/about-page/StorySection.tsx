import React from "react";

export interface StoryData {
  id: string;
  title: string;
  content: string;
}

interface Props {
  data: StoryData;
}

export default function StorySection({ data }: Props) {
  return (
    <section className="relative py-section bg-avelion-neutral-800 text-avelion-neutral-50 overflow-hidden">
      
      {/* Línea luminosa institucional */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[80%] h-px
          bg-gradient-to-r from-transparent via-avelion-primary to-transparent
          opacity-60
        "
      ></div>

      {/* Glow ambiental */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(27,226,202,0.08),transparent_60%)]
          pointer-events-none
        "
      ></div>

      <div className="max-w-4xl mx-auto px-layout text-center relative">
        
        {/* Título con halo */}
        <div className="relative mb-8 inline-block px-6 py-2">
         

          <h2 className="relative font-display text-4xl md:text-4xl font-semibold tracking-tight">
            {data.title}
          </h2>
        </div>

        {/* Cuerpo narrativo con efecto editorial */}
        <p
          className="
            text-avelion-neutral-200
            text-lg md:text-xl
            leading-relaxed
            max-w-3xl mx-auto
            opacity-90
            transition-opacity duration-300
            hover:opacity-100
          "
        >
          {data.content}
        </p>

       
      </div>

    </section>
  );
}
