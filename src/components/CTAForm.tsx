"use client";

import { useState } from "react";

interface CTAFormProps {
  defaultServiceType?: string;
}

export default function CTAForm({ defaultServiceType = "" }: CTAFormProps) {
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
      <div className="text-center py-12">
        <h3 className="font-body font-bold text-3xl text-white uppercase mb-4">
          ¡Solicitud recibida!
        </h3>
        <p className="text-white/90">
          Nos pondremos en contacto contigo en menos de 24h con tu presupuesto a medida.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="_subject" value="Nuevo presupuesto desde reformasvilaseca.es (CTA)" />

      <div>
        <label className="block text-white font-bold text-xs uppercase tracking-wider mb-2">Nombre *</label>
        <input type="text" name="name" placeholder="Tu nombre" required className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder:text-white/50 border-none focus:outline-none focus:ring-2 focus:ring-white/40" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white font-bold text-xs uppercase tracking-wider mb-2">Email *</label>
          <input type="email" name="email" placeholder="tu@email.com" required className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder:text-white/50 border-none focus:outline-none focus:ring-2 focus:ring-white/40" />
        </div>
        <div>
          <label className="block text-white font-bold text-xs uppercase tracking-wider mb-2">Teléfono *</label>
          <input type="tel" name="phone" placeholder="+34 600 000 000" required className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder:text-white/50 border-none focus:outline-none focus:ring-2 focus:ring-white/40" />
        </div>
      </div>

      <div>
        <label className="block text-white font-bold text-xs uppercase tracking-wider mb-2">Tipo de reforma</label>
        <select name="serviceType" defaultValue={defaultServiceType} required className="w-full px-4 py-3 rounded-xl bg-white/20 text-white border-none focus:outline-none focus:ring-2 focus:ring-white/40">
          <option value="" disabled className="text-dark">Selecciona...</option>
          <option value="Reforma integral" className="text-dark">Reforma integral</option>
          <option value="Alquiler turístico" className="text-dark">Alquiler turístico</option>
          <option value="Cocina" className="text-dark">Cocina</option>
          <option value="Baño" className="text-dark">Baño</option>
          <option value="Segunda residencia" className="text-dark">Segunda residencia</option>
          <option value="Local comercial" className="text-dark">Local comercial</option>
          <option value="Otro" className="text-dark">Otro</option>
        </select>
      </div>

      <div>
        <label className="block text-white font-bold text-xs uppercase tracking-wider mb-2">Cuéntanos tu proyecto</label>
        <textarea name="message" placeholder="Metros cuadrados, tipo de vivienda, estado actual, qué te gustaría renovar..." rows={4} className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder:text-white/50 border-none focus:outline-none focus:ring-2 focus:ring-white/40 resize-vertical" />
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" id="lopd" name="lopd" required className="mt-1 accent-accent" />
        <label htmlFor="lopd" className="text-white/70 text-xs leading-relaxed">
          He leído y acepto la <a href="/politica-privacidad" className="underline text-white/90">política de privacidad</a> y el tratamiento de mis datos para recibir información sobre el proyecto.
        </label>
      </div>

      {error && (
        <p className="text-red-400 text-xs text-center">Algo se ha torcido al enviar. Prueba otra vez o llámanos al 877 278 166.</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-dark text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#222] transition-colors text-[15px] disabled:opacity-60 inline-flex items-center justify-center gap-2"
      >
        {loading && <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
        {loading ? "Enviando..." : "Quiero mi valoración"}
      </button>

      <div className="flex items-center gap-3 mt-2">
        <div className="flex-1 h-px bg-white/20" />
        <span className="text-white/50 text-xs uppercase tracking-wider">o si lo prefieres</span>
        <div className="flex-1 h-px bg-white/20" />
      </div>

      <a
        href="https://wa.me/34623760710"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#1fb855] transition-colors text-[15px] text-center inline-flex items-center justify-center gap-2"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Escríbenos por WhatsApp
      </a>
    </form>
  );
}
