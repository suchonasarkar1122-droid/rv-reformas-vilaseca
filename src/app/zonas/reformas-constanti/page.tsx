import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Constantí",
  description: "Reformas residenciales en Constantí y Centcelles: casas unifamiliares con jardín, masías rehabilitadas y vivienda rural-residencial del Tarragonès. 877 278 105.",
  alternates: { canonical: "/zonas/reformas-constanti" },
  openGraph: { title: "Reformas en Constantí - RV Reformas", description: "Reformas en Constantí, Centcelles y zona rural-residencial del Tarragonès. Casas con terreno y antiguas masías.", url: "/zonas/reformas-constanti" },
};

const services = [
  { title: "Casas unifamiliares con jardín", desc: "Reforma integral con cocina abierta, suite principal y zona exterior con piscina o porche.", href: "/servicios/reformas-integrales" },
  { title: "Masías y antiguas casas rurales", desc: "Rehabilitación respetando vigas, paredes de piedra y baldosa. Modernización de instalaciones.", href: "/servicios/reformas-integrales" },
  { title: "Cocinas con isla y despensa", desc: "Cocinas amplias para casa con terreno y vida familiar. Materiales nobles, mucha encimera.", href: "/servicios/reformas-cocinas" },
  { title: "Eficiencia energética y aerotermia", desc: "Aprovechar el espacio para instalar bomba de calor, placas solares y aislamiento exterior.", href: "/servicios/reformas-pisos" },
];

const faqs = [
  { q: "¿Trabajáis casas rurales y antiguas masías de Constantí?", a: "Sí. Constantí tiene un patrimonio rural interesante: masías, antiguas casas de labranza y unifamiliares con terreno. Cuando reformamos estas tipologías respetamos siempre los elementos con valor (vigas de madera maciza, paredes de piedra, suelos hidráulicos) y modernizamos solo instalaciones, climatización y zonas de servicio." },
  { q: "¿Constantí tiene normativa específica para reformar?", a: "El Ayuntamiento de Constantí gestiona las licencias. Para casas dentro del casco urbano la tramitación es estándar. Para masías o casas en suelo rústico hay que estudiar caso por caso (a veces la edificación tiene protección urbanística). Lo aclaramos en la visita y, si hace falta, hablamos con un arquitecto especializado." },
  { q: "¿Hacéis reformas de exteriores: piscina, porche, jardín?", a: "Sí, en Constantí más que en zonas costeras donde hay menos terreno. Construimos porches cubiertos, pavimentamos accesos, hacemos piscinas con vaso de hormigón proyectado y zonas de barbacoa. Coordinamos con paisajistas locales para el jardín." },
  { q: "Distancia y plazos desde Vila-seca", a: "Constantí está a 12 km al norte de Vila-seca por la T-11. 15 minutos en coche. Sin sobrecoste por desplazamiento. Plazos similares al resto de zonas: 11-14 semanas para casa unifamiliar con cocina y dos baños." },
  { q: "¿Centcelles es vuestra zona también?", a: "Sí. Centcelles, con su mausoleo romano y su entorno rural, tiene casas con terreno y antiguas viviendas que reformamos puntualmente. Pocas pero bien hechas." },
  { q: "¿Conviene aislar la cubierta al reformar una casa en Constantí?", a: "En una unifamiliar casi siempre. La cubierta es por donde más energía se pierde en invierno y por donde entra más calor en verano. Si la obra ya incluye revisar la teja o el forjado, añadir aislamiento tiene un coste relativo bajo y se nota en confort desde el primer año." },
  { q: "¿Podemos vivir en la casa mientras dura la reforma?", a: "En reformas parciales sí, sectorizando zonas y manteniendo un baño y una cocina operativos. En una integral con cambio de instalaciones y cubierta es más práctico desalojar durante las fases de demolición e instalaciones, que son las más molestas." },
];

export default function ZonaConstantiPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en Constantí", url: "/zonas/reformas-constanti" },
        ]}
      />

      <HeroService
        title="Reformas en Constantí: casas con terreno y vida pausada"
        subtitle="Constantí y Centcelles. Unifamiliares con jardín, masías rehabilitadas, casas rurales con vigas y piedra. Otra forma de reformar, lejos del bullicio turístico."
        image="/images/casa-reformada-vilaseca.webp"
        imageAlt="Reformas en Constantí y Centcelles"
        h1Keyword="Reformas en Constantí"
        badge="Zona rural-residencial"
        showCTA
        trustItems={["Casas con terreno", "Masías", "Aerotermia"]}
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Constantí en una línea</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1]">
                Reformas en Constantí: zona y tipologías
              </h2>
              <p className="font-body text-subtitle text-base leading-relaxed font-medium">
                El Tarragonès interior: terreno, piedra y calma.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Constantí está al norte de Tarragona, a 12 km de Vila-seca por la T-11. Es un municipio de unos 6.500 habitantes con identidad rural-residencial: una mezcla de casco antiguo, urbanizaciones de unifamiliares con jardín y zonas dispersas con masías. Centcelles, núcleo agregado al municipio, es famoso por su mausoleo romano, símbolo de la Tarragona imperial.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Reformar aquí es distinto a reformar en La Pineda o Salou. Las prisas turísticas no aplican: la mayoría de obras son para vivienda habitual o segunda residencia familiar de fines de semana. Hay más metros, más exteriores, más oportunidad de hacer cocinas con isla generosa y porches cubiertos. Trabajamos también con masías que se rehabilitan respetando elementos originales.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Distancia desde Vila-seca: <strong className="text-dark">12 km / 15 minutos por la T-11</strong>.
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

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px] flex flex-col gap-5">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Vivir en Constantí</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark leading-[1.1]">Casas con terreno y vida de pueblo</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Constantí está en el interior del Camp de Tarragona, entre el río Francolí y el aeropuerto de Reus, y eso se nota en su vivienda. Frente a los bloques turísticos de la costa, aquí predominan las casas de pueblo del núcleo histórico, las unifamiliares con jardín de las zonas de crecimiento y las construcciones rurales del término, cerca de la villa romana de Centcelles. Son edificaciones con más metros, más fachada expuesta y, a menudo, cubiertas de teja que llevan décadas sin revisarse.
          </p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark leading-[1.1]">Clima de interior: frío en invierno, calor en verano</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Lejos del efecto suavizante del mar, Constantí tiene inviernos más fríos y veranos más secos que Vila-seca. En una casa unifamiliar eso significa que la mayor parte de la factura energética se va por la cubierta y las ventanas. Cuando reformamos aprovechamos para aislar bajo cubierta, cambiar carpinterías y plantear calefacción por suelo radiante o aerotermia si la obra levanta pavimentos. Si quieres además renovar la cocina para abrirla al comedor o al porche, te contamos cómo lo hacemos en <Link href="/servicios/reformas-cocinas" className="text-accent font-bold underline underline-offset-2">reformas de cocinas</Link>.
          </p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark leading-[1.1]">Permisos en el Ajuntament de Constantí</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Dentro del casco urbano la tramitación sigue el esquema habitual: comunicación previa para reformas interiores sin afectación estructural y licencia de obra mayor con proyecto cuando se tocan estructura, fachada, cubierta o se amplía. Las construcciones en suelo no urbanizable son otro mundo: lo que se puede hacer depende del planeamiento y de si la edificación figura en catálogos de protección, así que lo estudiamos caso por caso antes de presupuestar.
          </p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark leading-[1.1]">Organización de una obra grande</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Una casa con terreno permite acopiar material y trabajar con más holgura que un piso, pero también exige coordinar más oficios: albañilería, cubierta, instalaciones, carpintería y exteriores. Trabajamos con un único responsable de obra y un calendario por fases. Si comparas con obras en entorno urbano, verás la diferencia en nuestra página de <Link href="/zonas/reformas-la-canonja" className="text-accent font-bold underline underline-offset-2">reformas en La Canonja</Link>, municipio vecino con vivienda más compacta.
          </p>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas en Constantí</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">Dudas frecuentes en Constantí.</p>
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Solicita presupuesto para tu reforma en Constantí</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">¿Reformamos tu casa en Constantí? Visita técnica gratuita en cualquier punto del municipio. Para masías, llevamos arquitecto si la edificación tiene protección.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
            Pídenos visita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
