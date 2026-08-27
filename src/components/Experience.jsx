import { experience, education, certifications } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Track record</h2>
        </div>

        <div className="timeline">
          {experience.map((e) => (
            <div className="timeline-row" key={`${e.role}-${e.org}`} data-reveal>
              <span className="timeline-period">{e.period}</span>
              <div className="timeline-body">
                <h3 className="timeline-role">{e.role}</h3>
                <p className="timeline-org">{e.org}</p>
                <p className="timeline-summary">{e.summary}</p>
                <div className="timeline-tags">
                  {e.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="credentials" data-reveal>
          <div className="credentials-col">
            <span className="credentials-label">Education</span>
            <p className="credentials-main">{education.degree}</p>
            <p className="credentials-sub">
              {education.school} · {education.period} · {education.detail}
            </p>
          </div>
          <div className="credentials-col">
            <span className="credentials-label">Certifications</span>
            {certifications.map((c) => (
              <div key={c.name}>
                <p className="credentials-main">{c.name}</p>
                <p className="credentials-sub">
                  {c.org} — {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline {
          border-top: 1px solid var(--border-soft);
        }

        .timeline-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: clamp(1.5rem, 4vw, 3rem);
          padding: clamp(1.75rem, 4vw, 2.5rem) 0;
          border-bottom: 1px solid var(--border-soft);
        }

        @media (max-width: 640px) {
          .timeline-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }

        .timeline-period {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--fg-faint);
        }

        .timeline-role {
          font-size: clamp(1.2rem, 2.2vw, 1.5rem);
          margin-bottom: 0.35rem;
        }

        .timeline-org {
          font-size: 0.88rem;
          color: var(--fg-faint);
          margin-bottom: 1rem;
        }

        .timeline-summary {
          color: var(--fg-soft);
          font-size: 0.96rem;
          line-height: 1.65;
          max-width: 62ch;
          margin-bottom: 1.25rem;
        }

        .timeline-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .credentials {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(1.5rem, 4vw, 3rem);
          padding-top: clamp(1.75rem, 4vw, 2.5rem);
        }

        @media (max-width: 640px) {
          .credentials {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .credentials-col {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .credentials-label {
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--fg-faint);
          margin-bottom: 0.25rem;
        }

        .credentials-main {
          font-size: 0.95rem;
          font-weight: 600;
        }

        .credentials-sub {
          font-size: 0.85rem;
          color: var(--fg-faint);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
