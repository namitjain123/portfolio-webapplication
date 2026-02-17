import { ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Azure az-900: Microsoft Azure Fundamentals",
    issuer: "Azure",
    year: "2026",
    link: "#",
    image: "/certs/aws.png",
  },
  {
    title: "Complete Agentic AI Bootcamp With LangGraph and Langchain",
    issuer: "Udemy",
    year: "2026",
    link: "#",
    image: "/certs/gcp.png",
  },
  {
    title: "Complete Generative AI Course With Langchain and Huggingface",
    issuer: "Udemy",
    year: "2023",
    link: "#",
    image: "/certs/k8s.png",
  },
  {
    title: "Building AI Agents & Agentic AI System via Microsoft Autogen",
    issuer: "Udemy",
    year: "2026",
    link: "#",
    image: "/certs/frontendmasters.png",
  },

];

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        {/* ✅ Eby-style horizontal row */}
        <div className="relative">
          <div className="overflow-x-auto scroll-smooth">
            <div className="flex gap-8 w-max pb-2">
              {certs.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="w-[320px] sm:w-[360px] bg-white text-[#071f1a] rounded-3xl border border-black/10 shadow-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                    {/* Image area */}
                    <div className="h-[170px] flex items-center justify-center bg-white">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="max-h-[120px] max-w-[220px] object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-8 text-center">
                      <h3 className="text-2xl font-extrabold leading-tight">
                        {cert.title}
                      </h3>

                      <p className="mt-3 text-base text-[#071f1a]/70">
                        {cert.issuer}
                      </p>

                      <p className="mt-6 text-sm font-semibold tracking-widest text-[#9cc8b6]">
                        {cert.year}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071f1a]/60 group-hover:text-[#071f1a] transition">
                        View <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* small side fade like Eby */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
