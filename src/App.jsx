import { useState, useEffect } from "react";

import { ThemeProvider } from "./context/ThemeProvider.jsx";
import { useActiveSection } from "./hooks/useActiveSection.jsx";

import SkeletonLoader from "./components/common/SkeletonLoader";
import ScrollToTop    from "./components/common/ScrollToTop";
import Navbar         from "./components/Navbar/Navbar";
import Hero           from "./components/Hero/Hero";
import Skills         from "./components/Skills/Skills";
import Education      from "./components/Education/Education";
import Projects       from "./components/Projects/Projects";
import Contact        from "./components/Contact/Contact";

import "./styles/global.css";

function Portfolio() {
  const [ready, setReady] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    // Show skeleton for ~2 s, then reveal the app
    const t = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return <SkeletonLoader />;

  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
