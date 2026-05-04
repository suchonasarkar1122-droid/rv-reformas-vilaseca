import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Baños en Vila-seca | RV",
  description:
    "Renovamos tu baño en Vila-seca y La Pineda: cambio bañera por ducha, plato de obra, mampara, sanitarios y grifería antical. Para alquiler turístico y vivienda. 877 278 105.",
  alternates: { canonical: "/servicios/reformas-banos" },
  openGraph: {
    title: "Reformas de Baños en Vila-seca | RV",
    description: "Cambio de bañera por ducha, platos de obra y materiales preparados para la cal del agua y la salinidad de la costa de Vila-seca.",
    url: "/servicios/reformas-banos",
    images: ["/images/bano-piso-turistico-vilaseca.webp"],
  },
};

export default function ReformasBanosPage() {
  return (
    <>
      <ServiceSchema
        name="Reformas de Baños en Vila-seca"
        description="Reforma de baños en Vila-seca y La Pineda: cambio de bañera por ducha, plato de obra, mampara y sanitarios resistentes a cal y salinidad."
        url="/servicios/reformas-banos"
        image="/images/bano-piso-turistico-vilaseca.webp"
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas de Baños", url: "/servicios/reformas-banos" },
        ]}
      />

      <HeroService
        title="Baños hechos para la humedad de la costa Daurada"
        subtitle="Plato de obra antideslizante, mampara con acero inoxidable, grifería antical, sanitarios suspendidos y ventilación forzada. Acabados que no se estropean en cuatro veranos."
        image="/images/bano-piso-turistico-vilaseca.webp"
        imageAlt="Baño reformado para piso turístico en La Pineda"
        imageTitle="Reforma de baño en piso turístico de Vila-seca - RV Reformas"
        h1Keyword="Reformas de Baños en Vila-seca"
        badge="Plato de obra"
        showCTA
        trustItems={["Antical", "Antideslizante", "Cambio bañera-ducha"]}
        tall
      />

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                El baño de la costa exige más
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reformas de baños en Vila-seca y La Pineda
              </h2>
              <p className="font-body font-semibold text-dark text-base leading-relaxed">
                Lo que sufren los baños frente al mar.
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                El agua de Vila-seca es muy calcárea: si no pones una grifería preparada y un descalcificador en la entrada general, en dos años aparecen los puntos blancos y la grifería pierde caudal. Si encima el baño da a fachada sur o al paseo de La Pineda, la sal del aire mata los herrajes baratos. Por eso en RV Reformas no escatimamos en marca de grifo ni en mampara: un cuerpo de latón cromado y un perfil de acero inoxidable son la diferencia entre un baño que dura quince años y uno que pide reforma a los cinco.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En piso turístico en La Pineda casi siempre cambiamos bañera por plato de obra antideslizante: gana espacio, evita resbalones de huéspedes con cervezas y limpia mejor entre cambios. En segunda residencia y vivienda habitual ofrecemos baño completo con doble seno cuando hay metros, ducha tipo lluvia y suelo radiante eléctrico para los inviernos cortos pero húmedos.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/bano-mampara-cristal-vilaseca.webp"
                alt="Baño con mampara de cristal y plato de obra en Vila-seca"
                title="Baño con plato de obra y mampara en Vila-seca"
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tres encargos típicos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">
              Tipos de reformas de baño en Vila-seca
            </h2>
            <p className="font-body text-white/65 text-base md:text-lg max-w-[640px] mx-auto mt-4">
              Lo que más nos piden en Vila-seca.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cambio bañera por ducha", text: "El más común. Sustituimos bañera de los 70-80 por plato de obra antideslizante a ras de suelo, mampara con perfil inox y grifería termostática. 4-6 días laborables." },
              { title: "Baño completo en piso turístico", text: "Reforma integral del baño para apartamento turístico: sanitarios suspendidos, mueble lavabo doble, grifería sencilla, espejo retroiluminado, suelo porcelánico antideslizante. 10-14 días." },
              { title: "Baño principal con bañera y ducha", text: "En chalets y segundas residencias amplias. Bañera exenta, ducha separada con lluvia, doble seno, muebles a medida, ventilación forzada y suelo radiante. 3-4 semanas." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2"><path d="M3 12h18M5 12v5a2 2 0 002 2h10a2 2 0 002-2v-5M9 5h6v7H9z" /></svg>
                </div>
                <h3 className="font-display font-bold text-lg text-white">{b.title}</h3>
                <p className="font-body text-white/65 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Qué incluye</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Qué incluye una reforma de baño en Vila-seca</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">Todas las partidas dentro del precio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Demolición de azulejado y plato existente",
              "Repaso de fontanería y desagües",
              "Plato de obra con tela impermeabilizante",
              "Azulejado y rejuntado epoxi",
              "Sanitarios suspendidos con cisterna empotrada",
              "Mueble lavabo y espejo retroiluminado",
              "Grifería antical termostática",
              "Mampara con perfil inox y vidrio templado",
              "Suelo porcelánico antideslizante R10/R11",
              "Ventilación forzada con detector humedad",
              "Iluminación LED clase IP44",
              "Limpieza profesional y silicona final",
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas de baños en Vila-seca</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta reformar un baño en Vila-seca?", a: "Trabajamos con tarifas orientativas desde 360 €/m² para cambios de bañera por ducha y baños de piso turístico con materiales estándar, desde 460 €/m² para baños completos con cambio de distribución y desde 560 €/m² en baños principales con materiales premium. La cifra final depende mucho de la calidad de azulejo, sanitarios y grifería. Te visitamos sin compromiso y cerramos el importe exacto por escrito." },
              { q: "¿En cuánto tiempo dejáis listo el baño?", a: "Cambio de bañera por ducha: 5 días laborables. Baño completo: 10-14 días. Si reformas el baño principal a la vez que un secundario, son 18-22 días en paralelo. Te dejamos siempre uno operativo si vives en la casa." },
              { q: "Tengo un baño con bañera y vivimos personas mayores. ¿Es buena idea cambiar a ducha?", a: "Casi siempre sí. Reduce drásticamente el riesgo de caída. Ponemos plato R11 antideslizante, asiento abatible, barra de seguridad inox y grifo termostático con caudal limitado a 38°C. Trámite con ayudas de accesibilidad cuando aplica." },
              { q: "¿Hay que tirar todo el azulejo?", a: "Si está en buen estado y solo cambias sanitarios y grifería, podemos respetarlo y trabajar solo zona de ducha. Pero ojo: si tu baño es de los 80, suele tener azulejos de 15x15 cm con junta gruesa que retiene moho. Suele compensar tirar y rejuntar con resina epoxi." },
              { q: "¿Hacéis baño con suelo radiante eléctrico?", a: "Sí, en segundas residencias y vivienda habitual lo recomendamos. La inversión extra es contenida y se nota mucho los inviernos cortos pero húmedos del Tarragonès. Con termostato programable solo gasta cuando lo usas." },
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para tu reforma de baño</h2>
          <p className="font-body text-white/90 text-lg max-w-[560px]">¿Reformamos tu baño en Vila-seca? Visita técnica gratuita y presupuesto cerrado en pocos días. Cambio de bañera por ducha resuelto con plazos contenidos.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
              Pide tu valoración
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
