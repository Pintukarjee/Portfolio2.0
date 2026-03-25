import { useState } from "react";
import { useTheme } from "../../hooks/useTheme.jsx";
import { NAV_LINKS } from "../../data/portfolioData.jsx";
import styles from "./Navbar.module.css";

export default function Navbar({ active }) {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <a href="#about" className={styles.logo} onClick={() => setMenuOpen(false)}>
        PK
      </a>

      {/* Desktop Links */}
      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`${styles.link} ${active === link.toLowerCase() ? styles.active : ""}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        {/* Theme toggle */}
        <button className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme">
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`${styles.mobileLink} ${active === link.toLowerCase() ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
