import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Sectors from "@/components/Sectors";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import ContactTeam from "@/components/ContactTeam";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Building Designer Melbourne | Manzel Studio",
  description:
    "Manzel Studio is a Melbourne building designer offering full drafting services for homes and commercial spaces, from concept to creation.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Solutions />
        <Sectors />
        <FeaturedProjects />
        <Process />
        <WhyChoose />
        <Testimonials />
        <Blog />
        <Faq />
        <ContactTeam />
      </main>
      <Footer />
    </>
  );
}
