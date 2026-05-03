import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import dynamic from "next/dynamic";

const CTAForm = dynamic(() => import("@/components/CTAForm"));

export const metadata: Metadata = {
  title: "Sobre Nosotros | RV Reformas Vila-seca",
  description:
    "Equipo local de reformas con base en Vila-seca. Plantilla propia, especialistas en pisos turísticos, segundas residencias y casas pairales del Tarragonès.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros | RV Reformas Vila-seca",
    description: "El equipo, los valores y el método de trabajo detrás de RV Reformas Vila-seca.",
    url: "/sobre-nosotros",
    images: ["/images/equipo-reformas-vilaseca.webp"],
  },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Sobre Nosotros", url: "/sobre-nosotros" },
        ]}
      />

      <HeroService
        title="Reformamos en la costa Daurada como vecinos, no como contratistas"
        subtitle="Llevamos años trabajando en Vila-seca, La Pineda y los municipios del Tarragonès. La playa, el Port d'Aventura y la salinidad nos han enseñado a reformar de otra manera."
        image="/images/equipo-reformas-vilaseca.webp"
        imageAlt="Equipo de RV Reformas Vila-seca durante una visita técnica"
        h1Keyword="Sobre RV Reformas Vila-seca"
        badge="Equipo local"
        showCTA={false}
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-5">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">El origen</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1]">
                Nuestra historia: empresa de reformas en Vila-seca
              </h2>
              <p className="font-body text-subtitle text-base leading-relaxed font-medium">
                Nacimos haciendo cocinas en pisos de La Pineda. Hoy reformamos viviendas enteras.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                RV Reformas arrancó como un pequeño taller de carpintería y cocinas a finales de los 2010, dando servicio a vecinos del Tarragonès que querían modernizar su segunda residencia para alquilar en verano. Las primeras obras fueron en edificios de los años 70-80 frente al paseo de La Pineda: pisos heredados con instalaciones obsoletas que reactivaban como pisos turísticos para sacar rentabilidad.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Con el auge del alquiler turístico en la Costa Daurada y la consolidación del Port d&apos;Aventura como motor económico de la zona, fuimos ampliando equipo y servicios. Empezamos a hacer reformas integrales completas, después casas pairales del centro histórico de Vila-seca, después chalets de Els Boscos y locales de hostelería en el paseo. Hoy somos plantilla estable de albañiles, fontaneros, electricistas y carpinteros, todos con base en el Tarragonès.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden">
              <Image src="/images/casa-reformada-vilaseca.webp" alt="Salón reformado en vivienda de Vila-seca" title="Reforma residencial en Vila-seca" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Lo que defendemos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Por qué elegir RV Reformas Vila-seca</h2>
            <p className="font-body text-white/65 text-base md:text-lg max-w-[640px] mx-auto mt-4">Cuatro convicciones que no negociamos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Verdad de calendario", text: "Si una obra no llega a tu fecha de apertura para la temporada, te lo decimos al primer día y no aceptamos el encargo. Mejor perder un cliente que generar un destrozo de planificación a alguien que confía en ti." },
              { title: "Materiales que duran en la costa", text: "El gasto extra que supone una buena carpintería con rotura térmica o una grifería antical se amortiza con creces. Una reforma costera debe pensarse para durar muchos años frente a salinidad y humedad, no para apañar. Eso lo decidimos contigo desde el primer presupuesto." },
              { title: "Plantilla propia", text: "Subcontratar es cómodo para la empresa pero malo para el cliente. Cuando hay un problema, el subcontratista del subcontratista no responde. Aquí responde quien firma el contrato y le pone la cara: nosotros." },
              { title: "Postventa cercana", text: "Una reforma no acaba el día de la entrega. Si surge algún detalle puntual cuando empiezas a usar el inmueble, seguimos disponibles para resolverlo. La palabra dada se cumple." },
            ].map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7">
                <h3 className="font-display font-bold text-xl text-white mb-3">{v.title}</h3>
                <p className="font-body text-white/65 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { num: "Tarragonès", label: "Obras entregadas en municipios cercanos" },
              { num: "Costa Daurada", label: "Años trabajando en la zona" },
              { num: "Boca a boca", label: "Clientes que repiten o nos recomiendan" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-[16px] p-8 shadow-sm">
                <p className="font-display font-extrabold text-3xl md:text-4xl text-accent mb-2">{s.num}</p>
                <p className="font-body text-subtitle text-sm uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Vila-seca, nuestra base</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1]">
                Reformas en Vila-seca, La Pineda y Tarragonès
              </h2>
              <p className="font-body text-subtitle text-base leading-relaxed font-medium">
                Aquí vivimos y aquí trabajamos.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Con oficina en Rambla de Catalunya 6, en el centro de Vila-seca, conocemos cada calle del municipio: el casco antiguo con sus casas pairales y baldosa hidráulica, El Pla con bloques de los 70 que se reactivan como pisos turísticos, La Pineda con apartamentos a primera línea de mar y Els Boscos con chalets unifamiliares de mayor superficie.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Vila-seca tiene unos 22.500 habitantes pero multiplica por cinco su población durante julio y agosto. La proximidad a PortAventura, la salida directa a la AP-7 y la estación de tren convierten al municipio en uno de los polos turísticos más activos de la costa Daurada. Hemos visto crecer el número de licencias turísticas año tras año y nuestra propuesta se ha adaptado a esa realidad.
              </p>
              <CTAButtons />
            </div>
            <div className="relative aspect-square rounded-[20px] overflow-hidden">
              <Image src="/images/salon-luminoso-costa-vilaseca.webp" alt="Salón luminoso en piso reformado de Vila-seca" title="Vila-seca y RV Reformas" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05] mb-4">Solicita presupuesto para tu reforma</h2>
            <p className="font-body text-white/90 text-lg">¿Hablamos de tu reforma? Cuéntanos qué inmueble tienes y para qué lo quieres usar. Respondemos antes de 24 horas con primera orientación.</p>
          </div>
          <CTAForm />
        </div>
      </section>
    </>
  );
}
