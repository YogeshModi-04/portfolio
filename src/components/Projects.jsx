import { projects } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Case Studies</span>
          <h2 className="section-title">Selected builds</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card card" key={p.id} data-reveal>
              <div className="project-card-top">
                <span className="project-tagline">{p.tagline}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              {p.link && (
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                  {p.linkLabel || "Learn more"} &rarr;
                </a>
              )}
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          padding: 1.75rem;
        }

        .project-card-top {
          display: flex;
          justify-content: flex-start;
        }

        .project-tagline {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--fg-faint);
        }

        .project-title {
          font-size: 1.3rem;
        }

        .project-desc {
          color: var(--fg-soft);
          font-size: 0.92rem;
          line-height: 1.62;
          flex: 1;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 0.9rem;
          border-top: 1px solid var(--border-soft);
        }

        .project-link {
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          margin-top: 0.2rem;
        }

        .project-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
