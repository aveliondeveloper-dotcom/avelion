import React from "react";

export interface ValuesData {
  id: string;
  title: string;
  items: string[];
}

interface Props {
  data: ValuesData;
}

export default function ValuesSection({ data }: Props) {
  return (
    <section className="relative py-section bg-avelion-neutral-900 text-avelion-neutral-50 overflow-hidden">

      {/* Línea luminosa institucional */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[85%] h-px
          bg-gradient-to-r from-transparent via-avelion-primary to-transparent
          opacity-50
        "
      />

      {/* Glow ambiental */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(27,226,202,0.06),transparent_70%)]
        "
      />

      <div className="relative max-w-6xl mx-auto px-layout">

        {/* Título */}
        <h2 className="font-display text-3xl md:text-5xl mb-16 text-center tracking-tight">
          {data.title}
        </h2>
        <ul className="space-y-12 items-center justify-center">
          {data.items.map((v, i) => (
            <li key={i} className="group relative flex items-center gap-6">

              {/* Figura geométrica */}
              <div className="
        h-12 w-12 rounded-xl mx-24 border border-avelion-neutral-700
        flex items-center justify-center
        group-hover:border-avelion-primary
        transition-colors duration-300 
      ">
                <span className="text-lg font-mono text-avelion-neutral-100 group-hover:text-avelion-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Conector */}
              <div className="
        h-px w-32
        bg-gradient-to-r from-avelion-neutral-700 to-transparent
        group-hover:from-avelion-primary
        transition-colors
      " />

              {/* Texto */}
              <p className="
        text-xl md:text-2xl font-display leading-tight
        text-avelion-neutral-200 group-hover:text-white
        transition-colors duration-300
      ">
                {v}
              </p>

            </li>
          ))}
        </ul>


      </div>
    </section>
  );
}
