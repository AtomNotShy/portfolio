export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#606060] text-sm">
          © {currentYear} All rights reserved. Built with{" "}
          <span className="text-off-white">Next.js</span> and{" "}
          <span className="text-off-white">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
