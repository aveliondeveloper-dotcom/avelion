import React from "react";

interface Props {
  cta: string;
}

export default function ContactForm({ cta }: Props) {
  return (
    <section className="relative py-40 bg-avelion-neutral-900 text-avelion-neutral-50 overflow-hidden">
      {/* Glow vertical institucional */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b 
          from-avelion-primary/10 
          via-transparent 
          to-avelion-secondary/5 
          pointer-events-none
        "
      />

      {/* Línea vertical de guía */}
      <div
        className="
          absolute left-1/2 top-0 
          h-full w-[2px] 
          -translate-x-1/2 
          bg-gradient-to-b from-avelion-primary/40 via-avelion-primary/0 to-transparent
        "
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col gap-16">

        {/* Título visual opcional (puedes eliminarlo si quieres 100% minimal) */}
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-avelion-neutral-50">
          Cuéntanos sobre tu proyecto
        </h2>

        <form className="space-y-10 max-w-2xl mx-auto text-left">

          {/* Campo — estilo "línea minimalista" */}
          <div className="group">
            <label className="text-sm text-avelion-neutral-400">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="
                w-full bg-transparent 
                border-b border-avelion-neutral-600 
                py-3 mt-1
                text-avelion-neutral-50
                focus:outline-none 
                focus:border-avelion-primary
                transition-all
              "
            />
          </div>

          <div className="group">
            <label className="text-sm text-avelion-neutral-400">Correo electrónico</label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="
                w-full bg-transparent 
                border-b border-avelion-neutral-600 
                py-3 mt-1
                text-avelion-neutral-50
                focus:outline-none 
                focus:border-avelion-primary
                transition-all
              "
            />
          </div>

          <div className="group">
            <label className="text-sm text-avelion-neutral-400">Mensaje</label>
            <textarea
              rows={5}
              placeholder="Cuéntanos en qué etapa está tu idea…"
              className="
                w-full bg-transparent 
                border-b border-avelion-neutral-600 
                py-3 mt-1
                resize-none
                text-avelion-neutral-50
                focus:outline-none 
                focus:border-avelion-primary
                transition-all
              "
            />
          </div>

          {/* CTA con presencia hero */}
          <button
            className="
              block w-full
              mt-6
              bg-avelion-primary 
              text-avelion-neutral-50 
              py-4 
              rounded-full 
              font-medium 
              tracking-wide
              hover:bg-avelion-secondary 
              transition 
              shadow-[0_0_25px_-5px_rgba(90,60,255,0.25)]
            "
          >
            {cta}
          </button>
        </form>
      </div>
    </section>
  );
}
