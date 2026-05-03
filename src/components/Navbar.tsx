"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const serviceDropdown = [
  { label: "Reformas Integrales", href: "/servicios/reformas-integrales" },
  { label: "Reformas de Cocinas", href: "/servicios/reformas-cocinas" },
  { label: "Reformas de Baños", href: "/servicios/reformas-banos" },
  { label: "Reformas de Pisos", href: "/servicios/reformas-pisos" },
  { label: "Reformas de Locales", href: "/servicios/reformas-locales" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-center px-5 md:px-10 lg:px-20 py-5">
        <div className="flex items-center justify-between w-full max-w-[1400px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image src="/images/logo.webp" alt="RV Reformas Vila-seca" width={320} height={255} className="h-[100px] w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-sm font-medium hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white text-sm font-medium hover:text-accent transition-colors duration-200 flex items-center gap-1"
              >
                Servicios
                <svg className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-dark/95 backdrop-blur-md rounded-xl border border-white/10 py-3 min-w-[240px] shadow-xl">
                  {serviceDropdown.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-2.5 text-white/80 text-sm hover:text-accent hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/zonas"
              className="text-white text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              Zonas
            </Link>
            <Link
              href="/blog"
              className="text-white text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+34877278166"
              className="inline-flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              877 278 166
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent-light transition-colors duration-200"
            >
              Pide presupuesto
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-md border-t border-white/10 rounded-b-[10px]">
          <nav className="flex flex-col px-5 py-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-white text-base font-medium hover:text-accent transition-colors py-2">
                {link.label}
              </Link>
            ))}
            <span className="text-white/40 text-xs uppercase tracking-wider pt-2">Servicios</span>
            {serviceDropdown.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-white/80 text-base font-medium hover:text-accent transition-colors py-2 pl-4">
                {link.label}
              </Link>
            ))}
            <Link href="/zonas" onClick={() => setMobileOpen(false)} className="text-white text-base font-medium hover:text-accent transition-colors py-2">Zonas</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-white text-base font-medium hover:text-accent transition-colors py-2">Blog</Link>
            <a href="tel:+34877278166" className="text-accent text-base font-bold py-2">877 278 166</a>
            <Link href="/contacto" onClick={() => setMobileOpen(false)} className="bg-accent text-white px-6 py-3 rounded-full text-center font-semibold mt-2">
              Pide presupuesto gratis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
