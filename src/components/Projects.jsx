import {
  Github,
  ExternalLink,
  Folder,
  Utensils,
  Hotel,
  ShieldCheck,
  Dumbbell
} from "lucide-react";

export default function Projects() {

  const projects = [
    {
      title: "Restaurant Management System",
      desc: "Desktop application built with Java Swing to manage restaurant operations including ingredient inventory, dish recipes, employee management and salary calculation.",
      tech: ["Java", "MySQL", "Java Swing", "DAO", "DTO", "BUS"],
      github: "https://github.com/Thanh2775/restaurant-management.git",
      icon: <Utensils size={32} />
    },
    {
      title: "Hotel Booking Management",
      desc: "Full-stack hotel management platform with authentication, real-time messaging, payment integration and admin dashboards for hotel owners.",
      tech: ["React", "Spring Boot", "MySQL", "Docker", "Cloudinary", "WebSocket"],
      github: "https://github.com/Thanh2775/hotel-booking-management.git",
      icon: <Hotel size={32} />
    },
    {
      title: "Software Testing Platform",
      desc: "Warehouse management system combined with security and testing practices including CI/CD pipelines and vulnerability testing using BurpSuite.",
      tech: ["React", "Spring Boot", "Jest", "Tailwind", "CI/CD"],
      github: "https://github.com/Thanh2775/softeware-engineer-testing.git",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Gym Schedule Management",
      desc: "Fitness management platform with membership packages, AI chatbot support, trainer scheduling and real-time messaging between trainers and members.",
      tech: ["React", "Laravel", "Python", "MySQL", "Docker", "WebSocket"],
      github: "https://github.com/nguyennhathao438/Fitness-app.git",
      icon: <Dumbbell size={32} />
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((p, i) => (

            <div
              key={i}
              className="bg-[#112240] rounded-xl border border-[#233554]
              overflow-hidden
              transition-all duration-300
              hover:border-[#64ffda]
              hover:-translate-y-2
              hover:shadow-lg hover:shadow-[#64ffda]/20"
            >

              {/* icon area */}
              <div className="flex justify-center items-center h-40 border-b border-[#233554] text-[#64ffda]">
                <div className="bg-[#0a192f] p-6 rounded-xl">
                  {p.icon}
                </div>
              </div>

              {/* content */}
              <div className="p-6">

                <div className="flex justify-between items-center mb-4">

                  <Folder className="text-[#64ffda]" />

                  <div className="flex gap-3 text-[#8892b0]">

                  <a
                    href={p.github}
                    target="_blank"
                    className="hover:text-[#64ffda] transition duration-300"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    className="hover:text-[#64ffda] transition duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>

                </div>

                <h3 className="text-xl font-semibold mb-2 text-[#ccd6f6]">
                  {p.title}
                </h3>

                <p className="text-[#8892b0] text-sm mb-4 leading-relaxed">
                  {p.desc}
                </p>

                {/* tech stack */}
                <div className="flex gap-2 flex-wrap">

                  {p.tech.map((t, index) => (

                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full
                      bg-[#0a192f] text-[#64ffda]"
                    >
                      {t}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}