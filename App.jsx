import React from "react";
import { Analytics } from "@vercel/analytics/react";
import cvPdf from "./src/assets/cv.pdf";
import { SpiralBinder } from "./src/components/SpiralBinder";
import { Hero } from "./src/components/Hero";
import { AboutCard } from "./src/components/AboutCard";
import { QuickLinksCard } from "./src/components/QuickLinksCard";
import { ShowcaseArea } from "./src/components/ShowcaseArea";
import { Footer } from "./src/components/Footer";

const LINKEDIN_URL = "https://www.linkedin.com/in/hossam-hassan-hefni";
const GITHUB_URL = "https://github.com/Hossam-hassan-h";
const EMAIL_ADDRESS = "hossam.h.dev@gmail.com";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F6EF] flex justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6">
      {/* Notebook Sheet Container */}
      <div className="relative w-full max-w-[1360px] min-h-[96vh] bg-[#FCFAF5] shadow-[0_15px_35px_rgba(32,58,116,0.08),0_5px_15px_rgba(0,0,0,0.04)] rounded-xl sm:rounded-2xl border border-[#B8C8E4]/40 overflow-hidden notebook-page">
        {/* Left Spiral Binder Rings */}
        <SpiralBinder count={30} />

        {/* Content Wrapper (with left padding on lg screens for spiral binder rings) */}
        <div className="relative z-10 flex flex-col min-h-full pl-0 lg:pl-12 pt-6 sm:pt-8">
          {/* Main Content Area: Starts directly with Hero Section (No Navbar) */}
          <main className="flex-1 px-4 sm:px-6 md:px-8">
            {/* Upper Content Area: Left/Center Hero + Right Cards Stack */}
            <div className="relative w-full max-w-7xl mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8">
              {/* Left & Center: Hero Section (Avatar, Name, Intro, Download CV, Socials) */}
              <div className="flex-1 w-full">
                <Hero
                  cvUrl={cvPdf}
                  linkedInUrl={LINKEDIN_URL}
                  githubUrl={GITHUB_URL}
                  email={EMAIL_ADDRESS}
                />
              </div>

              {/* Right Column: Stack containing AboutCard (top) and QuickLinksCard (bottom) */}
              <div className="flex flex-col items-center xl:items-end gap-8 flex-shrink-0 xl:w-[420px] xl:pt-2">
                {/* About Me Card */}
                <div className="w-full flex justify-center xl:justify-end">
                  <AboutCard />
                </div>

                {/* Quick Links Card + 'Thanks for visiting!' */}
                <div className="w-full flex justify-center xl:justify-end">
                  <QuickLinksCard
                    cvUrl={cvPdf}
                    linkedInUrl={LINKEDIN_URL}
                    githubUrl={GITHUB_URL}
                  />
                </div>
              </div>
            </div>

            {/* Lower Showcase Area: Graduation Project Infographic with Download */}
            <ShowcaseArea />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
