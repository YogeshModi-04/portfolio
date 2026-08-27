import { profile, heroMeta, about } from "../data/content";

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="wrap hero-inner">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow hero-eyebrow">Architecture · AI/ML Engineering · Delivery</p>

            <h1 className="hero-name">Yogesh Modi</h1>

            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-role-row">
              <p className="hero-role">{profile.role}</p>
              <p className="hero-sub">{profile.subRole}</p>
            </div>

            <p className="hero-statement">{about.statement}</p>

            <div className="hero-actions">
              <a className="btn btn-solid" href="#projects">
                View work
              </a>
              <a className="btn" href="#contact">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 5.5L10 11L17 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Contact me
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap" aria-hidden={profile.photoUrl ? undefined : "true"}>
            {profile.photoUrl ? (
              <img className="hero-photo" src={profile.photoUrl} alt={profile.fullName} />
            ) : (
              <div className="hero-photo-placeholder">
                <span>{profile.initials}</span>
              </div>
            )}
          </div>
        </div>

        <div className="hero-meta">
          {heroMeta.map((m) => (
            <div className="hero-meta-item" key={m.label}>
              <span className="hero-meta-label">{m.label}</span>
              <span className="hero-meta-value">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: clamp(7rem, 14vw, 9rem);
          padding-bottom: clamp(3.5rem, 7vw, 5.5rem);
          border-bottom: 1px solid var(--border-soft);
        }

        .hero-grid {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: clamp(2rem, 6vw, 4rem);
          margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
        }

        .hero-text {
          flex: 1;
          min-width: 0;
        }

        .hero-eyebrow {
          margin-bottom: 1.25rem;
        }

        .hero-name {
          font-size: clamp(2.75rem, 7vw, 4.75rem);
          margin-bottom: 0.6rem;
        }

        .hero-tagline {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(1.15rem, 2.4vw, 1.5rem);
          color: var(--fg-soft);
          margin-bottom: clamp(1.25rem, 3vw, 1.75rem);
        }

        .hero-role-row {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0.4rem 0.9rem;
          margin-bottom: clamp(1.5rem, 3vw, 2rem);
        }

        .hero-role {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          font-weight: 600;
        }

        .hero-sub {
          font-size: 0.92rem;
          color: var(--fg-faint);
        }

        .hero-statement {
          font-size: clamp(1.1rem, 2.2vw, 1.35rem);
          color: var(--fg-soft);
          max-width: 46ch;
          line-height: 1.55;
          margin-bottom: clamp(2rem, 4vw, 2.75rem);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .hero-photo-wrap {
          flex-shrink: 0;
          width: clamp(120px, 16vw, 176px);
          height: clamp(120px, 16vw, 176px);
        }

        .hero-photo,
        .hero-photo-placeholder {
          width: 100%;
          height: 100%;
          border-radius: var(--radius);
          border: 1px solid var(--border-soft);
        }

        .hero-photo {
          object-fit: cover;
        }

        .hero-photo-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          color: var(--fg-faint);
        }

        @media (max-width: 700px) {
          .hero-grid {
            flex-direction: column-reverse;
          }

          .hero-photo-wrap {
            width: 80px;
            height: 80px;
          }
        }

        .hero-meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1.5rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--border-soft);
        }

        .hero-meta-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .hero-meta-label {
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--fg-faint);
        }

        .hero-meta-value {
          font-size: 0.92rem;
          color: var(--fg-soft);
        }
      `}</style>
    </header>
  );
}
