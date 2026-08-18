const CORELEADS_ENDPOINT = "https://coreleads.es/api/in/f823c51598b8a55e67aba41fe8ab8b1cb366e2403595ca17aa8f4313672b8ccc/lead/web";

function firstValue(data: FormData, keys: string[]): string {
  for (const key of keys) {
    const value = data.get(key);
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

export function buildCoreLeadsPayload(data: FormData): FormData {
  const payload = new FormData();
  const fields: Array<[string, string]> = [
    ["name", firstValue(data, ["name", "nombre"])],
    ["phone", firstValue(data, ["phone", "telefono", "teléfono"]).replace(/[^\d+]/g, "")],
    ["email", firstValue(data, ["email", "correo"])],
    ["city", firstValue(data, ["locality", "localidad", "city", "poblacion"])],
    ["service", firstValue(data, ["service", "serviceType", "servicio", "tipo_reforma"])],
    ["message", firstValue(data, ["message", "mensaje", "comentario"])],
  ];

  for (const [key, value] of fields) {
    if (value) payload.set(key, value);
  }

  payload.set("sector", "Reformas");
  payload.set("website", window.location.origin);
  payload.set("page_url", window.location.href);
  payload.set("brand", document.title.split("|")[0]?.trim() || window.location.hostname);
  payload.set("consent", "accepted");
  payload.set("submission_id", crypto.randomUUID());
  return payload;
}

/**
 * Keep Formspree as the user-visible email path and mirror the same lead to
 * CoreLeads. CoreLeads currently returns no CORS headers, so its response is
 * intentionally opaque and must not block the proven email delivery path.
 */
export async function submitLead(data: FormData, formspreeUrl: string): Promise<Response> {
  const coreLeadsRequest = fetch(CORELEADS_ENDPOINT, {
    method: "POST",
    body: buildCoreLeadsPayload(data),
    mode: "no-cors",
    keepalive: true,
  }).catch(() => null);

  const emailResponse = await fetch(formspreeUrl, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  void coreLeadsRequest;
  return emailResponse;
}
