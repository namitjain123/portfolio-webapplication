import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Analyser-GPT: Digital Data Analyst",
    description:
      "Imagine needing quick, reliable insights from your data without writing code or worrying about errors. This project solves that problem by letting you upload a CSV file and instantly get clear analysis, visualizations, and answers to your questions. An intelligent digital analyst automates the entire workflow, so you can focus on decisions, not technical details",
    tech: ["Microsoft Autogen", "Multi-Agent Orchestration", "Agentic AI", "Streamlit","Docker","Secure Code Execution"],
    code: "https://github.com/namitjain123/Analyser-GPT",
    demo: "#",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "AI Blog Generation Platform with LangGraph and FastAPI",
    description:
      "Developed a production-ready AI blog generation system leveraging LangGraph-based state orchestration within a FastAPI backend. Engineered structured, multi-step AI pipelines for title generation, content drafting, and multilingual transformation with controlled execution logic. Built persistent storage using SQLite with full RESTful CRUD support and integrated a responsive React frontend for real-time content rendering and seamless user interaction.",
    tech: ["LangGraph", "FastAPI", "React", "Python", "SQLite", "Docker","Rag"],
    code: "https://github.com/namitjain123/blog-generator-using-langgraph",
    demo: "#",
    image: "/projects/task.jpg",
  },
  {
    title: "Adaptive RAG System with Self-Correcting Agent",
    description:
      "Built an AI-powered application where an agent dynamically routes queries between vector search and live web search before generating responses. Designed a stateful LangGraph workflow implementing self-correcting retrieval, retry logic, and validation instead of a single-pass LLM call. Implemented grounded response verification and transparent source logging to reduce hallucinations, improve reliability, and make the system debuggable and production-ready. Deployed the interactive interface using Streamlit for real-time query handling and response visualization.",
    tech: ["Python", "FastAPI", "LangGraph", "Streamlit","ChromaDB","Docker","Azure"],
    code: "https://github.com/namitjain123/Adaptive-Rag",
    demo: "#",
    image: "/projects/ai-chat.jpg",
  },
  {
    title: "Full-Stack Todo Management System",
    description:
      "Built a full-stack Todo Management system using FastAPI and SQLAlchemy with PostgreSQL (Supabase) as the database backend. Implemented secure JWT-based authentication along with Role-Based Access Control (RBAC), enabling protected routes and admin-only operations. Containerized the application using Docker and deployed it to Azure Container Apps, integrating Azure Container Registry (ACR) for scalable, cloud-ready infrastructure.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL (Supabase)","JWT Authentication","Docker","Azure"],
    code: "https://github.com/namitjain123/fast-api-scratch",
    demo: "#",
    image: "/projects/dashboard.jpg",
  },
  {
    title: "Customer Churn Analytics & Risk Prioritisation Dashboard",
    description:
      "Built a business-focused churn analytics system translating raw customer data into executive-ready KPIs and prioritised risk insights. Engineered an interpretable logistic regression model to classify churn probability while maintaining transparency for stakeholder decision-making. Delivered data-backed retention strategies focused on impact, feasibility, and measurable revenue protection.",
    tech: ["Python", "Machine Learning", "Logistic Regression","Customer Analytic","Data Visualisation"],
    code: "https://github.com/namitjain123/Customer-churn-data-analysis",
    demo: "#",
    image: "/projects/weather.jpg",
  },
  
];

const INITIAL_SHOW = 4;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  return (
    <section id="projects" className="py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* ✅ Grid like Eby */}
        <div className="grid gap-10 md:grid-cols-2">
          {visible.map((project, i) => (
            <article
              key={project.title}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-card shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-[240px] md:h-[260px] bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              {/* Light content area like Eby */}
              <div className="bg-[#f5f7f6] text-[#071f1a] p-7 md:p-8">
                {/* Number + divider */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-widest text-[#071f1a]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="my-4 h-px w-full bg-[#071f1a]/15" />

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  {project.title}
                </h3>

                {/* Desc */}
                <p className="mt-4 text-base md:text-lg leading-relaxed text-[#071f1a]/75">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs md:text-sm px-3 py-1 rounded-full"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* Buttons (Eby style) */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#071f1a] text-white px-7 py-3 text-base font-semibold hover:opacity-90 transition"
                  >
                    <Github size={18} />
                    Code <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#b9d4c7] text-[#071f1a] px-7 py-3 text-base font-semibold hover:opacity-90 transition"
                  >
                    Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show more / less */}
        {projects.length > INITIAL_SHOW && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-primary text-primary px-10 py-4 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
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
