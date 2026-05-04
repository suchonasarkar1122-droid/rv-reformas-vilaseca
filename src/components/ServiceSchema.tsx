interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://reformasvilaseca.es${url}`,
    image: `https://reformasvilaseca.es${image}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "RV Reformas Vila-seca",
      telephone: "+34877278105",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rambla de Catalunya, 6",
        addressLocality: "Vila-seca",
        addressRegion: "Tarragona",
        postalCode: "43480",
        addressCountry: "ES",
      },
    },
    areaServed: [
      { "@type": "City", name: "Vila-seca" },
      { "@type": "City", name: "Salou" },
      { "@type": "City", name: "La Canonja" },
      { "@type": "City", name: "Tarragona" },
      { "@type": "City", name: "Cambrils" },
      { "@type": "City", name: "Constantí" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
