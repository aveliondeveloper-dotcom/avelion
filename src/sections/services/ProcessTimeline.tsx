import React from "react";

interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

interface Props {
  process: ProcessItem[];
}

export default function ProcessTimeline({ process }: Props) {
  return (
    <section
      className="
        w-full 
        bg-[var(--avelion-neutral-900)]
        text-[var(--avelion-neutral-50)]
        py-12
        mb-20
        relative
        overflow-hidden
      "
    >
      {/* Glow superior */}
      <div
        className="
          absolute top-0 left-0 w-full h-[120px]
          bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.18),transparent)]
          pointer-events-none
        "
      ></div>

      {/* Title */}
      <h2
        className="
          text-4xl font-display font-semibold
          text-center mb-28
          tracking-tight
        "
      >
        Nuestro Proceso
      </h2>

      {/* Timeline container */}
      <div
        className="
          max-w-5xl
          mx-auto
          space-y-10
          px-6
        "
      >
        {process.map((p, i) => (
          <div
            key={i}
            className="
              relative
              flex
              items-start
              gap-6
              p-8
              rounded-2xl
              bg-[var(--avelion-neutral-800)]
              border
              border-[var(--avelion-neutral-700)]
              shadow-card
              transition-all
              hover:border-[var(--avelion-primary-500)]
              hover:scale-[1.02]
            "
          >
            {/* Glow interno sutil */}
            <div
              className="
                absolute top-0 left-0 w-full h-[65px]
                bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.10),transparent)]
                pointer-events-none
              "
            ></div>

            {/* Step number */}
            <span
              className="
                text-[var(--avelion-primary-400)]
                text-5xl 
                font-bold 
                leading-none
                relative 
                z-10
              "
            >
              {p.step}
            </span>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-sm text-[var(--avelion-neutral-300)] leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
