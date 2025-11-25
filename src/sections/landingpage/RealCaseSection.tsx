import React from "react";
import landingData from "../../data/landingpage.json";

// Iconos de cada caso
import IconHidalgo from "../../images/realcase/constructora.png";
import IconSateliteFC from "../../images/realcase/satelite.png";
import IconEmotiLand from "../../images/realcase/emotiland.png";
import IconFiberManager from "../../images/realcase/fiberManager.png";
import IconLavanderia from "../../images/realcase/lavanderia.png";
import IconSneaker from "../../images/realcase/sneaker.png";
import IconSerenia from "../../images/realcase/serenia.png";
import IconClaveApp from "../../images/realcase/clave.png";

interface RealCaseJSON {
  title: string;
  subtitle: string;
  stack: string[];
  results: string[];
}

interface RealCase extends RealCaseJSON {
  icon: string;
}

const RealCaseSection: React.FC = () => {
  const { realCases } = landingData.landingPage;

  const iconMap: Record<string, string> = {
    "Constructora Hidalgo": IconHidalgo,
    "Satélite FC": IconSateliteFC,
    "EmotiLand": IconEmotiLand,
    "FiberManager": IconFiberManager,
    "Lavandería Hacienda": IconLavanderia,
    "Sneaker Designer App": IconSneaker,
    "Serenia": IconSerenia,
    "Clave App": IconClaveApp,
  };

  const casesWithIcon: RealCase[] = realCases.cases.map((c: RealCaseJSON) => ({
    ...c,
    icon: iconMap[c.title],
  }));

  return (
    <section
      id={realCases.id}
      className="relative w-full bg-[var(--avelion-neutral-900)] text-[var(--avelion-neutral-50)]  px-layout overflow-hidden"
    >
      {/* Glow superior */}
      <div className="absolute top-0 left-0 w-full h-[80px] bg-[radial-gradient(circle_at_top,rgba(3,248,228,0.25),transparent)] pointer-events-none"></div>

      {/* Título de sección */}
      <div className="mb-20 py-5 text-center">
        <h2 className="font-display text-4xl md:text-4xl font-semibold tracking-tight">
          {realCases.title}
        </h2>
        <p className="text-[var(--avelion-neutral-200)] mt-10">{realCases.subtitle}</p>
      </div>

      {/* Grid de casos */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mb-20 mx-auto">
        {casesWithIcon.map((caseItem, index) => (
          <li
            key={index}
            className="relative p-6 rounded-2xl bg-[var(--avelion-neutral-800)] border border-transparent shadow-card transition-all duration-300 hover:border-avelion-primary hover:shadow-[0_0_25px_rgba(3,248,228,0.35)] cursor-pointer overflow-hidden"
          >
            {/* Glow dinámico */}
            <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(3,248,228,0.12),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>

            {/* Contenido principal */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex justify-center items-start md:items-center">
                <img
                  src={caseItem.icon}
                  alt={`${caseItem.title} icon`}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl text-avelion-primary mb-1">
                  {caseItem.title}
                </h3>
                <p className="text-[var(--avelion-neutral-200)] text-lg mb-3">
                  {caseItem.subtitle}
                </p>

                {/* Stack */}
                <ul className="flex flex-wrap gap-2 mb-4">
                  {caseItem.stack.map((tech, idx) => (
                    <li
                      key={idx}
                      className="text-sm px-2 py-1 bg-avelion-primary/20 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Resultados */}
                <ul className="list-disc list-inside text-sm text-[var(--avelion-neutral-200)]">
                  {caseItem.results.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Glow inferior */}
            <div className="absolute bottom-0 left-0 w-full h-[25px] bg-[radial-gradient(circle_at_bottom,rgba(3,248,228,0.18),transparent)] pointer-events-none rounded-b-2xl"></div>
          </li>
        ))}
      </ul>

      {/* Glow inferior general */}
      <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[radial-gradient(circle_at_bottom,rgba(3,248,228,0.12),transparent)] pointer-events-none -z-10"></div>
    </section>
  );
};

export default RealCaseSection;
