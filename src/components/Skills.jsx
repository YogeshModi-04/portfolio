import { skills } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Stack</span>
          <h2 className="section-title">Tools of the trade</h2>
        </div>

        <div className="skills-rows" data-reveal>
          {skills.map((group) => (
            <div className="skills-row" key={group.category}>
              <p className="mono skills-category">{group.category}</p>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-rows {
          border-top: 1px solid var(--border-soft);
        }

        .skills-row {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: start;
          padding: clamp(1.25rem, 3vw, 1.75rem) 0;
          border-bottom: 1px solid var(--border-soft);
        }

        @media (max-width: 640px) {
          .skills-row {
            grid-template-columns: 1fr;
            gap: 0.9rem;
          }
        }

        .skills-category {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--fg-faint);
          padding-top: 0.35rem;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
}
