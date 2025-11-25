import React from "react";
import data from "../../data/landingpage.json";

export default function ModulesSections() {
  const modules = data.landingPage.modules;

  return (
    <section
      id={modules.id}
      className="
        w-full 
        bg-[var(--avelion-neutral-900)]
        text-[var(--avelion-neutral-50)]
        relative
        pb-40
        overflow-hidden
      "
    >
      {/* Glow superior sutil */}
      <div className="absolute top-0 left-0 w-full h-[80px] bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.25),transparent)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-layout">
        {/* Título */}
        <h2
          className={`
            font-display  
            text-4xl md:text-4xl
            font-semibold tracking-tight
            mt-5 mb-32 text-center
            ${
              modules.animations.loadFadeUp
                ? "opacity-0 animate-[fadeUp_0.9s_ease-out_forwards]"
                : ""
            }
          `}
        >
          {modules.title}
        </h2>

        {/* Lista elegante */}
        <ul className="space-y-6">
          {modules.items.map((item, index) => (
            <li
              key={index}
              className={`
                group
                flex flex-col md:flex-row md:items-start
                gap-4
                p-6
                
                bg-[var(--avelion-neutral-800)]
                rounded-2xl
                border border-transparent
                shadow-card
                transition-all duration-300
                relative overflow-hidden
                ${
                  modules.animations.hoverEdgeGlow === "cyan-digital-bevel"
                    ? "hover:border-avelion-primary hover:shadow-[0_0_22px_rgba(27,226,202,0.35)]"
                    : ""
                }
                ${
                  modules.animations.loadFadeUp
                    ? "opacity-0 animate-[fadeUp_0.7s_ease-out_forwards] animation-delay-" +
                      (index * 150)
                    : ""
                }
              `}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Icono o número opcional */}
              <span className="flex-shrink-0 text-avelion-primary font-display font-bold text-2xl md:text-3xl">
                {index + 1}.
              </span>

              <div className="flex-1">
                <h3 className="font-display text-xl text-avelion-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-[var(--avelion-neutral-100)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Glow sutil dinámico */}
              <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(27,226,202,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Glow inferior */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[140px]
          bg-[radial-gradient(circle_at_bottom,rgba(27,226,202,0.18),transparent)]
          pointer-events-none
          -z-10
        "
      ></div>

      {/* Animaciones keyframes */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(18px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
