import React from "react";
import { Link } from "react-router-dom";

interface PackageCardProps {
  tag: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  button: string;
  highlight?: boolean;
}

export default function PackageCard(props: PackageCardProps) {
  const { tag, title, description, features, price, button, highlight } = props;

  return (
    <div
      className={`
        w-full
        relative
        bg-[var(--avelion-neutral-900)]
        p-8
        mb-20
        rounded-3xl
        shadow-card
        flex
        flex-col
        justify-between
        transition-all
        border
        overflow-hidden
        ${
          highlight
            ? "border-[var(--avelion-primary-500)] shadow-[0_0_22px_rgba(27,226,202,0.22)] hover:scale-[1.03]"
            : "border-[var(--avelion-neutral-700)] hover:border-[var(--avelion-primary-500)] hover:scale-[1.02]"
        }
      `}
    >
      {/* Glow superior */}
      <div className="
        absolute 
        top-0 
        left-0 
        w-full 
        h-[130px] 
        bg-[radial-gradient(circle_at_top,rgba(27,226,202,0.18),transparent)] 
        pointer-events-none
      "></div>

      {/* Tag */}
      <span className="block text-sm text-[var(--avelion-primary-400)] font-medium mb-3 tracking-wide relative z-10">
        {tag}
      </span>

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-3 text-[var(--avelion-neutral-50)] relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[var(--avelion-neutral-300)] text-sm leading-relaxed mb-6 relative z-10">
        {description}
      </p>

      {/* Features */}
      <ul className="text-sm text-[var(--avelion-neutral-200)] space-y-2 mb-6 relative z-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[var(--avelion-primary-400)] text-lg">•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="text-3xl font-bold mb-6 text-[var(--avelion-neutral-50)] relative z-10">
        ${price} MXN
      </div>

      {/* CTA */}
      <Link
        to="/Contacto"
        className="
          w-full
          py-3
          rounded-xl
          text-center
          text-sm
          font-semibold
          border
          border-[var(--avelion-primary-500)]
          text-[var(--avelion-primary-300)]
          hover:bg-[var(--avelion-primary-500)]
          hover:text-[var(--avelion-neutral-900)]
          transition-all
          relative
          z-10
        "
      >
        {button}
      </Link>
    </div>
  );
}
