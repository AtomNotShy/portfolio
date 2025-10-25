"use client";

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
          <div className="text-xl font-semibold text-white">
            <a href="/">Dev</a>
          </div>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#b0b0b0] hover:text-white transition-colors duration-200 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-white">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
