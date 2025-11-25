import React from "react";
import data from "../data/contacto-page.json";

import Navbar from "../components/Navbar";
import FooterSection from "../sections/landingpage/FooterSection";

import {
  ContactHero,
  ContactChannels,
  ContactForm,
  ContactMap
} from "../sections/contact";

export default function Contact() {
  return (
    <div className="bg-avelion-neutral-900 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <ContactHero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          description={data.hero.description}
        />

        <ContactChannels channels={data.channels} />

        <ContactForm cta={data.form.cta} />

        <ContactMap embedUrl={data.map.embedUrl} />
      </main>

      <FooterSection />
    </div>
  );
}
