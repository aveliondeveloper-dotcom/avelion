import React from "react";
import { ReactComponent as IconLinkedIn } from "../../images/icons/linkedin.svg";
import { ReactComponent as IconTwitter } from "../../images/icons/github.svg";
import { ReactComponent as IconInstagram } from "../../images/icons/instagram.svg";
import { ReactComponent as IconMail } from "../../images/icons/mail.svg";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000] text-[var(--avelion-neutral-200)] py-16 relative overflow-hidden">
      {/* Glow sutil inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[140px] bg-[radial-gradient(circle_at_bottom,rgba(27,226,202,0.12),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* Branding */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-[var(--avelion-primary)]">Avelion Developers</h2>
          <p className="text-[var(--avelion-neutral-300)]">Estrategia. Diseño. Impacto.</p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[var(--avelion-neutral-300)]">Navegación</h3>
          <a href="#hero" className="hover:text-[var(--avelion-primary)] transition-colors">Inicio</a>
          <a href="#about" className="hover:text-[var(--avelion-primary)] transition-colors">Nosotros</a>
          <a href="#portfolio" className="hover:text-[var(--avelion-primary)] transition-colors">Portafolio</a>
          <a href="#blog" className="hover:text-[var(--avelion-primary)] transition-colors">Blog</a>
          <a href="#contact" className="hover:text-[var(--avelion-primary)] transition-colors">Contacto</a>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[var(--avelion-neutral-300)]">Contacto</h3>
          <a href="mailto:aveliondeveloper@gmail.com" className="hover:text-[var(--avelion-primary)] transition-colors flex items-center gap-2">
            <IconMail className="w-5 h-5" /> aveliondeveloper@gmail.com
          </a>
          <p>+52 56 6162 1222</p>
          <p>Ciudad de México, MX</p>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[var(--avelion-neutral-300)]">Redes sociales</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://linkedin.com/company/avelion" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--avelion-primary)] transition-colors">
              <IconLinkedIn className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/avelion" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--avelion-primary)] transition-colors">
              <IconTwitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/avelion" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--avelion-primary)] transition-colors">
              <IconInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
{/* Línea inferior */}
<div className="mt-16 border-t border-[var(--avelion-neutral-500)] pt-6 text-center text-[var(--avelion-neutral-100)] text-sm flex flex-col md:flex-row justify-center items-center gap-4">
  <span>© {currentYear} Avelion Developers. Todos los derechos reservados.</span>
  <span className="hidden md:inline">|</span>
  <a href="/aviso-privacidad" className="hover:text-[var(--avelion-primary)] transition-colors">Aviso de privacidad</a>
  <span className="hidden md:inline">|</span>
  <a href="/terminos-condiciones" className="hover:text-[var(--avelion-primary)] transition-colors">Términos y condiciones</a>
</div>

{/* Segunda línea */}
<div className="mt-3 text-center text-[var(--avelion-neutral-200)] text-xs opacity-80">
  Hecho con código 💻 y café ☕
</div>

    </footer>
  );
}
