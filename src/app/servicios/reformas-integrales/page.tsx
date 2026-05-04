import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas Integrales en Vila-seca | RV",
  description:
    "Reformas integrales llave en mano en Vila-seca y La Pineda: pisos turísticos, segundas residencias y casas pairales. Importe cerrado y plazos firmes. 877 278 105.",
  alternates: { canonical: "/servicios/reformas-integrales" },
  openGraph: {
    title: "Reformas Integrales en Vila-seca | RV",
    description: "Reformamos pisos turísticos, segundas residencias y casas pairales en Vila-seca con materiales preparados para la salinidad y plazos cuadrados al verano.",
    url: "/servicios/reformas-integrales",
    images: ["/images/reforma-integral-vivienda-vilaseca.webp"],
  },
};

export default function ReformasIntegralesPage() {
  return (
    <>
      <ServiceSchema
        name="Reformas Integrales en Vila-seca"
        description="Reformas integrales llave en mano en Vila-seca, La Pineda y el Tarragonès, con foco en pisos turísticos, segundas residencias y casas pairales del centro histórico."
        url="/servicios/reformas-integrales"
        image="/images/reforma-integral-vivienda-vilaseca.webp"
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas Integrales", url: "/servicios/reformas-integrales" },
        ]}
      />

      <HeroService
        title="Reforma integral llave en mano en Vila-seca y La Pineda"
        subtitle="De los planos al primer huésped o a tu nueva mudanza. Coordinamos demolición, instalaciones, carpintería y mobiliario para que el inmueble esté listo en la fecha pactada."
        image="/images/reforma-integral-vivienda-vilaseca.webp"
        imageAlt="Reforma integral de vivienda costera en Vila-seca"
        imageTitle="Reforma integral llave en mano en Vila-seca - RV Reformas"
        h1Keyword="Reformas Integrales en Vila-seca"
        badge="Llave en mano"
        showCTA
        trustItems={["Equipo costero", "Plazos firmes", "Preparado para alquiler"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Proyecto integral, un solo equipo
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reformas integrales en Vila-seca y La Pineda
              </h2>
              <p className="font-body font-semibold text-dark text-base leading-relaxed">
                Tres tipologías muy distintas, mismo método de trabajo.
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Vila-seca y La Pineda concentran tres realidades muy diferentes: pisos de los años 70-80 frente al paseo marítimo que se reconvierten en alquiler turístico, segundas residencias de propietarios catalanes y franceses que vienen en verano, y casas pairales del centro histórico con elementos protegidos. Cada una pide una receta distinta y el equipo de RV Reformas la conoce de memoria.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En la reforma integral abordamos la vivienda completa: tabiquería, fontanería con manguitos resistentes a la cal del agua local, electricidad nueva con magnetotérmico de 9 kW, suelos porcelánicos rectificados que toleran la arena, carpintería de aluminio con rotura térmica, cocina con isla cuando hay metros y baños con plato de obra. El número que aparece en el contrato es la cifra que liquidas al final.
              </p>
              <p className="font-body font-semibold text-dark text-base">
                Importe cerrado por escrito desde la primera valoración. Sin sobrecostes a mitad de obra.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/cocina-funcional-piso-turistico-vilaseca.webp"
                alt="Cocina abierta en reforma integral de piso turístico en La Pineda"
                title="Cocina con isla en reforma integral en Vila-seca"
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Por qué reforma integral</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">
              Por qué elegir una reforma integral
            </h2>
            <p className="font-body text-white/65 text-base md:text-lg max-w-[640px] mx-auto mt-4">
              Cuatro motivos para hacerlo de una sola vez.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Rentabilidad inmediata para alquiler turístico", text: "Un piso reformado y bien fotografiado en La Pineda sube su precio por noche entre un 35% y un 60% respecto a uno tal cual. Si el destino es alquiler vacacional, la reforma se amortiza con dos temporadas largas." },
              { title: "Coste por metro mejor que por estancias", text: "Renovar la vivienda completa de una sola tacada baja el precio por m² entre un 15% y un 20% respecto a hacerlo por fases (cocina este año, baños el siguiente). Un solo proyecto, un solo equipo, ahorro real." },
              { title: "Eficiencia energética A o B", text: "Aprovechamos para sustituir ventanas, aislar fachada sur (la que más castiga el sol), instalar climatización inverter y luminaria LED. Cumple los requisitos para Next Generation y reduce la factura un 40%." },
              { title: "Una sola interlocución", text: "Un coordinador de obra, un calendario común y comunicación regular del avance. Te olvidas de cruzar gremios, de quién pidió permiso a la comunidad o de quién tiene que firmar el certificado. Solo decides materiales y disfrutas el resultado." },
            ].map((b) => (
              <div key={b.title} className="flex gap-5 bg-white/5 border border-white/10 rounded-[16px] p-7">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-lg text-white">{b.title}</h3>
                  <p className="font-body text-white/65 text-sm leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cómo trabajamos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Nuestro proceso de reforma paso a paso</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">El recorrido de tu reforma integral.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Visita y medición", text: "Pasamos por el inmueble, medimos cada estancia, identificamos paredes de carga, hacemos catas si hace falta y hablamos contigo del uso final: vivir, alquilar como vivienda turística o ambas." },
              { step: "02", title: "Anteproyecto cerrado", text: "Planos, render básico, ficha de materiales adaptada a la salinidad, calendario por fases, contrato con importe cerrado. Lo firmamos antes de tocar nada." },
              { step: "03", title: "Tramitación y obra", text: "Comunicación previa, licencia mayor o licencia turística, permisos de comunidad. Obra con plantilla propia y comunicación regular con fotos del avance para que lo sigas estés donde estés." },
              { step: "04", title: "Entrega y postventa", text: "Limpieza profesional, repaso conjunto por estancias, manuales y documentación de la obra. Si quieres alquilar, te conectamos con fotógrafo y gestor de plataformas." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-[16px] p-7 flex flex-col gap-4 shadow-sm">
                <span className="font-display font-extrabold text-[48px] text-accent/30 leading-none">{s.step}</span>
                <h3 className="font-display font-bold text-lg text-dark">{s.title}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Qué incluye</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Qué incluye una reforma integral en Vila-seca</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">Todas las partidas, una sola obra.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Demolición y gestión de residuos",
              "Distribución y tabiquería interior",
              "Fontanería antical y desagües PVC",
              "Electricidad nueva con magnetotérmico",
              "Climatización inverter y aerotermia",
              "Carpintería de aluminio con RPT",
              "Suelos porcelánicos rectificados",
              "Cocina con isla o americana llave en mano",
              "Baños con plato de obra y mampara",
              "Pintura transpirable antimoho",
              "Asesoramiento en licencia turística y certificado energético",
              "Limpieza profesional final",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 bg-white rounded-[12px] p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-body font-semibold text-dark text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas integrales en Vila-seca</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta una reforma integral en un piso de Vila-seca o La Pineda?", a: "Trabajamos con tarifas orientativas desde 360 €/m² para lavados de cara pensados para alquiler turístico, desde 460 €/m² para reformas integrales con cambio de distribución y desde 560 €/m² en casas pairales o chalets con acabados premium. La cifra final depende del estado de partida, los materiales y el nivel de acabado. Te visitamos sin compromiso y cerramos el importe exacto por escrito." },
              { q: "¿Cuánto dura una reforma integral?", a: "Un piso turístico de 60-80 m² en La Pineda requiere de 7 a 10 semanas. Una vivienda habitual de 90-110 m² en Vila-seca centre, entre 11 y 14 semanas. Casas pairales o chalets de Els Boscos, entre 18 y 26 semanas según la complejidad." },
              { q: "¿Tengo que mudarme durante la obra?", a: "Si vives habitualmente en el inmueble, recomendamos sí: una integral genera polvo, ruido y cortes de instalación. Para segundas residencias o pisos turísticos vacíos no es problema. Si necesitas alojamiento puente, te ayudamos a buscar opción cercana." },
              { q: "¿Los materiales están dentro del precio cerrado?", a: "Todo dentro: materiales (te acompañamos a elegir en exposición de Tarragona o Reus), mano de obra de plantilla propia, retirada de escombros con transportista autorizado, tramitación municipal y limpieza profesional final." },
              { q: "¿Hacéis la fotografía profesional para el anuncio turístico?", a: "Trabajamos con un fotógrafo local especializado en pisos turísticos. Si quieres que coordinemos el shooting el día de la entrega, lo añadimos al presupuesto sin sobrecargo de gestión. Tú solo decides plataforma y precio." },
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para tu reforma integral</h2>
          <p className="font-body text-white/90 text-lg max-w-[560px]">¿Hablamos de tu reforma integral en Vila-seca? Visita técnica gratuita en Vila-seca, La Pineda o el municipio del Tarragonès donde tengas el inmueble. Valoración detallada en 24-48 horas. Cero compromiso.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
              Solicita la valoración
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
