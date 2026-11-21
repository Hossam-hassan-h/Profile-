import React from "react";
import { Home, Briefcase, Settings, GraduationCap, Mail } from "lucide-react";
import { DoodleBurst } from "./Doodles";

export const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Settings },
    { label: "About", href: "#about", icon: GraduationCap },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className="relative w-full pt-4 pb-2 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-10">
      {/* Left: Logo */}
      <div className="relative group flex flex-col items-start select-none">
        <a
          href="#home"
          className="flex items-center text-3xl sm:text-4xl font-hand font-bold text-[#203A74] tracking-wide"
        >
          <span>Hossam</span>
          <span className="ml-2.5 font-mono text-2xl sm:text-3xl font-normal text-[#203A74] opacity-90">
            &lt;/&gt;
          </span>
        </a>
        {/* Hand-drawn ink underline */}
        <svg
          className="w-24 h-3 -mt-0.5"
          viewBox="0 0 100 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6 C 25 3, 65 2, 95 7"
            stroke="#203A74"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Center: Navigation Links */}
      <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-7">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="group relative flex items-center gap-1.5 text-lg font-hand font-medium text-[#203A74] hover:text-[#3F63C7] transition-colors py-1 px-1.5"
            >
              <Icon className="w-4 h-4 stroke-[2.2] group-hover:-translate-y-0.5 transition-transform" />
              <span>{item.label}</span>
              {/* Subtle pencil hover underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#355CA8] group-hover:w-full transition-all duration-200 rounded-full" />
            </a>
          );
        })}
      </nav>

      {/* Right: Slanted Handwritten Doodle */}
      <div className="hidden lg:flex flex-col items-center relative -rotate-3 select-none">
        <DoodleBurst className="w-5 h-5 mb-0.5 text-[#203A74]" rotate={-10} />
        <div className="font-caveat text-xl font-bold text-[#203A74] leading-tight text-center">
          Let's<br />
          Build Something<br />
          Great Together!
        </div>
      </div>
    </header>
  );
};
