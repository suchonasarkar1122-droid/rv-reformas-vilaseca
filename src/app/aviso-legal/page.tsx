import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal · RV Reformas Vila-seca",
  description: "Aviso legal de RV Reformas Vila-seca: titular del sitio, condiciones de uso, propiedad intelectual y jurisdicción aplicable.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <>
      <section className="bg-dark px-5 pt-32 pb-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-white leading-[1.05]">
            Aviso Legal
          </h1>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] font-body text-dark space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              1. Datos identificativos del titular
            </h2>
            <p className="text-subtitle leading-relaxed">
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-subtitle mt-3">
              <li><strong>Denominación:</strong> RV Reformas Vila-seca</li>
              <li><strong>Domicilio:</strong> Rambla de Catalunya, 6, 43480 Vila-seca, Tarragona</li>
              <li><strong>Teléfono:</strong> 877 278 166</li>
              <li><strong>Email:</strong> info@reformasvilaseca.es</li>
              <li><strong>Sitio web:</strong> reformasvilaseca.es</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              2. Objeto del sitio web
            </h2>
            <p className="text-subtitle leading-relaxed">
              Este sitio web tiene como finalidad presentar los servicios de reformas integrales, reformas de cocinas, baños, pisos turísticos, segundas residencias y locales comerciales que ofrece RV Reformas Vila-seca en Vila-seca y municipios cercanos del Tarragonès.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              3. Condiciones de uso
            </h2>
            <p className="text-subtitle leading-relaxed">
              Acceder a este sitio implica la condición de usuario y la aceptación de las presentes condiciones. El usuario se compromete a usar los contenidos de forma adecuada, sin emplearlos para actividades ilícitas o contrarias a la buena fe.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              4. Propiedad intelectual e industrial
            </h2>
            <p className="text-subtitle leading-relaxed">
              Los contenidos del sitio (textos, imágenes, diseño, logotipos, código) son propiedad de RV Reformas Vila-seca o están licenciados a su favor. Queda prohibida la reproducción o distribución total o parcial sin autorización por escrito.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              5. Exclusión de responsabilidad
            </h2>
            <p className="text-subtitle leading-relaxed">
              RV Reformas Vila-seca no se hace responsable de daños derivados de la falta de disponibilidad o continuidad del sitio web, ni del incumplimiento de expectativas que los usuarios pudieran haberse formado. Nos reservamos el derecho de modificar el contenido sin previo aviso.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              6. Enlaces externos
            </h2>
            <p className="text-subtitle leading-relaxed">
              Los enlaces a sitios de terceros se ofrecen como información complementaria. RV Reformas Vila-seca no controla ni garantiza la disponibilidad o el contenido de dichos sitios y declina cualquier responsabilidad sobre los mismos.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              7. Legislación aplicable y fuero
            </h2>
            <p className="text-subtitle leading-relaxed">
              Para cualquier controversia derivada del uso de este sitio, será de aplicación la legislación española y serán competentes los Juzgados y Tribunales de Tarragona.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
