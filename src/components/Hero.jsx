import React from "react";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import {
  DoodleCrown,
  DoodleArrow,
  DoodleBurst,
  DoodleSmiley,
} from "./Doodles";
import avatarImg from "../assets/avatar-clean.png";

// Handcrafted SVG icons for social buttons matching the reference image exactly
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Hero = ({ cvUrl, linkedInUrl, githubUrl, email }) => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10">
        {/* Left: Avatar Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 select-none"
        >
          {/* Avatar Image with hand-drawn elements */}
          <div className="relative group">
            <img
              src={avatarImg}
              alt="Hossam Hassan - Avatar"
              className="w-full h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(32,58,116,0.18)]"
              draggable="false"
            />
          </div>
        </motion.div>

        {/* Center: Hero Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left select-none">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-hand font-bold text-[#203A74] tracking-tight leading-none"
          >
            Hossam Hassan
          </motion.h1>

          {/* Subtitle / Role with Hand-Drawn Underline and Arrow */}
          <div className="relative inline-block mt-2 mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-hand font-medium text-[#203A74] tracking-wide"
            >
              Full Stack Developer
            </motion.h2>

            {/* Hand-drawn underline with arrow pointing right towards About Me card */}
            <div className="relative w-full -mt-1 hidden sm:block">
              <svg
                viewBox="0 0 260 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-7 text-[#203A74]"
              >
                <path
                  d="M4 10 C 60 5, 160 5, 235 15"
                  stroke="#203A74"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                {/* Curved Arrowhead pointing towards right */}
                <path
                  d="M224 8 L 238 16 L 227 24"
                  stroke="#203A74"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mt-2 mb-6 text-lg sm:text-xl font-hand text-[#203A74] leading-relaxed max-w-xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-3"
          >
            <p className="inline font-medium">
              I build modern web applications with MERN stack and love turning
              ideas into real products.
            </p>
            <span className="flex-shrink-0 inline-block">
              <DoodleSmiley className="w-6 h-6 text-[#203A74]" />
            </span>
          </motion.div>

          {/* Action Row: Large Download CV Button + 3 Circular Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-4"
          >
            {/* 3 Radiating Burst Rays on left of button */}
            <div className="relative -mr-2 hidden sm:block">
              <DoodleBurst className="w-6 h-6 text-[#203A74]" rotate={-15} />
            </div>

            {/* Large "Download CV" Button */}
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={cvUrl}
              download="Hossam_Hassan_Hefny_CV.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 bg-[#2F4D9E] hover:bg-[#3F63C7] text-white font-hand text-xl font-bold rounded-2xl shadow-[0_4px_12px_rgba(47,77,158,0.35)] transition-all cursor-pointer border border-[#203A74]/30"
            >
              <Download className="w-5 h-5 stroke-[2.8]" />
              <span>Download CV</span>
            </motion.a>

            {/* Three Circular Icon Buttons */}
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#203A74] bg-[#FCFAF5] flex items-center justify-center text-[#203A74] hover:bg-[#D6E3F5]/30 hover:border-[#355CA8] transition-all shadow-[0_2px_6px_rgba(32,58,116,0.12)]"
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#203A74] bg-[#FCFAF5] flex items-center justify-center text-[#203A74] hover:bg-[#D6E3F5]/30 hover:border-[#355CA8] transition-all shadow-[0_2px_6px_rgba(32,58,116,0.12)]"
              >
                <span className="font-sans font-bold text-base leading-none">in</span>
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`${email}`}
                aria-label="Send Email"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#203A74] bg-[#FCFAF5] flex items-center justify-center text-[#203A74] hover:bg-[#D6E3F5]/30 hover:border-[#355CA8] transition-all shadow-[0_2px_6px_rgba(32,58,116,0.12)]"
              >
                <Mail className="w-5 h-5 stroke-[2.3]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
