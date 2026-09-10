import * as React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { CatalogueDownloadModal } from "@/components/common/catalogue-modal";
import { EntranceProvider } from "@/components/common/entrance-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://paperforceindia.com"),
  title: {
    default: "Paperforce India - Global Stationery Manufacturer | OEM & Private Label",
    template: "%s | Paperforce India",
  },
  description: "B2B OEM Private Label Manufacturer supplying high-volume paper stationery globally. Certified ISO 9001:2015, MSMED registered facility in Maharashtra, India.",
  keywords: [
    "OEM paper stationery manufacturer",
    "Private label notebooks India",
    "Exercise books exporter",
    "Spiral notebook manufacturer",
    "Hardcover casebound notebooks",
    "Double wire wiro notebooks",
    "Composition notebooks manufacturer",
    "School stationery bulk manufacturer",
    "Paperforce India LLP",
    "Stationery exporter to USA UK Middle East Africa"
  ],
  authors: [{ name: "Paperforce India LLP", url: "https://paperforceindia.com" }],
  creator: "Paperforce India LLP",
  publisher: "Paperforce India LLP",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paperforceindia.com",
    siteName: "Paperforce India LLP",
    title: "Paperforce India - Global Stationery Manufacturer | OEM & Private Label",
    description: "B2B OEM Private Label Manufacturer supplying high-volume paper stationery globally.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Paperforce India LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paperforce India - Global Stationery Manufacturer",
    description: "B2B OEM Private Label Manufacturer supplying high-volume paper stationery globally.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Manufacturer"],
      "@id": "https://paperforceindia.com/#organization",
      name: "Paperforce India LLP",
      legalName: "Paperforce India LLP",
      url: "https://paperforceindia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://paperforceindia.com/logo.png",
        caption: "Paperforce India Logo"
      },
      image: "https://paperforceindia.com/logo.png",
      description: "B2B OEM Private Label Manufacturer supplying high-volume paper stationery globally.",
      telephone: "+91 91367 55322",
      email: "sales@paperforce.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Morya House, Andheri West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400053",
        addressCountry: "IN"
      },
      sameAs: [
        "https://www.linkedin.com/in/paperforce-india-llp-536a15426",
        "https://www.instagram.com/paperforceindia",
        "https://www.facebook.com/share/1EpdqK5Zve/",
        "https://haloxion.com"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-91367-55322",
          contactType: "sales",
          email: "sales@paperforce.in",
          areaServed: ["US", "GB", "AE", "EU", "IN", "Worldwide"],
          availableLanguage: ["en", "hi"]
        }
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paper Stationery Manufacturing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Center Pinned Notebooks",
              url: "https://paperforceindia.com/products/Set_03"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Composition Notebooks",
              url: "https://paperforceindia.com/products/Set_10"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Spiral Bound Notebooks",
              url: "https://paperforceindia.com/products/Set_11"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Double Wire Bound Notebooks",
              url: "https://paperforceindia.com/products/Set_02"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Perfect Bound Notebooks",
              url: "https://paperforceindia.com/products/Set_09"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Casebound Hardcover Notebooks",
              url: "https://paperforceindia.com/products/Set_07"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://paperforceindia.com/#website",
      url: "https://paperforceindia.com",
      name: "Paperforce India",
      description: "B2B OEM Private Label Manufacturer supplying high-volume paper stationery globally.",
      publisher: {
        "@id": "https://paperforceindia.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light" disableTransitionOnChange>
          <EntranceProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Analytics />
            <CatalogueDownloadModal />
          </EntranceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
