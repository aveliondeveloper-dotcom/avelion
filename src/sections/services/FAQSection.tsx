import React from "react";

interface FAQ {
  q: string;
  a: string;
}

interface Props {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: Props) {
  return (
    <section
      className="
        w-full 
        bg-[var(--avelion-neutral-900)]
        text-[var(--avelion-neutral-50)]
        
        relative
        overflow-hidden
      "
    >
      {/* Glow superior */}
      <div
        className="
          absolute top-0 left-0 w-full h-[120px]
          bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.18),transparent)]
          pointer-events-none
        "
      ></div>

      {/* Title */}
      <h2
        className="
          text-4xl font-display font-semibold 
          text-center mb-16 
          tracking-tight
          mt-10
          mb-28
        "
      >
        Preguntas Frecuentes
      </h2>

      <div
        className="
          max-w-4xl 
          mx-auto 
          px-6
          space-y-10
          mb-20
        "
      >
        {faqs.map((item, i) => (
          <details
            key={i}
            className="
              group
              pb-4
              border-b
              border-[var(--avelion-neutral-700)]
              transition-all
            "
          >
            <summary
              className="
                cursor-pointer
                text-lg
                font-medium
                tracking-tight
                text-[var(--avelion-neutral-50)]
                flex 
                justify-between 
                items-center
                select-none
              "
            >
              <span>{item.q}</span>

              {/* Icono (+ / –) */}
              <span
                className="
                  text-[var(--avelion-primary-400)]
                  text-xl
                  transition-transform
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            {/* Línea animada al abrir */}
            <div
              className="
                h-[1px]
                w-full
                mt-2
                bg-[var(--avelion-primary-400)]
                scale-x-0
                group-open:scale-x-100
                origin-left
                transition-transform
                duration-300
              "
            ></div>

            <p
              className="
                text-sm 
                text-[var(--avelion-neutral-300)] 
                mt-4 
                leading-relaxed
              "
            >
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
