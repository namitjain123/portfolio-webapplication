import { useEffect, useMemo, useRef, useState } from "react";

const experiences = [
  {
    role: "AI Engineering Internship",
    company: "DBST Solutions",
    period: "Aug. 2025 – Feb. 2026",
    points: [
      "Developed a proof-of-concept LLM-based internal knowledge assistant using LangChain and vector search for document retrieval.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline to enable context-aware question answering from internal documents.",
      "Built REST APIs using FastAPI to expose the AI assistant as a service.",
      "Containerized the application using Docker to simulate deployment-ready environments.",
      "Conducted prompt engineering experiments to improve response accuracy and reduce hallucinations."
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "HabileLabs Pvt. Ltd",
    period: "Aug 2023 – Nov 2024",
    points: [
      "Built and maintained a production Flutter app used by thousands, shipping features and supporting stable app-store releases.",
      "Resolved production incidents, improved stability, and supported deployments for a financial home-loan platform.",
      "Optimized SQL databases (5,000+ records) and improved query performance and reliability.",
      "Managed Nginx and optimized PHP cron jobs, improving uptime and automation workflows for the internal portal.",
    ],
  },
  {
    role: "Technology Intern",
    company: "Mercer Mettl",
    period: "Jan 2023 – July 2023",
    points: [
      "Developed automated assessment and scoring systems using NLP techniques for enterprise evaluation workflows.",
      "Implemented structured scoring logic assessing correctness, relevance, and completeness.",
      "Reduced manual evaluation effort by supporting scalable, AI-enabled assessment pipelines",
    ],
  },
];

const Experience = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // build ids so observer can track
  const ids = useMemo(() => experiences.map((_, i) => `exp-${i}`), []);

  useEffect(() => {
    const els = itemsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the entry most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible) {
          const idx = Number((visible.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      {
        root: null,
        // this makes it switch when the left title hits mid-screen
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div
          ref={containerRef}
          className="grid md:grid-cols-[1.2fr_80px_1fr] gap-10 md:gap-6 items-start"
        >
          {/* LEFT: Big titles (scroll anchors) */}
          <div className="space-y-20 md:space-y-28">
            {experiences.map((exp, i) => (
              <div
                key={ids[i]}
                id={ids[i]}
                data-index={i}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className="scroll-mt-28"
              >
                <h3
                  className={`font-display font-extrabold leading-tight tracking-tight
                  text-4xl md:text-5xl lg:text-6xl
                  ${active === i ? "text-foreground" : "text-foreground/65"}`}
                >
                  {exp.role}
                </h3>

                <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-2">
                  <p className="text-primary/80 font-semibold">{exp.company}</p>
                  <p className="text-muted-foreground font-semibold">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MIDDLE: line + moving dot */}
          <div className="relative hidden md:flex justify-center">
            <div className="absolute top-0 bottom-0 w-px bg-border" />

            {/* moving dot */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"
              style={{
                top: `${active * 220}px`, // spacing; tweak if your gaps differ
                transition: "top 350ms ease",
              }}
            />

            {/* bottom knob */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary/25 border border-primary/40" />
          </div>

          {/* RIGHT: bullets for active experience */}
          <div className="md:sticky md:top-28">
            <ul className="space-y-4 text-lg leading-relaxed text-foreground/85">
              {experiences[active].points.map((p, j) => (
                <li key={j} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            {/* optional quick nav */}
            <div className="mt-10 flex flex-wrap gap-3">
              {experiences.map((_, i) => (
                <a
                  key={i}
                  href={`#${ids[i]}`}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition
                    ${
                      active === i
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground hover:text-primary hover:border-primary/60"
                    }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile fallback line (optional) */}
        <div className="md:hidden mt-12 text-center text-muted-foreground">
          Tip: Scroll — bullets update automatically.
        </div>
      </div>
    </section>
  );
};

export default Experience;
