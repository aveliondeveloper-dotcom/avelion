import React from "react";

interface Feature {
  title: string;
  description: string;
}

interface Props {
  features: Feature[];
}

export default function ServiceFeatures({ features }: Props) {
  return (
    <section
      className="
        w-full
        bg-[var(--avelion-neutral-800)]
        text-[var(--avelion-neutral-50)]
        py-12
        pb-20
        relative
        overflow-hidden
      "
    >
      {/* Glow superior */}
      <div
        className="
          absolute top-0 left-0
          w-full h-[120px]
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
        Fortalezas del Ecosistema Avelion
      </h2>

      {/* Feature grid */}
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4
          gap-10
          max-w-7xl
          mx-auto
          px-6
        "
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="
              relative
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
                absolute top-0 left-0 w-full h-[90px]
                bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.10),transparent)]
                pointer-events-none
              "
            ></div>

            <h3 className="text-xl font-semibold mb-3 relative z-10">
              {f.title}
            </h3>

            <p className="text-sm text-[var(--avelion-neutral-200)] leading-relaxed relative z-10">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
