import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerBanner from "@/components/InnerBanner";
import BlogList from "@/components/BlogList";
import ContactTeam from "@/components/ContactTeam";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";
import { blogHero } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Building Design Blog Melbourne | Manzel Studio",
  description:
    "Read Melbourne building design guides from Manzel Studio covering planning permits, residential design, commercial spaces and project tips.",
  path: "/blog",
});

export default function Blog() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <main className="flex-1">
        <InnerBanner {...blogHero} />
        <BlogList />
        <ContactTeam />
      </main>
      <Footer />
    </>
  );
}
