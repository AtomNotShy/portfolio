import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-[#0a0a0a] border-t border-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
        <p className="text-[#808080] mb-12">Technologies and tools I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 bg-[#141414] border border-[#2a2a2a] rounded-lg hover:border-[#3a3a3a] transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#b0b0b0] text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
