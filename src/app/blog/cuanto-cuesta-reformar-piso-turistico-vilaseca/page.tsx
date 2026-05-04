import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta reformar un piso turístico en Vila-seca y La Pineda?",
  description:
    "Cifras reales para reformar un piso de alquiler vacacional en Vila-seca o La Pineda en 2026. Rangos por m², partidas, ROI esperado y plazos para llegar al verano.",
  alternates: { canonical: "/blog/cuanto-cuesta-reformar-piso-turistico-vilaseca" },
  openGraph: {
    title: "¿Cuánto cuesta reformar un piso turístico en Vila-seca?",
    description: "Análisis con cifras reales: rangos por m², ROI esperado y cuándo encargar para llegar al primer huésped de verano.",
    url: "/blog/cuanto-cuesta-reformar-piso-turistico-vilaseca",
    type: "article",
    images: ["/images/habitacion-infantil-antes-despues.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Cuánto cuesta reformar un piso turístico en Vila-seca y La Pineda?",
  datePublished: "2026-04-20",
  dateModified: "2026-05-01",
  author: { "@type": "Organization", name: "RV Reformas Vila-seca" },
  publisher: { "@id": "https://reformasvilaseca.es/#business" },
  image: "https://reformasvilaseca.es/images/habitacion-infantil-antes-despues.webp",
};

export default function PostCuantoCuestaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Cuánto cuesta reformar un piso turístico", url: "/blog/cuanto-cuesta-reformar-piso-turistico-vilaseca" },
        ]}
      />

      <article className="bg-beige">
        <header className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
          <Image src="/images/habitacion-infantil-antes-despues.webp" alt="Reforma de piso turístico en La Pineda" title="Reforma piso turístico Vila-seca" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-5 pb-16">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-5">Guía de precios</span>
            <h1 className="font-display font-extrabold text-[34px] md:text-[52px] lg:text-[60px] text-white leading-[1.05] max-w-[1000px]">¿Cuánto cuesta reformar un piso turístico en Vila-seca y La Pineda?</h1>
            <p className="font-body text-white/70 text-sm uppercase tracking-wider mt-4">20 abril 2026 &middot; 8 min de lectura</p>
          </div>
        </header>

        <div className="mx-auto max-w-[800px] px-5 py-16 md:py-24 flex flex-col gap-7">
          <p className="font-body text-subtitle text-lg leading-relaxed">
            Si has comprado o heredado un piso en La Pineda o Vila-seca y te planteas convertirlo en alquiler turístico, la primera pregunta es siempre la misma: cuánto me va a costar dejarlo listo para anunciarlo. Lo que sigue son cifras reales del mercado actual, basadas en obras que hemos entregado durante los últimos 24 meses en el corredor turístico Vila-seca - Salou - Cambrils.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">El rango por metro cuadrado en 2026</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Para un apartamento de los años 70-80 en La Pineda o un piso del centro de Vila-seca, los tres tramos que manejamos hoy son:
          </p>
          <ul className="flex flex-col gap-3 text-base text-subtitle font-body pl-5 list-disc marker:text-accent">
            <li><strong className="text-dark">Lavado de cara para alquiler turístico exprés</strong>: 600 - 750 €/m². Pintura, suelos vinílicos LVT, cocina americana barata, un baño con cambio de bañera por ducha. Perfecto si compras barato y quieres rentabilidad rápida.</li>
            <li><strong className="text-dark">Reforma media para alquiler turístico competitivo</strong>: 850 - 1.100 €/m². Cambio de distribución, dos baños rehechos, cocina con isla y materiales gama media, ventanas con rotura térmica, climatización inverter. Es el tramo más solicitado.</li>
            <li><strong className="text-dark">Reforma alta para alquiler turístico premium</strong>: 1.300 €/m² en adelante. Cocina con isla y materiales nobles, suite principal con vestidor, dos o tres baños con plato de obra, suelo radiante, eficiencia energética A. Para apartamentos a primera línea con tarifa alta.</li>
          </ul>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Desglose realista por estancias</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Para un piso tipo de 65 m² (dos dormitorios, cocina americana, un baño, salón) en La Pineda, así se reparte una reforma media:
          </p>
          <ul className="flex flex-col gap-2 text-base text-subtitle font-body pl-5 list-disc marker:text-accent">
            <li>Demolición + albañilería + tabiquería: <strong className="text-dark">8.000 - 11.000 €</strong></li>
            <li>Fontanería y desagües (con cambio de bajantes si toca): <strong className="text-dark">3.500 - 5.000 €</strong></li>
            <li>Electricidad nueva con magnetotérmico: <strong className="text-dark">3.500 - 4.500 €</strong></li>
            <li>Cocina americana llave en mano: <strong className="text-dark">7.000 - 12.000 €</strong></li>
            <li>Baño completo con plato y mampara: <strong className="text-dark">4.000 - 6.500 €</strong></li>
            <li>Suelo porcelánico rectificado: <strong className="text-dark">3.500 - 5.500 €</strong></li>
            <li>Carpintería interior + exterior con RPT: <strong className="text-dark">5.000 - 8.500 €</strong></li>
            <li>Pintura y acabados: <strong className="text-dark">2.000 - 3.500 €</strong></li>
            <li>Climatización inverter por conductos o splits: <strong className="text-dark">3.500 - 5.500 €</strong></li>
            <li>Tramitación (licencia turística, certificado, cédula, residuos): <strong className="text-dark">1.200 - 1.800 €</strong></li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Total habitual del tramo medio para 65 m²: <strong className="text-dark">42.000 - 60.000 €</strong>. Si añades mobiliario completo, electrodomésticos, ropa de cama y fotografía profesional, suma 6.000 - 9.000 € adicionales.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Lo que más se infla y cómo evitarlo</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Tres partidas suelen disparar presupuestos en pisos costeros y por experiencia te avisamos:
          </p>
          <ol className="flex flex-col gap-3 text-base text-subtitle font-body pl-5 list-decimal marker:text-accent">
            <li><strong className="text-dark">Bajantes generales</strong>: en edificios de los 70-80 a veces hay que cambiar columna desde planta baja. Si la comunidad lo aprueba como obra mayor, se reparte y abaratas mucho. Si no, asume +3.500 €.</li>
            <li><strong className="text-dark">Calidad de la grifería</strong>: parece tontería pero la diferencia entre grifería antical de marca y grifería barata son 600 € y diez años de vida útil. Recomendamos invertir.</li>
            <li><strong className="text-dark">Mobiliario para alquiler turístico</strong>: el packaging completo (camas, sofá, mesa, sillas, lámparas, menaje, ropa de cama, toallas) ronda 5.500 - 9.000 € para 4-6 huéspedes. No improvises con muebles de Wallapop si vas a alquilar a 110 € la noche.</li>
          </ol>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">ROI esperado: ¿en cuánto tiempo recuperas la reforma?</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Un piso de 65 m² para 4 personas en La Pineda alquilado durante la temporada (mayo-octubre con picos en julio-agosto y Semana Santa) factura entre 22.000 y 38.000 € al año, dependiendo de la zona, los acabados y la fotografía. Tras gastos de gestión, comunidad, suministros e impuestos, el neto ronda 14.000 - 24.000 €. Con una reforma de 50.000 €, la recuperación oscila entre 2 y 4 temporadas. Con una reforma alta de 90.000 € y tarifas premium, similar plazo si la fotografía y el posicionamiento están bien hechos.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Calendario: cuándo encargar para llegar al verano</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Si quieres que tu primer huésped haga check-in el 1 de julio, el calendario realista es: visita técnica antes del 31 de enero, contrato firmado a mediados de febrero, obra de febrero a mayo (10-12 semanas), tramitación de licencia turística y fotografía en mayo-junio, alta del anuncio en plataformas en junio. Tres meses largos de margen, sin estresar a nadie.
          </p>

          <p className="font-body text-subtitle text-base leading-relaxed mt-4">
            Si necesitas una valoración detallada para tu inmueble concreto, llámanos al <strong className="text-dark">877 278 105</strong> o pide visita técnica desde la <Link href="/contacto" className="text-accent underline">página de contacto</Link>. Te respondemos en menos de 24 horas con cifras precisas adaptadas a tu piso.
          </p>
        </div>

        <section className="bg-accent px-5 py-16 md:py-20">
          <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-4">
            <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-white leading-[1.1]">Solicita presupuesto para tu reforma de piso turístico</h2>
            <p className="font-body text-white/90 text-lg max-w-[520px]">¿Tienes piso para reformar y abrir al alquiler turístico? Visita técnica gratuita con valoración detallada en 48 horas. Te decimos sin rodeos si llegamos a tu fecha.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-7 py-3.5 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors mt-2">
              Pide tu valoración
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
