import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog · Reformas en la costa Daurada | RV Reformas Vila-seca",
  description:
    "Guías sobre reformas para alquiler turístico, tendencias en pisos costeros y ayudas energéticas en el Tarragonès. Contenido pensado para propietarios e inversores de Vila-seca.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - RV Reformas Vila-seca",
    description: "Reflexiones, datos y consejos para reformar pisos turísticos, segundas residencias y vivienda en Vila-seca, La Pineda y la costa Daurada.",
    url: "/blog",
  },
};

const posts = [
  {
    slug: "cuanto-cuesta-reformar-piso-turistico-vilaseca",
    title: "¿Cuánto cuesta reformar un piso turístico en Vila-seca y La Pineda?",
    excerpt:
      "Análisis con cifras reales: rangos por m², desglose por estancia, ROI esperado en alquiler vacacional y cuándo conviene encargar para llegar al verano.",
    image: "/images/habitacion-infantil-antes-despues.webp",
    imageAlt: "Reforma de piso turístico en La Pineda - presupuesto 2026",
    date: "20 abril 2026",
    category: "Guía de precios",
  },
  {
    slug: "tendencias-pisos-costa-daurada-2026",
    title: "Tendencias 2026 para pisos de la costa Daurada: lo que pide el huésped y lo que aguanta el mar",
    excerpt:
      "Materiales, colores y distribuciones que funcionan en pisos turísticos y segundas residencias frente al mar. Lo que está caducado y lo que viene.",
    image: "/images/rincon-lectura-butaca-tapizada.webp",
    imageAlt: "Tendencias en pisos costeros de la costa Daurada 2026",
    date: "10 abril 2026",
    category: "Tendencias",
  },
  {
    slug: "ayudas-rehabilitacion-energetica-tarragones",
    title: "Ayudas a la rehabilitación energética en el Tarragonès: Next Generation y subvenciones autonómicas",
    excerpt:
      "Subvenciones para mejorar eficiencia energética de tu vivienda en Vila-seca, Salou o Tarragona: requisitos, cuantías, plazos y cómo gestionarlo sin perder dinero.",
    image: "/images/estudio-muebles-madera-natural.webp",
    imageAlt: "Ayudas energéticas para vivienda en el Tarragonès",
    date: "1 abril 2026",
    category: "Ayudas y subvenciones",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="font-body font-bold text-xs uppercase tracking-[0.3em] text-accent mb-4">
            RV Reformas Vila-seca
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[60px] lg:text-[72px] text-white leading-[1]">
            Blog · Costa Daurada
          </h1>
          <p className="text-white/60 text-base md:text-lg mt-4 max-w-[560px] font-body">
            Guías y reflexiones sobre reformar pisos turísticos, segundas residencias y vivienda en Vila-seca y el Tarragonès.
          </p>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden border border-dark/5 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-subtitle text-xs font-body uppercase tracking-wider">
                    {post.date}
                  </span>
                  <h2 className="font-display font-bold text-dark text-lg leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-subtitle text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-2">
                    Leer artículo completo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
