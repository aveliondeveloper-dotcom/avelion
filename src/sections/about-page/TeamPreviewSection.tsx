import React from "react";
export interface TeamPreviewData {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
}

interface Props {
  data: TeamPreviewData;
}

export default function TeamPreviewSection({ data }: Props) {
  return (
    <section className="py-section bg-avelion-neutral-900 text-avelion-neutral-50 relative overflow-hidden">

      {/* Glow superior sutil */}
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,rgba(3,248,228,0.15),transparent)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-layout text-center">

        {/* Título */}
        <h2 className="font-display text-3xl md:text-5xl mb-4 tracking-tight">
          {data.title}
        </h2>

        {/* Subtítulo */}
        <p className="text-avelion-neutral-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {data.subtitle}
        </p>

        {/* CTA */}
        <button
          className="
            px-10 py-4
            rounded-xl
            font-display text-lg
            bg-avelion-primary text-black
            shadow-[0_0_25px_rgba(3,248,228,0.25)]
            hover:shadow-[0_0_35px_rgba(3,248,228,0.35)]
            transition-all
          "
        >
          {data.cta}
        </button>

      </div>

    </section>
  );
}
