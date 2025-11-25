import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logos/avelion-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? "bg-[var(--avelion-neutral-800)] shadow-subtle" : "bg-transparent"}
      `}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between 
        transition-all duration-300
        ${scrolled ? "text-white opacity-100 translate-y-0" : "text-white/100 opacity-90 translate-y-1"}
        `}
      >

        {/* LEFT: Logo + Titulos */}
        <div
          className={`flex items-center gap-4 transition-all duration-300
            ${scrolled ? "opacity-100" : "opacity-90"}
          `}
        >
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Avelion Logo"
              className={`w-10 h-10 object-contain transition-all duration-300
                ${scrolled ? "opacity-100" : "opacity-90"}
              `}
            />
          </Link>

          <div className="leading-tight">
            <h1 className="font-display text-xl tracking-wide transition-all duration-300">
              Avelion Developers
            </h1>
            <span
              className={`text-md transition-all duration-300
                ${scrolled ? "text-avelion-primary" : "text-avelion-primary/90"}
              `}
            >
              Estrategia. Diseño. Impacto.
            </span>
          </div>
        </div>

        {/* CENTER (desktop) */}
        <div
          className={`hidden md:flex gap-8 text-md font-medium transition-all duration-300
            ${scrolled ? "opacity-100" : "opacity-90"}
          `}
        >
          <Link className="hover:text-avelion-secondary transition" to="/services">Servicios</Link>
          <Link className="hover:text-avelion-secondary transition" to="/about">Nosotros</Link>
          <Link className="hover:text-avelion-secondary transition" to="/blog">Blog</Link>
          <Link className="hover:text-avelion-secondary transition" to="/contacto">Contacto</Link>
          </div>

        {/* RIGHT */}
        <button
          className={`hidden md:block px-4 py-2 rounded-soft text-md transition-all duration-300
            ${scrolled ? "bg-white/20 hover:bg-white/30" : "bg-white/10 hover:bg-white/20"}
          `}
        >
          Iniciar sesión
        </button>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
               className="w-7 h-7 transition-all duration-300"
               viewBox="0 0 24 24">
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm bg-[var(--avelion-neutral-900)]">
          <Link onClick={() => setOpen(false)} className="hover:text-avelion-secondary" to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-avelion-secondary" to="/about">About</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-avelion-secondary" to="/blog">Blog</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-avelion-secondary" to="/contacto">Contacto</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-avelion-secondary" to="/portafolio">Portafolio</Link>

          <button className="mt-2 bg-white/10 px-4 py-2 rounded-soft hover:bg-white/20 transition">
            Iniciar sesión
          </button>
        </div>
      )}
    </nav>
  );
}
