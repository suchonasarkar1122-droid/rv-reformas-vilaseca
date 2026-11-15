import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "Humedad y condensación en invierno en Vila-seca y La Pineda" },
  description:
    "Por qué aparecen condensación y moho en pisos de Vila-seca y La Pineda en invierno, qué hacer ahora y qué reformar antes de la primavera.",
  alternates: { canonical: "/blog/humedad-condensacion-invierno-vilaseca-la-pineda" },
  openGraph: {
    title: "Humedad y condensación en invierno en Vila-seca y La Pineda",
    description: "Ventilación, puentes térmicos, baños sin ventana y salitre: cómo evitar la humedad en tu piso de costa durante el invierno.",
    url: "/blog/humedad-condensacion-invierno-vilaseca-la-pineda",
    type: "article",
    images: ["/images/blog/humedad-condensacion-invierno-vilaseca-la-pineda.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Humedad y condensación en invierno en pisos de Vila-seca y La Pineda",
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  author: { "@type": "Organization", name: "RV Reformas Vila-seca" },
  publisher: { "@id": "https://reformasvilaseca.es/#business" },
  image: "https://reformasvilaseca.es/images/blog/humedad-condensacion-invierno-vilaseca-la-pineda.webp",
};

export default function PostHumedadInviernoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Humedad y condensación en invierno", url: "/blog/humedad-condensacion-invierno-vilaseca-la-pineda" },
        ]}
      />

      <article className="bg-beige">
        <header className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
          <Image src="/images/blog/humedad-condensacion-invierno-vilaseca-la-pineda.webp" alt="Humedad y condensación en invierno" title="Humedad en pisos de Vila-seca y La Pineda" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-5 pb-16">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-5">Mantenimiento</span>
            <h1 className="font-display font-extrabold text-[34px] md:text-[52px] lg:text-[60px] text-white leading-[1.05] max-w-[1000px]">Humedad y condensación en invierno: cómo proteger tu piso en Vila-seca y La Pineda</h1>
            <p className="font-body text-white/70 text-sm uppercase tracking-wider mt-4">15 noviembre 2026 &middot; 9 min de lectura</p>
          </div>
        </header>

        <div className="mx-auto max-w-[800px] px-5 py-16 md:py-24 flex flex-col gap-7">
          <p className="font-body text-subtitle text-lg leading-relaxed">
            Con las primeras noches frescas de noviembre llegan también las consultas de siempre: cristales que amanecen empañados, una mancha negra que crece en la esquina del dormitorio, olor a cerrado al abrir el apartamento después de semanas sin nadie. En Vila-seca y, sobre todo, en La Pineda, la combinación de aire marino cargado de humedad, edificios de los años 70-80 con poco aislamiento y pisos que se quedan cerrados todo el invierno hace que la condensación sea uno de los problemas más habituales que vemos en las visitas. En esta guía explicamos de dónde viene, qué puedes hacer tú mismo esta temporada y qué conviene resolver con una reforma antes de la primavera.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Condensación, filtración o capilaridad: no es lo mismo</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Antes de pintar con pintura antimoho conviene saber qué tipo de humedad tienes, porque cada una se soluciona de forma distinta. La <strong className="text-dark">condensación</strong> aparece cuando el vapor de agua del interior (ducha, cocina, respiración, ropa tendida dentro) toca una superficie fría y se convierte en gotas. Deja manchas negras de moho en esquinas, detrás de los armarios, en el techo del baño y alrededor de las ventanas, y empeora en los días de más frío.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            La <strong className="text-dark">filtración</strong> entra desde fuera: una junta de ventana deteriorada, una terraza superior mal impermeabilizada, una fisura en fachada o una bajante comunitaria que pierde. Suele dar manchas con cerco amarillento que aumentan después de llover. La <strong className="text-dark">capilaridad</strong> sube desde el terreno por los muros y es típica de plantas bajas y casas antiguas del núcleo de Vila-seca; se reconoce por el zócalo húmedo, la pintura abombada y las sales blancas en la parte baja de la pared. Un mismo piso puede tener varias a la vez, y el diagnóstico es el primer paso de cualquier presupuesto serio.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Por qué La Pineda sufre más en invierno</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            La mayoría de apartamentos de La Pineda se construyeron entre los años 70 y 90 pensando en el verano: muros de ladrillo sin cámara aislada o con cámara vacía, carpintería de aluminio sin rotura de puente térmico, cajas de persiana sin aislar y baños interiores con una simple rejilla. Mientras el piso está ocupado en julio y agosto, con ventanas abiertas y temperaturas altas, todo funciona. El problema llega en invierno.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Un apartamento cerrado de noviembre a marzo no se ventila ni se calienta. La humedad del ambiente marino entra por las rendijas, se acumula y se condensa en las paredes más frías, normalmente las que dan a norte o a la terraza. A eso se suma el salitre: las partículas de sal que trae la brisa se depositan en carpinterías, barandillas y fachadas, atraen agua y aceleran la corrosión de cualquier elemento metálico. Muchos propietarios que vuelven en Semana Santa se encuentran colchones con olor, armarios con moho y persianas que no bajan. En el centro de Vila-seca, en las calles del ensanche, el clima es algo menos agresivo que en primera línea, pero la vivienda habitual de los años 60-80 tiene los mismos puentes térmicos y el mismo tipo de ventana.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Los puntos fríos donde nace el moho</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            La condensación siempre aparece primero en los mismos sitios, los llamados puentes térmicos. Revisa estos puntos de tu piso:
          </p>
          <ul className="flex flex-col gap-3 text-base text-subtitle font-body pl-5 list-disc marker:text-accent">
            <li><strong className="text-dark">Frentes de forjado y pilares en fachada</strong>: el hormigón transmite el frío mucho más que el ladrillo, y en el techo junto a la fachada aparece una franja oscura característica.</li>
            <li><strong className="text-dark">Cajas de persiana</strong>: en la mayoría de pisos antiguos son una caja de madera o tablero sin aislamiento por la que entra aire frío directamente.</li>
            <li><strong className="text-dark">Ventanas de aluminio sin rotura térmica</strong>: el marco se enfría tanto que gotea por dentro y el agua acaba pudriendo el alféizar y manchando la pared de debajo.</li>
            <li><strong className="text-dark">Esquinas de dormitorios exteriores</strong>, sobre todo detrás de armarios empotrados o cabeceros pegados a la pared, donde el aire no circula.</li>
            <li><strong className="text-dark">Baños sin ventana</strong>, muy frecuentes en apartamentos de La Pineda, donde el vapor de la ducha no tiene salida si la extracción no funciona.</li>
          </ul>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Qué puedes hacer este invierno sin obras</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Hay medidas que no requieren reforma y reducen mucho el problema mientras decides qué hacer. Si vives en el piso, ventila diez minutos cada mañana con corriente cruzada, aunque haga frío: renovar el aire húmedo cuesta menos energía que calentar aire saturado. Evita tender la ropa dentro, usa la campana extractora al cocinar y deja la puerta del baño cerrada mientras te duchas, con el extractor encendido un rato después. Separa unos centímetros los armarios y cabeceros de las paredes exteriores.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Si es una segunda residencia o un piso turístico que queda cerrado, deja las puertas interiores y de los armarios entreabiertas, retira textiles y colchones de las paredes frías y, si es posible, pide a alguien de confianza que lo abra y ventile cada pocas semanas. Un deshumidificador con desagüe directo o programado ayuda en pisos muy expuestos. Lo que no recomendamos es tapar el moho con pintura sin más: vuelve a salir en la siguiente temporada y esconde el origen.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Qué conviene resolver con una reforma</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Cuando la condensación vuelve año tras año, la solución está en la envolvente y en la ventilación, y lo eficaz es abordarlo dentro de una reforma planificada. Las actuaciones que más resultado dan en pisos de Vila-seca y La Pineda son:
          </p>
          <ol className="flex flex-col gap-3 text-base text-subtitle font-body pl-5 list-decimal marker:text-accent">
            <li><strong className="text-dark">Cambio de ventanas</strong> por carpintería con rotura de puente térmico, vidrio doble bajo emisivo y cajas de persiana aisladas. En primera línea, con herrajes y lacados preparados para ambiente marino.</li>
            <li><strong className="text-dark">Ventilación de baños interiores</strong> con extractor de funcionamiento continuo o temporizado y conducto bien resuelto hasta la salida comunitaria. Es una de las mejoras más baratas y con más efecto; la planteamos siempre en nuestras <Link href="/servicios/reformas-banos" className="text-accent underline">reformas de baños</Link>.</li>
            <li><strong className="text-dark">Trasdosado aislado por el interior</strong> en los muros de fachada más fríos, con placa de yeso y aislante, cuando la comunidad no va a aislar el edificio por fuera. Se pierde muy poco espacio y desaparecen las paredes frías.</li>
            <li><strong className="text-dark">Climatización con bomba de calor</strong> que permita mantener una temperatura mínima estable, programable a distancia en segundas residencias.</li>
            <li><strong className="text-dark">Revisión de bajantes, terrazas e impermeabilizaciones</strong> si además hay filtraciones, en coordinación con la comunidad cuando afectan a elementos comunes.</li>
          </ol>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Todo esto encaja de forma natural cuando ya vas a reformar: si estás pensando en renovar el piso entero, en nuestra página de <Link href="/servicios/reformas-pisos" className="text-accent underline">reformas de pisos</Link> explicamos cómo lo organizamos, y si el apartamento necesita instalaciones, distribución y envolvente a la vez, lo habitual es plantear una <Link href="/servicios/reformas-integrales" className="text-accent underline">reforma integral</Link> para no abrir dos veces la misma pared.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Permisos y comunidad de vecinos</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Cambiar ventanas manteniendo el hueco, el color y el despiece de la fachada, colocar extractores o trasdosar por dentro son obras interiores que en el Ajuntament de Vila-seca se tramitan normalmente mediante comunicación previa. Si se modifican huecos, se cambia el aspecto de la fachada o se actúa sobre la cubierta, puede hacer falta licencia de obra mayor con proyecto técnico. En cualquier caso, la comunidad de propietarios tiene la última palabra sobre el aspecto exterior: muchas comunidades de La Pineda fijan un color y un modelo de carpintería, así que conviene consultarlo con el administrador antes de pedir presupuesto de ventanas.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Calendario: diagnosticar en invierno, reformar antes del verano</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            El invierno es la mejor época para detectar el problema, porque las manchas y la condensación están a la vista. Nuestra recomendación es pedir la visita técnica entre noviembre y enero, cuando podemos ver dónde aparece el moho y medir qué paredes están frías. Con el diagnóstico hecho, el presupuesto cerrado y los permisos en marcha, la obra puede ejecutarse entre febrero y mayo, que coincide con la época de menos ocupación en La Pineda y con menos restricciones de horario en las comunidades. Así el piso llega al verano reformado y, sobre todo, preparado para el siguiente invierno.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            Si tienes un apartamento en La Pineda o una vivienda en Vila-seca con humedades, también puede interesarte saber que algunas de estas mejoras (ventanas, aislamiento, bomba de calor) pueden acogerse a ayudas de eficiencia energética; lo resumimos en nuestra guía de <Link href="/blog/ayudas-rehabilitacion-energetica-tarragones" className="text-accent underline">ayudas a la rehabilitación energética</Link>.
          </p>

          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark mt-4">Preguntas rápidas</h2>
          <p className="font-body text-subtitle text-base leading-relaxed">
            <strong className="text-dark">¿La pintura antihumedad soluciona la condensación?</strong> Ayuda a que el moho tarde más en aparecer, pero no elimina la causa. Si la pared sigue fría y el aire húmedo, la mancha vuelve.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            <strong className="text-dark">¿Basta con cambiar las ventanas?</strong> Mejora mucho el confort, pero una ventana nueva y estanca sin ventilación adecuada puede incluso aumentar la condensación en las paredes. Ventanas y ventilación deben ir juntas.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed">
            <strong className="text-dark">¿Cómo sé si la mancha es de condensación o de una filtración del vecino?</strong> Si aparece en esquinas y techos junto a fachada y empeora con el frío, suele ser condensación. Si tiene cerco, crece tras la lluvia o está bajo un baño o terraza superior, probablemente es filtración. En la visita lo comprobamos con medidor de humedad.
          </p>

          <p className="font-body text-subtitle text-base leading-relaxed mt-4">
            Si quieres que revisemos tu piso este invierno, llámanos al <strong className="text-dark">877 278 105</strong> o pide visita técnica desde la <Link href="/contacto" className="text-accent underline">página de contacto</Link>. Te diremos qué tipo de humedad tienes y qué solución tiene sentido en tu caso, antes de gastar en arreglos que no duran.
          </p>
        </div>

        <section className="bg-accent px-5 py-16 md:py-20">
          <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-4">
            <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-white leading-[1.1]">Solicita una visita para revisar humedades</h2>
            <p className="font-body text-white/90 text-lg max-w-[520px]">Diagnosticamos el origen de la humedad en tu piso de Vila-seca o La Pineda y te proponemos una solución por escrito, sin compromiso.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-7 py-3.5 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors mt-2">
              Pide tu visita
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
