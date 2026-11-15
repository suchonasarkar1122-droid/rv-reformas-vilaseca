import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Zonas de servicio en el Tarragonès",
  description:
    "Reformamos en Vila-seca, La Pineda, Salou, La Canonja, Cambrils y Constantí, sin sobrecoste por desplazamiento desde nuestra base en Vila-seca.",
  alternates: { canonical: "/zonas" },
  openGraph: {
    title: "Zonas - RV Reformas Vila-seca",
    description: "Reformas en Vila-seca, La Pineda y cuatro municipios cercanos: Salou, La Canonja, Cambrils y Constantí.",
    url: "/zonas",
  },
};

const zones = [
  { name: "Salou", slug: "reformas-salou", text: "Apartamentos turísticos de Capellans, Cap Salou y Salou Centre. Reforma con calendario apretado al verano." },
  { name: "La Canonja", slug: "reformas-la-canonja", text: "Corredor logístico-industrial. Vivienda de empleados de la petroquímica y casas de pueblo de Masricard." },
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
              Donde reformamos sin sobrecoste por kilometraje. Vila-seca es nuestra base. Los cuatro municipios de esta página están a menos de 20 minutos en furgoneta. Si tu inmueble queda fuera de esta franja (Reus, Mont-roig, El Vendrell), pregúntanos: lo estudiamos caso a caso.
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

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px] flex flex-col gap-5">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Desde Vila-seca</p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1]">Cómo trabajamos fuera de Vila-seca</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Nuestra base está en Vila-seca y la mayoría de obras las hacemos en el propio municipio: en el núcleo, con sus casas de pueblo y bloques de los 70 y 80, y en La Pineda, donde el apartamento de playa es la tipología dominante. Si buscas <Link href="/" className="text-accent font-semibold underline underline-offset-2">reformas en Vila-seca y La Pineda</Link>, la página principal resume cómo trabajamos aquí. Los municipios de alrededor los atendemos con el mismo equipo y el mismo método, porque están lo bastante cerca como para estar en obra a primera hora y volver a revisar por la tarde si hace falta.
          </p>
          <h3 className="font-display font-bold text-2xl text-dark mt-4">Cada municipio pide algo distinto</h3>
          <p className="font-body text-subtitle text-base leading-relaxed">
            En <Link href="/zonas/reformas-salou" className="text-accent font-semibold underline underline-offset-2">Salou</Link> el calendario manda: casi todo lo que reformamos es apartamento que tiene que estar listo antes de Semana Santa o del verano, y las comunidades de los edificios de primera línea suelen limitar los horarios de obra en temporada. En <Link href="/zonas/reformas-cambrils" className="text-accent font-semibold underline underline-offset-2">Cambrils</Link> conviven el piso del barrio del Port, la vivienda familiar del centro y las casas de Vilafortuny, y el salitre obliga a cuidar la elección de carpinterías y herrajes. <Link href="/zonas/reformas-la-canonja" className="text-accent font-semibold underline underline-offset-2">La Canonja</Link> es sobre todo vivienda habitual, con casas de pueblo y pisos de familias que trabajan en el entorno industrial; aquí el aislamiento acústico y térmico pesa más que la estética de alquiler. Y en <Link href="/zonas/reformas-constanti" className="text-accent font-semibold underline underline-offset-2">Constantí</Link>, más hacia el interior, abundan las casas unifamiliares y las viviendas con terreno, con obras más largas y más exteriores.
          </p>
          <h3 className="font-display font-bold text-2xl text-dark mt-4">Trámites: cada Ajuntament tiene su ventanilla</h3>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Aunque la lógica es parecida en toda Cataluña, cada ayuntamiento tiene sus propios formularios y criterios para distinguir una obra que basta con comunicar de una que necesita licencia. Una reforma interior sin tocar estructura ni fachada suele resolverse con comunicación previa; si cambias huecos de fachada, cierras una terraza o intervienes en la estructura, el trámite es más exigente. Antes de presupuestar comprobamos qué pide el municipio en tu caso concreto, porque condiciona el calendario y, a veces, el propio proyecto.
          </p>
          <h3 className="font-display font-bold text-2xl text-dark mt-4">¿Y si tu vivienda está en otro sitio?</h3>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Si tu inmueble queda fuera de estos municipios, cuéntanos dónde está y qué quieres hacer. Valoramos si podemos atenderlo con la misma dedicación; si no es así, te lo decimos claramente desde el principio en lugar de aceptar una obra que luego no podamos seguir bien. Todos los servicios, desde una <Link href="/servicios/reformas-banos" className="text-accent font-semibold underline underline-offset-2">reforma de baño</Link> hasta una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline underline-offset-2">reforma integral</Link>, están disponibles en las cuatro zonas.
          </p>
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
