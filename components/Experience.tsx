import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-[#0a0a0a] border-t border-[#1a1a1a]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-off-white mb-4">Experience</h2>
        <p className="text-[#808080] mb-12">My professional journey</p>

        <div className="space-y-0">
          {experience.map((job, index) => (
            <div key={job.id} className="relative">
              <div className="flex gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center pt-2">
                  <div className="w-3 h-3 bg-white rounded-full ring-4 ring-[#0a0a0a] z-10" />
                  {index !== experience.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#3a3a3a] via-[#2a2a2a] to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#3a3a3a] transition-colors duration-200">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-off-white">
                          {job.position}
                        </h3>
                        <p className="text-[#808080]">{job.company}</p>
                      </div>
                      <span className="text-sm text-[#606060] whitespace-nowrap">
                        {job.duration}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {job.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="text-[#a0a0a0] text-sm flex items-start gap-3"
                        >
                          <span className="text-[#4a4a4a] mt-1">▸</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
