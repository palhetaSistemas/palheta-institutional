import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import History from "../components/History";
import { Partners } from "../components/Partners";
import { Projects } from "../components/Projects";
import { Results } from "../components/Results";
import TechnologySection from "../components/Technology";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <div className="max-w-screen relative flex w-full flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Partners />
      <CTA />
      <Projects />
      <History />
      <TechnologySection />
      <Results />
      <Testimonials />
      <Footer />
    </div>
  );
}
