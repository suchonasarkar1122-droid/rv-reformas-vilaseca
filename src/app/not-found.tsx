import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada · 404",
  description: "La página que buscas no existe en RV Reformas Vila-seca. Vuelve al inicio o consulta nuestros servicios y zonas.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-dark min-h-[80vh] flex items-center justify-center px-5">
      <div className="text-center max-w-[600px] flex flex-col items-center gap-6">
        <span className="font-display font-extrabold text-[120px] md:text-[180px] text-accent/20 leading-none select-none">
          404
        </span>

        <h1 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1] -mt-10">
          Esta página no la tenemos
        </h1>

        <p className="font-body text-white/50 text-base md:text-lg leading-relaxed">
          Quizá el enlace está caducado o la URL tiene una errata. Puedes volver al inicio o saltar directamente a un servicio o una zona desde abajo.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-accent-light transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-colors"
          >
            Hablar con nosotros
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-white/30 text-sm font-body">
          <Link href="/servicios/reformas-integrales" className="hover:text-accent transition-colors">Reformas Integrales</Link>
          <span>&middot;</span>
          <Link href="/servicios/reformas-cocinas" className="hover:text-accent transition-colors">Cocinas</Link>
          <span>&middot;</span>
          <Link href="/servicios/reformas-banos" className="hover:text-accent transition-colors">Baños</Link>
          <span>&middot;</span>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        </div>
      </div>
    </section>
  );
}
