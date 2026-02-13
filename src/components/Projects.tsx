import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration, inventory management, and real-time order tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    code: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop boards, and team analytics.",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    code: "#",
    demo: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by GPT with context awareness and multi-language support.",
    tech: ["Python", "FastAPI", "OpenAI", "Redis"],
    code: "#",
    demo: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard aggregating data from multiple social platforms with interactive charts.",
    tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
    code: "#",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description: "A beautiful weather application with 7-day forecasts, radar maps, and severe weather alerts.",
    tech: ["React Native", "TypeScript", "OpenWeather API"],
    code: "#",
    demo: "#",
  },
  {
    title: "Portfolio Generator",
    description: "A tool that generates customizable portfolio websites from a simple JSON configuration.",
    tech: ["Svelte", "Tailwind", "Vercel", "MDX"],
    code: "#",
    demo: "#",
  },
];

const INITIAL_SHOW = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="space-y-8">
          {visible.map((project, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <span className="font-display text-5xl font-bold text-primary/20 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.code}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > INITIAL_SHOW && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;