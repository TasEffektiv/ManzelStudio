import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerBanner from "@/components/InnerBanner";
import AboutStory from "@/components/AboutStory";
import ManzelCta from "@/components/ManzelCta";
import OurMission from "@/components/OurMission";
import OurValues from "@/components/OurValues";
import OurApproach from "@/components/OurApproach";
import TeamGrid from "@/components/TeamGrid";
import ContactTeam from "@/components/ContactTeam";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";
import {
  aboutHero,
  aboutStory,
  manzelCta,
  ourMission,
  ourValues,
  ourApproach,
  aboutTeam,
} from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Manzel Studio Building Designers Melbourne",
  description:
    "Manzel Studio is a Melbourne building design studio creating thoughtful, functional and inspiring spaces. Learn about our story, mission, values, and team.",
  path: "/about-us",
});

export default function AboutUs() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "About Us", path: "/about-us" }]} />
      <main className="flex-1">
        <InnerBanner {...aboutHero} />
        <AboutStory {...aboutStory} />
        <ManzelCta {...manzelCta} />
        <OurMission {...ourMission} />
        <OurValues {...ourValues} />
        <OurApproach {...ourApproach} />
        <TeamGrid {...aboutTeam} />
        <ContactTeam />
      </main>
      <Footer />
    </>
  );
}
