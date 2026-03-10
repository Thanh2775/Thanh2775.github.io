import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur border-b border-[#112240] z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="#home"
          className="w-12 h-12 border-2 border-[#64ffda] rounded-lg flex items-center justify-center
          transition-all duration-300 hover:bg-[#64ffda] hover:text-[#0a192f] hover:shadow-lg hover:shadow-[#64ffda]/50"
        >
          <span className="text-[#64ffda] font-bold text-xl hover:text-[#0a192f]">
            PLT
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-[#8892b0]">

          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#skills" className="relative group">
            Skills
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#education" className="relative group">
            Education
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#projects" className="relative group">
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="group relative overflow-hidden border px-4 py-2 rounded border-[#64ffda] text-[#64ffda]
            transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 group-hover:text-[#0a192f]">Contact</span>

            <span
              className="absolute left-0 top-0 h-full w-0 bg-[#64ffda]
              transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-[#64ffda]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex justify-between gap-4 pb-4 bg-[#0a192f]">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  );
}