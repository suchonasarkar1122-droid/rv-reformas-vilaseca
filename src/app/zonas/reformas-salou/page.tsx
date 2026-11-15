import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Salou",
  description: "Reformamos apartamentos turísticos en Salou Centre, Cap Salou, Capellans y Platja de Llevant. Calendario al verano. Llave en mano. 877 278 105.",
  alternates: { canonical: "/zonas/reformas-salou" },
  openGraph: { title: "Reformas en Salou - RV Reformas", description: "Reformas de apartamentos turísticos en Salou con plazos pegados al verano y materiales que aguantan la salinidad.", url: "/zonas/reformas-salou" },
};

const services = [
  { title: "Apartamentos turísticos", desc: "Reforma exprés con mobiliario y fotografía para abrir antes de la temporada en Capellans o Cap Salou.", href: "/servicios/reformas-pisos" },
  { title: "Cocinas americanas para alquiler", desc: "Cocinas robustas, fáciles de limpiar y resistentes a la salinidad para los apartamentos a primera línea.", href: "/servicios/reformas-cocinas" },
  { title: "Baños con plato de obra", desc: "Cambio de bañera por ducha y mampara antical en pisos heredados de los 70-80 de Salou.", href: "/servicios/reformas-banos" },
  { title: "Reformas integrales", desc: "Apartamentos completos a punto para la temporada. Asesoramiento en licencia turística incluido.", href: "/servicios/reformas-integrales" },
];

const faqs = [
  { q: "¿Reformáis pisos turísticos en Capellans y Cap Salou?", a: "Es nuestra zona principal junto con La Pineda. Los edificios de Capellans son de los 70-80, con instalaciones obsoletas y mucho potencial de revalorización al reformar. Cap Salou tiene apartamentos más recientes y exigentes con acabados. Conocemos las dos al detalle." },
  { q: "¿Hay diferencias con Vila-seca para tramitar la licencia turística?", a: "El Ayuntamiento de Salou tiene su propio reglamento de viviendas de uso turístico con limitaciones por zonas (centros saturados, controles más estrictos en primera línea). Trabajamos con gestores locales que saben qué fincas tienen cupo abierto y cuáles no. Lo aclaramos en la visita." },
  { q: "¿Cuánto tarda una reforma de apartamento en Salou Centre?", a: "Para un piso de 55-70 m² con cocina americana y un baño nuevo, 6-8 semanas. Si añadimos cambio de distribución y dos baños, 9-12 semanas. Conviene encargar antes de enero para abrir en julio." },
  { q: "¿Trabajáis en Platja de Llevant?", a: "Sí, es zona habitual. Edificios de los 80 frente al paseo, mucha demanda de alquiler turístico en julio-agosto. La proximidad de Vila-seca a Salou (8 minutos) nos permite arrancar obras allí sin sobrecoste de desplazamiento." },
  { q: "¿Se puede hacer obra en Salou en julio y agosto?", a: "Depende de la comunidad. Muchas comunidades de Capellans y de primera línea restringen obras ruidosas en temporada alta para no molestar a los huéspedes. Por eso recomendamos programar demoliciones y trabajos con martillo entre octubre y mayo, y dejar para verano solo remates silenciosos si es imprescindible." },
  { q: "¿Qué pasa con las bajantes y tuberías antiguas del edificio?", a: "En bloques de los 70 y 80 es habitual encontrar bajantes comunitarias de fibrocemento o hierro. Lo que va dentro de tu vivienda lo renovamos nosotros; si la bajante general está mal, lo comunicamos al administrador de la finca para que la comunidad decida cómo actuar, porque es un elemento común." },
];

export default function ZonaSalouPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en Salou", url: "/zonas/reformas-salou" },
        ]}
      />

      <HeroService
        title="Reformas en Salou: apartamentos pegados a temporada"
        subtitle="Capellans, Cap Salou, Platja de Llevant y Salou Centre. Reforma rápida con licencia turística, mobiliario y fotografía profesional para abrir cuanto antes."
        image="/images/piso-reformado-vilaseca.webp"
        imageAlt="Reforma de apartamento turístico en Salou"
        h1Keyword="Reformas en Salou"
        badge="Zona costera"
        showCTA
        trustItems={["Preparado para alquiler", "Antes del verano", "Materiales costeros"]}
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Salou en una línea</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.1]">
                Reformas en Salou: zona, barrios y demanda
              </h2>
              <p className="font-body text-subtitle text-base leading-relaxed font-medium">
                La capital turística de la costa Daurada.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                A 8 minutos en coche de nuestra oficina de Vila-seca, Salou concentra el grueso de la demanda turística de la zona junto con La Pineda. Su población empadronada ronda los 30.000 habitantes pero pasa de los 200.000 en agosto. Esa estacionalidad tan fuerte marca el ritmo de las obras: cada año hay un pico de encargos entre noviembre y febrero para llegar al verano.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Los barrios donde más reformamos son Capellans (apartamentos de los 80 con buena rentabilidad turística por proximidad a la playa), Cap de Salou (chalets y dúplex de mayor superficie), Platja de Llevant (edificios frente al paseo) y Salou Centre (mezcla residencial y turística). Cada uno tiene reglas distintas de comunidades y licencias.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Distancia desde Vila-seca: <strong className="text-dark">7 km / 8 minutos</strong>. Sin sobrecoste por desplazamiento.
              </p>
              <CTAButtons />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <Link key={s.title} href={s.href} className="bg-white border border-dark/5 rounded-[14px] p-6 hover:border-accent transition-colors">
                  <h3 className="font-display font-bold text-base text-dark mb-2">{s.title}</h3>
                  <p className="font-body text-subtitle text-sm leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px] flex flex-col gap-5">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Obra en Salou, paso a paso</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark leading-[1.1]">Cómo es la vivienda que reformamos en Salou</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            El parque de Salou se construyó casi entero en dos oleadas. La primera, entre finales de los 60 y los 80, dejó los bloques de Capellans, Platja de Llevant y buena parte del centro: estructuras de hormigón con fachadas de ladrillo visto, carpinterías de aluminio sin rotura de puente térmico, bajantes de fibrocemento y cuadros eléctricos que no aguantan una placa de inducción y un aire acondicionado a la vez. La segunda, de los 90 en adelante, se extendió hacia Cap Salou y Platja de Ponent con residenciales con piscina comunitaria, dúplex y alguna casa aislada en ladera.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            En los bloques antiguos casi siempre toca renovar fontanería y electricidad completas, porque tapar instalaciones de hace cuarenta años con azulejo nuevo es pagar dos veces. En los residenciales más recientes la obra suele centrarse en cocina, baños y suelos, y el reto es otro: unos estatutos de comunidad más estrictos con horarios, ascensores protegidos y acopio de material.
          </p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark leading-[1.1]">Salitre, humedad y alquiler: lo que condiciona los materiales</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            A menos de 300 metros del mar el aire salino oxida herrajes, tornillería y perfiles en pocas temporadas. Por eso en Salou trabajamos con grifería de buena calidad, mecanismos que no se piquen y carpintería de aluminio lacado o PVC con herrajes inoxidables. En los apartamentos que se cierran de octubre a abril aparece además condensación: ventilar con microventilación en las ventanas y elegir pinturas transpirables evita los olores a cerrado que tanto penalizan en las reseñas. Si el piso se dedica al alquiler, los acabados se escogen pensando en limpieza rápida entre estancias; lo explicamos con detalle en nuestra página de <Link href="/servicios/reformas-pisos" className="text-accent font-bold underline underline-offset-2">reformas de pisos</Link>.
          </p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark leading-[1.1]">Permisos en el Ajuntament de Salou</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Una reforma interior sin tocar estructura ni fachada se tramita normalmente con comunicación previa de obras, presentada antes de empezar. Si se modifica la distribución afectando a elementos estructurales, se cambia la fachada o se cierra una terraza, el Ajuntament pide licencia de obra mayor con proyecto técnico, y los plazos se alargan. A esto se suma la ocupación de vía pública si hace falta contenedor en la calle, algo delicado en pleno verano en las zonas de paseo. En la visita revisamos qué trámite corresponde a tu caso y lo dejamos preparado.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Muchos de nuestros clientes de Salou tienen también vivienda en La Pineda; si es tu caso, mira cómo trabajamos las <Link href="/" className="text-accent font-bold underline underline-offset-2">reformas en Vila-seca y La Pineda</Link> para coordinar ambas obras con el mismo equipo.
          </p>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas en Salou</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">Dudas frecuentes en Salou.</p>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{f.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]">
                  <p className="font-body text-subtitle text-sm leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Solicita presupuesto para tu reforma en Salou</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">¿Tienes apartamento en Salou pendiente de reformar? Visita técnica gratuita. Si llegas a tiempo de la temporada de verano, te lo decimos. Si no, te orientamos para la siguiente sin perder dinero.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors">
              Pídenos visita técnica
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
