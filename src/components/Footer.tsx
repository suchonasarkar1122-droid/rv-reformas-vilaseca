import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Reformas Integrales", href: "/servicios/reformas-integrales" },
  { label: "Reformas de Cocinas", href: "/servicios/reformas-cocinas" },
  { label: "Reformas de Baños", href: "/servicios/reformas-banos" },
  { label: "Reformas de Pisos", href: "/servicios/reformas-pisos" },
  { label: "Reformas de Locales", href: "/servicios/reformas-locales" },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const zoneLinks = [
  { label: "Reformas en Vila-seca", href: "/" },
  { label: "Reformas en Salou", href: "/zonas/reformas-salou" },
  { label: "Reformas en La Canonja", href: "/zonas/reformas-la-canonja" },
  { label: "Reformas en Tarragona", href: "/zonas/reformas-tarragona" },
  { label: "Reformas en Cambrils", href: "/zonas/reformas-cambrils" },
  { label: "Reformas en Constantí", href: "/zonas/reformas-constanti" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-20">
        <div className="flex flex-col gap-12 pt-16 pb-8">

          {/* Top: Logo + CTA */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex-shrink-0">
              <Image src="/images/logo.webp" alt="RV Reformas Vila-seca" width={320} height={255} className="h-32 w-auto" />
            </Link>
            </div>

            <h2 className="font-display font-bold text-[22px] md:text-[28px] leading-[1.2] max-w-[460px] text-white/90">
              Pisos turísticos, segundas residencias y casas de la costa Daurada listos para vivir y para alquilar.
            </h2>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Services */}
            <div className="flex flex-col gap-5">
              <h3 className="font-body font-bold text-xs uppercase tracking-[0.2em] text-accent">Servicios</h3>
              <div className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-body">{link.label}</Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-5">
              <h3 className="font-body font-bold text-xs uppercase tracking-[0.2em] text-accent">Navegación</h3>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-body">{link.label}</Link>
                ))}
              </div>
            </div>

            {/* Zones */}
            <div className="flex flex-col gap-5">
              <h3 className="font-body font-bold text-xs uppercase tracking-[0.2em] text-accent">Zonas</h3>
              <div className="flex flex-col gap-3">
                {zoneLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-body">{link.label}</Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-5">
              <h3 className="font-body font-bold text-xs uppercase tracking-[0.2em] text-accent">Contacto</h3>
              <div className="flex flex-col gap-3 text-sm text-white/60 font-body">
                <a href="tel:+34877278105" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 text-accent/70">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  877 278 105
                </a>
                <a href="mailto:info@reformasvilaseca.es" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 text-accent/70">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  info@reformasvilaseca.es
                </a>
                <span className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5 text-accent/70">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Rambla de Catalunya, 6, 43480 Vila-seca, Tarragona
                </span>
              </div>
            </div>
          </div>

          {/* Legal + Bottom */}
          <div className="flex flex-col gap-4 pt-4">
            <div className="w-full h-px bg-white/10" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-white/30 text-xs font-body">
                &copy; {new Date().getFullYear()} RV Reformas Vila-seca. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-4 text-white/30 text-xs font-body">
                <Link href="/aviso-legal" className="hover:text-white/60 transition-colors">Aviso Legal</Link>
                <Link href="/politica-privacidad" className="hover:text-white/60 transition-colors">Privacidad</Link>
                <Link href="/cookies" className="hover:text-white/60 transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
