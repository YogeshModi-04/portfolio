import { caseStudies, education, certifications } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Track Record</span>
          <h2 className="section-title">Problems I've solved</h2>
        </div>

        <div className="cases">
          {caseStudies.map((c) => (
            <article className="case-study" key={c.title} data-reveal>
              <p className="case-title">{c.title}</p>
              <div className="case-part">
                <span className="case-label">Problem</span>
                <p className="case-text">{c.problem}</p>
              </div>
              <div className="case-part">
                <span className="case-label">Approach</span>
                <p className="case-text">{c.approach}</p>
              </div>
              <div className="case-part">
                <span className="case-label case-label-impact">Impact</span>
                <p className="case-text case-text-impact">{c.impact}</p>
              </div>
              <div className="case-tags">
                {c.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="credentials" data-reveal>
          <div className="credentials-col">
            <span className="credentials-label">Education</span>
            <div className="credential-item">
              <p className="credentials-main">{education.degree}</p>
              <p className="credentials-sub">
                {education.school} · {education.period} · {education.detail}
              </p>
            </div>
          </div>
          <div className="credentials-col">
            <span className="credentials-label">Certifications</span>
            {certifications.map((c) => (
              <div className="credential-item" key={c.credentialId}>
                <p className="credentials-main">{c.name}</p>
                <p className="credentials-sub">
                  {c.org} · Issued {c.issued} ·{" "}
                  <a className="credential-link" href={c.url} target="_blank" rel="noreferrer">
                    Verify
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cases {
          display: flex;
          flex-direction: column;
        }

        .case-study {
          max-width: 74ch;
          padding: clamp(1.75rem, 4vw, 2.5rem) 0;
          border-top: 1px solid var(--border-soft);
        }

        .case-study:last-child {
          border-bottom: 1px solid var(--border-soft);
        }

        .case-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(1.15rem, 2vw, 1.4rem);
          margin-bottom: 1.4rem;
        }

        .case-part {
          display: grid;
          grid-template-columns: 92px 1fr;
          gap: 1rem;
          margin-bottom: 0.9rem;
        }

        @media (max-width: 520px) {
          .case-part {
            grid-template-columns: 1fr;
            gap: 0.25rem;
          }
        }

        .case-label {
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--fg-faint);
          padding-top: 0.15rem;
        }

        .case-label-impact {
          color: var(--fg);
          font-weight: 600;
        }

        .case-text {
          color: var(--fg-soft);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .case-text-impact {
          color: var(--fg);
        }

        .case-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.4rem;
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
          gap: 0.9rem;
        }

        .credentials-label {
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--fg-faint);
        }

        .credential-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
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

        .credential-link {
          color: var(--fg-faint);
          text-decoration: none;
          border-bottom: 1px solid var(--border-soft);
        }

        .credential-link:hover {
          color: var(--fg-soft);
          border-color: var(--fg-faint);
        }
      `}</style>
    </section>
  );
}
