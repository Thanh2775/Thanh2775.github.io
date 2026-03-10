import { Folder, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-[#64ffda] tracking-widest mb-4">
          HELLO, I'M
        </p>

        <h1 className="text-6xl font-bold mb-4">
          Phan Lập Thành
        </h1>

        <h2 className="text-3xl text-[#8892b0] mb-6">
          Software Developer / Software Engineer
        </h2>

        <p className="max-w-xl text-[#8892b0] mb-8">
          Building digital experiences that combine creativity with cutting-edge technology. 
          Passionate about creating elegant solutions to complex problems.
        </p>

        <div className="flex gap-4">

          {/* View Projects */}
          <a
            href="#projects"
            className="flex items-center gap-2 border-2 border-[#64ffda] text-[#64ffda] px-6 py-3 rounded
            bg-[#64ffda]/5 backdrop-blur-sm
            transition-all duration-300
            hover:bg-[#64ffda]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#64ffda]/20"
          >
            <Folder size={18} />
            View Projects
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="flex items-center gap-2 border-2 border-[#64ffda] text-[#64ffda] px-6 py-3 rounded
            bg-[#64ffda]/5 backdrop-blur-sm
            transition-all duration-300
            hover:bg-[#64ffda]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#64ffda]/20"
          >
            <MessageCircle size={18} />
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}