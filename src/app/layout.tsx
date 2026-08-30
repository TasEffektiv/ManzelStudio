import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = "Manzel Studio | Melbourne Building Designers";
const description =
  "Manzel Studio is a design-led building design studio in Melbourne creating thoughtful, functional and inspiring spaces, from concept to creation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${albertSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <JsonLd data={organizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
