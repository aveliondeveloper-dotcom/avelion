import React from "react";
import servicesData from "../data/services.json";

import OfferBullets from "../sections/services/OfferBullets";
import PackageCard from "../sections/services/PackageCard";
import ServiceFeatures from "../sections/services/ServiceFeatures";
import ProcessTimeline from "../sections/services/ProcessTimeline";
import FAQSection from "../sections/services/FAQSection";
import FooterSection from "../sections/landingpage/FooterSection";
import CTASection from "../sections/landingpage/CTASection";

export default function Services() {
  const { offers, packages, features, process, faqs } = servicesData;

  return (
    <div className="min-h-screen bg-[var(--avelion-neutral-900)] text-[var(--avelion-neutral-100)] font-sans">
      
        {/* OFERTAS */}
        <OfferBullets offers={offers} />

        {/* PAQUETES */}
        <section className="mb-section">
          <h2 className="text-3xl py-20 font-display font-semibold mb-10 text-center tracking-tight">
            Paquetes para Emprendedores
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                tag={pkg.tag}
                title={pkg.title}
                description={pkg.description}
                features={pkg.features}
                price={pkg.price}
                button={pkg.button}
                highlight={pkg.highlight}
              />
            ))}
          </div>
        </section>

      {/* Glow superior */}
      <div className="absolute top-0 left-0 w-full h-[250px] bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.18),transparent)] pointer-events-none"></div>

        {/* FEATURES */}
        <ServiceFeatures features={features} />

        {/* PROCESO */}
        <ProcessTimeline process={process} />

        {/* FAQ */}
        <FAQSection faqs={faqs} />

        {/* CTA FINAL */}
        <CTASection />
        <FooterSection/>  
      </div>
    
  );
}
