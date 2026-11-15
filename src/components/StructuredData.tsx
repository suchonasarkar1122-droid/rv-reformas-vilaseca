export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": "https://reformasvilaseca.es/#business",
    name: "RV - Reformas Vilaseca",
    alternateName: "RV Reformas Vila-seca",
    url: "https://reformasvilaseca.es",
    logo: "https://reformasvilaseca.es/images/hero-reforma-vilaseca-mediterranea.webp",
    image: "https://reformasvilaseca.es/images/hero-reforma-vilaseca-mediterranea.webp",
    telephone: "+34877278105",
    email: "info@reformasvilaseca.es",
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rambla de Catalunya, 6",
      addressLocality: "Vila-seca",
      addressRegion: "Tarragona",
      postalCode: "43480",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.109497499999996,
      longitude: 1.1479214999999998,
    },
    areaServed: [
      { "@type": "City", name: "Vila-seca" },
      { "@type": "City", name: "Salou" },
      { "@type": "City", name: "La Canonja" },
      { "@type": "City", name: "Cambrils" },
      { "@type": "City", name: "Constantí" },
    ],
    hasMap: "https://maps.google.com/?cid=15863900042171288538",
    sameAs: ["https://maps.google.com/?cid=15863900042171288538"],
    openingHoursSpecification: [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "21:00"}, {"@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "14:00"}],
  };

  const website = {"@context":"https://schema.org","@type":"WebSite","@id":"https://reformasvilaseca.es/#website","url":"https://reformasvilaseca.es","name":"RV - Reformas Vilaseca","inLanguage":"es-ES","publisher":{"@id":"https://reformasvilaseca.es/#business"}};

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
