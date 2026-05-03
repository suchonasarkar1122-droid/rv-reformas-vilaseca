import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Zonas | Reformas en el Tarragonès",
  description:
    "Reformamos en Vila-seca, Salou, La Canonja, Tarragona, Cambrils y Constantí. Cinco municipios cercanos con cobertura sin sobrecoste por desplazamiento.",
  alternates: { canonical: "/zonas" },
  openGraph: {
    title: "Zonas - RV Reformas Vila-seca",
    description: "Reformas en cinco municipios cercanos a Vila-seca: Salou, La Canonja, Tarragona, Cambrils y Constantí.",
    url: "/zonas",
  },
};

const zones = [
  { name: "Salou", slug: "reformas-salou", text: "Apartamentos turísticos de Capellans, Cap Salou y Salou Centre. Reforma con calendario apretado al verano." },
  { name: "La Canonja", slug: "reformas-la-canonja", text: "Corredor logístico-industrial. Vivienda de empleados de la petroquímica y casas de pueblo de Masricard." },
  { name: "Tarragona", slug: "reformas-tarragona", text: "Clientes de Tarragona capital con segunda residencia en la costa. Eixample, Bonavista y Sant Pere i Sant Pau." },
  { name: "Cambrils", slug: "reformas-cambrils", text: "Trabajamos puntualmente cuando un cliente de Vila-seca tiene piso heredado o quiere mismo equipo en Vilafortuny." },
  { name: "Constantí", slug: "reformas-constanti", text: "Zona rural-residencial. Casas con terreno, antiguas masías y viviendas unifamiliares con jardín." },
];

export default function ZonasHub() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
        ]}
      />

      <HeroService
        title="Cinco municipios del entorno de Vila-seca"
        subtitle="La cercanía nos permite que el equipo esté en obra cada mañana sin sobrecoste por desplazamiento. Cobertura natural en el corredor turístico Vila-seca - Salou - Cambrils."
        image="/images/casa-reformada-vilaseca.webp"
        imageAlt="Cobertura RV Reformas en el Tarragonès"
        h1Keyword="Zonas de Servicio"
        badge="Cobertura local"
        showCTA={false}
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1] mb-5">
              Reformas en Vila-seca, La Pineda y zonas cercanas
            </h2>
            <p className="font-body text-subtitle text-base">
              Donde reformamos sin sobrecoste por kilometraje. Vila-seca es nuestra base. Estos cinco municipios están a menos de 20 minutos en furgoneta. Si tu inmueble queda fuera de esta franja (Reus, Mont-roig, El Vendrell), pregúntanos: lo estudiamos caso a caso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((z) => (
              <Link key={z.slug} href={`/zonas/${z.slug}`} className="group bg-white rounded-[16px] p-7 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-dark group-hover:text-accent transition-colors">Reformas en {z.name}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed flex-1">{z.text}</p>
                <span className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm mt-2">
                  Detalles de la zona
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Solicita presupuesto para tu reforma</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">¿Tu inmueble está en otro municipio? Si está fuera del corredor Vila-seca - Salou - Cambrils, llámanos: estudiamos cada caso y decidimos honestamente si llegamos en tiempo y precio.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
            Habla con nosotros
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
