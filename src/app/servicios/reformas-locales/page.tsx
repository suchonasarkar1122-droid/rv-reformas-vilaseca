import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Locales en Vila-seca | RV",
  description:
    "Reforma de locales comerciales y de hostelería en Vila-seca, La Pineda y Salou. Apertura de negocio en plazo, licencia de actividad y diseño funcional. 877 278 166.",
  alternates: { canonical: "/servicios/reformas-locales" },
  openGraph: {
    title: "Reformas de Locales en Vila-seca | RV",
    description: "Reforma de locales comerciales, hostelería y oficinas en Vila-seca y La Pineda con tramitación de licencia de actividad.",
    url: "/servicios/reformas-locales",
    images: ["/images/local-comercial-vilaseca.webp"],
  },
};

export default function ReformasLocalesPage() {
  return (
    <>
      <ServiceSchema
        name="Reformas de Locales en Vila-seca"
        description="Reforma de locales comerciales, hostelería y oficinas en Vila-seca, La Pineda y Salou con apertura llave en mano y licencia de actividad."
        url="/servicios/reformas-locales"
        image="/images/local-comercial-vilaseca.webp"
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas de Locales", url: "/servicios/reformas-locales" },
        ]}
      />

      <HeroService
        title="Locales comerciales abiertos antes de la temporada"
        subtitle="Heladerías en el paseo de La Pineda, restaurantes en Salou Centre, tiendas en Vila-seca, oficinas en El Pla. Reforma con licencia de actividad y plazos pegados al primer cliente."
        image="/images/local-comercial-vilaseca.webp"
        imageAlt="Local comercial reformado en Vila-seca centre"
        imageTitle="Reforma de local comercial en Vila-seca - RV Reformas"
        h1Keyword="Reformas de Locales en Vila-seca"
        badge="Apertura llave en mano"
        showCTA
        trustItems={["Licencia actividad", "Antes de temporada", "Diseño + obra"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Locales con calendario apretado
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reformas de locales comerciales en Vila-seca
              </h2>
              <p className="font-body font-semibold text-dark text-base leading-relaxed">
                El local en marcha cuando llega la temporada.
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Vila-seca es comercio de barrio durante todo el año, con tirón en Vila-seca centre y zonas residenciales. La Pineda concentra hostelería estacional con curva de demanda muy fuerte entre mayo y septiembre. Salou y Cambrils llevan el mismo ritmo. Reformar un local en este corredor turístico significa cuadrar el calendario al milímetro: cada día perdido en mayo es un mes perdido de facturación.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En RV Reformas damos el local listo para arrancar: tabiquería, instalaciones acordes a la actividad (extracción para hostelería, refrigeración para alimentación, climatización en oficinas), pavimento epoxi o porcelánico técnico, escaparate, rotulación y mobiliario fijo. Coordinamos el proyecto técnico con arquitecto colegiado, la licencia de actividad en el Ayuntamiento de Vila-seca o el municipio que corresponda, y el certificado de instalaciones para abrir.
              </p>
              <p className="font-body font-semibold text-dark text-base">
                Te decimos al primer día si llegamos a tu fecha de apertura.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/reforma-local-hut-vilaseca.webp"
                alt="Local de hostelería reformado en La Pineda"
                title="Local de hostelería en Vila-seca"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipologías</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">
              Locales que reformamos en el corredor Vila-seca - Salou
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Hostelería estacional en La Pineda", text: "Heladerías, terrazas, restaurantes pequeños y bares de copas que abren entre Semana Santa y septiembre. Diseño robusto que aguante 16 horas de servicio diario y limpieza intensiva. Extracción y climatización dimensionadas." },
              { title: "Restauración todo el año", text: "Restaurantes de menú, cafeterías, panaderías-cafetería en Vila-seca centre. Cocina industrial, sala con acústica controlada, baños accesibles, acceso para personas con movilidad reducida. Licencia de actividad clase B." },
              { title: "Comercio de barrio", text: "Farmacias, ópticas, ferreterías, peluquerías, tiendas de moda. Escaparate llamativo, iluminación clase A++, mobiliario expositor a medida, carteles cumpliendo normativa de Vila-seca y Salou. Plazos cortos para no perder caja." },
              { title: "Oficinas y espacios profesionales", text: "Despachos médicos, gestorías, inmobiliarias, coworkings pequeños. División acústica con tabique pladur de doble placa, climatización inverter, conectividad RJ45 cat6, iluminación regulable. Open space + dos despachos privados." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex gap-5">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2"><path d="M3 21h18M5 21V11l7-7 7 7v10M9 21v-6h6v6" /></svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{b.title}</h3>
                  <p className="font-body text-white/65 text-sm leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas de locales en Vila-seca</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta reformar un local comercial en Vila-seca?", a: "Trabajamos con tarifas orientativas desde 360 €/m² para reformas básicas de comercio (tienda con escaparate y mobiliario expositor), desde 460 €/m² para hostelería con cocina industrial y sala completa, y desde 560 €/m² en restauración premium con barra y bodega. La cifra final depende de instalaciones, acabados y mobiliario fijo. Te visitamos sin compromiso y cerramos el importe exacto por escrito." },
              { q: "¿Tramitáis la licencia de actividad?", a: "Sí. Trabajamos con arquitecto técnico colegiado y gestor que llevan años con el Ayuntamiento de Vila-seca, Salou y La Canonja. Hacemos el proyecto técnico, lo presentamos, contestamos requerimientos y conseguimos la apertura. Tú solo aportas tus datos." },
              { q: "Tengo un local en bruto. ¿Lo dejáis listo para abrir?", a: "Llave en mano: tabiquería, instalaciones (eléctrica, fontanería, climatización, gas si aplica, ventilación), pavimento técnico, alicatado de baños y zonas húmedas, falsos techos acústicos, mobiliario fijo, rotulación exterior y rótulo cumpliendo ordenanza municipal." },
              { q: "¿Cuánto tarda un local de hostelería de 80 m² en Vila-seca?", a: "De 8 a 14 semanas según complejidad de cocina y servicio. Si tenemos la licencia previa o vamos por declaración responsable acelerada (cuando aplica), reducimos. Lo importante es empezar con calendario hacia atrás desde el día de apertura previsto." },
              { q: "¿Diseñáis el interiorismo o trabajáis con interiorista del cliente?", a: "Las dos opciones. Tenemos interiorista propio para locales que arrancan de cero y necesitan concepto. Si vienes con tu interiorista (o cadena con manual de marca), nos coordinamos sin problema y ejecutamos al detalle del proyecto suyo." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]">
                  <p className="font-body text-subtitle text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para tu reforma de local</h2>
          <p className="font-body text-white/90 text-lg max-w-[560px]">¿Tienes local que abrir antes de temporada? Visita técnica con propuesta y plazo realista en pocos días. Si no llegamos a tu fecha de apertura, te lo decimos sin rodeos.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
              Pide la propuesta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <a href="https://wa.me/34623760710" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
