import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "practices", label: "Approach" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "affiliates", label: "Affiliated" },
  { id: "skills", label: "Skills" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ mark }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      let current = "";
      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = s.id;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <a className="nav-mark" href="#hero">
        {mark}
      </a>
      <div className="nav-links">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`nav-link${active === s.id ? " is-active" : ""}`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
