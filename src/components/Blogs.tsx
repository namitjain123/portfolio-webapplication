import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Building Scalable APIs with Node.js",
    summary: "A deep dive into best practices for designing and building production-ready RESTful APIs that can handle millions of requests.",
    link: "#",
  },
  {
    title: "The Future of Web Development in 2025",
    summary: "Exploring emerging trends like server components, edge computing, and AI-assisted development workflows.",
    link: "#",
  },
  {
    title: "Mastering TypeScript Generics",
    summary: "A comprehensive guide to understanding and applying TypeScript generics for type-safe, reusable code.",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
          Latest <span className="text-primary">Blogs</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors flex flex-col"
            >
              <h3 className="text-foreground font-semibold text-lg mb-3">{blog.title}</h3>
              <p className="text-muted-foreground text-sm flex-1 mb-4">{blog.summary}</p>
              <a
                href={blog.link}
                className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
              >
                Read Article <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;