import { practices } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function Column({ data }) {
  return (
    <div className="practice-col" data-reveal>
      <h3 className="practice-col-title">{data.title}</h3>
      <ul className="practice-list">
        {data.items.map((item) => (
          <li className="practice-item" key={item.heading}>
            <p className="practice-heading">{item.heading}</p>
            <p className="practice-detail">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Practices() {
  const ref = useReveal();
  return (
    <section id="practices" className="section practices" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Working Style</span>
          <h2 className="section-title practices-title">
            Built to ship. Trusted to lead the client relationship.
          </h2>
        </div>

        <div className="practices-grid">
          <Column data={practices.engineering} />
          <Column data={practices.client} />
        </div>
      </div>

      <style>{`
        .practices-title {
          max-width: 640px;
        }

        .practices-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
        }

        @media (max-width: 860px) {
          .practices-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .practice-col-title {
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-soft);
        }

        .practice-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .practice-item {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-soft);
        }

        .practice-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .practice-heading {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.45rem;
        }

        .practice-detail {
          color: var(--fg-soft);
          font-size: 0.92rem;
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
