import { about, profile } from "../data/content";
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
          <div className="about-bio">
            {about.bio.map((chunk, i) => (
              <p key={i}>{chunk}</p>
            ))}
          </div>

          <div className="about-side">
            {profile.photoUrl ? (
              <img className="about-photo" src={profile.photoUrl} alt={profile.fullName} />
            ) : (
              <div className="about-photo about-photo-placeholder">
                <span>{profile.initials}</span>
              </div>
            )}

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
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: var(--fg-soft);
          font-size: 1.02rem;
          line-height: 1.7;
        }

        .about-side {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-photo {
          width: 100%;
          max-width: 210px;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: top center;
          border-radius: var(--radius);
          border: 1px solid var(--border-soft);
          align-self: flex-start;
        }

        .about-photo-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(2rem, 5vw, 3rem);
          color: var(--fg-faint);
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
