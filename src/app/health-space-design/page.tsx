import type { Metadata } from "next";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import TrustBar from "@/components/TrustBar";
import ServiceIntro from "@/components/ServiceIntro";
import WhatWeDesign from "@/components/WhatWeDesign";
import MultiResidential from "@/components/MultiResidential";
import WhatsIncluded from "@/components/WhatsIncluded";
import ServiceProcess from "@/components/ServiceProcess";
import WhyManzel from "@/components/WhyManzel";
import ServiceFeaturedProjects from "@/components/ServiceFeaturedProjects";
import Suburbs from "@/components/Suburbs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ServiceCta from "@/components/ServiceCta";
import Footer from "@/components/Footer";
import {
  healthHero,
  trustBar,
  healthIntro,
  healthWhatWeDesign,
  healthInclusive,
  healthWhatsIncluded,
  healthProcess,
  healthWhyManzel,
  healthProjects,
  healthSuburbs,
  healthFaqs,
  healthCta,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Health Space Building Designer Melbourne | Manzel Studio",
  description:
    "Manzel Studio provides registered building design for health spaces, medical clinics, aged care and NDIS facilities across Melbourne and Victoria. BPC registered.",
};

export default function HealthSpaceDesign() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServiceHero {...healthHero} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...healthIntro} />
        <WhatWeDesign {...healthWhatWeDesign} />
        <MultiResidential {...healthInclusive} />
        <WhatsIncluded {...healthWhatsIncluded} />
        <ServiceProcess {...healthProcess} />
        <WhyManzel {...healthWhyManzel} />
        <ServiceFeaturedProjects
          eyebrow="— Recent Commercial Work"
          titlePre="Recent Health Space Work"
          titleEm=""
          lead="Explore completed healthcare environments shaped around patient experience, workflow, and long term care."
          projects={healthProjects}
          cta={{ label: "View All Health Space Projects", href: "/our-projects" }}
        />
        <Suburbs {...healthSuburbs} />
        <Testimonials />
        <Faq items={healthFaqs} />
        <ServiceCta {...healthCta} />
      </main>
      <Footer />
    </>
  );
}
