import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import CTAButtons from "@/components/CTAButtons";
import TestimonialCard from "@/components/TestimonialCard";
import TickerBand from "@/components/TickerBand";
import HeroForm from "@/components/HeroForm";

const ProcessCard = dynamic(() => import("@/components/ProcessCard"));
const CTAForm = dynamic(() => import("@/components/CTAForm"));

const services = [
  {
    title: "Reformas Integrales",
    href: "/servicios/reformas-integrales",
    image: "/images/reforma-integral-vivienda-vilaseca.webp",
    alt: "Reforma integral de vivienda costera en Vila-seca",
  },
  {
    title: "Reformas de Cocinas",
    href: "/servicios/reformas-cocinas",
    image: "/images/cocina-amplia-segunda-residencia-vilaseca.webp",
    alt: "Cocina abierta renovada en segunda residencia de Vila-seca",
  },
  {
    title: "Reformas de Baños",
    href: "/servicios/reformas-banos",
    image: "/images/bano-piso-turistico-vilaseca.webp",
    alt: "Baño reformado para piso turístico en La Pineda",
  },
  {
    title: "Reformas de Pisos",
    href: "/servicios/reformas-pisos",
    image: "/images/piso-reformado-vilaseca.webp",
    alt: "Piso reformado en La Pineda preparado para alquiler vacacional",
  },
  {
    title: "Reformas de Locales",
    href: "/servicios/reformas-locales",
    image: "/images/local-comercial-vilaseca.webp",
    alt: "Local comercial renovado en Vila-seca centre",
  },
];

const testimonials = [
  {
    name: "Aitor Ferré",
    role: "Inversor con piso turístico en La Pineda",
    quote: "Compramos un piso de los 80 frente al paseo y querían dejarlo listo para julio. Lo entregaron a finales de mayo, con muebles y todo. Esa primera temporada ya cubrió la inversión.",
  },
  {
    name: "Cristina Boada",
    role: "Vecina de Vila-seca centre",
    quote: "Reformamos una casa pairal del casco antiguo. Mantuvieron las baldosas hidráulicas y las vigas, modernizaron las instalaciones y aislaron la fachada sur. Convive lo viejo con lo nuevo sin chirridos.",
  },
  {
    name: "Marc Gomis",
    role: "Propietario en Els Boscos",
    quote: "Adaptaron nuestro chalet a familia con dos hijos: cocina abierta, dormitorio en planta baja para mi madre y porche cerrado. Plazos firmes y un coordinador que cogió el teléfono siempre.",
  },
  {
    name: "Helena Pujol",
    role: "Apartamento en El Pla",
    quote: "Vivimos en Reus y la obra se hizo en remoto. Nos mantuvieron informados con regularidad y fotos del avance. Cuando vinimos a la entrega no había sorpresas, solo un piso impecable.",
  },
];

const processSteps = [
  {
    title: "Visita técnica gratuita",
    description: "Quedamos en tu vivienda de Vila-seca, La Pineda o el municipio del Tarragonès donde esté. Medimos, fotografiamos y escuchamos cómo la usas o cómo la quieres alquilar. Sin coste ni compromiso.",
    image: "/images/equipo-reformas-vilaseca.webp",
  },
  {
    title: "Anteproyecto y coste cerrado",
    description: "Elaboramos planos, ficha de materiales pensados para la salinidad de la costa y un calendario por fases. Firmamos un importe cerrado por escrito antes de mover la primera baldosa.",
    image: "/images/presupuesto-detallado-vilaseca.webp",
  },
  {
    title: "Tramitación municipal y comunidad",
    description: "Gestionamos comunicación previa o licencia mayor en el Ayuntamiento de Vila-seca, hablamos con la comunidad si es un piso turístico y te orientamos sobre los trámites de licencia turística cuando lo necesitas. Tú no tocas papeles.",
    image: "/images/reforma-integral-proceso-vilaseca.webp",
  },
  {
    title: "Obra con plantilla propia",
    description: "Albañilería, fontanería, electricidad y carpintería con operarios nuestros. Si la obra es para alquiler turístico y tiene fecha de apertura, lo planificamos con búfer para llegar al primer huésped.",
    image: "/images/ejecucion-reforma-llave-mano-vilaseca.webp",
    objectPosition: "center 60%",
  },
  {
    title: "Repaso conjunto y postventa",
    description: "Hacemos una visita de revisión por estancias, anotamos detalles a corregir y los resolvemos antes de la entrega. Después seguimos disponibles si surge algo cuando ya estés disfrutando del inmueble.",
    image: "/images/casa-reformada-vilaseca.webp",
  },
  {
    title: "Entrega cuidada al detalle",
    description: "Te devolvemos las llaves con limpieza profesional, manuales de instalaciones y la documentación correspondiente a materiales y mano de obra. Listo para vivir o para anunciar en plataformas.",
    image: "/images/entrega-llaves-acabados-vilaseca.webp",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda una reforma integral en un piso de La Pineda o Vila-seca?",
    a: "Para un apartamento turístico de 60-80 m² en La Pineda calcula entre 7 y 10 semanas. Si es un piso del centro de Vila-seca de 90-100 m² con cambio de distribución, suben a 11-14 semanas. Las casas pairales del casco antiguo tardan más por instalaciones obsoletas y revisión estructural.",
  },
  {
    q: "Quiero abrir el piso para verano. ¿Hasta cuándo puedo encargar la obra?",
    a: "Si quieres recibir huéspedes en julio, el plazo realista es contratar antes de finales de febrero. Una reforma para alquiler turístico bien hecha (incluyendo licencia, mobiliario, fotografía) son tres meses largos. Si es solo lavado de cara y cocina nueva, llegamos cómodos arrancando en marzo.",
  },
  {
    q: "¿Qué materiales aguantan la salinidad y la humedad de la costa de Vila-seca?",
    a: "Trabajamos con pintura transpirable antimoho, carpintería de aluminio con rotura de puente térmico, herrajes de acero inoxidable, suelos porcelánicos rectificados resistentes a la abrasión y griferías con cuerpo cromado de calidad. Para fachadas a primera línea, mortero de cal y revestimientos minerales antes que pintura plástica.",
  },
  {
    q: "¿Tramitáis la licencia turística en Vila-seca?",
    a: "Sí, asesoramos sobre los requisitos del Ayuntamiento de Vila-seca y la Generalitat: ventilación cruzada, aforo según habitaciones, cédula de habitabilidad vigente, certificado energético, número de licencia visible. Coordinamos con el gestor del cliente o le proponemos uno de confianza.",
  },
  {
    q: "Vivimos fuera. ¿Podéis llevar la obra en remoto?",
    a: "Es algo habitual en nosotros. Mucha gente nos contacta desde Barcelona, Madrid o Francia para reformar su segunda residencia. Te mantenemos informado con regularidad mediante fotos del avance, vídeo recorriendo la obra cuando hace falta y un punto de contacto único. Solo necesitas venir a la firma del proyecto y a la entrega.",
  },
  {
    q: "¿Trabajáis en municipios cercanos a Vila-seca?",
    a: "Sí, atendemos toda la zona de influencia: Salou, La Canonja, Tarragona, Cambrils y Constantí. La cercanía nos permite que el equipo esté en obra cada día sin sobrecoste por desplazamiento. Si tienes una vivienda fuera de esa franja, pregúntanos: estudiamos cada caso.",
  },
  {
    q: "¿El presupuesto incluye gestión de residuos, comunidad y limpieza final?",
    a: "Todo incluido. Aportamos contenedor con transportista autorizado, gestionamos los residuos en planta de la zona, hablamos con el presidente de la comunidad para los horarios de obra y entregamos el inmueble con limpieza profesional, sin polvo en cajones ni en cristales.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-dark">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-reforma-vilaseca-mediterranea.webp"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14 pt-32 pb-20 lg:pt-36 lg:pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-screen">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="font-body text-accent text-[11px] uppercase tracking-[0.3em] font-bold">Reformas en el Tarragonès</span>
            </div>

            <h1 className="font-display font-extrabold text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[104px] text-white leading-[1] tracking-tight mb-6">
              Reformas <span className="text-accent">Vila-seca</span>
            </h1>

            <p className="font-body text-white/55 text-[16px] max-w-[460px] leading-[1.65] mb-6">
              Pisos turísticos en La Pineda, segundas residencias frente al mar, casas pairales del centro y chalets de Els Boscos. Materiales pensados para la salinidad y plazos cuadrados para abrir antes del verano.
            </p>

            <div className="mb-8">
              <span className="inline-block bg-accent/[0.12] text-accent font-body font-semibold text-[13px] px-5 py-2.5 rounded-lg border border-accent/20">
                Llave en mano &middot; Preparado para alquiler &middot; Acabados de calidad
              </span>
            </div>

            <a
              href="tel:+34877278105"
              className="inline-flex items-center gap-2.5 border-2 border-white/20 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-all duration-300 w-fit mb-8"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              877 278 105
            </a>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-[11px] font-body uppercase tracking-[0.15em]">
              <span>Importe cerrado</span>
              <span className="w-px h-3 bg-white/10" />
              <span>Experiencia costera</span>
              <span className="w-px h-3 bg-white/10" />
              <span>Equipo en plantilla</span>
              <span className="w-px h-3 bg-white/10" />
              <span>Alquiler turístico y comunidad</span>
            </div>
          </div>

          <div className="w-full lg:w-[420px] flex-shrink-0">
            <HeroForm />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-20" />
      </section>

      <TickerBand
        items={["pisos turísticos", "segundas residencias", "Vila-seca centre", "La Pineda", "casas pairales", "antes del verano"]}
        bgColor="bg-accent"
        textColor="text-white"
        direction="right"
        size="small"
      />

      {/* SERVICIOS */}
      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Lo que hacemos</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] lg:text-[60px] text-dark leading-[1.05] mb-5">
              Servicios de reformas en Vila-seca
            </h2>
            <p className="font-body text-subtitle text-lg max-w-[600px] mx-auto">
              Reformas hechas para la vida costera y turística: apartamentos de los 70-80 frente al paseo, casas del Tarragonès, chalets en Els Boscos o locales en Vila-seca centre. Cada inmueble pide su propia receta y la afinamos contigo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[480px] flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-1"
              >
                <Image src={service.image} alt={service.alt} title={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-accent/80 group-hover:via-accent/20 transition-all duration-500" />
                <span className="absolute top-3 right-3 md:top-4 md:right-4 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(224,123,93,0.6)] z-20"></span>
                <div className="relative z-10 p-6 md:p-8">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-white leading-[1.1] inline-flex items-center gap-3">
                    {service.title}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.slice(3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-1"
              >
                <Image src={service.image} alt={service.alt} title={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-accent/80 group-hover:via-accent/20 transition-all duration-500" />
                <span className="absolute top-3 right-3 md:top-4 md:right-4 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(224,123,93,0.6)] z-20"></span>
                <div className="relative z-10 p-6 md:p-7">
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-white leading-[1.1] inline-flex items-center gap-3">
                    {service.title}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section className="bg-beige-warm py-16 md:py-20 px-5">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-body font-bold text-sm uppercase text-accent mb-4 tracking-wide">Dónde reformamos</p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05] mb-4">
            Reformas en Vila-seca, La Pineda y zonas cercanas
          </h2>
          <p className="font-body text-subtitle text-base max-w-[640px] mx-auto mb-8">
            Vila-seca y todo el entorno del Port d&apos;Aventura. La proximidad nos permite que la furgoneta esté en obra cada mañana. Cobertura sin sobrecoste por kilometraje en estos cinco municipios cercanos.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Salou", slug: "reformas-salou" },
              { name: "La Canonja", slug: "reformas-la-canonja" },
              { name: "Tarragona", slug: "reformas-tarragona" },
              { name: "Cambrils", slug: "reformas-cambrils" },
              { name: "Constantí", slug: "reformas-constanti" },
            ].map((zone) => (
              <Link
                key={zone.slug}
                href={`/zonas/${zone.slug}`}
                className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full font-body font-semibold text-dark text-sm border border-dark/10 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Reformas en {zone.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-beige-warm pt-20 px-5 pb-24">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-14">
          <div className="text-center max-w-[1100px]">
            <p className="font-body font-bold text-sm uppercase text-accent mb-4 tracking-[0.15em]">Cómo se desarrolla</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[60px] text-dark mb-5 leading-[1.05]">
              Nuestro proceso de reforma paso a paso
            </h2>
            <p className="text-subtitle text-base font-medium">De la primera visita a la entrega de llaves, en seis pasos. Un método pensado para reformas con calendario apretado, comunicación constante y resultados visibles cada semana.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {processSteps.map((step, i) => (
              <ProcessCard key={step.title} step={i + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-beige py-20 md:py-28 px-5 overflow-hidden">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Por qué RV Reformas</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[52px] lg:text-[60px] text-dark leading-[1.05] mb-5">
              Por qué elegir RV Reformas Vila-seca
            </h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[620px] mx-auto">
              Reformamos como si fuera nuestra propia casa. Reformar a 200 metros del mar, en una comunidad con vecinos turistas o en una casa pairal con vigas de mar viejo no se improvisa. Llevamos años haciendo justamente eso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-dark text-lg mb-2">Importe cerrado por escrito</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  La cifra que firmas es la que pagas. Si abrimos un tabique y aparece una sorpresa, te avisamos antes de tocar nada y decidimos juntos. Cero partidas fantasma a mitad de obra.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-dark text-lg mb-2">Listo antes del primer huésped</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Si tu objetivo es alquilar en julio, planificamos hacia atrás desde el día del primer check-in. Cocina, baños, fotografía profesional y mobiliario coordinados con el calendario de Booking.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-dark text-lg mb-2">Equipo propio, no subcontratas</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Albañilería, fontanería, electricidad y carpintería están en nómina nuestra. En un edificio de los 80 con instalación trenzada o en una casa con vigas históricas, esa coordinación marca la diferencia.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-dark text-lg mb-2">Materiales que aguantan la salinidad</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  La brisa marina destroza pintura plástica, herrajes pobres y carpintería sin rotura térmica. Trabajamos con marcas y acabados pensados para resistir el clima costero de La Pineda y Salou.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300 lg:col-span-1 md:col-span-2">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-dark text-lg mb-2">Asesoramiento en licencias turísticas</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Comunicación previa o licencia mayor en el Ayuntamiento de Vila-seca, orientación sobre el alta de la licencia turística en la Generalitat, certificado energético y cédula. Te lo dejamos resuelto para que solo te ocupes de imaginar el proyecto.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-beige-warm py-16 md:py-20 px-5">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-black/10">
            <div className="flex flex-col gap-3">
              <p className="font-body font-bold text-sm uppercase text-accent tracking-wide">Lo que cuentan los propietarios</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[40px] lg:text-[52px] text-dark leading-[1.1] tracking-[0.01em]">
                Opiniones de clientes en Vila-seca
              </h2>
              <p className="font-body text-subtitle text-base md:text-lg max-w-[640px]">
                Familias e inversores del Tarragonès que ya han reformado con nosotros.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-subtitle">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E07B5D">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-body">Plazos firmes &middot; Postventa cuidada</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-beige py-20 md:py-24 px-5">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Lo que más nos preguntan</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] text-dark leading-[1.05] mb-4">
              Preguntas frecuentes sobre reformas en Vila-seca
            </h2>
            <p className="font-body text-subtitle text-base max-w-[600px] mx-auto">
              Dudas habituales antes de empezar la obra. Si tu duda no está aquí, escríbenos por WhatsApp al 623 760 710 o llama al 877 278 105. Respondemos en el mismo día.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-dark/5 rounded-[14px] p-6 group">
                <summary className="font-body font-semibold text-dark text-base md:text-lg cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <svg className="w-5 h-5 text-accent transition-transform group-open:rotate-180 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="font-body text-subtitle text-sm md:text-base leading-relaxed mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      <TickerBand
        items={["Vila-seca", "La Pineda", "Salou", "Tarragona", "Cambrils", "Constantí", "Costa Daurada"]}
        bgColor="bg-accent"
        textColor="text-white"
        direction="left"
        size="small"
      />

      {/* PRECIOS */}
      <section className="bg-dark py-20 md:py-28 px-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Rangos orientativos</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] lg:text-[56px] text-white leading-[1.05] mb-5">
              Cuánto cuesta una reforma en Vila-seca
            </h2>
            <p className="font-body text-white/55 text-lg max-w-[640px] mx-auto">
              Inversión por tipología. Cada vivienda es un mundo: estado de partida, materiales escogidos y nivel de acabado mandan. Te visitamos sin compromiso y cerramos la cifra exacta por escrito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-colors">
              <p className="font-body text-accent text-xs uppercase tracking-wider font-bold mb-3">Esencial</p>
              <h3 className="font-display font-extrabold text-3xl text-white mb-1">desde 360 &euro;/m&sup2;</h3>
              <p className="font-body text-white/45 text-sm mb-6">Lavado de cara para alquiler turístico</p>
              <ul className="flex flex-col gap-3 text-white/65 text-sm font-body">
                <li className="flex gap-2"><span className="text-accent">&bull;</span>Pintura, suelos y carpintería</li>
                <li className="flex gap-2"><span className="text-accent">&bull;</span>Cocina americana montada</li>
                <li className="flex gap-2"><span className="text-accent">&bull;</span>Puntos de luz LED nuevos</li>
                <li className="flex gap-2"><span className="text-accent">&bull;</span>Limpieza profesional final</li>
              </ul>
            </div>

            <div className="bg-accent rounded-2xl p-8 transform md:-translate-y-3 shadow-2xl">
              <p className="font-body text-white/85 text-xs uppercase tracking-wider font-bold mb-3">Más solicitado</p>
              <h3 className="font-display font-extrabold text-3xl text-white mb-1">desde 460 &euro;/m&sup2;</h3>
              <p className="font-body text-white/85 text-sm mb-6">Reforma integral piso costero</p>
              <ul className="flex flex-col gap-3 text-white text-sm font-body">
                <li className="flex gap-2"><span>&bull;</span>Cambio de distribución</li>
                <li className="flex gap-2"><span>&bull;</span>Cocinas y baños llave en mano</li>
                <li className="flex gap-2"><span>&bull;</span>Carpintería con rotura térmica</li>
                <li className="flex gap-2"><span>&bull;</span>Asesoramiento en licencia turística</li>
                <li className="flex gap-2"><span>&bull;</span>Acabados de calidad costera</li>
              </ul>
            </div>

            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-colors">
              <p className="font-body text-accent text-xs uppercase tracking-wider font-bold mb-3">Premium</p>
              <h3 className="font-display font-extrabold text-3xl text-white mb-1">desde 560 &euro;/m&sup2;</h3>
              <p className="font-body text-white/45 text-sm mb-6">Casas pairales y chalets</p>
              <ul className="flex flex-col gap-3 text-white/65 text-sm font-body">
                <li className="flex gap-2"><span className="text-accent">&bull;</span>Restauración de elementos originales</li>
                <li className="flex gap-2"><span className="text-accent">&bull;</span>Acabados de gama alta</li>
                <li className="flex gap-2"><span className="text-accent">&bull;</span>Eficiencia energética A</li>
                <li className="flex gap-2"><span className="text-accent">&bull;</span>Diseño y seguimiento de proyecto</li>
              </ul>
            </div>
          </div>

          <p className="text-center font-body text-white/40 text-xs uppercase tracking-wider mt-10">
            Cifras orientativas. Te visitamos sin compromiso.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-beige px-5 pt-12 pb-12">
        <div className="mx-auto max-w-[1400px] rounded-[10px] overflow-hidden relative">
          <Image
            src="/images/obra-en-marcha-vilaseca.webp"
            alt="Obra de reforma en marcha en una vivienda de Vila-seca"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="relative z-10 px-8 py-20 md:px-8">
            <div className="max-w-[684px] bg-accent rounded-[10px] px-8 py-12 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-body font-bold text-lg uppercase text-white">
                  Empieza por la visita técnica
                </p>
                <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] text-white leading-[1.1]">
                  Solicita presupuesto para tu reforma
                </h2>
                <p className="font-body text-white/85 text-base md:text-lg">
                  ¿Hablamos de tu reforma en Vila-seca?
                </p>
                <p className="text-white/90 text-[17px] leading-relaxed">
                  Cuéntanos qué inmueble tienes y qué quieres conseguir con él: estrenarlo en familia, alquilarlo en plataformas o las dos. En 24-48 horas tienes una valoración detallada en tu correo.
                </p>
                <div className="flex flex-col gap-2 text-beige text-sm mt-2">
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Estudio detallado en 24-48h</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    <span>Operarios en plantilla, no subcontratas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Cobertura desde Vila-seca al Cap Salou</span>
                  </div>
                </div>
              </div>

              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
