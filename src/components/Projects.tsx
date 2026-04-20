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
    demo: "https://youtu.be/9KoACMW-f30",
    image: "/projects/analyser-gpt.png",
  },
  {
    title: "n8n Video Automation (Image→ AI Video)",
    description:
      "ou start with a photo and an idea, and instead of juggling tools to get a short video, you just chat: upload, review, refine, generate. The system edits the image, cleans the prompt, converts and hosts media, runs the video model, and delivers a ready 16:9 video. Ideal for reels, shorts, and quick product or personal concepts without breaking creative flow.",
    tech: ["n8n ", "Gemini 2.5 Flash (image editing)", "OpenAI (intent parsing & prompt refinement)", "Veo3_fast via ","KIE.ai (video generation)"],
    code: "https://github.com/namitjain123/video-generator.git",
    demo: "https://youtu.be/12xjfHGmEH4",
    image: "/projects/video-generation.jpg",
  },
  
  {
    title: "AutoGen-MCP Notion Workspace Agent",
    description:
      "Picture the frustration of managing your Notion workspace like manually creating pages for every research topic, struggling to find that important document buried somewhere, or spending precious time organizing scattered information. This project eliminates that hassle by building an AI agent that understands requests like 'find all my marketing research' or 'create a project page with these details' and handles everything instantly through natural conversation.",
    tech: ["Python", "Flask", "AutoGen Framework", "Model Context Protocol","Ngrok"],
    code: "https://github.com/namitjain123/autogen-mcp.git",
    demo: "https://youtu.be/SDL67lZjtCA",
    image: "/projects/autogen-mcp.jpg",
  },
   {
    title: "AI Blog Generation Platform with LangGraph and FastAPI",
    description:
      "Developed a production-ready AI blog generation system leveraging LangGraph-based state orchestration within a FastAPI backend. Engineered structured, multi-step AI pipelines for title generation, content drafting, and multilingual transformation with controlled execution logic. Built persistent storage using SQLite with full RESTful CRUD support and integrated a responsive React frontend for real-time content rendering and seamless user interaction.",
    tech: ["LangGraph", "FastAPI", "React", "Python", "SQLite", "Docker","Rag"],
    code: "https://github.com/namitjain123/blog-generator-using-langgraph",
    demo: "https://youtu.be/9KoACMW-f30",
    image: "/projects/ai-blog-langraph.png",
  },
   {
    title: "AI Trip Planner",
    description:
      "Imagine planning a trip where you have to juggle weather forecasts, find the best places to visit, convert currencies, and manage expenses and more all while ensuring everything fits your budget and schedule. This project solves that exact problem by creating an intelligent AI agent that orchestrates multiple tools seamlessly",
    tech: ["Langchain", "Langsmith", "LangGraph", "Agentic AI","Streamlit","FastAPI","Python"],
    code: "https://github.com/namitjain123/ai-planner.git",
    demo: "https://youtu.be/OYwdOVNtgKs",
    image: "/projects/adaptive-rag.jpg",
  },
  {
    title: "Full-Stack Todo Management System",
    description:
      "Built a full-stack Todo Management system using FastAPI and SQLAlchemy with PostgreSQL (Supabase) as the database backend. Implemented secure JWT-based authentication along with Role-Based Access Control (RBAC), enabling protected routes and admin-only operations. Containerized the application using Docker and deployed it to Azure Container Apps, integrating Azure Container Registry (ACR) for scalable, cloud-ready infrastructure.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL (Supabase)","JWT Authentication","Docker","Azure"],
    code: "https://github.com/namitjain123/fast-api-scratch",
    demo: "https://youtu.be/9KoACMW-f30",
    image: "/projects/todo-fastapi-azure.png",
  },
  {
    title: "Customer Churn Analytics & Risk Prioritisation Dashboard",
    description:
      "Built a business-focused churn analytics system translating raw customer data into executive-ready KPIs and prioritised risk insights. Engineered an interpretable logistic regression model to classify churn probability while maintaining transparency for stakeholder decision-making. Delivered data-backed retention strategies focused on impact, feasibility, and measurable revenue protection.",
    tech: ["Python", "Machine Learning", "Logistic Regression","Customer Analytic","Data Visualisation"],
    code: "https://github.com/namitjain123/Customer-churn-data-analysis",
    demo: "https://youtu.be/9KoACMW-f30",
    image: "/projects/churn-dashboard.png",
  },
  {
    title: "Production-Grade Machine Learning Pipeline for Student Performance Prediction ",
    description:
      "Designed a modular machine learning pipeline covering data ingestion, training, validation, and model selection, evaluating multiple regression models to select the best performer based on validation metrics. Deployed the solution on AWS EC2 using Docker with CI/CD automation to simulate enterprise-grade delivery workflows.",
    tech: [
  "Python",
  "Pandas",
  "Scikit-learn",
  "Logistic Regression",
  "Feature Engineering",
  "Model Evaluation",
  "Matplotlib",
  "Seaborn"
],
    code: "https://github.com/namitjain123/mlprojects.git",
    demo: "https://youtu.be/qfW1xQLHeDA",
    image: "/projects/ml-prediction.png",
  },
  {
    title: "Chest Disease Prediction using Transfer Learning & MLOps",
    description:
      "Built an end-to-end deep learning pipeline for chest X-ray classification using transfer learning with VGG16, achieving 85–90% validation accuracy.Designed a modular, configuration-driven training workflow with MLflow and DagsHub integration for experiment tracking and reproducibility, and deployed a Flask-based API for real-time inference",
   tech: [
  "Python",
  "TensorFlow",
  "Keras",
  "Transfer Learning (VGG16)",
  "ImageDataGenerator",
  "MLflow",
  "DagsHub",
  "DVC",
  "Flask",
  "Docker",
  "YAML"
],
    code: "https://github.com/namitjain123/deep-learning-chest-disease",
    demo: "https://youtu.be/9KoACMW-f30",
    image: "/projects/lung-disease.png",
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
