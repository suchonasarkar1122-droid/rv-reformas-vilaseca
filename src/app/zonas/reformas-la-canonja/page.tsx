import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en La Canonja · Vivienda residencial | RV",
  description: "Reformas residenciales en La Canonja, Masricard y barrios del corredor industrial. Vivienda de empleados de la petroquímica. Importe cerrado. 877 278 166.",
  alternates: { canonical: "/zonas/reformas-la-canonja" },
  openGraph: { title: "Reformas en La Canonja - RV Reformas", description: "Reforma de viviendas en La Canonja con foco en familias del corredor petroquímico y casas de Masricard.", url: "/zonas/reformas-la-canonja" },
};

const services = [
  { title: "Reformas integrales", desc: "Renovación completa de pisos y casas en La Canonja con calendario realista y materiales duraderos.", href: "/servicios/reformas-integrales" },
  { title: "Cocinas familiares abiertas", desc: "Aperturas de tabique al salón con isla, isla con barra o americana clásica.", href: "/servicios/reformas-cocinas" },
  { title: "Cambio bañera por ducha", desc: "Solución exprés para vivienda principal sin tocar el resto del baño. Obra contenida en pocos días.", href: "/servicios/reformas-banos" },
  { title: "Eficiencia energética", desc: "Aislamiento, ventanas con rotura térmica y aerotermia para reducir factura.", href: "/servicios/reformas-pisos" },
];

const faqs = [
  { q: "¿La Canonja se considera Tarragona o municipio independiente?", a: "Es municipio propio desde 2010, separado de Tarragona. Para licencias y trámites depende del Ayuntamiento de La Canonja, que tiene oficinas en el casco histórico. Los permisos suelen ser ágiles porque el volumen de trámite es menor que en Tarragona capital." },
  { q: "¿Trabajáis con familias del polígono petroquímico?", a: "Una parte importante de nuestros clientes en la zona son trabajadores de Repsol, Dow o Bayer con vivienda en La Canonja o Bonavista. Suele tratarse de pisos de los 90 o 2000 que se reforman para optimizar espacios o pasar a eficiencia energética A." },
  { q: "¿Hacéis casas en Masricard?", a: "Masricard tiene casas pareadas y unifamiliares de los 80-90 con jardín pequeño. Reformamos integrales bastante a menudo: cocina abierta al salón, suite con vestidor en planta alta y porche cerrado para invierno." },
  { q: "Distancia y plazos desde Vila-seca", a: "La Canonja está a 14 km / 18 minutos por la N-340. Hacemos obra allí con la misma plantilla y los mismos plazos que en Vila-seca. Sin sobrecoste por desplazamiento." },
];

export default function ZonaCanonjaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en La Canonja", url: "/zonas/reformas-la-canonja" },
        ]}
      />

      <HeroService
        title="Reformas en La Canonja: vivienda para vivir todo el año"
        subtitle="Pisos del corredor petroquímico, casas de Masricard y vivienda familiar del centro. Reforma residencial sin estacionalidad turística."
        image="/images/casa-reformada-vilaseca.webp"
        imageAlt="Reforma residencial en La Canonja"
        h1Keyword="Reformas en La Canonja"
        badge="Vivienda residencial"
        showCTA
        trustItems={["Sin estacionalidad", "Eficiencia energética", "Plantilla propia"]}
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">La Canonja en una línea</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1]">
                Reformas en La Canonja: zona y características
              </h2>
              <p className="font-body text-subtitle text-base leading-relaxed font-medium">
                Vivir entre el corredor logístico y el casco rural.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                A 14 km de Vila-seca, La Canonja es municipio independiente desde 2010 con cerca de 6.000 habitantes. Su economía gira en torno al polígono petroquímico y la actividad logística del puerto de Tarragona. Como zona de servicio, lo trabajamos sobre todo para vivienda habitual: empleados con familia que reforman su piso para vivir veinte años, no para alquilar.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                El centro histórico tiene casas pairales modestas con potencial de rehabilitación. Masricard, al norte, mezcla pareadas y unifamiliares de los 80-90 con jardín pequeño. La diferencia con Vila-seca o Salou es el ritmo: aquí las obras se planifican con calma, se cuidan los detalles y los plazos son menos urgentes que cuando hay temporada turística por delante.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Distancia desde Vila-seca: <strong className="text-dark">14 km / 18 minutos</strong>.
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas en La Canonja</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">Lo que nos preguntan en La Canonja.</p>
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Solicita presupuesto para tu reforma en La Canonja</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">¿Reformamos tu vivienda en La Canonja? Visita técnica gratuita y propuesta detallada en una semana.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
            Hablamos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
