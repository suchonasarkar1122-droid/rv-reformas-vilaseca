"use client";

import { useState } from "react";

export default function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgodveqy", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#22324A]/95 backdrop-blur-md rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E07B5D" strokeWidth="2" strokeLinecap="round">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-white mb-2">¡Mensaje recibido!</h3>
        <p className="font-body text-white/60 text-sm">Antes de 24 horas te llamamos para concretar la visita gratuita.</p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 font-body text-[14px] transition-colors";

  const selectClasses =
    "w-full px-4 py-3.5 rounded-xl bg-white/10 text-white/40 border border-white/10 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 font-body text-[14px] appearance-none transition-colors";

  return (
    <div className="bg-[#22324A]/95 backdrop-blur-md rounded-2xl p-7 md:p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-1">
          Valoración sin coste
        </h3>
        <p className="font-body text-white/50 text-sm">
          Te respondemos antes de 24h, también si vives fuera.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <input type="hidden" name="_subject" value="Nuevo presupuesto desde reformasvilaseca.es (hero)" />

        <input
          type="text"
          name="name"
          placeholder="Tu nombre *"
          required
          className={inputClasses}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Móvil de contacto *"
          required
          className={inputClasses}
        />

        <div className="relative">
          <select name="locality" required className={selectClasses} defaultValue="">
            <option value="" disabled>Dónde está el inmueble *</option>
            <option value="Vila-seca" className="text-dark">Vila-seca</option>
            <option value="La Pineda" className="text-dark">La Pineda</option>
            <option value="Salou" className="text-dark">Salou</option>
            <option value="La Canonja" className="text-dark">La Canonja</option>
            <option value="Tarragona" className="text-dark">Tarragona</option>
            <option value="Cambrils" className="text-dark">Cambrils</option>
            <option value="Constantí" className="text-dark">Constantí</option>
            <option value="Otra" className="text-dark">Otra población del Tarragonès</option>
          </select>
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
        </div>

        <div className="relative">
          <select name="serviceType" className={selectClasses} defaultValue="">
            <option value="" disabled>Tipo de obra</option>
            <option value="Reforma integral" className="text-dark">Reforma integral</option>
            <option value="Alquiler turístico" className="text-dark">Alquiler turístico</option>
            <option value="Cocina" className="text-dark">Cocina</option>
            <option value="Baño" className="text-dark">Baño</option>
            <option value="Segunda residencia" className="text-dark">Segunda residencia</option>
            <option value="Local o negocio" className="text-dark">Local o negocio</option>
            <option value="Otro" className="text-dark">Otro</option>
          </select>
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
        </div>

        <textarea
          name="message"
          placeholder="¿Cómo es el inmueble? (m², estado, fechas que manejas...)"
          rows={3}
          className={`${inputClasses} resize-y`}
        />

        {error && (
          <p className="text-red-400 text-xs text-center">No ha salido. Vuelve a probar o llámanos al 877 278 105.</p>
        )}

        <div className="flex gap-2.5 mt-1">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-accent text-white py-4 rounded-full font-display font-bold text-[15px] hover:bg-accent-light transition-colors inline-flex items-center justify-center gap-2.5 disabled:opacity-60"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
            )}
            {loading ? "Enviando..." : "Pedir valoración"}
          </button>
          <a
            href="https://wa.me/34623760710"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[52px] h-[52px] bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#1fb855] transition-colors"
            aria-label="Hablar por WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        <label className="flex items-start gap-2 text-white/60 text-xs mt-1">
          <input type="checkbox" required className="mt-0.5" name="lopd" />
          <span>
            He leído y acepto la <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Política de Privacidad</a>.
          </span>
        </label>

        <p className="text-center text-white/30 text-xs flex items-center justify-center gap-1.5 mt-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" /></svg>
          Datos cifrados. Cero spam.
        </p>
      </form>
    </div>
  );
}
