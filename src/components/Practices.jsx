import { practices } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Practices() {
  const ref = useReveal();
  return (
    <section id="practices" className="section practices" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">{practices.title}</h2>
        </div>

        <ul className="practice-list" data-reveal>
          {practices.items.map((item) => (
            <li className="practice-item" key={item.heading}>
              <p className="practice-heading">{item.heading}</p>
              <p className="practice-detail">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .practice-list {
          list-style: none;
          margin: 0;
          padding: clamp(1.75rem, 4vw, 2.5rem) 0 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: clamp(2rem, 5vw, 4rem);
          row-gap: 0;
          border-top: 1px solid var(--border-soft);
        }

        @media (max-width: 720px) {
          .practice-list {
            grid-template-columns: 1fr;
          }
        }

        .practice-item {
          padding: 0 0 clamp(1.5rem, 3vw, 2rem);
          margin-bottom: clamp(1.5rem, 3vw, 2rem);
          border-bottom: 1px solid var(--border-soft);
        }

        /* Drop the trailing divider on the last item of each column
           (the last two items on a two-column layout). */
        .practice-item:last-child,
        .practice-item:nth-last-child(2) {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        @media (max-width: 720px) {
          .practice-item:nth-last-child(2) {
            border-bottom: 1px solid var(--border-soft);
            margin-bottom: clamp(1.5rem, 3vw, 2rem);
            padding-bottom: clamp(1.5rem, 3vw, 2rem);
          }
        }

        .practice-heading {
          font-weight: 600;
          font-size: 1.08rem;
          margin-bottom: 0.5rem;
        }

        .practice-detail {
          color: var(--fg-soft);
          font-size: 0.98rem;
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
