import React from "react";

export const SpiralBinder = ({ count = 24 }) => {
  return (
    <div className="hidden lg:flex flex-col justify-between absolute left-2 md:left-4 top-8 bottom-8 w-6 z-20 pointer-events-none select-none">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="relative flex items-center justify-center h-7 my-1">
          {/* Punched hole in paper */}
          <div className="w-3.5 h-4.5 rounded-full bg-[#3a3734]/35 shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)] border border-[#2b2723]/20" />
          {/* Metallic spiral wire coil */}
          <div
            className="absolute -left-3 w-7 h-3.5 rounded-full border-t-[3px] border-l-[2px] border-[#9caec9] shadow-[0_2px_3px_rgba(32,58,116,0.25)] -rotate-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(184,200,228,0.8) 50%, rgba(120,140,175,0.9) 100%)",
            }}
          />
        </div>
      ))}
    </div>
  );
};
