import React from "react";

export const MaskingTape = ({ className = "" }) => {
  return (
    <div
      className={`absolute z-20 h-6 w-24 bg-[#EAD8AF]/85 border-y border-[#d3be93]/60 shadow-[0_2px_4px_rgba(0,0,0,0.12)] backdrop-blur-[0.5px] ${className}`}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 97% 20%, 100% 40%, 96% 60%, 100% 80%, 97% 100%, 0 100%, 3% 80%, 0 60%, 4% 40%, 0 20%)",
      }}
    >
      {/* Subtle tape texture reflection */}
      <div className="w-full h-full bg-gradient-to-b from-white/20 via-transparent to-black/5" />
    </div>
  );
};
