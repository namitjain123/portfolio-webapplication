import { useEffect, useMemo, useState } from "react";
import {
  Download,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  Code2,
  Database,
  Brain,
  Workflow,
  Server,
  Cloud,
  Boxes,
  Cpu,
} from "lucide-react";

const images = ["/about/image1.jpg", "/about/image2.jpg", "/about/image3.jpg"];

const techIcons = [
  { name: "Python", icon: <Code2 size={20} /> },
  { name: "FastAPI", icon: <Server size={20} /> },
  { name: "RAG", icon: <Brain size={20} /> },
  { name: "Agents", icon: <Workflow size={20} /> },
  { name: "LangGraph", icon: <Boxes size={20} /> },
  { name: "LangChain", icon: <Cpu size={20} /> },
  { name: "React", icon: <Code2 size={20} /> },
  { name: "Azure", icon: <Cloud size={20} /> },
  { name: "Docker", icon: <Database size={20} /> },
  { name: "n8n", icon: <Workflow size={20} /> },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  const current = useMemo(() => images[index], [index]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#9cc8b6]">Me</span>
          </h2>

          <p className="text-white/70 text-sm md:text-base tracking-wide">
            Master of Data Science • Melbourne • AI + Backend Builder
          </p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image slider */}
          <div
            className="relative w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="absolute -inset-6 rounded-[32px] bg-[#9cc8b6]/10 blur-2xl" />

            <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                key={current}
                src={current}
                alt="About"
                className="w-full h-full object-cover animate-fade"
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071411]/60 via-transparent to-transparent" />

              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index
                        ? "w-7 bg-[#9cc8b6]"
                        : "w-2.5 bg-white/30 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Left aligned continuous about text */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Building practical AI systems with strong engineering foundations
            </h3>

            <div className="max-w-none text-white/80 leading-8 text-[17px] md:text-lg space-y-5">
              <p>
                I’m a Master of Data Science student in Melbourne with a strong
                interest in AI systems, full-stack engineering, and building
                real-world solutions. I spend most of my time working on RAG
                pipelines, agent-based systems, and sharpening my
                problem-solving through platforms like LeetCode. I enjoy
                breaking down complex problems and turning them into efficient,
                scalable, and practical applications that can create real
                impact.
              </p>

              <p>
                Outside of technical work, I’m very active in sports and
                fitness, and that discipline directly shapes how I approach
                engineering, consistency, and continuous learning. I also enjoy
                exploring Melbourne’s café culture, sharing my work through
                GitHub and occasional blogs, and constantly improving both my
                technical and professional skills. I focus on building not just
                software, but strong systems, habits, and long-term growth.
              </p>
            </div>

            {/* animated tech strip */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="tech-scroll">
                {[...techIcons, ...techIcons].map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="flex items-center gap-2 px-5 py-4 text-white/75 whitespace-nowrap"
                  >
                    <span className="text-[#9cc8b6]">{item.icon}</span>
                    <span className="text-sm md:text-base font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#9cc8b6] px-8 py-4 text-lg font-semibold text-[#9cc8b6] hover:bg-[#9cc8b6] hover:text-[#071f1a] transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 text-lg font-semibold text-white/80 hover:bg-white/10 transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/namit-jain123/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 text-lg font-semibold text-white/80 hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade {
          animation: fade 520ms ease-in-out;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .tech-scroll {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }

        .tech-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default About;