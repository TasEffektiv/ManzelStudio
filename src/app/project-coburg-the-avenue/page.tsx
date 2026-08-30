import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import ProjectHero from "@/components/ProjectHero";
import ProjectSnapshot from "@/components/ProjectSnapshot";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectBrief from "@/components/ProjectBrief";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectOutcome from "@/components/ProjectOutcome";
import Testimonials from "@/components/Testimonials";
import ProjectJourney from "@/components/ProjectJourney";
import ProjectRelated from "@/components/ProjectRelated";
import ServiceCta from "@/components/ServiceCta";
import Footer from "@/components/Footer";
import {
  projectHero,
  projectSnapshot,
  projectOverview,
  projectBrief,
  projectGallery,
  projectOutcome,
  projectJourney,
  projectRelated,
  projectCta,
} from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "The Avenue Coburg Residential Design | Manzel Studio",
  description:
    "Explore The Avenue, Coburg, a Manzel Studio residential building design project featuring a narrow site, heritage facade and modern family living.",
  path: "/project-coburg-the-avenue",
});

export default function ProjectCoburgTheAvenue() {
  return (
    <>
      <Header />
      <Breadcrumbs
        items={[
          { name: "Our Projects", path: "/our-projects" },
          { name: "The Avenue, Coburg", path: "/project-coburg-the-avenue" },
        ]}
      />
      <main className="flex-1">
        <ProjectHero {...projectHero} />
        <ProjectSnapshot items={projectSnapshot} />
        <ProjectOverview {...projectOverview} />
        <ProjectBrief {...projectBrief} />
        <ProjectGallery {...projectGallery} />
        <ProjectOutcome blocks={projectOutcome} />
        <Testimonials />
        <ProjectJourney {...projectJourney} />
        <ProjectRelated items={projectRelated} />
        <ServiceCta {...projectCta} />
      </main>
      <Footer />
    </>
  );
}
