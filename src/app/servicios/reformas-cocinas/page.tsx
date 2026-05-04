import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Cocinas en Vila-seca | RV",
  description:
    "Reformas de cocinas en Vila-seca y La Pineda. Cocinas abiertas, isla central, americanas para alquiler turístico. Materiales que aguantan la salinidad. Importe cerrado. 877 278 105.",
  alternates: { canonical: "/servicios/reformas-cocinas" },
  openGraph: {
    title: "Reformas de Cocinas en Vila-seca | RV",
    description: "Diseñamos cocinas abiertas, americanas para alquiler turístico y con isla central en Vila-seca y La Pineda. Acabados resistentes a la humedad costera.",
    url: "/servicios/reformas-cocinas",
    images: ["/images/cocina-amplia-segunda-residencia-vilaseca.webp"],
  },
};

export default function ReformasCocinasPage() {
  return (
    <>
      <ServiceSchema
        name="Reformas de Cocinas en Vila-seca"
        description="Diseño y obra de cocinas abiertas, con isla y americanas en Vila-seca, La Pineda y el Tarragonès. Especializados en pisos turísticos y segundas residencias."
        url="/servicios/reformas-cocinas"
        image="/images/cocina-amplia-segunda-residencia-vilaseca.webp"
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas de Cocinas", url: "/servicios/reformas-cocinas" },
        ]}
      />

      <HeroService
        title="Cocinas que abren la casa al mar y al verano"
        subtitle="Cocinas americanas para piso turístico, isla central para chalets de Els Boscos, americanas pequeñas para apartamentos de El Pla. Diseño, obra y montaje con un único equipo."
        image="/images/cocina-amplia-segunda-residencia-vilaseca.webp"
        imageAlt="Cocina abierta reformada en segunda residencia de Vila-seca"
        imageTitle="Reforma de cocina abierta en Vila-seca - RV Reformas"
        h1Keyword="Reformas de Cocinas en Vila-seca"
        badge="Diseño y obra"
        showCTA
        trustItems={["Diseño 3D", "Plazos firmes", "Resiste salinidad"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Tres modos de pensar la cocina
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reformas de cocinas en Vila-seca y La Pineda
              </h2>
              <p className="font-body font-semibold text-dark text-base leading-relaxed">
                Distinta cocina para distinta vida.
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Una cocina para piso turístico en La Pineda no se diseña igual que una cocina para tu casa habitual en Vila-seca centre. La primera necesita ser robusta, fácil de limpiar, intuitiva para huéspedes que llegan cansados, con electrodomésticos sencillos y mucha encimera para hacer maletas o servir desayunos. La segunda se piensa para sesiones largas con la familia, con isla, despensa, vinoteca y rincones para los rituales de cada día.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En la costa la elección de materiales pesa más que en cualquier otro sitio: la humedad y la sal pueden estropear muebles laminados baratos en pocos veranos. Trabajamos con frentes en compacto fenólico o melamina premium con cantos ABS, encimeras porcelánicas o cuarzo compacto, herrajes de acero inoxidable y campanas con motor remoto para reducir grasa en armarios. Una cocina pensada para durar.
              </p>
              <p className="font-body font-semibold text-dark text-base">
                Diseño 3D antes de empezar. Tú lo apruebas, nosotros lo ejecutamos.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/cocina-isla-vilaseca.webp"
                alt="Cocina con isla central en chalet de Els Boscos, Vila-seca"
                title="Cocina con isla central en Vila-seca"
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tres opciones</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">
              Tres tipos de cocina que más reformamos en Vila-seca
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cocina americana para alquiler turístico", text: "Para apartamentos de 50-70 m² en La Pineda. Frente del salón, encimera barra, dos fuegos vitro, microondas combi, lavavajillas slim 45 cm. Robusta, intuitiva y barata de mantener. Pensada para entregar a tiempo de la temporada." },
              { title: "Cocina abierta familiar", text: "Para pisos de 80-110 m² en Vila-seca centre o Els Boscos. Apertura del tabique con cocina semi-integrada, isla con encimera porcelánica, despensa columna, frigorífico americano. Perfecta para vida diaria con niños." },
              { title: "Cocina con isla y vinoteca", text: "Para chalets y casas pairales. Isla de 3 metros con fregadero y zona de cocción, hornos en columna, vinoteca, despensa walk-in cuando hay metros. Materiales mixtos: piedra, madera natural, hierro envejecido." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2"><path d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" /></svg>
                </div>
                <h3 className="font-display font-bold text-lg text-white">{b.title}</h3>
                <p className="font-body text-white/65 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Materiales costeros</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Materiales para cocinas en La Pineda y Vila-seca</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">Lo que aguanta y lo que no en La Pineda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {[
              { ok: true, title: "Frentes en compacto fenólico o melamina premium", text: "Resisten humedad, golpes de maleta y limpieza intensiva entre huéspedes. Cantos ABS termofusionados, no pegados." },
              { ok: true, title: "Encimera porcelánica o cuarzo compacto", text: "Cero porosidad. La sal y el vino tinto no penetran. Resisten ollas calientes sin posavasos. Pensadas para durar muchos años." },
              { ok: true, title: "Herrajes de acero inoxidable", text: "Bisagras Blum o equivalente, guías ocultas con amortiguación. La humedad marina no oxida ni hace ruido al cerrar." },
              { ok: false, title: "MDF lacado convencional en zonas húmedas", text: "Se hincha con dos años de humedad costera. Solo lo usamos si la cocina está bien ventilada y con campana potente." },
              { ok: false, title: "Encimeras de madera maciza junto al fregadero", text: "Estéticas pero piden mantenimiento mensual. En piso turístico es inviable. En casa habitual hablamos contigo." },
              { ok: false, title: "Campanas decorativas sin motor potente", text: "La grasa termina en los armarios y dura. Ponemos campanas con motor de 600 m³/h mínimo." },
            ].map((m, i) => (
              <div key={i} className={`bg-white rounded-[14px] p-6 shadow-sm flex gap-4 ${m.ok ? "border-l-4 border-accent" : "border-l-4 border-dark/40"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${m.ok ? "bg-accent/15" : "bg-dark/10"}`}>
                  {m.ok ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A3D" strokeWidth="2.5"><path d="M6 18L18 6M6 6l12 12" /></svg>
                  )}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-dark mb-1">{m.title}</h3>
                  <p className="font-body text-subtitle text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas de cocinas en Vila-seca</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta reformar una cocina en Vila-seca?", a: "Trabajamos con tarifas orientativas desde 360 €/m² en cocinas americanas para alquiler turístico, desde 460 €/m² en cocinas familiares con isla y gama media, y desde 560 €/m² en cocinas premium con materiales nobles. La cifra final depende de electrodomésticos, encimera y mobiliario escogidos. Te visitamos sin compromiso y cerramos el importe exacto por escrito." },
              { q: "¿Cuánto tarda la obra?", a: "Una cocina sin tocar instalación ni paredes, 10-14 días laborables. Si abrimos tabique al salón y rehacemos fontanería y eléctrico, 4-6 semanas. La cocina suele ser la última estancia que entregamos para minimizar polvo en muebles nuevos." },
              { q: "¿Trabajáis con marcas concretas?", a: "Bosch y Balay como referencia para electrodomésticos en alquiler turístico (servicio técnico fácil en Tarragona). Para gama alta, Siemens, Smeg o Miele. En muebles colaboramos con cocineros locales del Camp de Tarragona y Reus que llevan años haciendo cocinas a medida." },
              { q: "¿Puedo abrir el tabique para hacer cocina abierta?", a: "Casi siempre, sí. Antes hacemos cata para verificar que no es muro de carga. Si lo es, calculamos viga IPE o HEB para distribuir la carga. En edificios de los 70-80 de La Pineda lo solemos hacer sin problema." },
              { q: "¿Diseñáis con render 3D?", a: "Sí, tras la visita técnica te enviamos diseño 3D fotorealista para que veas cómo quedará antes de pedir muebles. Hacemos ajustes hasta que estás conforme: reposicionar isla, cambiar tirador, probar distinto color de frente." },
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para tu reforma de cocina</h2>
          <p className="font-body text-white/90 text-lg max-w-[560px]">¿Te diseñamos la cocina ideal para tu inmueble? Visita técnica + diseño 3D sin coste. Te enviamos propuesta y presupuesto cerrado para tu cocina en Vila-seca, La Pineda o cualquier municipio del Tarragonès en pocos días.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
              Pide tu diseño 3D
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
