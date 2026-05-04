import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Pisos en Vila-seca y La Pineda | RV",
  description:
    "Reformas de pisos costeros, segundas residencias y apartamentos turísticos en Vila-seca y La Pineda. Listos antes del verano. Importe cerrado. 877 278 105.",
  alternates: { canonical: "/servicios/reformas-pisos" },
  openGraph: {
    title: "Reformas de Pisos en Vila-seca y La Pineda | RV",
    description: "Reformamos pisos turísticos, segundas residencias y vivienda habitual en Vila-seca con plazos cuadrados al verano y materiales costeros.",
    url: "/servicios/reformas-pisos",
    images: ["/images/piso-reformado-vilaseca.webp"],
  },
};

export default function ReformasPisosPage() {
  return (
    <>
      <ServiceSchema
        name="Reformas de Pisos en Vila-seca"
        description="Reforma de pisos costeros, apartamentos turísticos y segundas residencias en Vila-seca, La Pineda y el Tarragonès."
        url="/servicios/reformas-pisos"
        image="/images/piso-reformado-vilaseca.webp"
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas de Pisos", url: "/servicios/reformas-pisos" },
        ]}
      />

      <HeroService
        title="Pisos costeros listos para vivir o alquilar"
        subtitle="Apartamentos turísticos en La Pineda, segundas residencias en El Pla, vivienda habitual en Vila-seca centre. Reforma con calendario alineado al verano."
        image="/images/piso-reformado-vilaseca.webp"
        imageAlt="Piso reformado en La Pineda preparado para alquiler vacacional"
        imageTitle="Reforma de piso costero en Vila-seca - RV Reformas"
        h1Keyword="Reformas de Pisos en Vila-seca"
        badge="Pisos costeros"
        showCTA
        trustItems={["Preparado para alquiler", "Antes del verano", "Llave en mano"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Tres clientes, un mismo equipo
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reformas de pisos en Vila-seca y La Pineda
              </h2>
              <p className="font-body font-semibold text-dark text-base leading-relaxed">
                Reforma para vivir, para alquilar o para las dos cosas.
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Tres tipos de propietarios nos contactan cada semana. El primero acaba de comprar un piso de los años 70 frente al paseo de La Pineda y quiere abrirlo al alquiler turístico antes de junio: necesita reforma rápida, mobiliario completo y trámite de licencia turística. El segundo es una familia de Reus o Tarragona con segunda residencia en Vila-seca que pasa los veranos: busca renovar para los próximos diez años, sin prisa, con materiales que duren. El tercero vive en Vila-seca centre o El Pla y reforma su vivienda habitual para una nueva etapa: hijos que crecen, padres mayores, teletrabajo.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Para los tres trabajamos con materiales costeros (carpintería con rotura térmica, suelo porcelánico antideslizante, pintura transpirable antimoho), instalaciones nuevas con magnetotérmico de 9 kW y certificado energético al final. La diferencia está en los acabados: en alquiler turístico priorizamos durabilidad y limpieza fácil, en segundas residencias el confort y en vivienda habitual la personalización.
              </p>
              <p className="font-body font-semibold text-dark text-base">
                Tras la visita técnica te enviamos presupuesto detallado a tu correo lo antes posible.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/salon-luminoso-costa-vilaseca.webp"
                alt="Salón luminoso en piso reformado en Vila-seca con vistas al mar"
                title="Salón reformado en piso costero de Vila-seca"
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Calendario realista</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">
              Plazos de reforma de piso para temporada turística
            </h2>
            <p className="font-body text-white/65 text-base md:text-lg max-w-[640px] mx-auto mt-4">
              Cuándo encargar para abrir en cada periodo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { season: "Semana Santa", deadline: "Encargar antes del 15 de noviembre", note: "Cuatro meses para reforma + fotografía + alta plataforma. Material disponible." },
              { season: "Mayo / puentes", deadline: "Encargar antes del 15 de diciembre", note: "Cinco meses incluyendo licencia turística. Para apuntar al puente de mayo." },
              { season: "Verano (julio)", deadline: "Encargar antes del 15 de febrero", note: "Cinco meses con margen real. Es el más demandado. Reservar slot temprano." },
              { season: "Septiembre / final temporada", deadline: "Encargar antes del 1 de mayo", note: "Para abrir septiembre se llega cómodo. Ideal si quieres pre-test antes del verano siguiente." },
            ].map((s) => (
              <div key={s.season} className="bg-white/5 border border-white/10 rounded-[16px] p-6 flex flex-col gap-3">
                <p className="font-body text-accent text-xs uppercase tracking-wider font-bold">{s.season}</p>
                <h3 className="font-display font-bold text-base text-white">{s.deadline}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas de pisos en Vila-seca</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Qué presupuesto manejo para reformar un piso de 70 m² en La Pineda?", a: "Trabajamos con tarifas orientativas desde 360 €/m² para lavados de cara con cocina americana y un baño nuevo, desde 460 €/m² para reformas integrales con cambio de distribución, dos baños y cocina con isla, y desde 560 €/m² cuando incorporamos ventanas con rotura térmica, aerotermia y acabados premium. Te visitamos sin compromiso y cerramos el importe exacto por escrito." },
              { q: "¿Tramitáis la cédula de habitabilidad y certificado energético?", a: "Sí, los dos. La cédula es obligatoria para alquilar (turístico o residencial) y caduca a los 15 años. El certificado energético es obligatorio desde 2013 para venta y alquiler. Coordinamos el técnico colegiado y te entregamos los documentos firmados." },
              { q: "¿Puedo elegir el suelo porcelánico en una exposición?", a: "Sí. Trabajamos con dos exposiciones en Reus y una en Tarragona donde te acompañamos a ver muestras a tamaño real. Para alquiler turístico recomendamos formato 60x60 o 60x120 cm rectificado en tono cemento o roble claro: discreto, fácil de limpiar y combina con cualquier mueble." },
              { q: "Mi piso tiene gotelé y suelo de terrazo. ¿Hay que tirarlo todo?", a: "No siempre. El gotelé se tapa con una capa de pasta proyectada y luego pintura. El terrazo, si está sano, se puede pulir y cristalizar (queda como nuevo, con ahorro notable respecto a poner porcelánico). Lo evaluamos en la visita técnica." },
              { q: "¿Hacéis pisos turísticos completos con mobiliario?", a: "Sí. Si quieres un servicio integral, además de la obra te ofrecemos pack de mobiliario, electrodomésticos, ropa de cama y menaje, fotografía profesional y alta del anuncio. Llegas a la entrega con el piso listo para anunciar el mismo día." },
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para tu reforma de piso</h2>
          <p className="font-body text-white/90 text-lg max-w-[560px]">¿Reformamos tu piso a tiempo para el verano? Cuéntanos en qué barrio está y con qué fecha trabajas. Hacemos hueco si llegamos a tiempo y te lo decimos con honestidad si no.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
              Quiero la valoración
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
