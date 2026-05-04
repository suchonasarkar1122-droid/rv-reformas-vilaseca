import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies · RV Reformas Vila-seca",
  description: "Política de cookies de RV Reformas Vila-seca: tipos de cookies, finalidades y cómo gestionarlas desde tu navegador.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <section className="bg-dark px-5 pt-32 pb-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-white leading-[1.05]">
            Política de Cookies
          </h1>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] font-body text-dark space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              1. ¿Qué son las cookies?
            </h2>
            <p className="text-subtitle leading-relaxed">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario (ordenador, tablet o smartphone) cuando los visita. Sirven para que el sitio web recuerde información sobre la visita, como las preferencias de idioma, datos de sesión u otros ajustes. Esto facilita la siguiente visita y hace que el sitio web sea más útil para el usuario.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              2. Tipos de cookies que utilizamos
            </h2>

            <div className="bg-white rounded-[16px] p-6 border border-dark/5 space-y-6 mt-4">
              <div>
                <h3 className="font-bold text-dark text-base uppercase mb-2">Cookies técnicas (necesarias)</h3>
                <p className="text-subtitle text-sm leading-relaxed">
                  Son imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegación y el uso de las funciones básicas como el acceso a áreas seguras. Sin estas cookies, el sitio web no puede funcionar correctamente. No requieren consentimiento del usuario.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-dark text-base uppercase mb-2">Cookies analíticas</h3>
                <p className="text-subtitle text-sm leading-relaxed">
                  Nos permiten medir y analizar el uso que hacen los usuarios de nuestro sitio web para mejorar los servicios. Recopilan información de forma anónima sobre el número de visitantes, las páginas más consultadas, el tiempo de permanencia, etc. Utilizamos Google Analytics con dirección IP anonimizada.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-dark text-base uppercase mb-2">Cookies de terceros</h3>
                <p className="text-subtitle text-sm leading-relaxed">
                  Nuestro sitio web puede incluir servicios de terceros como Google Maps (para mostrar nuestra ubicación) y WhatsApp (para facilitar el contacto directo). Estos servicios pueden instalar sus propias cookies, cuya gestión está fuera de nuestro control. Te recomendamos consultar las políticas de privacidad de estos terceros.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              3. Detalle de cookies utilizadas
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-4">
                <thead>
                  <tr className="bg-accent/10">
                    <th className="text-left p-3 font-bold text-dark uppercase text-xs">Cookie</th>
                    <th className="text-left p-3 font-bold text-dark uppercase text-xs">Tipo</th>
                    <th className="text-left p-3 font-bold text-dark uppercase text-xs">Duración</th>
                    <th className="text-left p-3 font-bold text-dark uppercase text-xs">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="text-subtitle">
                  <tr className="border-b border-dark/5">
                    <td className="p-3">_ga</td>
                    <td className="p-3">Analítica</td>
                    <td className="p-3">2 años</td>
                    <td className="p-3">Distinguir usuarios en Google Analytics</td>
                  </tr>
                  <tr className="border-b border-dark/5">
                    <td className="p-3">_ga_*</td>
                    <td className="p-3">Analítica</td>
                    <td className="p-3">2 años</td>
                    <td className="p-3">Mantener el estado de la sesión</td>
                  </tr>
                  <tr className="border-b border-dark/5">
                    <td className="p-3">cookie_consent</td>
                    <td className="p-3">Técnica</td>
                    <td className="p-3">1 año</td>
                    <td className="p-3">Almacenar las preferencias de cookies del usuario</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              4. ¿Cómo gestionar las cookies?
            </h2>
            <p className="text-subtitle leading-relaxed">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo a través de la configuración de tu navegador. A continuación, te indicamos los enlaces a las instrucciones de los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle mt-3">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer" className="text-accent underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent underline">Microsoft Edge</a></li>
            </ul>
            <p className="text-subtitle leading-relaxed mt-3">
              Ten en cuenta que si desactivas o rechazas las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles o no funcionen correctamente.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              5. Actualización de la política
            </h2>
            <p className="text-subtitle leading-relaxed">
              RV Reformas Vila-seca puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Se aconseja a los usuarios que la visiten periódicamente.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              6. Contacto
            </h2>
            <p className="text-subtitle leading-relaxed">
              Si tienes dudas sobre esta política, escríbenos a <a href="mailto:info@reformasvilaseca.es" className="text-accent underline">info@reformasvilaseca.es</a> o llámanos al 877 278 105.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
