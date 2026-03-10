import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function Education() {

  const educationList = [
    {
      icon: <GraduationCap size={22} />,
      title: "Bachelor of Information Technology",
      school: "Ho Chi Minh City University of Technology",
      year: "2022 - 2026",
      desc: "Currently pursuing a degree in Information Technology with a focus on software engineering, web systems, and artificial intelligence."
    },
    {
      icon: <Award size={22} />,
      title: "Full Stack Development Training",
      school: "Online Learning Platforms",
      year: "2023 - Present",
      desc: "Completed various practical courses on modern web technologies including React, Laravel, Node.js and cloud-based development."
    },
    {
      icon: <BookOpen size={22} />,
      title: "High School Education",
      school: "Local High School",
      year: "2019 - 2022",
      desc: "Focused on mathematics and computer science basics. Built early interest in programming and problem solving."
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-[#112240]/30">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-16">
          Education
        </h2>

        <div className="relative">

          {/* timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#233554]" />

          <div className="space-y-12">

            {educationList.map((edu, index) => (

              <div key={index} className="relative flex items-start gap-8">

                {/* icon */}
                <div className="w-12 h-12 flex items-center justify-center
                rounded-full border-2 border-[#64ffda] text-[#64ffda]
                bg-[#0a192f] z-10">

                  {edu.icon}

                </div>

                {/* card */}
                <div className="flex-1 bg-[#112240] p-6 rounded-xl
                border border-[#233554]
                transition-all duration-300
                hover:border-[#64ffda]
                hover:shadow-lg hover:shadow-[#64ffda]/20">

                  <div className="flex justify-between items-start mb-2">

                    <div>
                      <h3 className="text-xl font-semibold text-[#ccd6f6]">
                        {edu.title}
                      </h3>

                      <p className="text-[#64ffda]">
                        {edu.school}
                      </p>
                    </div>

                    <span className="text-sm px-3 py-1 rounded-full
                    bg-[#0a192f] text-[#64ffda] border border-[#233554]">

                      {edu.year}

                    </span>

                  </div>

                  <p className="text-[#8892b0] leading-relaxed">
                    {edu.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}