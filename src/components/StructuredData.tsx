export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": "https://reformasvilaseca.es/#business",
    name: "RV Reformas Vila-seca",
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
      latitude: 41.1106,
      longitude: 1.1456,
    },
    areaServed: [
      { "@type": "City", name: "Vila-seca" },
      { "@type": "City", name: "Salou" },
      { "@type": "City", name: "La Canonja" },
      { "@type": "City", name: "Tarragona" },
      { "@type": "City", name: "Cambrils" },
      { "@type": "City", name: "Constantí" },
    ],
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:30",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
