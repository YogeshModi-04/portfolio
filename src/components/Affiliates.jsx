import { affiliates } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Affiliates() {
  const ref = useReveal();
  return (
    <section id="affiliates" className="section affiliates" ref={ref}>
      <div className="wrap">
        <div className="section-head section-head-solo">
          <h2 className="section-title">Products</h2>
        </div>

        <div className="affiliates-list">
          {affiliates.map((a) => (
            <article className="affiliate-card card" key={a.name} data-reveal>
              <div className="affiliate-main">
                <div className="affiliate-head">
                  <h3 className="affiliate-name">{a.name}</h3>
                  {a.by && (
                    <span className="affiliate-by">
                      by{" "}
                      {a.byLink ? (
                        <a href={a.byLink} target="_blank" rel="noreferrer">
                          {a.by}
                        </a>
                      ) : (
                        a.by
                      )}
                    </span>
                  )}
                </div>
                {a.tagline && <p className="affiliate-tagline">{a.tagline}</p>}
                {a.description && <p className="affiliate-desc">{a.description}</p>}
                {a.highlights && (
                  <ul className="affiliate-highlights">
                    {a.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="affiliate-actions">
                <a className="btn" href={a.link} target="_blank" rel="noreferrer">
                  Know more
                </a>
                <a className="btn btn-solid" href={a.demoLink} target="_blank" rel="noreferrer">
                  Book demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .section-head-solo {
          justify-content: flex-end;
        }

        .affiliates-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .affiliate-card {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem 2rem;
          padding: 2rem;
        }

        .affiliate-main {
          flex: 1;
          min-width: 280px;
          max-width: 64ch;
        }

        .affiliate-head {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.6rem 0.85rem;
          margin-bottom: 0.85rem;
        }

        .affiliate-name {
          font-size: 1.4rem;
        }

        .affiliate-by {
          font-size: 0.85rem;
          color: var(--fg-faint);
        }

        .affiliate-by a {
          color: var(--fg-soft);
          text-decoration: none;
          border-bottom: 1px solid var(--border-soft);
        }

        .affiliate-by a:hover {
          color: var(--fg);
          border-color: var(--fg-faint);
        }

        .affiliate-tagline {
          font-size: 0.98rem;
          font-weight: 500;
          color: var(--fg-soft);
          margin-bottom: 0.85rem;
        }

        .affiliate-desc {
          font-size: 0.92rem;
          color: var(--fg-soft);
          line-height: 1.62;
          margin-bottom: 1.1rem;
        }

        .affiliate-highlights {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.5rem 1.25rem;
        }

        .affiliate-highlights li {
          position: relative;
          padding-left: 1.1rem;
          font-size: 0.86rem;
          color: var(--fg-soft);
          line-height: 1.5;
        }

        .affiliate-highlights li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--fg-faint);
        }

        .affiliate-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
