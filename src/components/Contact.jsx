import { useState } from "react";
import { profile, contact } from "../data/content";

const INITIAL_FORM = { name: "", contact: "", message: "", website: "" };

export default function Contact() {
  const year = new Date().getFullYear();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.website) return; // honeypot tripped — say nothing, do nothing

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("sent");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Portfolio contact"
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nContact: ${form.contact}\n\n${form.message}`
  )}`;

  return (
    <footer id="contact" className="contact">
      <div className="wrap contact-inner">
        <span className="eyebrow contact-eyebrow">Contact</span>

        <div className="contact-grid">
          <div className="contact-lead">
            <h2 className="contact-headline">{contact.headline}</h2>
            <p className="contact-sub">{contact.sub}</p>

            <div className="contact-actions">
              <a className="btn btn-solid" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub / {profile.githubHandle}
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p className="contact-form-title">Send a message</p>

            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={update("name")}
                autoComplete="name"
              />
            </label>

            <label className="contact-field">
              <span>Email or phone</span>
              <input
                type="text"
                name="contact"
                required
                value={form.contact}
                onChange={update("contact")}
                autoComplete="email"
              />
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={update("message")}
              />
            </label>

            {/* Honeypot — hidden from real visitors, catches simple bots */}
            <label className="contact-hp" aria-hidden="true">
              <span>Website</span>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={update("website")}
              />
            </label>

            <button className="btn btn-solid contact-submit" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <div className="contact-form-status" role="status">
              {status === "sent" && <p className="contact-status-ok">Message sent — thanks, I'll get back to you soon.</p>}
              {status === "error" && (
                <p className="contact-status-error">
                  Couldn't send that just now. Please{" "}
                  <a href={mailtoHref}>email me directly</a> instead.
                </p>
              )}
            </div>
          </form>
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

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
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

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          padding: clamp(1.5rem, 3vw, 2rem);
          border: 1px solid var(--invert-fg-soft);
          border-radius: var(--radius);
        }

        .contact-form-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--invert-fg-soft);
        }

        .contact-field input,
        .contact-field textarea {
          font-family: inherit;
          font-size: 0.95rem;
          color: var(--invert-fg);
          background: transparent;
          border: 1px solid var(--invert-fg-soft);
          border-radius: var(--radius);
          padding: 0.65rem 0.8rem;
          resize: vertical;
        }

        .contact-field input:focus,
        .contact-field textarea:focus {
          outline: none;
          border-color: var(--invert-fg);
        }

        .contact-hp {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
        }

        .contact-submit {
          align-self: flex-start;
          border-radius: var(--radius);
        }

        .contact-submit:disabled {
          opacity: 0.6;
          cursor: default;
        }

        .contact-form-status {
          min-height: 1.4em;
          font-size: 0.85rem;
        }

        .contact-status-ok {
          color: var(--invert-fg);
        }

        .contact-status-error {
          color: var(--invert-fg-soft);
        }

        .contact-status-error a {
          color: var(--invert-fg);
          text-decoration: underline;
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
