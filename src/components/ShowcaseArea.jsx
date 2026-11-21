import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import {
  DoodlePaperAirplane,
  DoodleBurst,
  DoodleSwoosh,
} from "./Doodles";
import infographicImg from "../assets/infographic.jpg";

export const ShowcaseArea = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 mt-6 mb-12 select-none">
      {/* Main Dashed Notebook Container */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl border-2 border-dashed border-[#355CA8]/80 py-8 sm:py-10 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#FCFAF5]/60 backdrop-blur-[0.5px]">
        {/* Paper Airplane Doodle */}
        <div className="mb-1">
          <DoodlePaperAirplane className="w-16 h-12 text-[#203A74]" />
        </div>

        {/* Header with Left and Right Burst Rays */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 my-1">
          {/* Left Burst Rays */}
          <div className="flex-shrink-0">
            <DoodleBurst className="w-7 h-7 text-[#203A74]" rotate={-30} />
          </div>

          {/* Title */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl text-[#203A74] tracking-wide leading-tight">
              Infographic / Project Showcase
            </h3>
            <p className="font-caveat font-semibold text-2xl sm:text-3xl text-[#203A74] mt-0.5 leading-snug">
              Graduation Project
            </p>
          </div>

          {/* Right Burst Rays */}
          <div className="flex-shrink-0">
            <DoodleBurst className="w-7 h-7 text-[#203A74]" rotate={150} />
          </div>
        </div>

        {/* Hand-drawn Swoosh Underline */}
        <div className="mt-1 mb-6">
          <DoodleSwoosh className="w-64 sm:w-80 h-6 text-[#203A74]" />
        </div>

        {/* Displayed Graduation Project Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl flex flex-col items-center"
        >
          {/* Framed Image Container */}
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(32,58,116,0.12),0_4px_10px_rgba(0,0,0,0.05)] border border-[#B8C8E4] bg-white group">
            <img
              src={infographicImg}
              alt="Graduation Project Infographic - Sanda Project"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          {/* Download Button for Graduation Project Infographic */}
          <div className="flex items-center justify-center mt-6">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={infographicImg}
              download="Hossam_Hassan_Graduation_Project_Infographic.jpg"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2F4D9E] hover:bg-[#3F63C7] text-white font-hand text-xl font-bold rounded-2xl shadow-[0_4px_12px_rgba(47,77,158,0.35)] transition-all cursor-pointer border border-[#203A74]/30"
              title="Download Graduation Project Infographic"
            >
              <Download className="w-5 h-5 stroke-[2.8]" />
              <span>Download Infographic</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
