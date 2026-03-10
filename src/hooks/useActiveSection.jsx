import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData.jsx";

export function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.toLowerCase());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
