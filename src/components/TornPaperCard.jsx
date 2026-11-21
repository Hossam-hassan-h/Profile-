import React from "react";
import { motion } from "framer-motion";

export const TornPaperCard = ({
  children,
  className = "",
  rotate = 0,
  hasTape = false,
  tapeClassName = "-top-3 left-1/2 -translate-x-1/2 rotate-1",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`relative ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {/* Masking tape on top if requested */}
      {hasTape && (
        <div
          className={`absolute z-30 h-6 w-24 bg-[#EAD8AF]/90 border-y border-[#d3be93]/50 shadow-[0_2px_4px_rgba(0,0,0,0.12)] backdrop-blur-[1px] pointer-events-none ${tapeClassName}`}
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 96% 20%, 100% 40%, 95% 60%, 100% 80%, 96% 100%, 0 100%, 4% 80%, 0 60%, 5% 40%, 0 20%)",
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-white/25 via-transparent to-black/5" />
        </div>
      )}

      {/* Torn paper container with multi-step drop shadows */}
      <div
        className="relative bg-[#FCFAF5] p-6 text-[#203A74] shadow-[0_12px_24px_-6px_rgba(32,58,116,0.14),0_4px_10px_-2px_rgba(0,0,0,0.06),0_0_0_1px_rgba(184,200,228,0.35)]"
        style={{
          clipPath:
            "polygon(" +
            "0% 2%, 2% 0%, 5% 1.5%, 10% 0.5%, 15% 1.8%, 22% 0.2%, 30% 1.5%, 40% 0.5%, 50% 1.8%, 60% 0.3%, 72% 1.6%, 85% 0.4%, 95% 1.5%, 98% 0%, 100% 2%," +
            "99% 12%, 100% 22%, 98.8% 35%, 100% 48%, 98.5% 62%, 100% 75%, 98.9% 88%, 100% 98%," +
            "98% 100%, 94% 98.5%, 85% 99.5%, 75% 98.2%, 65% 99.6%, 50% 98.4%, 38% 99.5%, 25% 98.2%, 15% 99.6%, 5% 98.5%, 2% 100%, 0% 98%," +
            "1.2% 88%, 0% 76%, 1.5% 62%, 0% 48%, 1.2% 35%, 0% 22%, 1.1% 10%)",
        }}
      >
        {/* Subtle paper grain tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/15 via-transparent to-[#D6E3F5]/10 pointer-events-none" />

        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
};
