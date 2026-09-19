import { about, profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section about" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-body" data-reveal>
          {profile.photoUrl ? (
            <img
              className="about-photo"
              src={profile.photoUrl}
              alt={`${profile.fullName} — ${profile.role}`}
              width="1006"
              height="930"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="about-photo about-photo-placeholder">
              <span>{profile.initials}</span>
            </div>
          )}

          {about.bio.map((chunk, i) => (
            <p key={i}>{chunk}</p>
          ))}
        </div>
      </div>

      <style>{`
        /* The photo sits inside the text flow rather than in its own column:
           on wide screens it floats and the copy wraps around it, and on
           narrow screens the float drops so it stacks above the copy. Being
           first in the DOM keeps reading order the same as visual order. */
        .about-body {
          display: flow-root;
          max-width: 78ch;
          color: var(--fg-soft);
          font-size: 1.02rem;
          line-height: 1.7;
        }

        .about-body p + p {
          margin-top: 1rem;
        }

        .about-photo {
          float: right;
          width: 38%;
          max-width: 270px;
          height: auto;
          margin: 0.35rem 0 1.25rem 2rem;
          border-radius: var(--radius);
          border: 1px solid var(--border-soft);
        }

        /* The headshot's studio backdrop sits around luminance 198, which is
           close to the white page in light mode but glares against the #111
           dark page. Ease it back just in dark mode. Both selectors are needed:
           the media query for system preference, the attribute for an explicit
           override -- same pattern as the tokens in index.css. */
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .about-photo {
            filter: brightness(0.78) contrast(1.04);
            border-color: rgba(245, 245, 245, 0.22);
          }
        }

        :root[data-theme="dark"] .about-photo {
          filter: brightness(0.78) contrast(1.04);
          border-color: rgba(245, 245, 245, 0.22);
        }

        @media (max-width: 860px) {
          .about-photo {
            float: none;
            width: 100%;
            max-width: 420px;
            /* auto side margins centre it once the column is wider than the
               420px cap (tablet); a no-op on phones, where it fills the width */
            margin: 0 auto 1.75rem;
          }
        }

        .about-photo-placeholder {
          aspect-ratio: 4 / 5;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(2rem, 5vw, 3rem);
          color: var(--fg-faint);
        }
      `}</style>
    </section>
  );
}
