import { testimonials } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section id="testimonials" className="section testimonials" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">What people say</h2>
        </div>

        <div className="testimonials-grid" data-reveal>
          {testimonials.map((t) => (
            <figure className="testimonial card" data-reveal key={t.name}>
              <span className="testimonial-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <figcaption className="testimonial-by">
                <span className="testimonial-avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <span className="testimonial-meta">
                  {t.link ? (
                    <a className="testimonial-name" href={t.link} target="_blank" rel="noreferrer">
                      {t.name}
                    </a>
                  ) : (
                    <span className="testimonial-name">{t.name}</span>
                  )}
                  <span className="testimonial-role">
                    {t.title}
                    {t.company && (
                      <>
                        {" · "}
                        {t.companyUrl ? (
                          <a href={t.companyUrl} target="_blank" rel="noreferrer">
                            {t.company}
                          </a>
                        ) : (
                          t.company
                        )}
                      </>
                    )}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.25rem;
        }

        .testimonial {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: clamp(1.5rem, 3vw, 2rem);
          margin: 0;
          opacity: 0;
          transform: translateX(-48px);
        }

        /* Staggered slide-in as each card enters view */
        .testimonial.is-visible {
          animation: testimonial-slide 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .testimonial.is-visible:nth-child(2) {
          animation-delay: 0.13s;
        }

        .testimonial.is-visible:nth-child(3) {
          animation-delay: 0.26s;
        }

        @keyframes testimonial-slide {
          from {
            opacity: 0;
            transform: translateX(-48px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Border glow is provided globally by .card (see index.css) */

        .testimonial-mark {
          font-family: var(--font-display);
          font-size: 2.75rem;
          line-height: 0.6;
          color: var(--fg-faint);
          margin-bottom: 0.75rem;
        }

        .testimonial-quote {
          margin: 0 0 1.5rem;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--fg-soft);
          flex: 1;
        }

        .testimonial-by {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-soft);
        }

        .testimonial-avatar {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--surface);
          border: 1px solid var(--border-soft);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--fg-soft);
        }

        .testimonial-meta {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 0;
        }

        .testimonial-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--fg);
          text-decoration: none;
        }

        a.testimonial-name:hover {
          text-decoration: underline;
        }

        .testimonial-role {
          font-size: 0.82rem;
          color: var(--fg-faint);
        }

        .testimonial-role a {
          color: var(--fg-faint);
          text-decoration: none;
          border-bottom: 1px solid var(--border-soft);
        }

        .testimonial-role a:hover {
          color: var(--fg-soft);
          border-color: var(--fg-faint);
        }
      `}</style>
    </section>
  );
}
