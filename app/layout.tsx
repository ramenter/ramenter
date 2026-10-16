import type { Metadata, Viewport } from "next";
import { Anek_Latin } from "next/font/google";
import { contact, gallery, photos, projects, siteUrl } from "@/lib/data";
import "./globals.css";

// Anek Latin: by Ek Type (India); the width axis gives headings the wide, sturdy feel of the logo wordmark.
const anek = Anek_Latin({ variable: "--font-anek", subsets: ["latin"], axes: ["wdth"] });

const title = "Ram Enterprises | Residential Plots & Real Estate in Bhopal";
const description =
  "Ram Enterprises: 30+ years of trusted residential real estate in Bhopal. Explore SN Krishna, a gated plotted community at Bairagarh Chichli, Kolar Road, with 30 ft roads, clubhouse and green spaces.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Ram Enterprises",
    "Ram Enterprises Bhopal",
    "SN Krishna",
    "plots in Bhopal",
    "residential plots Kolar Road",
    "gated community Bhopal",
    "Bairagarh Chichli plots",
    "real estate developer Bhopal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ram Enterprises",
    locale: "en_IN",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  other: { "geo.region": "IN-MP", "geo.placename": "Bhopal" },
};

export const viewport: Viewport = { themeColor: "#e0a526" };

const p = projects[0];
const address = {
  "@type": "PostalAddress",
  streetAddress: "Bairagarh Chichli, Kolar Road",
  addressLocality: "Bhopal",
  addressRegion: "Madhya Pradesh",
  addressCountry: "IN",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#org`,
      name: "Ram Enterprises",
      url: siteUrl,
      logo: `${siteUrl}/logo-mark.png`,
      image: `${siteUrl}${photos.clubhouse.src}`,
      description,
      telephone: contact.phone,
      email: contact.email,
      address,
      areaServed: { "@type": "City", name: "Bhopal" },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ram Enterprises",
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#org` },
    },
    {
      "@type": "Residence",
      name: p.name,
      description: p.summary,
      image: gallery.map((img) => `${siteUrl}${img.src}`),
      url: `${siteUrl}/#projects`,
      address,
      amenityFeature: p.amenities.map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={anek.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
