import { profile, contact } from "../data/content";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="contact">
      <div className="wrap contact-inner">
        <span className="eyebrow contact-eyebrow">Contact</span>

        <div className="contact-grid">
          <div className="contact-lead">
            <h2 className="contact-headline">{contact.headline}</h2>
            <p className="contact-sub">{contact.sub}</p>

            <div className="contact-methods">
              <a className="contact-method" href={`mailto:${profile.email}`}>
                <span className="contact-method-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 5.5L10 11L17 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">{profile.email}</span>
                </span>
              </a>

              <div className="contact-method">
                <span className="contact-method-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M10 18s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>
                  <span className="contact-method-label">Location</span>
                  <span className="contact-method-value">{profile.location}</span>
                </span>
              </div>
            </div>

            <div className="contact-social">
              <span className="contact-social-label">Connect</span>
              <div className="contact-social-icons">
                <a
                  className="contact-social-icon"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M6.5 8.7V14M6.5 6.3v.05M10 14v-3.3c0-1.15.75-1.9 1.8-1.9 1 0 1.7.7 1.7 1.9V14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="contact-social-icon"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub / ${profile.githubHandle}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-schedule">
            <span className="contact-schedule-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M9 14.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <p className="contact-schedule-title">Book a 30-minute call</p>
            <p className="contact-schedule-sub">
              Grab a time that works for you and we'll talk it through over Google Meet — what
              you're building, and how I can help.
            </p>

            <a
              className="btn btn-solid contact-schedule-btn"
              href={profile.calendly}
              target="_blank"
              rel="noreferrer"
            >
              Schedule a meeting
            </a>

            <a className="contact-schedule-alt" href={`mailto:${profile.email}`}>
              or email me directly
            </a>

            <p className="contact-form-note">Typically respond within 24 hours</p>
          </div>
        </div>

        <div className="contact-footer">
          <span className="mono">{profile.location}</span>
          <span className="mono">&copy; {year} {profile.fullName}</span>
        </div>
      </div>

      <style>{`
        .contact {
          background: var(--invert-bg);
          color: var(--invert-fg);
          padding-top: clamp(4rem, 10vw, 6rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
        }

        .contact-eyebrow {
          color: var(--invert-fg-soft);
          display: block;
          margin-bottom: 1.25rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(2.5rem, 6vw, 4.5rem);
          margin-bottom: clamp(3rem, 7vw, 4.5rem);
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-headline {
          font-size: clamp(2rem, 5vw, 3.1rem);
          margin-bottom: 1.25rem;
          max-width: 640px;
        }

        .contact-sub {
          color: var(--invert-fg-soft);
          font-size: 1.02rem;
          max-width: 48ch;
          margin-bottom: clamp(2rem, 4vw, 2.5rem);
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin-bottom: clamp(2rem, 4vw, 2.5rem);
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          color: inherit;
          text-decoration: none;
        }

        .contact-method-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--invert-fg-soft);
          border-radius: var(--radius);
        }

        .contact-method-label {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--invert-fg-soft);
          margin-bottom: 0.2rem;
        }

        .contact-method-value {
          display: block;
          font-size: 0.95rem;
        }

        a.contact-method:hover .contact-method-icon {
          border-color: var(--invert-fg);
        }

        a.contact-method:hover .contact-method-value {
          text-decoration: underline;
        }

        .contact-social {
          padding-top: clamp(1.5rem, 3vw, 2rem);
          border-top: 1px solid var(--invert-fg-soft);
        }

        .contact-social-label {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--invert-fg-soft);
          margin-bottom: 0.9rem;
        }

        .contact-social-icons {
          display: flex;
          gap: 0.75rem;
        }

        .contact-social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--invert-fg-soft);
          border-radius: var(--radius);
          color: var(--invert-fg);
        }

        .contact-social-icon:hover {
          background: var(--invert-fg);
          color: var(--invert-bg);
        }

        .contact .btn {
          border-color: var(--invert-fg);
          color: var(--invert-fg);
        }

        .contact .btn:hover {
          background: var(--invert-fg);
          color: var(--invert-bg);
        }

        .contact .btn-solid {
          background: var(--invert-fg);
          color: var(--invert-bg);
        }

        .contact .btn-solid:hover {
          background: transparent;
          color: var(--invert-fg);
        }

        .contact-schedule {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.9rem;
          padding: clamp(2rem, 4vw, 2.75rem) clamp(1.5rem, 3vw, 2rem);
          border: 1px solid var(--invert-fg-soft);
          border-radius: var(--radius);
        }

        .contact-schedule-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border: 1px solid var(--invert-fg-soft);
          border-radius: 50%;
          color: var(--invert-fg);
          margin-bottom: 0.35rem;
        }

        .contact-schedule-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.35rem;
        }

        .contact-schedule-sub {
          color: var(--invert-fg-soft);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 34ch;
        }

        .contact-schedule-btn {
          margin-top: 0.6rem;
          border-radius: var(--radius);
        }

        .contact-schedule-alt {
          font-size: 0.85rem;
          color: var(--invert-fg-soft);
          text-decoration: none;
          border-bottom: 1px solid var(--invert-fg-soft);
          padding-bottom: 1px;
        }

        .contact-schedule-alt:hover {
          color: var(--invert-fg);
          border-color: var(--invert-fg);
        }

        .contact-form-note {
          margin-top: 0.6rem;
          padding-top: 1rem;
          width: 100%;
          border-top: 1px solid var(--invert-fg-soft);
          font-size: 0.78rem;
          color: var(--invert-fg-soft);
          text-align: center;
        }

        .contact-footer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--invert-fg-soft);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--invert-fg-soft);
        }
      `}</style>
    </footer>
  );
}
