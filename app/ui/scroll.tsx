"use client";

import { useEffect, useState } from "react";

export default function Scroll() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.id));
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 pr-12">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-5 h-5 rounded-full border transition-all duration-300 ${
            active === i
              ? "bg-[#b18918] border-[#b18918]"
              : "bg-transparent border-black"
          }`}
        />
      ))}
    </div>
  );
}
