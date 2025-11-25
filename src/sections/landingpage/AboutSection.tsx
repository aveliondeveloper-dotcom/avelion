import React from "react";
import data from "../../data/landingpage.json";

// Importación de íconos individuales según highlight
import techIcon from "../../images/icons/chip.svg";
import designIcon from "../../images/icons/pen-tool.svg";
import marketingIcon from "../../images/icons/graph.svg";
import automationIcon from "../../images/icons/robot.svg";
import dashboardIcon from "../../images/icons/eye.svg";
import apiIcon from "../../images/icons/puzzle.svg";


export default function AboutSection() {
  const about = data.landingPage.about;

  // Asignación iconográfica por highlight
  const highlightIcons: Record<string, string> = {
    "Ingeniería tecnológica elegante": techIcon,
    "Diseño UI/UX de precisión": designIcon,
    "Marketing integral basado en datos": marketingIcon,
    "Automatización inteligente": automationIcon,
    "Trazabilidad completa y dashboards": dashboardIcon,
    "Integraciones API + software modular": apiIcon,
  };

  return (
    <section
      id={about.id}
      className="
        relative w-full pb-10 px-6
        bg-[var(--avelion-neutral-900)]
        text-white overflow-hidden
      "
    >
      <div className="relative max-w-5x1 mx-auto z-10">
        {/* Glow full-width detrás del título */}
        <div className="relative w-full mb-12 py-1 ">
          <span
            className="
             absolute top-0 left-0 
             w-full h-[100px] 
             bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.25),transparent)] 
             pointer-events-none
            "
          ></span>

          {/* TÍTULO */}
          <h2
            className="
            font-display 
            font-semibold
            text-3xl md:text-4xl
            leading-tight tracking-wide
            my-4 text-center
            drop-shadow-[0_0_16px_rgba(3,248,228,0.18)]
          "
          >
            {about.title}
          </h2>

        </div>


        {/* DESCRIPCIÓN */}
        <p
          className="
            text-avelion-neutral-200 font-sans
            text-lg md:text-2xl leading-relaxed
            max-w-3xl mx-auto text-center
            mb-20
          "
        >
          {about.description}
        </p>

        {/* LISTA CON ÍCONOS INDEPENDIENTES */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {about.highlights.map((item: string, index: number) => (
            <div
              key={index}
              className="
                group flex items-start gap-5 py-4
                border-b border-avelion-neutral-800/60
                last:border-none
                transition-all
              "
            >
              {/* ICONO INDIVIDUAL */}
              <img
                src={highlightIcons[item]}
                alt="icon"
                className="
                  w-10 h-10 opacity-80
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* TEXTO */}
              <p
                className="
                  text-avelion-neutral-100
                  text-xl  leading-snug tracking-wide
                  transition-colors duration-300
                  group-hover:text-avelion-primary
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
