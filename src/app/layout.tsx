import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StructuredData from "@/components/StructuredData";

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reformasvilaseca.es"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Reformas en Vila-seca · Pisos turísticos y viviendas | RV",
    template: "%s | RV Reformas Vila-seca",
  },
  description:
    "Equipo de reformas en Vila-seca y La Pineda. Adaptamos pisos turísticos, segundas residencias y viviendas costeras a la temporada de verano. Llama: 877 278 166.",
  authors: [{ name: "RV Reformas Vila-seca" }],
  creator: "RV Reformas Vila-seca",
  publisher: "RV Reformas Vila-seca",
  category: "Reformas y construcción",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://reformasvilaseca.es",
    siteName: "RV Reformas Vila-seca",
    title: "Reformas en Vila-seca · Pisos turísticos y viviendas | RV",
    description:
      "Reformas integrales en Vila-seca y La Pineda: pisos turísticos, segundas residencias y viviendas costeras. Cocinas y baños llave en mano.",
    images: [
      {
        url: "/images/hero-reforma-vilaseca-mediterranea.webp",
        width: 1200,
        height: 630,
        alt: "RV Reformas Vila-seca · Reforma mediterránea junto a La Pineda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformas en Vila-seca · RV Reformas",
    description:
      "Reformas integrales, cocinas y baños en Vila-seca y La Pineda. Especialistas en pisos turísticos.",
    images: ["/images/hero-reforma-vilaseca-mediterranea.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // verification: añadir cuando tengas los códigos de Google Search Console y Bing Webmaster
  // verification: {
  //   google: "TU_CODIGO_GSC",
  //   other: { "msvalidate.01": "TU_CODIGO_BING" },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/images/hero-reforma-vilaseca-mediterranea.webp" as="image" type="image/webp" />
      </head>
      <body
        className={`${body.variable} ${display.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
