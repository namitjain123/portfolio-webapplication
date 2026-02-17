import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const subtitles = [
  "You can find my work, thoughts and ideas here.",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = subtitles[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Background (Eby-like) */}
      <div className="absolute inset-0 -z-10 bg-[#071f1a]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b2b24]/40 via-transparent to-transparent" />

      <div className="w-full max-w-6xl text-center pt-16">
        {/* Top small text */}
        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#88b5a3] mb-6">
          Welcome to my AI and Data Science Portfolio
        </p>

        {/* Main heading */}
        <h1 className="font-display font-extrabold leading-[0.95] text-white text-5xl sm:text-7xl lg:text-8xl">
          Hi,
          <br />
          I&apos;m <span id="hero-name" className="text-primary cursor-none">
  Namit Jain
</span>

        </h1>

        {/* Divider line */}
        <div className="mx-auto mt-8 mb-6 h-px w-[260px] sm:w-[420px] bg-white/25" />

        {/* Subtitle (typewriter) */}
        <div className="mx-auto h-10 flex items-center justify-center text-base sm:text-lg text-white/75">
          <span>{displayed}</span>
          <span className="border-r-2 ml-1 h-6 sm:h-7 border-white/70 animate-typewriter-cursor" />
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-[#b9d4c7] px-7 py-3 font-semibold text-[#062018] hover:opacity-90 transition"
          >
            View Projects
          </a>
        </div>

        {/* Footer credit */}
        <p className="mt-14 text-xs text-white/40">Portfolio of Namit Jain</p>
      </div>

      {/* Down arrow */}
      <a
        href="#about"
        className="absolute bottom-10 text-white/60 hover:text-white transition animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
