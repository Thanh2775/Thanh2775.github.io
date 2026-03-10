import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    setLoading(true);

    setTimeout(() => {

      const mailtoLink = `mailto:phanthanh2775@gmail.com?subject=Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;

      window.location.href = mailtoLink;

      setLoading(false);

    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-[#8892b0] mb-10">
          Feel free to reach out if you want to collaborate, have a project idea, or just want to say hello.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-[#112240] rounded border border-[#233554]
            focus:outline-none focus:border-[#64ffda] focus:shadow-[0_0_6px_#64ffda]"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-[#112240] rounded border border-[#233554]
            focus:outline-none focus:border-[#64ffda] focus:shadow-[0_0_6px_#64ffda]"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-[#112240] rounded border border-[#233554]
            focus:outline-none focus:border-[#64ffda] focus:shadow-[0_0_6px_#64ffda]"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 mx-auto
            border border-[#64ffda] text-[#64ffda]
            px-6 py-3 rounded
            transition-all duration-300
            hover:bg-[#64ffda] hover:text-[#0a192f]
            hover:-translate-y-1
            hover:shadow-lg hover:shadow-[#64ffda]/40"
          >

            {loading ? "Sending..." : "Send Message"}

            {!loading && <Send size={18} />}

          </button>

        </form>

      </div>
    </section>
  );
}