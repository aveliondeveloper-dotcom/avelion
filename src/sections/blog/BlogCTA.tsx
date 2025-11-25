import React from "react";

interface Props {
  data: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function BlogCTA({ data }: Props) {
  return (
    <section className="mt-section text-center max-w-4xl mx-auto px-6">
      <h3 className="text-3xl font-display font-semibold mb-4">{data.title}</h3>
      <p className="text-avelion-neutral-300 mb-8">{data.subtitle}</p>

      <button className="px-10 py-3 rounded-full bg-avelion-primary text-white font-medium hover:bg-avelion-primary-dark transition">
        {data.cta}
      </button>
    </section>
  );
}
