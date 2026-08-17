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

export default function Home() {
  return (
    <>
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
