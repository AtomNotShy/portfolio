import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-[#0a0a0a]"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {personalInfo.name}
        </h1>
        <p className="text-2xl md:text-3xl text-[#808080] font-light mb-6">
          {personalInfo.title}
        </p>
        <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto mb-12 leading-relaxed">
          {personalInfo.description}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-[#ededed] transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#3a3a3a] text-white font-medium rounded-md hover:border-[#5a5a5a] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
