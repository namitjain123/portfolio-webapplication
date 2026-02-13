import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const subtitles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = subtitles[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-16"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary text-lg mb-4 tracking-widest uppercase">Welcome to my portfolio</p>
        <h1 className="font-display text-5xl sm:text-7xl font-bold text-foreground mb-6">
          Hi, I'm <span className="text-primary">[Your Name]</span>
        </h1>
        <div className="text-xl sm:text-2xl text-muted-foreground h-10 flex items-center justify-center">
          <span>{displayed}</span>
          <span className="border-r-2 ml-1 h-7 animate-typewriter-cursor" />
        </div>
        <a
          href="#projects"
          className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          View Projects
        </a>
      </div>
      <a href="#about" className="absolute bottom-10 text-muted-foreground animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;