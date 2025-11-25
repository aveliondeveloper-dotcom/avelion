import React from "react";
import VisionBG from "../../images/background/vision-bg.jpg";

export interface VisionData {
  id: string;
  title: string;
  description: string;
}

interface Props {
  data: VisionData;
}

export default function VisionSection({ data }: Props) {
  return (
    <section
      className="
        relative
        py-32
    
        text-avelion-neutral-50
        overflow-hidden
      "
    >
      {/* BACKGROUND PARALLAX */}
      <div
        className="
          absolute inset-0
          w-full h-full
          bg-cover bg-center
          scale-110
          will-change-transform
        "
        style={{
          backgroundImage: `url(${VisionBG})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* CAPA OSCURA */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>

      {/* CONTENIDO */}
      <div className="relative max-w-6xl mx-auto px-layout">

        <h2 className="font-display font-semibold text-center text-3xl md:text-4xl mb-6 tracking-tight">
          {data.title}
        </h2>

        <p className="text-avelion-neutral-200 text-center text-lg md:text-xl leading-relaxed ">
          {data.description}
        </p>

      </div>
    </section>
  );
}
