import React from "react";

interface Props {
  embedUrl?: string; // opcional
}

export default function ContactMap({ embedUrl }: Props) {
  // URL generada sin API, centrada en las coordenadas 19.6559, -99.1181
  const fallbackUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3763.0!2d-99.1181!3d19.6559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f14!5e0!3m2!1ses!2smx!4v1703384400000";

  const finalUrl = embedUrl || fallbackUrl;

  return (
    <section className="py-section bg-avelion-neutral-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* MAPA — Izquierda */}
          <div className="overflow-hidden rounded-2xl shadow-card border border-avelion-neutral-800 h-[420px]">
            <iframe
              title="Mapa ubicación Avelion"
              src={finalUrl}
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>

          {/* DIRECCIÓN — Derecha */}
          <div className="text-avelion-neutral-50 md:pl-6">
            <h3 className="text-2xl font-display font-semibold mb-3">
              Nuestra ubicación
            </h3>

            <p className="text-avelion-neutral-300 leading-relaxed">
              Parque Industrial Tultitlán  
              <br />
              Zona cercana a Av. Industria Automotriz  
              <br />
              C.P. 54986 — Estado de México
            </p>

            <div className="mt-6 text-sm text-avelion-neutral-400">
              Coordenadas focales:
              <br />
              <span className="text-avelion-neutral-200">
                19.6559, -99.1181
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
