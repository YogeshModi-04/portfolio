import { about } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section about" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Background</h2>
        </div>

        <div className="about-grid" data-reveal>
          <p className="about-bio">{about.bio}</p>

          <dl className="about-facts">
            {about.facts.map((f) => (
              <div className="about-fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: clamp(2rem, 6vw, 4.5rem);
          align-items: start;
        }

        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-bio {
          color: var(--fg-soft);
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .about-facts {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 0;
          padding: 1.5rem;
          border: 1px solid var(--border-soft);
          border-radius: var(--radius);
          background: var(--surface);
        }

        .about-fact {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.85rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-soft);
        }

        .about-fact:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }

        .about-fact dt {
          color: var(--fg-faint);
        }

        .about-fact dd {
          margin: 0;
          font-weight: 500;
          text-align: right;
        }
      `}</style>
    </section>
  );
}
