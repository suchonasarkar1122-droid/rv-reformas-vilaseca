import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Tarragona · Segunda residencia en la costa | RV",
  description: "Trabajamos en Tarragona capital para clientes que tienen segunda residencia en Vila-seca o La Pineda. Eixample, Bonavista, Sant Pere i Sant Pau. 877 278 105.",
  alternates: { canonical: "/zonas/reformas-tarragona" },
  openGraph: { title: "Reformas en Tarragona - RV Reformas", description: "Reformas para clientes de Tarragona capital con vivienda en la costa Daurada.", url: "/zonas/reformas-tarragona" },
};

const services = [
  { title: "Coordinación piso ciudad y costa", desc: "Si tienes piso en Tarragona y segunda residencia en Vila-seca o La Pineda, trabajamos en ambos.", href: "/servicios/reformas-integrales" },
  { title: "Cocinas en Eixample y zona alta", desc: "Cocinas para vivienda urbana de Tarragona. Diseño 3D y plazos cortos.", href: "/servicios/reformas-cocinas" },
  { title: "Baños accesibles en pisos altos", desc: "Cambio de bañera por ducha en pisos sin ascensor o con personas mayores en casa.", href: "/servicios/reformas-banos" },
  { title: "Pisos del centro histórico", desc: "Reformas en Part Alta y Casc Antic respetando elementos protegidos. Tramitación de licencia.", href: "/servicios/reformas-pisos" },
];

const faqs = [
  { q: "Vivo en Tarragona pero tengo piso turístico en La Pineda. ¿Lo reformáis?", a: "Es uno de los perfiles más habituales que atendemos. Vivir en Tarragona y tener piso turístico en La Pineda o Vila-seca ya forma parte de la economía local. La distancia entre las dos viviendas no llega a 15 km, así que coordinamos la reforma sin que tengas que desplazarte: nosotros recogemos llaves, hacemos el seguimiento y te entregamos el piso listo para alquilar." },
  { q: "¿Hacéis reformas también en Tarragona ciudad?", a: "Sí, atendemos Tarragona aunque nuestra base es Vila-seca. La distancia es de 14 km, sin sobrecoste por desplazamiento. Lo que sí cambia son las normas de comunidad y los horarios de obra: en zonas como Part Alta hay restricciones más severas que en la costa. Nos adaptamos." },
  { q: "¿Trabajáis en Bonavista, Sant Pere i Sant Pau o el Eixample?", a: "Sí, son barrios donde hemos hecho varios encargos. Bonavista tiene mucha vivienda de los 70-80 con potencial de eficiencia energética. Sant Pere i Sant Pau más residencial y reciente. El Eixample mezcla edificios modernistas y de los 50, donde hay que cuidar elementos protegidos." },
  { q: "¿Qué diferencia hay entre reformar en Tarragona y en la costa?", a: "En ciudad la obra es más compleja por logística (parking, cargas, comunidades estrictas) pero los plazos son más flexibles porque no hay urgencia turística. En la costa la urgencia manda. Mismo equipo, mismo método de trabajo." },
];

export default function ZonaTarragonaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en Tarragona", url: "/zonas/reformas-tarragona" },
        ]}
      />

      <HeroService
        title="Reformas en Tarragona: ciudad y costa coordinadas"
        subtitle="Eixample, Bonavista, Sant Pere i Sant Pau. Si tienes piso en Tarragona y segunda residencia en Vila-seca o La Pineda, trabajamos en los dos sin que pierdas tiempo."
        image="/images/salon-luminoso-costa-vilaseca.webp"
        imageAlt="Reformas en Tarragona y la costa Daurada"
        h1Keyword="Reformas en Tarragona"
        badge="Capital del Tarragonès"
        showCTA
        trustItems={["Ciudad y costa", "Casc Antic", "Plantilla propia"]}
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Tarragona en una línea</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1]">
                Reformas en Tarragona: barrios y demanda
              </h2>
              <p className="font-body text-subtitle text-base leading-relaxed font-medium">
                La capital de la provincia, a 14 km de nuestra base.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Tarragona supera los 135.000 habitantes. Una parte significativa de los propietarios que reforman piso turístico en Vila-seca o La Pineda residen aquí. Nuestra propuesta para el cliente tarraconense pasa por gestionar la obra a distancia y entregársela lista para anunciar o vivir, sin que tengan que aparcar en La Pineda en agosto para ver cómo va. Si además quieren reformar el piso de Tarragona donde viven, lo coordinamos con el mismo equipo.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Por barrios: el Eixample concentra edificios de los 50-70 con plantas grandes; Bonavista tiene viviendas de los 70-80 ideales para reforma con eficiencia energética; Sant Pere i Sant Pau es residencial reciente; Part Alta y Casc Antic exigen licencia mayor y respeto a elementos patrimoniales.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Distancia desde Vila-seca: <strong className="text-dark">14 km / 17 minutos por la AP-7</strong>.
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas en Tarragona</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">Dudas frecuentes en Tarragona.</p>
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Solicita presupuesto para tu reforma en Tarragona</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">¿Reformamos tu piso en Tarragona o tu segunda residencia? Coordinamos las dos obras si te interesa hacerlas en paralelo. Visita técnica sin coste.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
            Habla con el equipo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
