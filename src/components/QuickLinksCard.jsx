import React from "react";
import { Download, ExternalLink } from "lucide-react";
import { TornPaperCard } from "./TornPaperCard";
import { DoodleSmiley } from "./Doodles";

export const QuickLinksCard = ({ cvUrl, linkedInUrl, githubUrl }) => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 select-none">
      {/* Torn Paper Quick Links Card */}
      <TornPaperCard
        rotate={-1}
        hasTape={false}
        className="w-full max-w-[270px] sm:max-w-[290px]"
      >
        <div className="pt-1 pb-1 px-1">
          {/* Title */}
          <div className="relative inline-block mb-4">
            <h3 className="text-2xl sm:text-3xl font-hand font-bold text-[#203A74] tracking-wide">
              Quick Links
            </h3>
            {/* Hand-drawn ink underline */}
            <svg
              className="w-full h-3 -mt-0.5"
              viewBox="0 0 100 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5 C 30 2, 70 3, 97 5"
                stroke="#203A74"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Links List */}
          <div className="space-y-3.5 text-[#203A74] font-hand text-lg sm:text-xl">
            {/* GitHub Profile */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-1 rounded-lg hover:bg-[#D6E3F5]/25 transition-all duration-150"
            >
              <div className="flex-shrink-0 text-[#203A74] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <span className="font-semibold group-hover:underline decoration-[#355CA8] decoration-2 underline-offset-4">
                GitHub Profile
              </span>
            </a>

            {/* LinkedIn Profile */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-1 rounded-lg hover:bg-[#D6E3F5]/25 transition-all duration-150"
            >
              <div className="flex-shrink-0 w-5 h-5 bg-[#0077B5] rounded flex items-center justify-center text-white text-xs font-bold font-sans group-hover:scale-110 transition-transform">
                in
              </div>
              <span className="font-semibold group-hover:underline decoration-[#355CA8] decoration-2 underline-offset-4">
                LinkedIn Profile
              </span>
            </a>

            {/* Download CV */}
            <a
              href={cvUrl}
              download="Hossam_Hassan_Hefny_CV.pdf"
              className="group flex items-center gap-3 p-1 rounded-lg hover:bg-[#D6E3F5]/25 transition-all duration-150 cursor-pointer"
            >
              <div className="flex-shrink-0 text-[#203A74] group-hover:scale-110 group-hover:translate-y-0.5 transition-transform">
                <Download className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-semibold group-hover:underline decoration-[#355CA8] decoration-2 underline-offset-4">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </TornPaperCard>

      {/* Right Side Note: "Thanks for visiting!" */}
      <div className="flex flex-col items-center sm:items-start self-center sm:self-auto sm:mt-12 rotate-3 select-none">
        <div className="font-caveat text-3xl sm:text-4xl font-bold text-[#203A74] leading-tight text-center sm:text-left">
          Thanks<br />
          for visiting!
        </div>
        <div className="flex items-center gap-2 mt-2">
          <DoodleSmiley className="w-7 h-7 text-[#203A74]" />
        </div>
        {/* Double wavy ink underline */}
        <svg
          className="w-20 h-4 mt-1"
          viewBox="0 0 80 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5 C 25 1, 55 2, 75 8"
            stroke="#203A74"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M8 9 C 30 6, 60 7, 72 10"
            stroke="#203A74"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
