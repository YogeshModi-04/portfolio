import { faqs } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function FAQ() {
  const ref = useReveal();
  return (
    <section id="faq" className="section faq" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Quick answers</h2>
        </div>

        <div className="faq-list" data-reveal>
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary className="faq-question">
                {item.q}
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <style>{`
        .faq-list {
          border-top: 1px solid var(--border-soft);
        }

        .faq-item {
          border-bottom: 1px solid var(--border-soft);
          padding: 1.4rem 0;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.02rem;
          list-style: none;
        }

        .faq-question::-webkit-details-marker {
          display: none;
        }

        .faq-icon {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          color: var(--fg-faint);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .faq-item[open] .faq-icon {
          transform: rotate(45deg);
        }

        .faq-answer {
          color: var(--fg-soft);
          font-size: 0.95rem;
          line-height: 1.65;
          max-width: 68ch;
          margin-top: 0.9rem;
        }
      `}</style>
    </section>
  );
}
