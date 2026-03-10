import { CONTACT, PROFILE } from "../../data/portfolioData.jsx";
import SectionTitle from "../common/SectionTitle";
import styles from "./Contact.module.css";

const CONTACT_ITEMS = [
  { icon: "📧", label: "Email",    value: CONTACT.email,    href: `mailto:${CONTACT.email}` },
  { icon: "📱", label: "Phone",    value: CONTACT.phone,    href: `tel:${CONTACT.phone}`    },
  { icon: "📍", label: "Location", value: CONTACT.location, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.location)}` },
  { icon: "🐙", label: "GitHub",   value: "github.com/pintu", href: CONTACT.github          },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/pintu", href: CONTACT.linkedin   },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle label="Get In Touch" sub="Let's build something great together" />

        <div className={styles.grid}>
          {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href || "#"}
              className={styles.card}
              target={href && !href.startsWith("mailto") && !href.startsWith("tel") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span className={styles.cardIcon}>{icon}</span>
              <div>
                <p className={styles.cardLabel}>{label}</p>
                <p className={styles.cardValue}>{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            <img src={PROFILE.avatar} alt="PK" className={styles.footerAvatar} />
            <span className={styles.footerName}>{PROFILE.name}</span>
          </div>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} · Crafted with React ⚛️ &amp; ❤️
          </p>
        </footer>
      </div>
    </section>
  );
}
