import React from "react";

// IMPORTS DE ICONOS SVG (uno por pilar)
import IconVision from "../../images/icons/vision.svg";
import IconPrecision from "../../images/icons/precision.svg";
import IconInnovacion from "../../images/icons/innovacion.svg";

// LOGO AVELION COMO BACKGROUND
import AvelionLogo from "../../images/logos/avelion-logo.svg";

export interface BrandPillar {
  name: string;
  description: string;
  icon?: "vision" | "precision" | "innovacion"; // opcional si lo quieres dinámico
}

export interface BrandPillarsData {
  id: string;
  title: string;
  items: BrandPillar[];
}

interface Props {
  data: BrandPillarsData;
}

export default function BrandPillarsSection({ data }: Props) {
  const iconMap: any = {
    vision: IconVision,
    precision: IconPrecision,
    innovacion: IconInnovacion,
  };

  return (
    <section className="py-section bg-avelion-neutral-900  text-avelion-neutral-50 relative">
      <div className="max-w-6xl mx-auto px-layout">
        <div className="relative w-full mb-12 py-4">
          

          {/* TÍTULO */}
          <h2 className="font-display text-4xl md:text-4xl text-center tracking-tight">
            {data.title}
          </h2>
        </div>

        {/* GRID DE TARJETAS */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.items.map((item: BrandPillar, i: number) => (
            <div
              key={i}
              className="
                relative
                rounded-2xl
                p-8
                bg-white/5
                backdrop-blur-md
                border border-white/10
                shadow-[0_0_40px_rgba(0,0,0,0.25)]
                transition-all
                hover:-translate-y-1
                hover:shadow-[0_0_60px_rgba(0,0,0,0.35)]
              "
            >

              {/* LOGO EN BACKGROUND — sutil */}
              <img
                src={AvelionLogo}
                alt=""
                className="
                  absolute p-4 inset-0 w-full h-full object-contain opacity-[0.025]
                  pointer-events-none select-none scale-80
                "
              />

              {/* ICONO */}
              <div className="relative  mb-6">
                <img
                  src={item.icon ? iconMap[item.icon] : IconVision}
                  alt={item.name}
                  className="w-8 h-8 opacity-90"
                />
              </div>

              {/* CONTENIDO */}
              <h3 className="relative text-avelion-primary font-display text-xl mb-3">
                {item.name}
              </h3>

              <p className="relative text-avelion-neutral-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
