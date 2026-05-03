import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Servicios de Reformas en Vila-seca | RV",
  description:
    "Reformas integrales, cocinas, baños, pisos y locales en Vila-seca, La Pineda y el Tarragonès. Para vivir, alquilar como vivienda turística o abrir tu negocio antes de temporada.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de Reformas en Vila-seca | RV",
    description: "Cinco servicios de reforma especializados en pisos costeros, alquiler turístico, casas pairales y locales del corredor Vila-seca - Salou - Cambrils.",
    url: "/servicios",
    images: ["/images/reforma-integral-vivienda-vilaseca.webp"],
  },
};

const servicesList = [
  {
    title: "Reformas Integrales",
    href: "/servicios/reformas-integrales",
    image: "/images/reforma-integral-vivienda-vilaseca.webp",
    alt: "Reforma integral llave en mano en Vila-seca",
    summary: "Pisos turísticos, segundas residencias y casas pairales reformadas de cero con importe cerrado y plantilla propia.",
  },
  {
    title: "Reformas de Cocinas",
    href: "/servicios/reformas-cocinas",
    image: "/images/cocina-amplia-segunda-residencia-vilaseca.webp",
    alt: "Cocina abierta en Vila-seca",
    summary: "Cocinas americanas para alquiler turístico, abiertas para vivienda familiar y con isla central para chalet. Diseño 3D antes de empezar.",
  },
  {
    title: "Reformas de Baños",
    href: "/servicios/reformas-banos",
    image: "/images/bano-piso-turistico-vilaseca.webp",
    alt: "Baño con plato de obra en piso turístico de La Pineda",
    summary: "Cambio de bañera por ducha, plato de obra antideslizante, mampara inox y grifería antical. Pensado para la cal local.",
  },
  {
    title: "Reformas de Pisos",
    href: "/servicios/reformas-pisos",
    image: "/images/piso-reformado-vilaseca.webp",
    alt: "Piso costero reformado en La Pineda",
    summary: "Pisos costeros listos antes del verano. Para vivir todo el año, abrir al alquiler turístico o pasar las vacaciones de la familia.",
  },
  {
    title: "Reformas de Locales",
    href: "/servicios/reformas-locales",
    image: "/images/local-comercial-vilaseca.webp",
    alt: "Local comercial reformado en Vila-seca centre",
    summary: "Hostelería estacional, comercio de barrio y oficinas con licencia de actividad y plazos pegados al primer cliente.",
  },
];

export default function ServiciosHub() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
        ]}
      />

      <HeroService
        title="Cinco servicios para reformar tu inmueble en el Tarragonès"
        subtitle="Vivir, alquilar o abrir un negocio. Da igual el destino: el método y el equipo son los mismos. Lo que cambia son los acabados y los plazos."
        image="/images/reforma-integral-vivienda-vilaseca.webp"
        imageAlt="Servicios de reforma en Vila-seca - RV Reformas"
        h1Keyword="Servicios de Reformas en Vila-seca"
        badge="Catálogo de servicios"
        showCTA={false}
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14 max-w-[720px] mx-auto">
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05] mb-5">
              Servicios de reformas en Vila-seca
            </h2>
            <p className="font-body text-subtitle text-base">
              Elige el servicio que necesitas. Cada servicio enlaza a una página con presupuesto orientativo, materiales recomendados, plazos típicos y FAQ específicas. Si no sabes por dónde empezar, llama al 877 278 166 y lo aclaramos en cinco minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesList.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image src={s.image} alt={s.alt} title={s.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
                </div>
                <div className="p-7 flex flex-col gap-3">
                  <h3 className="font-display font-bold text-2xl text-dark group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="font-body text-subtitle text-sm leading-relaxed">{s.summary}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm mt-2">
                    Ver detalle del servicio
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Solicita presupuesto para tu reforma</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">¿No encuentras tu caso? Atendemos también obras pequeñas de albañilería, sustitución de carpintería exterior, reparaciones puntuales para alquiler turístico entre temporadas y mantenimiento. Llama y vemos si encaja.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
            Cuéntanos tu caso
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
