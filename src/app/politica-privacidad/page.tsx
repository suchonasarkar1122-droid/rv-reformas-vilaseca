import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · RV Reformas Vila-seca",
  description: "Política de privacidad de RV Reformas Vila-seca conforme al RGPD y la LOPDGDD: tratamiento de datos, finalidades, derechos y conservación.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <section className="bg-dark px-5 pt-32 pb-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-white leading-[1.05]">
            Política de Privacidad
          </h1>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] font-body text-dark space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              1. Responsable del tratamiento
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-subtitle">
              <li><strong>Responsable:</strong> RV Reformas Vila-seca</li>
              <li><strong>Dirección:</strong> Rambla de Catalunya, 6, 43480 Vila-seca, Tarragona</li>
              <li><strong>Teléfono:</strong> 877 278 105</li>
              <li><strong>Email:</strong> info@reformasvilaseca.es</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              2. Finalidad del tratamiento
            </h2>
            <p className="text-subtitle leading-relaxed">
              Tratamos los datos que el usuario aporta a través de los formularios de la web con estos fines:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle mt-3">
              <li>Atender solicitudes de presupuesto, visita técnica o consulta general.</li>
              <li>Enviar comunicaciones comerciales sobre nuestros servicios cuando exista consentimiento expreso del usuario.</li>
              <li>Mantener la relación contractual con clientes que nos contraten obras: planificación, facturación y postventa.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              3. Legitimación
            </h2>
            <p className="text-subtitle leading-relaxed">
              Las bases legales para tratar los datos son:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle mt-3">
              <li><strong>Consentimiento expreso del interesado</strong> al enviar el formulario.</li>
              <li><strong>Ejecución de un contrato</strong> cuando el usuario contrata una obra.</li>
              <li><strong>Interés legítimo</strong> para gestión administrativa y contable.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              4. Destinatarios
            </h2>
            <p className="text-subtitle leading-relaxed">
              No cedemos datos a terceros salvo obligación legal (Hacienda, Seguridad Social u organismos competentes). No realizamos transferencias internacionales.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              5. Plazo de conservación
            </h2>
            <p className="text-subtitle leading-relaxed">
              Conservamos los datos mientras se mantenga la relación comercial o durante el tiempo necesario para atender obligaciones legales. Para usuarios que solicitan presupuesto y no llegan a contratar, hasta 12 meses desde la última comunicación.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              6. Derechos del interesado
            </h2>
            <p className="text-subtitle leading-relaxed">
              Conforme al RGPD y la LOPDGDD, el usuario puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad. Para hacerlo, basta con escribir a <strong>info@reformasvilaseca.es</strong> aportando copia del documento de identidad.
            </p>
            <p className="text-subtitle leading-relaxed mt-3">
              Si considera que sus derechos no han sido atendidos correctamente, puede reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent underline">www.aepd.es</a>).
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              7. Medidas de seguridad
            </h2>
            <p className="text-subtitle leading-relaxed">
              Aplicamos medidas técnicas y organizativas razonables para evitar pérdida, alteración o acceso no autorizado a los datos, en función del estado de la técnica y los riesgos del tratamiento.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              8. Modificaciones
            </h2>
            <p className="text-subtitle leading-relaxed">
              Esta política puede actualizarse para ajustarse a cambios legislativos. Cualquier modificación se publicará en esta misma página con antelación razonable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
