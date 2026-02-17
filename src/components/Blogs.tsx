import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "From Chains to Graphs to Multi-Agent Systems: My Deep Dive into LangChain, LangGraph, and AutoGen",
    summary:
      "A personal comparison of three major frameworks: LangChain, LangGraph, and AutoGen. Learn how each one approaches workflows differently, from sequential chains to graph-based states to multi-agent collaboration, and when to use them.",
    link: "https://medium.com/@namitjain0620/from-chains-to-graphs-to-multi-agent-systems-my-deep-dive-into-langchain-langgraph-and-autogen-f4012f12ae99",
  },
  
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Latest <span className="text-primary">Blogs</span>
        </h2>

        {/* ✅ Eby-style 2 column grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="bg-white text-[#071f1a] rounded-3xl border border-black/10 shadow-xl p-12 transition-transform duration-300 hover:scale-[1.01]"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
                {blog.title}
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-[#071f1a]/75">
                {blog.summary}
              </p>

              <div className="mt-10">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 
                             rounded-full bg-[#b9d4c7] 
                             text-[#071f1a] 
                             px-10 py-4 
                             text-lg font-semibold 
                             hover:opacity-90 transition"
                >
                  Read Article
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
