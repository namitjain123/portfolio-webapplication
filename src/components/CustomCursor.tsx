import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoverName, setHoverName] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const nameEl = document.getElementById("hero-name");

    if (nameEl) {
      nameEl.addEventListener("mouseenter", () => setHoverName(true));
      nameEl.addEventListener("mouseleave", () => setHoverName(false));
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] 
      rounded-full transition-all duration-300 ease-out
      flex items-center justify-center
      ${
        hoverName
          ? "w-40 h-40 bg-primary scale-100"
          : "w-6 h-6 bg-primary/60 scale-100"
      }`}
      style={{ translate: "-50% -50%" }}
    >
      {hoverName && (
        <img
          src="/profile.jpg"   // 🔥 put your image inside public folder
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      )}
    </div>
  );
};

export default CustomCursor;
