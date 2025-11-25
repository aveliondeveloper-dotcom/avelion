import React from "react";

interface Props {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export default function BlogHero({ data }: Props) {
  return (
    <header className="text-center max-w-4xl mx-auto px-6 mb-section">
      <h1 className="text-5xl font-display font-semibold mb-4">{data.title}</h1>
      <h2 className="text-xl text-avelion-neutral-200 mb-4">{data.subtitle}</h2>
      <p className="text-avelion-neutral-300">{data.description}</p>
    </header>
  );
}
