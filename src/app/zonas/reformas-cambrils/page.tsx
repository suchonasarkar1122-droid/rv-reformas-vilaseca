import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Cambrils · Pisos heredados y obras puntuales | RV",
  description: "Reformas en Cambrils para clientes de Vila-seca con piso heredado o que prefieren mismo equipo en Vilafortuny. Obras puntuales y reformas integrales. 877 278 105.",
  alternates: { canonical: "/zonas/reformas-cambrils" },
  openGraph: { title: "Reformas en Cambrils - RV Reformas", description: "Reformas puntuales en Cambrils para vecinos de Vila-seca con vivienda heredada o segunda residencia familiar.", url: "/zonas/reformas-cambrils" },
};

const services = [
  { title: "Pisos heredados de familia", desc: "Reforma integral de piso heredado en Cambrils Centre o Vilafortuny para venderlo, alquilarlo o usarlo.", href: "/servicios/reformas-integrales" },
  { title: "Cocinas en segundas residencias", desc: "Cocina abierta para casa familiar de Cambrils que se usa varios meses al año.", href: "/servicios/reformas-cocinas" },
  { title: "Baños llave en mano", desc: "Plato de obra y mampara antical para baños desactualizados de los 80-90.", href: "/servicios/reformas-banos" },
  { title: "Obras puntuales", desc: "Cambio de carpintería, repaso de fachada o pintura interior cuando no toca reforma integral.", href: "/contacto" },
];

const faqs = [
  { q: "¿Por qué un cliente de Vila-seca os contrataría para reformar en Cambrils?", a: "El motivo más habitual es que el cliente ya nos conoce de una obra previa en Vila-seca y prefiere mismo equipo cuando le toca reformar el piso heredado de Cambrils Centre o el apartamento de Vilafortuny. Otra razón es que la familia tiene varias propiedades en distintos puntos de la costa Daurada y prefiere centralizar." },
  { q: "¿Cubrís Cambrils si vivo en Cambrils?", a: "Sí, aunque la zona la tenemos como secundaria. Hacemos visita y propuesta como en Vila-seca. Si la obra es muy grande y compleja, te decimos honestamente si tiene más sentido que trabajes con un equipo de Cambrils. La transparencia es la base." },
  { q: "Distancia y plazos desde Vila-seca", a: "Cambrils está a 9 km / 12 minutos por la N-340. La distancia es muy similar a Salou, así que no genera sobrecoste por desplazamiento. Plazos idénticos al resto de zonas." },
  { q: "¿Reformáis en Vilafortuny?", a: "Sí. Vilafortuny tiene urbanizaciones residenciales con casas pareadas y unifamiliares de los 80-90. Reformamos integrales con cocina abierta y suite principal en planta alta. Materiales costeros." },
];

export default function ZonaCambrilsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en Cambrils", url: "/zonas/reformas-cambrils" },
        ]}
      />

      <HeroService
        title="Reformas en Cambrils para vecinos de Vila-seca"
        subtitle="Pisos heredados de familia, segundas residencias en Vilafortuny y obras puntuales para clientes que ya nos conocen. Mismo equipo, mismo método de trabajo."
        image="/images/casa-reformada-vilaseca.webp"
        imageAlt="Reformas en Cambrils y Vilafortuny"
        h1Keyword="Reformas en Cambrils"
        badge="Zona secundaria"
        showCTA
        trustItems={["Mismo equipo", "Pisos heredados", "Vilafortuny"]}
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Cambrils en una línea</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1]">
                Reformas en Cambrils: cómo trabajamos esta zona
              </h2>
              <p className="font-body text-subtitle text-base leading-relaxed font-medium">
                Cambrils es zona secundaria, pero también la atendemos.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                A 9 km al sur de Vila-seca, Cambrils tiene su propia identidad costera con tradición pesquera y un casco antiguo cuidado. Nuestra propuesta aquí es muy específica: trabajamos sobre todo cuando un cliente que ya nos conoce de Vila-seca tiene una propiedad en Cambrils (un piso heredado, una segunda residencia familiar, una vivienda en Vilafortuny). En esos casos preferimos mantener un único equipo para coordinar mejor.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Si vives en Cambrils y nos buscas para una primera obra, también atendemos. Pero te diremos con honestidad si tiene más sentido que trabajes con un equipo de Cambrils ciudad para algunas tipologías muy específicas (especialmente reformas grandes en el casco antiguo con muchos elementos protegidos).
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Distancia desde Vila-seca: <strong className="text-dark">9 km / 12 minutos por la N-340</strong>.
              </p>
              <CTAButtons />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <Link key={s.title} href={s.href} className="bg-white border border-dark/5 rounded-[14px] p-6 hover:border-accent transition-colors">
                  <h3 className="font-display font-bold text-base text-dark mb-2">{s.title}</h3>
                  <p className="font-body text-subtitle text-sm leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas en Cambrils</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">Dudas frecuentes en Cambrils.</p>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{f.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]">
                  <p className="font-body text-subtitle text-sm leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Solicita presupuesto para tu reforma en Cambrils</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">¿Tienes piso en Cambrils que reformar? Visita técnica sin coste y propuesta detallada. Te decimos honestamente si encajamos en el encargo.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
            Cuéntanos tu caso
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
