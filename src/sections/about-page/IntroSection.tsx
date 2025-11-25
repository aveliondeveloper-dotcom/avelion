import React from "react";
import IntroBg from "../../images/background/intro-about-bg.jpg";

export interface IntroData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

interface Props {
  data: IntroData;
}

export default function IntroSection({ data }: Props) {
  return (
    <section className="relative py-section bg-avelion-neutral-900 text-alineada-center text-avelion-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-layout mt-10 relative">

        {/* Glow full-width detrás del título */}
        <div className="relative w-full mb-12 py-4">
          <span
            className="
              absolute inset-0
              w-screen left-1/2 -translate-x-1/2
              bg-[linear-gradient(135deg,rgba(3,248,228,0.22),transparent)]
              pointer-events-none
              opacity-100
            "
          ></span>

          <h1 className="relative font-display text-center text-4xl md:text-4xl font-semibold tracking-tight">
            {data.title}
          </h1>
        </div>

        {/* GRID PRINCIPAL — Imagen alineada con texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Contenido textual */}
          <div className="relative flex flex-col gap-6 max-w-xl">
            <p className="text-avelion-neutral-100 text-xl md:text-2xl leading-normal">
              {data.subtitle}
            </p>

            <p className="text-avelion-neutral-200 text-xl leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Imagen con capa oscura premium */}
          <div className="relative flex justify-center">
            {/* Wrapper para overlay + imagen */}
            <div className="relative w-[70%] max-w-[480px]">
              
              {/* Imagen */}
              <img
                src={IntroBg}
                alt="Avelion Intro Graphic"
                className="
                  w-full
                  h-auto
                  object-contain
                  rounded-2xl
                  opacity-100
                  shadow-subtle
                  mix-blend-screen
                "
              />

              {/* Capa oscura sin perder calidad */}
              <div
                className="
                  absolute inset-0
                  rounded-2xl
                  bg-[rgba(0,0,0,0.45)]
                  pointer-events-none
                "
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
