import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Ayudas a la rehabilitación energética en el Tarragonès: guía 2026",
  description:
    "Subvenciones Next Generation y ayudas autonómicas para mejorar la eficiencia energética de tu vivienda en Vila-seca, Salou, Tarragona y comarca.",
  alternates: { canonical: "/blog/ayudas-rehabilitacion-energetica-tarragones" },
  openGraph: {
    title: "Ayudas a la rehabilitación energética en el Tarragonès",
    description: "Cómo conseguir subvenciones para tu reforma energética en la costa Daurada.",
    url: "/blog/ayudas-rehabilitacion-energetica-tarragones",
    type: "article",
    images: ["/images/estudio-muebles-madera-natural.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ayudas a la rehabilitación energética en el Tarragonès: guía 2026",
  datePublished: "2026-04-01",
  dateModified: "2026-05-01",
  author: { "@type": "Organization", name: "RV Reformas Vila-seca" },
  publisher: { "@id": "https://reformasvilaseca.es/#business" },
  image: "https://reformasvilaseca.es/images/estudio-muebles-madera-natural.webp",
};

export default function PostAyudasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Ayudas energéticas Tarragonès", url: "/blog/ayudas-rehabilitacion-energetica-tarragones" },
        ]}
      />

      <article className="bg-beige">
        <header className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
          <Image src="/images/estudio-muebles-madera-natural.webp" alt="Vivienda con eficiencia energética en el Tarragonès" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-5 pb-16">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-5">Ayudas y subvenciones</span>
            <h1 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[56px] text-white leading-[1.05] max-w-[1000px]">Ayudas a la rehabilitación energética en el Tarragonès: Next Generation y subvenciones autonómicas</h1>
            <p className="font-body text-white/70 text-sm uppercase tracking-wider mt-4">1 abril 2026 &middot; 9 min de lectura</p>
          </div>
        </header>

        <div className="mx-auto max-w-[800px] px-5 py-16 md:py-24 flex flex-col gap-7">
          <p className="font-body text-subtitle text-lg leading-relaxed">
            Reformar tu vivienda en Vila-seca, Salou o cualquier municipio del Tarragonès puede salir bastante más barato si sabes qué subvenciones pedir, cuándo pedirlas y qué documentación tener a mano. La buena noticia: durante 2026 siguen activos varios programas potentes. La mala: cada uno tiene plazo distinto y no se pueden solicitar después de empezar la obra. Esta guía te ayuda a no llegar tarde.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Programa estatal: Next Generation y Plan Recuperación</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            El Plan de Recuperación, Transformación y Resiliencia incluye varios programas de ayudas a la rehabilitación residencial. Los más interesantes para una vivienda en el Tarragonès son los Programas 3, 4 y 5:
          </p>
          <ul className="flex flex-col gap-3 text-base text-subtitle font-body pl-5 list-disc marker:text-accent">
            <li><strong className="text-dark">Programa 3 – Rehabilitación a nivel de edificio</strong>. Para comunidades de propietarios que mejoren ≥30% la demanda energética del edificio. Cubre hasta el 80% del coste, con mínimo de 8.100 € por vivienda. Es muy potente para edificios de los 70-80 frente al paseo de La Pineda.</li>
            <li><strong className="text-dark">Programa 4 – Vivienda</strong>. Para reformas individuales que mejoren al menos 30% la demanda anual o consigan calificación energética A o B. Subvención del 40% con tope de 18.000 € por vivienda.</li>
            <li><strong className="text-dark">Programa 5 – Libro del Edificio</strong>. Para inspección técnica y planificación de rehabilitación, hasta 700 € por vivienda. Útil como paso previo si tienes un edificio antiguo y aún no has decidido el alcance.</li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Los plazos varían por convocatoria. La gestiona la Generalitat de Catalunya a través del ICAEN (Institut Català d&apos;Energia). Conviene consultar la última resolución cuando vayas a solicitar.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Subvenciones autonómicas (Generalitat de Catalunya)</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Más allá del paquete Next Generation, la Generalitat suele tener líneas propias para mejora energética: el programa MOVES para movilidad eléctrica (cargador de coche eléctrico en garaje), bonificaciones del IBI por instalación fotovoltaica que muchos ayuntamientos del Tarragonès aplican (Vila-seca, Salou, Cambrils, Tarragona), y subvenciones puntuales para climatización con bomba de calor de alta eficiencia.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            La bonificación del IBI por placas solares en Vila-seca es del 50% durante 5 años para instalaciones que generen al menos el 50% del consumo. En Tarragona capital, hasta 50% durante 3 años. Cada ayuntamiento marca sus condiciones, pero todos los municipios costeros lo tienen.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Deducción fiscal en IRPF por obras de eficiencia</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Independiente de las subvenciones directas, Hacienda permite deducir en IRPF entre el 20% y el 60% del coste de obras que mejoren la eficiencia energética de tu vivienda habitual o de un piso alquilado para vivienda. Las cuantías:
          </p>
          <ul className="flex flex-col gap-3 text-base text-subtitle font-body pl-5 list-disc marker:text-accent">
            <li>20% si reduces ≥7% la demanda de calefacción y refrigeración. Tope 5.000 €.</li>
            <li>40% si reduces ≥30% el consumo de energía primaria no renovable o subes a A o B. Tope 7.500 €.</li>
            <li>60% para obras en el edificio completo (a través de la comunidad). Tope 5.000 € por contribuyente.</li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Las dos primeras se pueden aplicar a vivienda en alquiler residencial habitual (no a alquiler turístico) hasta finales de 2026. La tercera tiene plazo más largo. La deducción se aplica en la declaración del año en que termina la obra, así que conviene cuadrar fechas.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Qué obras dan acceso a estas ayudas</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            En la práctica, las intervenciones que más rentabilizan las ayudas son: cambio de ventanas con rotura de puente térmico y vidrio bajo emisivo, aislamiento de fachada por el exterior con SATE (sistema de aislamiento térmico exterior), aerotermia con bomba de calor para ACS y climatización, instalación fotovoltaica para autoconsumo, y rehabilitación de envolvente del edificio cuando se hace por toda la comunidad.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Para edificios típicos de los 70-80 en La Pineda, Salou Centre o Cambrils Centre, las obras de envolvente completa pueden llegar a recuperar el 60-70% de la inversión vía subvención + deducción fiscal. Compensa siempre que la comunidad esté alineada.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Cómo lo gestionamos en RV Reformas</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            En las obras donde el propietario quiere acceder a ayudas, trabajamos con un técnico colegiado que prepara la documentación previa (certificado energético antes y después, mediciones, fotografías, memoria justificativa) y un gestor que tramita la solicitud. La obra se realiza con todos los justificantes necesarios para el expediente.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Importante: la solicitud se presenta antes de empezar la obra. Si ya has firmado contrato y empezado, casi todas las ayudas quedan fuera. Si te interesan las subvenciones, llámanos al <strong className="text-dark">877 278 105</strong> antes de cerrar nada y lo planificamos en el orden correcto.
          </p>

          <p className="font-body text-subtitle text-base leading-relaxed mt-4">
            La información de esta guía es orientativa y refleja el marco vigente a 1 de mayo de 2026. Las convocatorias y plazos pueden modificarse. Para confirmar tu caso concreto consulta con un gestor especializado o pregúntanos en la <Link href="/contacto" className="text-accent underline">página de contacto</Link>.
          </p>
        </div>

        <section className="bg-accent px-5 py-16 md:py-20">
          <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-4">
            <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-white leading-[1.1]">Solicita presupuesto para tu reforma con ayudas</h2>
            <p className="font-body text-white/90 text-lg max-w-[520px]">¿Reformamos con ayudas Next Generation? Visita técnica gratuita y estudio de subvenciones aplicables a tu vivienda en el Tarragonès.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-7 py-3.5 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors mt-2">
              Pídenos asesoramiento
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
