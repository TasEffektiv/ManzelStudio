import type { Metadata } from "next";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import BlogList from "@/components/BlogList";
import ContactTeam from "@/components/ContactTeam";
import Footer from "@/components/Footer";
import { blogHero } from "@/lib/content";

export const metadata: Metadata = {
  title: "Building Design Blog Melbourne | Manzel Studio",
  description:
    "Read Melbourne building design guides from Manzel Studio covering planning permits, residential design, commercial spaces and project tips.",
};

export default function Blog() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InnerBanner {...blogHero} />
        <BlogList />
        <ContactTeam />
      </main>
      <Footer />
    </>
  );
}
