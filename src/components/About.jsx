export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex gap-6">

        {/* Vertical line */}
        <div className="w-[3px] bg-gradient-to-b from-[#64ffda]/60 via-[#64ffda]/20 to-transparent rounded"></div>

        {/* Content */}
        <div className="space-y-4">

          <h2 className="text-3xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-[#8892b0] leading-relaxed text-xl">
            I'm a passionate software developer with a strong foundation in computer science and a love for creating innovative solutions. My journey in technology started with curiosity about how things work, which led me to pursue a career in software development.
          </p>

          <p className="text-[#8892b0] leading-relaxed text-xl">
            I specialize in building scalable web applications and have experience working with modern technologies across the full stack. I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
          </p>

          <p className="text-[#8892b0] leading-relaxed text-xl">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>

        </div>

      </div>
    </section>
  );
}