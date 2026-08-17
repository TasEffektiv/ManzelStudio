import type { Metadata } from "next";
import Header from "@/components/Header";
import AssessmentHero from "@/components/AssessmentHero";
import AssessmentTrustBar from "@/components/AssessmentTrustBar";
import AssessmentClarify from "@/components/AssessmentClarify";
import AssessmentPlans from "@/components/AssessmentPlans";
import AssessmentRisk from "@/components/AssessmentRisk";
import AssessmentDiscover from "@/components/AssessmentDiscover";
import AssessmentProcess from "@/components/AssessmentProcess";
import AssessmentBeforeOrder from "@/components/AssessmentBeforeOrder";
import Faq from "@/components/Faq";
import ServiceCta from "@/components/ServiceCta";
import Footer from "@/components/Footer";
import {
  siteAssessmentHero,
  siteAssessmentTrustBar,
  siteAssessmentClarify,
  siteAssessmentPlans,
  siteAssessmentRisk,
  siteAssessmentDiscover,
  siteAssessmentProcess,
  siteAssessmentBeforeOrder,
  siteAssessmentFaqs,
  siteAssessmentCta,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Site Assessment | Property Development Review | Manzel Studio",
  description:
    "Assess your property's zoning, overlays, restrictions and development potential with Manzel Studio. Site Assessments available across Victoria from $198.",
};

export default function SiteAssessment() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AssessmentHero {...siteAssessmentHero} />
        <AssessmentTrustBar items={siteAssessmentTrustBar} />
        <AssessmentClarify {...siteAssessmentClarify} />
        <AssessmentPlans {...siteAssessmentPlans} />
        <AssessmentRisk {...siteAssessmentRisk} />
        <AssessmentDiscover {...siteAssessmentDiscover} />
        <AssessmentProcess {...siteAssessmentProcess} />
        <AssessmentBeforeOrder {...siteAssessmentBeforeOrder} />
        <Faq
          items={siteAssessmentFaqs}
          lead="Everything you need to know before getting started — from what's included to timelines, costs, and what happens next."
        />
        <ServiceCta {...siteAssessmentCta} />
      </main>
      <Footer />
    </>
  );
}
