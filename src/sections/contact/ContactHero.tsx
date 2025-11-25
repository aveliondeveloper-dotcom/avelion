import React from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

export default function ContactHero({ title, subtitle, description }: Props) {
  return (
    <section className="relative text-center text-avelion-neutral-50 bg-avelion-neutral-900 py-28 overflow-hidden">
      
      {/* Glow superior */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.25),transparent)]" />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="font-display text-6xl font-semibold mb-4">
          {title}
        </h1>

        <p className="text-xl opacity-80 mb-2">
          {subtitle}
        </p>

        <p className="text-base opacity-60 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
