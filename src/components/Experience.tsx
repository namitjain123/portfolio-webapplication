const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Company A",
    period: "Jan 2023 – Present",
    points: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored a team of 5 junior developers",
      "Reduced deployment time by 40% through CI/CD improvements",
    ],
  },
  {
    role: "Software Engineer",
    company: "Company B",
    period: "Jun 2020 – Dec 2022",
    points: [
      "Built and maintained RESTful APIs using Node.js and Express",
      "Implemented real-time features with WebSockets",
      "Improved test coverage from 45% to 90%",
    ],
  },
  {
    role: "Junior Developer",
    company: "Company C",
    period: "Jan 2019 – May 2020",
    points: [
      "Developed responsive front-end interfaces with React",
      "Collaborated with design team on UI/UX improvements",
      "Participated in agile ceremonies and code reviews",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              } pl-12 md:pl-0`}
            >
              {/* Dot */}
              <div
                className={`absolute top-2 w-3 h-3 rounded-full bg-primary left-[10px] md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"
                }`}
              />

              <div className="bg-card border border-border rounded-lg p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
                <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                <ul className="space-y-1">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;