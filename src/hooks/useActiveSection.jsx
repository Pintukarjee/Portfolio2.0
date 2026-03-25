import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "../data/portfolioData.jsx";

export function useActiveSection() {
  const [active, setActive] = useState("about");
  const rafRef = useRef(null);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.toLowerCase());
    const NAVBAR_HEIGHT = 100;
    const OFFSET = 10;

    const update = () => {
      const triggerY = NAVBAR_HEIGHT + OFFSET;

      let closestSection = active;
      let minDistance = Infinity;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { top } = el.getBoundingClientRect();
        const distance = Math.abs(top - triggerY);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      }

      if (closestSection !== active) {
        setActive(closestSection);
      }
    };

    update();

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  return active;
}