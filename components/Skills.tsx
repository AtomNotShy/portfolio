"use client";

import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-[#0a0a0a] border-t border-[#1a1a1a]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-off-white mb-4">Skills</h2>
        <p className="text-[#808080] mb-12">Technologies and tools I work with</p>

        {/* Skills Icons */}
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-8 hover:border-[#3a3a3a] transition-colors duration-200">
          <div className="flex justify-center">
            <a
              href={`https://skillicons.dev/icons?i=${skills.join(',')}&theme=dark`}
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-3xl"
            >
              <img
                src={`https://skillicons.dev/icons?i=${skills.join(',')}&theme=dark&perline=11`}
                alt="Technical skills"
                className="w-full h-auto"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
