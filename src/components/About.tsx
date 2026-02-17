import { useEffect, useMemo, useState } from "react";
import { Download, ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";

const images = ["/about/1.jpg", "/about/2.jpg", "/about/3.jpg", "/about/4.jpg"];

const stack = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "LangGraph",
  "LangChain",
  "Docker",
  "Azure",
  "ChromaDB",
];

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Focus", value: "RAG + Agents" },
  { label: "Deployment", value: "Docker + Azure" },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  const current = useMemo(() => images[index], [index]);

  // Auto rotate (pause on hover)
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  return (
    <section id="about" className="py-28 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Title */}
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-[#9cc8b6]">Me</span>
        </h2>

        {/* Subheading badge line */}
        <p className="text-white/70 text-sm md:text-base tracking-wide mb-10">
          Master of Data Science • Melbourne • AI + Full-Stack Builder
        </p>

        {/* IMAGE + controls */}
        <div className="flex justify-center mb-10">
          <div
            className="relative w-full max-w-[560px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* glow */}
            <div className="absolute -inset-6 rounded-[32px] bg-[#9cc8b6]/10 blur-2xl" />

            <div className="relative h-[520px] md:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                key={current}
                src={current}
                alt="About"
                className="w-full h-full object-cover animate-fade"
                draggable={false}
              />

              {/* arrows */}
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

              {/* dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? "w-7 bg-[#9cc8b6]" : "w-2.5 bg-white/30 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* quick stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
            >
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Centered Text */}
        <div className="mx-auto max-w-3xl space-y-6 text-white/80 leading-relaxed text-lg">
          <p>
            I’m a Master of Data Science student in Melbourne with a deep interest in AI systems, full-stack engineering, and building things that actually work in the real world.
          </p>

          <p>
            Most of my time is split between experimenting with RAG pipelines and agentic workflows, and solving programming problems on platforms like LeetCode and GeeksforGeeks. I genuinely enjoy breaking down complex problems and refining solutions — it sharpens both my coding and my thinking ability. For me, competitive programming isn’t just practice, it’s mental training.
          </p>
          <p>
            Outside of tech, I’m extremely sports-driven. If there’s a game, I’ll probably play it — badminton, cricket, basketball, swimming — I’m in. The gym is my reset button, discipline builder, and consistency coach. I believe the mindset you build in sports carries directly into engineering: patience, resilience, and showing up every single day.
          </p>
          
            I’m also a coffee person,not just drinking it, but exploring it. Café hopping around Melbourne, tasting different brews, noticing small details,it’s my way of slowing down in a fast-moving world.
          <p>
            I keep my learning experiments and materials open on GitHub so others can build on them, and I write the occasional blog on Medium when something deserves a longer story. It’s my way of giving back to the same community that helped me learn in the first place.
          </p>
          <p>
            Whether I’m optimizing a pipeline, debugging at 2am, playing a weekend match, or discovering a new café, I try to approach everything with curiosity and consistency. I don’t just like building software — I like building systems, habits, and momentum.
          </p>
        </div>

        {/* stack chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full
                       border border-[#9cc8b6]
                       px-8 py-4
                       text-lg font-semibold
                       text-[#9cc8b6]
                       hover:bg-[#9cc8b6]
                       hover:text-[#071f1a]
                       transition-all duration-300"
          >
            <Download size={20} />
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full
                       border border-white/15
                       px-8 py-4
                       text-lg font-semibold
                       text-white/80
                       hover:bg-white/10
                       transition-all duration-300"
          >
            <Mail size={20} />
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/namit-jain123/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full
                       border border-white/15
                       px-8 py-4
                       text-lg font-semibold
                       text-white/80
                       hover:bg-white/10
                       transition-all duration-300"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Fade Animation */}
      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade {
          animation: fade 520ms ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default About;
