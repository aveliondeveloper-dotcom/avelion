import React from "react";
import landingData from "../../data/landingpage.json";

// Importación individual de íconos
import IconSpeed from "../../images/icons/speed.svg";
import IconAccess from "../../images/icons/access.svg";

import IconArchitecture from "../../images/icons/architecture.svg";
import BackGorundArchitecture from "../../images/background/vision-bg.jpg";


export default function ValuePromiseSection() {
  const { valuePromise } = landingData.landingPage;

  // Asignación explícita por icon key
  const iconMap: Record<string, string> = {
    speed: IconSpeed,
    access: IconAccess,
    architecture: IconArchitecture,
  };

  return (
    <section
      id={valuePromise.id}
      className="
       
        relative w-full pb-10 px-6
        bg-[var(--avelion-neutral-900)]
        text-white overflow-hidden
      
      "
    >
      
      {/* Glow superior sutil */}
      <div className="absolute  w-full h-[80px] bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.25),transparent)] pointer-events-none">
        
      </div>

      {/* Background iconográfico sutil */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none select-none my-20">
        <img
          src={BackGorundArchitecture}
          alt="background"
          className="w-full  object-contain  mx-auto"/>

      </div>

      <div className="relative z-10">
        {/* Título */}
        <h2 className="text-4xl font-display font-semibold text-center my-5">
          {valuePromise.title}
        </h2>

        {/* Bloques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-40">
          {valuePromise.blocks.map((block, idx) => {
            const Icon = iconMap[block.icon];

            return (
              <div
                key={idx}
                className="
                  bg-avelion-neutral-700
                  rounded-2xl
                  p-8
                  shadow-subtle
                  border border-avelion-neutral-700
                  hover:border-avelion-primary
                  transition-all duration-300
                  group
                "
              >
                {/* Ícono individual */}
                <div className="mb-6 flex items-center justify-center">
                  <img
                    src={Icon}
                    alt={block.title}
                    className="w-20 h-20 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-display mb-2 text-avelion-mint text-center">
                  {block.title}
                </h3>

                {/* Descripción */}
                <p className="text-avelion-neutral-100 font:display text-center leading-relaxed">
                  {block.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
