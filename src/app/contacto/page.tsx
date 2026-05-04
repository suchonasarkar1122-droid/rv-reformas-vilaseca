import type { Metadata } from "next";
import dynamic from "next/dynamic";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const CTAForm = dynamic(() => import("@/components/CTAForm"));

export const metadata: Metadata = {
  title: "Contacto y valoración | RV Reformas Vila-seca",
  description:
    "Visita técnica gratuita en Vila-seca, La Pineda y municipios cercanos. Llama al 877 278 105 o escríbenos por WhatsApp y te respondemos antes de 24 horas.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto - RV Reformas Vila-seca",
    description: "Cuéntanos tu reforma. Visita técnica gratuita y valoración detallada en 24-48 horas en Vila-seca y todo el Tarragonès.",
    url: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Contacto", url: "/contacto" },
        ]}
      />

      <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="font-body font-bold text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Empezamos por aquí
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[60px] lg:text-[72px] text-white leading-[1]">
            Contacta con RV Reformas
          </h1>
          <p className="text-white/60 text-base md:text-lg mt-4 max-w-[560px] font-body">
            Cuéntanos cómo es tu inmueble en Vila-seca, La Pineda o el municipio cercano y te respondemos antes de 24 horas con una primera orientación.
          </p>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 min-w-0">
              <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-dark leading-[1.1] mb-3">
                Solicita presupuesto para tu reforma
              </h2>
              <p className="font-body text-subtitle text-base mb-8">
                Pídenos la valoración detallada. Indícanos los metros cuadrados, el tipo de obra que tienes en mente, si quieres alquilarlo como vivienda turística o vivirlo, y la fecha que te gustaría tenerlo terminado. Te llamamos en el mismo día para concertar una visita técnica gratuita.
              </p>

              <div className="bg-accent rounded-[16px] p-6 md:p-10">
                <CTAForm />
              </div>
            </div>

            <aside className="lg:w-[380px] flex flex-col gap-6">
              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-dark text-base uppercase">Llámanos</h3>
                </div>
                <a href="tel:+34877278105" className="font-body font-semibold text-accent text-lg hover:underline">
                  877 278 105
                </a>
                <p className="text-subtitle text-sm mt-1 font-body">Respondemos de lunes a sábado.</p>
              </div>

              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-dark text-base uppercase">WhatsApp</h3>
                </div>
                <a href="https://wa.me/34623760710" target="_blank" rel="noopener noreferrer" className="font-body font-semibold text-[#25D366] text-lg hover:underline">
                  Escríbenos al +34 623 760 710
                </a>
                <p className="text-subtitle text-sm mt-1 font-body">Útil si nos quieres mandar fotos del inmueble.</p>
              </div>

              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-dark text-base uppercase">Email</h3>
                </div>
                <a href="mailto:info@reformasvilaseca.es" className="font-body font-semibold text-accent text-base hover:underline break-all">
                  info@reformasvilaseca.es
                </a>
              </div>

              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-dark text-base uppercase">Oficina</h3>
                </div>
                <p className="font-body text-dark text-base font-medium">
                  Rambla de Catalunya, 6
                </p>
                <p className="text-subtitle text-sm font-body">43480 Vila-seca, Tarragona</p>
              </div>

              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-dark text-base uppercase">Horario</h3>
                </div>
                <ul className="space-y-1 text-sm font-body">
                  <li className="flex justify-between">
                    <span className="text-subtitle">Lunes - Viernes</span>
                    <span className="font-semibold text-dark">8:30 - 19:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-subtitle">Sábado</span>
                    <span className="font-semibold text-dark">9:00 - 13:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-subtitle">Domingo</span>
                    <span className="font-semibold text-dark">Cerrado</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-10">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Encuéntranos</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">
              Oficina de RV Reformas en Vila-seca
            </h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[640px] mx-auto mt-4">
              En el centro de Vila-seca, junto a la Rambla.
            </p>
          </div>
          <div className="rounded-[20px] overflow-hidden border border-dark/10 shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Rambla+de+Catalunya+6+Vila-seca+43480&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación RV Reformas Vila-seca"
            />
          </div>
        </div>
      </section>
    </>
  );
}
