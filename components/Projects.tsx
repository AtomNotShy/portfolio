"use client";

import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-[#0a0a0a] border-t border-[#1a1a1a]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-off-white mb-4">Projects</h2>
        <p className="text-[#808080] mb-16">
          Selected projects showcasing my work and expertise
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image Container - Clickable */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] hover:border-[#4a4a4a] transition-all duration-500 aspect-[16/9] shadow-2xl cursor-pointer group"
                >
                  {/* Image with padding */}
                  <div className="absolute inset-0 p-2 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500 rounded-lg"
                    />
                  </div>
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Click indicator on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                      <svg
                        className="w-8 h-8 text-off-white"
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
                    </div>
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black bg-opacity-70 backdrop-blur-sm border border-[#3a3a3a] rounded-full text-xs text-[#b0b0b0] z-20">
                    {project.year}
                  </div>
                </a>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-3xl font-bold text-off-white">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[#606060] font-mono">
                      #{project.id.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-[#a0a0a0] leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-[#808080] text-sm leading-relaxed hidden sm:block">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#1a1a1a] text-[#b0b0b0] text-xs rounded-full border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-6">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-[#f0f0f0] transition-all duration-200 hover:shadow-lg hover:shadow-white/10 group/btn"
                    >
                      <span>View Demo</span>
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200"
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional projects hint */}
        <div className="mt-20 pt-16 border-t border-[#1a1a1a] text-center">
          <p className="text-[#606060] text-sm">
            Interested in seeing more projects? Check out my{" "}
            <a
              href="https://github.com/AtomNotShy"
              className="text-white hover:text-[#b0b0b0] transition-colors duration-200 underline"
            >
              GitHub
            </a>{" "}
            for more projects and contributions.
          </p>
        </div>
      </div>
    </section>
  );
}
