import type { Metadata } from "next";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactTeam from "@/components/ContactTeam";
import Footer from "@/components/Footer";
import { ourProjectsHero, ourProjectsIntro, projectCategories, allProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Projects | Building Design Portfolio | Manzel Studio",
  description:
    "Explore Manzel Studio's portfolio of residential, multi-residential, commercial and health space projects across Melbourne and Victoria.",
};

export default function OurProjects() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InnerBanner {...ourProjectsHero} />
        <ProjectsGrid heading={ourProjectsIntro} categories={projectCategories} projects={allProjects} />
        <ContactTeam />
      </main>
      <Footer />
    </>
  );
}
