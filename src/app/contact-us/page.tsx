import type { Metadata } from "next";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import ContactSection from "@/components/ContactSection";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import { contactHero, contactInfo, contactMapEmbed } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | Manzel Studio Building Designers Melbourne",
  description:
    "Get in touch with Manzel Studio. Book a free consultation with our Melbourne building design team, call, email, or visit our Preston office.",
};

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InnerBanner {...contactHero} />
        <ContactSection {...contactInfo} />
        <ContactMap embedUrl={contactMapEmbed} />
      </main>
      <Footer />
    </>
  );
}
