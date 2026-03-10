import { Code, Layers, Wrench } from "lucide-react";

export default function Skills() {

  const languages = [
    { name: "JavaScript", level: 60 },
    { name: "Python", level: 65 },
    { name: "PHP", level: 40 },
    { name: "Java", level: 75 }
  ];

  const frameworks = [
    { name: "React", level: 90 },
    { name: "Laravel", level: 75 },
    { name: "Spring Boot", level: 80 },
    { name: "Node.js", level: 50 }
  ];

  const tools = [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "MySQL", level: 80 }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>

      <div className="h-2 bg-[#0a192f] rounded">
        <div
          className="h-2 bg-[#64ffda] rounded"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-6 bg-[#112240]/30">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Languages */}
          <div className="p-6 rounded-xl border border-[#233554] bg-[#112240]/40
          transition-all duration-300 hover:-translate-y-2 hover:border-[#64ffda]
          hover:bg-[#112240]/70 hover:shadow-lg hover:shadow-[#64ffda]/20">

            <div className="flex items-center gap-2 mb-6 text-[#64ffda]">
              <Code size={22} />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>

            {languages.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}

          </div>

          {/* Frameworks */}
          <div className="p-6 rounded-xl border border-[#233554] bg-[#112240]/40
          transition-all duration-300 hover:-translate-y-2 hover:border-[#64ffda]
          hover:bg-[#112240]/70 hover:shadow-lg hover:shadow-[#64ffda]/20">

            <div className="flex items-center gap-2 mb-6 text-[#64ffda]">
              <Layers size={22} />
              <h3 className="text-xl font-semibold">Frameworks</h3>
            </div>

            {frameworks.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}

          </div>

          {/* Tools */}
          <div className="p-6 rounded-xl border border-[#233554] bg-[#112240]/40
          transition-all duration-300 hover:-translate-y-2 hover:border-[#64ffda]
          hover:bg-[#112240]/70 hover:shadow-lg hover:shadow-[#64ffda]/20">

            <div className="flex items-center gap-2 mb-6 text-[#64ffda]">
              <Wrench size={22} />
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>

            {tools.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}