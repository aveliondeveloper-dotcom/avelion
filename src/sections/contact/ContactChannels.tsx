import React from "react";

interface Channel {
  label: string;
  value: string;
}

interface Props {
  channels: Channel[];
}

export default function ContactChannels({ channels }: Props) {
  return (
    <section className="relative py-section bg-avelion-neutral-900 text-avelion-neutral-50 overflow-hidden">
      
      {/* Línea luminosa institucional */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[85%] h-px
          bg-gradient-to-r from-transparent via-avelion-primary to-transparent
          opacity-60
        "
      />

      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {channels.map((item, i) => (
          <div
            key={i}
            className="
              group
              flex flex-col
              border-b border-avelion-neutral-700/60
              pb-6
              hover:border-avelion-primary/60
              transition-colors
            "
          >
            <span className="text-xs tracking-widest uppercase opacity-50 group-hover:opacity-70 transition-opacity">
              {item.label}
            </span>

            <span className="mt-1 text-xl font-medium group-hover:text-avelion-primary transition-colors">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
