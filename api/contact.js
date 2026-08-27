// Vercel Serverless Function — handles the portfolio contact form.
// Sends the message via Resend (https://resend.com). Free tier: 3,000
// emails/month / 100 per day, no credit card required.
//
// Setup:
//   1. Create a free account and API key at https://resend.com
//   2. In the Vercel project's Settings -> Environment Variables, add:
//        RESEND_API_KEY = re_xxxxxxxxxxxx
//   3. By default this sends from Resend's shared "onboarding@resend.dev"
//      address, which only delivers to the email your Resend account was
//      signed up with. Once you verify your own domain in Resend (a few
//      DNS records), change FROM_EMAIL below to an address on that domain
//      so it can send to anyone.

const TO_EMAIL = "skmodiyogesh@gmail.com";
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const { name, contact, message, website } = req.body || {};

  // Honeypot: a hidden field real visitors never fill in. If it has a
  // value, silently pretend success and drop the message.
  if (website) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !contact || !message) {
    res.status(400).json({ ok: false, error: "Please fill in all fields." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    res.status(500).json({ ok: false, error: "Email is not configured yet." });
    return;
  }

  // Reasonable length caps to deter abuse.
  const safeName = String(name).slice(0, 120);
  const safeContact = String(contact).slice(0, 200);
  const safeMessage = String(message).slice(0, 5000);

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: safeContact,
        subject: `Portfolio contact form: ${safeName}`,
        text: `Name: ${safeName}\nContact: ${safeContact}\n\nMessage:\n${safeMessage}`,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend error:", errText);
      res.status(502).json({ ok: false, error: "Could not send right now. Please email directly instead." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ ok: false, error: "Could not send right now. Please email directly instead." });
  }
}
