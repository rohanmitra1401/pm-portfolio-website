import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rohanmitra.com"),
  title: {
    default: "Rohan Mitra | Product Manager",
    template: "%s | Rohan Mitra",
  },
  description:
    "Product Manager with experience at PhonePe and Airtel. Building consumer apps at scale. Published author and conference speaker on product strategy and AI agents.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Rohan Mitra",
    title: "Rohan Mitra | Product Manager",
    description:
      "Product Manager with experience at PhonePe and Airtel. Building consumer apps at scale. Published author and conference speaker on product strategy and AI agents.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Rohan Mitra — Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Mitra | Product Manager",
    description:
      "Product Manager with experience at PhonePe and Airtel. Building consumer apps at scale.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Person JSON-LD — seeds Google's knowledge graph for "Rohan Mitra"
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rohan Mitra",
  jobTitle: "Product Manager",
  url: "https://rohanmitra.com",
  sameAs: ["https://www.linkedin.com/in/mitrarohan/"],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Delhi School of Economics",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Thapar Institute of Engineering & Technology",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "PhonePe",
  },
  knowsAbout: [
    "Product Management",
    "AI Agents",
    "Consumer Apps",
    "Product Strategy",
    "Agentic Design",
    "Fintech",
  ],
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
