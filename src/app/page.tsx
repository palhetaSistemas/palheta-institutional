import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Partners } from "../components/Partners";
import { CTA } from "../components/CTA";
import { Results } from "../components/Results";
import { Team } from "../components/Team";
import { Projects } from "../components/Projects";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export default function Home() {
  return (
    <div className="max-w-screen relative flex w-full flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Partners />
      <CTA />
      <Results />
      <Team />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}
