import React from "react";
import { Link } from "react-router-dom";

interface Offer {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  offers: Offer[];
}

export default function OfferBullets({ offers }: Props) {
  return (
    <section
      className="
        w-full
        bg-[var(--avelion-neutral-800)]
        text-[var(--avelion-neutral-50)]
        py-40
        px-10
        relative
        overflow-hidden
        flex
        flex-col
        items-center
      "
    >
      {/* Glow superior */}
      <div className="absolute top-0 left-0 w-full h-[250px] bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.18),transparent)] pointer-events-none"></div>

      <h2 className="text-4xl font-display font-semibold mb-4 tracking-tight text-center">
        Beneficios Exclusivos para Primer Contacto
      </h2>

      <p className="text-avelion-neutral-200 text-center max-w-2xl text-sm mb-20">
        Diseñado para maximizar tu impacto desde el primer día.
      </p>

      <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-6xl px-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="
              bg-[var(--avelion-neutral-800)]
              p-8
              rounded-2xl
              border border-[var(--avelion-neutral-700)]
              shadow-card
              flex flex-col
              justify-between
              w-full md:w-1/3
              transition-all
              hover:border-[var(--avelion-primary-500)]
            "
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-[var(--avelion-primary-400)] text-2xl">{offer.icon}</span>
                {offer.title}
              </h3>

              <p className="text-avelion-neutral-200 text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/Contacto"
              className="
                mt-6
                inline-block
                text-center
                w-full
                px-4
                py-2.5
                rounded-xl
                font-medium
                text-sm
                border
                border-[var(--avelion-primary-500)]
                text-[var(--avelion-primary-300)]
                hover:bg-[var(--avelion-primary-500)]
                hover:text-[var(--avelion-neutral-900)]
                transition-all
              "
            >
              Agendar contacto
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
