import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Tendencias 2026 para pisos de la costa Daurada: lo que pide el huésped y lo que aguanta el mar",
  description:
    "Materiales, colores y distribuciones que funcionan en pisos turísticos y segundas residencias en Vila-seca, La Pineda y la costa Daurada en 2026.",
  alternates: { canonical: "/blog/tendencias-pisos-costa-daurada-2026" },
  openGraph: {
    title: "Tendencias 2026 para pisos de la costa Daurada",
    description: "Lo que viene en pisos costeros: materiales, colores, distribuciones y lo que está caducado.",
    url: "/blog/tendencias-pisos-costa-daurada-2026",
    type: "article",
    images: ["/images/rincon-lectura-butaca-tapizada.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tendencias 2026 para pisos de la costa Daurada",
  datePublished: "2026-04-10",
  dateModified: "2026-05-01",
  author: { "@type": "Organization", name: "RV Reformas Vila-seca" },
  publisher: { "@id": "https://reformasvilaseca.es/#business" },
  image: "https://reformasvilaseca.es/images/rincon-lectura-butaca-tapizada.webp",
};

export default function PostTendenciasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Tendencias 2026 pisos costa Daurada", url: "/blog/tendencias-pisos-costa-daurada-2026" },
        ]}
      />

      <article className="bg-beige">
        <header className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
          <Image src="/images/rincon-lectura-butaca-tapizada.webp" alt="Tendencias en pisos costeros de Vila-seca y La Pineda 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-5 pb-16">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-5">Tendencias</span>
            <h1 className="font-display font-extrabold text-[34px] md:text-[52px] lg:text-[60px] text-white leading-[1.05] max-w-[1000px]">Tendencias 2026 para pisos de la costa Daurada: lo que pide el huésped y lo que aguanta el mar</h1>
            <p className="font-body text-white/70 text-sm uppercase tracking-wider mt-4">10 abril 2026 &middot; 7 min de lectura</p>
          </div>
        </header>

        <div className="mx-auto max-w-[800px] px-5 py-16 md:py-24 flex flex-col gap-7">
          <p className="font-body text-subtitle text-lg leading-relaxed">
            Cada temporada cambia un poco lo que el viajero busca al alquilar un piso costero y, en paralelo, lo que aguanta de verdad la salinidad y la humedad mediterránea. En 2026 hay tres movimientos claros en la costa Daurada que afectan a quien reforma para alquiler turístico, segunda residencia o vivienda habitual frente al mar. Vamos por partes.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">1. Materiales que están sustituyendo a los clásicos</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            El gres porcelánico rectificado de gran formato (60x120, 120x120) está desplazando al laminado vinílico LVT en pisos turísticos serios. Aguanta más arena, no se hincha con el agua salada que entra por la mampara y dura veinte años. El sobrecoste es asumible: 5-7 €/m² más en material y 2 €/m² más en mano de obra.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            En cocinas, el compacto fenólico HPL para encimeras y frentes está ganando terreno frente al cuarzo. Es más ligero, igual de resistente al calor y la suciedad, mucho más reparable si un huésped lo daña, y permite acabados muy contemporáneos en tonos arena, hueso y verde salvia. Para alquiler turístico es la elección racional este año.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            En baños, las microcementos pulidos están cediendo paso a azulejos de cerámica grande con junta epoxi y porcelánico imitando piedra natural. La humedad ataca a los microcementos en cuatro veranos si la ventilación no es perfecta, y las casas costeras suelen tener ventilación cruzada limitada por las orientaciones.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">2. Distribuciones que funcionan en pisos pequeños</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            El piso turístico tipo en La Pineda son 55-70 m² con dos dormitorios, un baño y cocina cerrada original. La distribución que mejor está funcionando para anuncios con tarifa media-alta es: salón-comedor con cocina americana abierta, dormitorio principal con baño en suite (cuando los metros lo permiten), dormitorio secundario con dos camas individuales o litera de calidad, baño común con plato de obra, terraza acondicionada con muebles aptos para exterior.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Lo que está caducado: salones de paso con dormitorios mal aireados, cocinas pequeñas cerradas, baños con bañera, mucho rinconcito decorativo lleno de objetos. El huésped contemporáneo quiere espacios diáfanos, mucha luz natural, encimera amplia para el café del desayuno, conexión a internet rápida y suelo limpio sin alfombras.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">3. Eficiencia energética como argumento de venta</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            El propietario que reforma en 2026 está aprovechando la obra para subir la calificación energética de E o F a B o C. Los motivos van más allá del ahorro mensual: certificado A o B abre la puerta a Next Generation, sube el valor de tasación, atrae al inquilino premium que busca ecoetiquetas y reduce el coste de climatización en julio cuando el sol cae a plomo en La Pineda.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Las intervenciones más rentables: ventanas con rotura de puente térmico y vidrio bajo emisivo, aerotermia para producción de ACS, climatización inverter por conductos cuando los falsos techos lo permiten, aislamiento de fachada sur con SATE cuando la comunidad coopera, y luminaria LED clase A++ en todas las estancias.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">4. Colores y materiales que se están viendo</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            La paleta dominante en proyectos para alquiler turístico y segunda residencia esta temporada en Vila-seca y La Pineda: blanco hueso o crudo en paredes, tonos arena cálida en muebles, acentos en verde salvia o azul marino profundo, maderas claras tipo roble crudo o fresno. Los acabados negros mate de hace dos años están dejando paso a herrajes en bronce envejecido y dorados champaña, más cálidos y mediterráneos.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            En textiles: lino lavado, algodones gruesos, alfombras de yute o sisal de fibra natural. En decoración fija: cerámica artesanal local, vidrio reciclado, fotografías en blanco y negro de Tarragona o el Cap Salou (no más cuadros genéricos comprados a granel).
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">5. Lo que el huésped espera encontrar y casi ningún piso ofrece</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Cinco detalles que aparecen mucho en reseñas con cinco estrellas y se siguen pasando por alto cuando el propietario reforma sin asesoramiento: enchufe USB en cabecero de cama, secador de pelo decente (no el chino sin potencia), ducha con efecto lluvia, cafetera de cápsulas de marca, y aire acondicionado con mando programable en el dormitorio principal. Cinco inversiones que suman menos de 600 € y dan un retorno enorme en valoración del huésped.
          </p>

          <p className="font-body text-subtitle text-base leading-relaxed mt-4">
            Si te planteas reformar tu piso costero y quieres asesoramiento sobre qué tendencias aplicar y cuáles ignorar para tu caso concreto, llámanos al <strong className="text-dark">877 278 105</strong> o escríbenos por <a href="https://wa.me/34623760710" target="_blank" rel="noopener noreferrer" className="text-accent underline">WhatsApp</a>.
          </p>
        </div>

        <section className="bg-accent px-5 py-16 md:py-20">
          <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-4">
            <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-white leading-[1.1]">Solicita presupuesto para tu reforma de piso</h2>
            <p className="font-body text-white/90 text-lg max-w-[520px]">¿Aplicamos las tendencias 2026 a tu piso? Diseño 3D antes de empezar para que veas cómo quedará tu piso reformado.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-7 py-3.5 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors mt-2">
              Habla con el equipo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
