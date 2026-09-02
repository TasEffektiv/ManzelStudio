import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerBanner from "@/components/InnerBanner";
import TestimonialsGrid, { FEATURED_NAMES } from "@/components/TestimonialsGrid";
import ManzelCta from "@/components/ManzelCta";
import ContactTeam from "@/components/ContactTeam";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, aggregateRatingJsonLd } from "@/lib/seo";
import { testimonialsHero, testimonials, manzelCta } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Client Testimonials | Manzel Studio Building Designers Melbourne",
  description:
    "Read real Google reviews from Manzel Studio clients across residential, commercial, and health-space building design projects in Melbourne.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const reviewJsonLd = aggregateRatingJsonLd({
    ratingValue: 5,
    reviewCount: testimonials.length,
    reviews: testimonials
      .filter((t) => FEATURED_NAMES.includes(t.name))
      .map((t) => ({ name: t.name, quote: t.quote })),
  });

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Testimonials", path: "/testimonials" }]} />
      <JsonLd data={reviewJsonLd} />
      <main className="flex-1">
        <InnerBanner {...testimonialsHero} />
        <TestimonialsGrid />
        <ManzelCta {...manzelCta} compact />
        <ContactTeam showHeading={false} compact />
      </main>
      <Footer />
    </>
  );
}
