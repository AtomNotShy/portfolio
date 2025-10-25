import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-[#0a0a0a] border-t border-[#1a1a1a]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
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
              {/* Image Container */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative overflow-hidden rounded-xl bg-[#141414] border border-[#2a2a2a] group-hover:border-[#4a4a4a] transition-all duration-500 aspect-video shadow-2xl">
                  {/* Gradient background for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
                  
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Placeholder with gradient overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] group-hover:opacity-0 transition-opacity duration-500">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-[#2a2a2a] flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-[#808080]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-[#606060] text-sm">Project Screenshot</p>
                    </div>
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black bg-opacity-60 border border-[#3a3a3a] rounded-full text-xs text-[#b0b0b0]">
                    {project.year}
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-3xl font-bold text-white">
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

                  {/* Action Buttons */}
                  <div className="pt-6 flex gap-3 flex-wrap">
                    <a
                      href={project.demo}
                      className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-[#f0f0f0] transition-all duration-200 hover:shadow-lg hover:shadow-white/10"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.link}
                      className="px-6 py-2.5 bg-[#2a2a2a] text-white text-sm font-medium rounded-lg border border-[#3a3a3a] hover:border-[#5a5a5a] hover:bg-[#3a3a3a] transition-all duration-200"
                    >
                      View Code
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
            Interested in seeing more? Check out my{" "}
            <a
              href="https://github.com"
              className="text-white hover:text-[#b0b0b0] transition-colors duration-200 underline"
            >
              GitHub profile
            </a>{" "}
            for additional projects and contributions.
          </p>
        </div>
      </div>
    </section>
  );
}
