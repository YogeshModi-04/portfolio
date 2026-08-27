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

        <div className="skills-grid" data-reveal>
          {skills.map((group) => (
            <div className="skills-group" key={group.category}>
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
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .skills-category {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--fg-faint);
          margin-bottom: 0.9rem;
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
