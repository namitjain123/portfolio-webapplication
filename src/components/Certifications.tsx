import { Award } from "lucide-react";

const certs = [
  { title: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2024", link: "#" },
  { title: "Google Cloud Professional", issuer: "Google", year: "2023", link: "#" },
  { title: "Kubernetes Administrator", issuer: "CNCF", year: "2023", link: "#" },
  { title: "React Advanced Patterns", issuer: "Frontend Masters", year: "2022", link: "#" },
  { title: "Machine Learning Specialization", issuer: "Coursera / Stanford", year: "2022", link: "#" },
  { title: "Cybersecurity Fundamentals", issuer: "CompTIA", year: "2021", link: "#" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors hover-scale block"
            >
              <Award className="text-primary mb-4" size={32} />
              <h3 className="text-foreground font-semibold mb-1">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              <p className="text-primary text-xs mt-2">{cert.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
