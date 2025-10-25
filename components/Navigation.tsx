"use client";

import { personalInfo } from "@/lib/data";

export default function Navigation() {
  const navItems = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md border-b border-[#2a2a2a] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold text-off-white">
            <a href="/">Dev</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#b0b0b0] hover:text-off-white transition-colors duration-200 text-sm"
              >
                {item.name}
              </a>
            ))}
            
            {/* Resume Button - Emphasized */}
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-[#ededed] transition-all duration-200 hover:shadow-lg hover:shadow-white/20 flex items-center gap-2 group"
              >
                <span>Resume</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-off-white">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
