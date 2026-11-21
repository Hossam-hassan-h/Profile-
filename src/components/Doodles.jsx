import React from "react";

// Hand-drawn Crown Doodle above avatar
export const DoodleCrown = ({ className = "w-10 h-8" }) => (
  <svg
    viewBox="0 0 60 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 38C12 36 35 34 55 37"
      stroke="#203A74"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M7 36L12 12L25 24L34 8L44 23L53 14L49 37"
      stroke="#203A74"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Small circles on crown tips */}
    <circle cx="12" cy="11" r="2.5" fill="#203A74" />
    <circle cx="34" cy="7" r="2.5" fill="#203A74" />
    <circle cx="53" cy="13" r="2.5" fill="#203A74" />
  </svg>
);

// Curved arrow pointing from "Full Stack Developer" to the About Me card
export const DoodleArrow = ({ className = "w-28 h-10" }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 18 C 45 10, 85 12, 108 24"
      stroke="#203A74"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Arrowhead */}
    <path
      d="M98 16 L 109 25 L 102 33"
      stroke="#203A74"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Double underline under Hossam Hassan / Full Stack Developer
export const DoodleUnderline = ({ className = "w-48 h-4", width = "100%" }) => (
  <svg
    viewBox="0 0 200 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width }}
  >
    <path
      d="M3 7 C 50 3, 130 4, 196 8"
      stroke="#203A74"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  </svg>
);

// Radiating burst rays (3 lines)
export const DoodleBurst = ({ className = "w-6 h-6", rotate = 0 }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <path
      d="M5 8 L 13 14"
      stroke="#203A74"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M4 17 L 14 17"
      stroke="#203A74"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M6 25 L 14 20"
      stroke="#203A74"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Paper airplane doodle with motion trail
export const DoodlePaperAirplane = ({ className = "w-16 h-12" }) => (
  <svg
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Dotted motion trail */}
    <path
      d="M10 48 C 25 46, 40 40, 52 32"
      stroke="#355CA8"
      strokeWidth="2.2"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
    {/* Paper Airplane */}
    <g transform="translate(45, 5)">
      <path
        d="M2 28 L 48 2 L 28 42 L 20 29 L 2 28 Z"
        stroke="#203A74"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="#FCFAF5"
      />
      <path
        d="M48 2 L 20 29"
        stroke="#203A74"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20 29 L 26 38 L 28 32"
        stroke="#203A74"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="#E8EEF8"
      />
    </g>
  </svg>
);

// Smiley face doodle :)
export const DoodleSmiley = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="8" cy="8" r="1.5" fill="#203A74" />
    <circle cx="16" cy="8" r="1.5" fill="#203A74" />
    <path
      d="M7 14 C 9 18, 15 18, 17 14"
      stroke="#203A74"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

// Hand-drawn swoosh wavy underline
export const DoodleSwoosh = ({ className = "w-56 h-6" }) => (
  <svg
    viewBox="0 0 240 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 14 C 40 6, 90 2, 140 10 C 180 16, 215 14, 235 9"
      stroke="#203A74"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
  </svg>
);
