import React from "react";
import { MapPin, Code, Star } from "lucide-react";
import { TornPaperCard } from "./TornPaperCard";

export const AboutCard = () => {
  return (
    <TornPaperCard
      rotate={1.5}
      hasTape={true}
      className="w-full max-w-[280px] sm:max-w-[310px]"
    >
      <div className="pt-2 pb-1 px-1">
        {/* Title */}
        <div className="relative inline-block mb-4">
          <h2 className="text-2xl sm:text-3xl font-hand font-bold text-[#203A74] tracking-wide">
            About Me
          </h2>
          {/* Double hand-drawn underline */}
          <svg
            className="w-full h-3 -mt-0.5"
            viewBox="0 0 100 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 3 C 30 1, 70 2, 98 4"
              stroke="#203A74"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M4 8 C 35 6, 68 7, 95 9"
              stroke="#203A74"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Items List */}
        <div className="space-y-4 text-[#203A74] font-hand text-lg sm:text-xl">
          {/* Cairo, Egypt */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 text-[#203A74]">
              <MapPin className="w-5 h-5 fill-[#203A74] text-[#FCFAF5]" />
            </div>
            <span className="font-semibold tracking-wide">Cairo, Egypt</span>
          </div>

          {/* Full Stack Developer */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 font-mono font-bold text-base px-1 py-0.5 border border-[#203A74] rounded text-[#203A74]">
              &lt;/&gt;
            </div>
            <span className="font-semibold tracking-wide">Full Stack Developer</span>
          </div>

          {/* Always eager to learn and grow! */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-[#203A74] mt-0.5">
              <Star className="w-5 h-5 fill-[#203A74] text-[#203A74]" />
            </div>
            <span className="font-semibold leading-snug">
              Always eager to learn and grow!
            </span>
          </div>
        </div>
      </div>
    </TornPaperCard>
  );
};
