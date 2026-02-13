import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image gallery placeholder */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-secondary flex items-center justify-center text-muted-foreground text-sm"
              >
                Photo {i}
              </div>
            ))}
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;