import { affiliates } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Affiliates() {
  const ref = useReveal();
  return (
    <section id="affiliates" className="section affiliates" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Affiliated Products</span>
          <h2 className="section-title">Products I'm partnered with</h2>
        </div>

        <div className="affiliates-list">
          {affiliates.map((a) => (
            <article className="affiliate-card card" key={a.name} data-reveal>
              <div className="affiliate-main">
                <p className="affiliate-by">{a.by}</p>
                <h3 className="affiliate-name">{a.name}</h3>
                <p className="affiliate-tagline">{a.tagline}</p>
                <p className="affiliate-desc">{a.description}</p>
              </div>
              <a className="btn affiliate-cta" href={a.link} target="_blank" rel="noreferrer">
                {a.linkLabel || "Learn more"}
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .affiliates-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .affiliate-card {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 2rem;
        }

        .affiliate-main {
          max-width: 62ch;
        }

        .affiliate-by {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--fg-faint);
          margin-bottom: 0.4rem;
        }

        .affiliate-name {
          font-size: 1.4rem;
          margin-bottom: 0.3rem;
        }

        .affiliate-tagline {
          font-size: 0.92rem;
          color: var(--fg-soft);
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .affiliate-desc {
          font-size: 0.92rem;
          color: var(--fg-soft);
          line-height: 1.62;
        }

        .affiliate-cta {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
