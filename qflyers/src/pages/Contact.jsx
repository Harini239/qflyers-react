import { useState } from 'react';
import useSeo from '../hooks/useSeo';

export default function Contact() {
  useSeo({
    title: 'Contact Us | Q-Flyers',
    description: 'Any Questions or remarks? Just write us a message! Get in touch with the Q-Flyers team.',
    path: '/contact',
    crumbs: [['Home', '/'], ['Contact Us', '/contact']],
  });

  const [form, setForm] = useState({ email: '', name: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.error) setStatus((s) => ({ ...s, error: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.name.trim()) {
      setStatus({ submitted: false, error: 'Please enter both your email and name.' });
      return;
    }
    setStatus({ submitted: true, error: '' });
    setForm({ email: '', name: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Decorative QR watermark */}
      <div className="contact-watermark" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2"  y="2"  width="44" height="44" rx="6" stroke="#F4604F" strokeWidth="8" opacity="0.14" />
          <rect x="15" y="15" width="18" height="18" rx="3" fill="#F4604F" opacity="0.14" />
          <rect x="54" y="2"  width="44" height="44" rx="6" stroke="#F4604F" strokeWidth="8" opacity="0.14" />
          <rect x="67" y="15" width="18" height="18" rx="3" fill="#F4604F" opacity="0.14" />
          <rect x="2"  y="54" width="44" height="44" rx="6" stroke="#F4604F" strokeWidth="8" opacity="0.14" />
          <rect x="15" y="67" width="18" height="18" rx="3" fill="#F4604F" opacity="0.14" />
          <rect x="54" y="54" width="18" height="18" rx="3" fill="#F4604F" opacity="0.14" />
          <rect x="80" y="54" width="18" height="18" rx="3" fill="#F4604F" opacity="0.14" />
          <rect x="54" y="80" width="18" height="18" rx="3" fill="#F4604F" opacity="0.14" />
          <rect x="80" y="80" width="18" height="18" rx="3" fill="#F4604F" opacity="0.14" />
        </svg>
      </div>

      {/* ── Hero ── */}
      <header className="contact-hero">
        <h1 className="contact-hero__title">CONTACT US</h1>
        <p className="contact-hero__subtitle">Any Questions or remarks? Just write us a message!</p>
      </header>

      {/* ── Form ── */}
      <section className="contact-form-section" aria-label="Send a message">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>

          {/* E-mail + Name row */}
          <div className="contact-form__row">
            <div className="contact-field">
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your Valid email address"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
          </div>

          {/* Textarea + Send button row */}
          <div className="contact-form__row contact-form__row--action">
            <div className="contact-field contact-field--textarea">
              <label htmlFor="contact-message" className="sr">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Enter your message…"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="contact-send-btn" aria-label="Send message">
              <svg className="contact-send-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              <span className="contact-send-label">SEND</span>
            </button>
          </div>

          {status.error && (
            <p className="contact-feedback contact-feedback--error" role="alert">
              {status.error}
            </p>
          )}

          {status.submitted && (
            <div className="contact-feedback contact-feedback--success" role="status">
              ✓ Thank you! Your message has been sent. We will get back to you shortly.
            </div>
          )}
        </form>
      </section>

      {/* ── Info cards ── */}
      <section className="contact-info-section" aria-label="Contact details">
        <div className="contact-ribbon" aria-hidden="true" />
        <div className="contact-card">

          {/* Card 1 – About */}
          <div className="contact-card__item">
            <div className="contact-card__badge" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3"  y="3"  width="6" height="6" rx="1.5" />
                <rect x="15" y="3"  width="6" height="6" rx="1.5" />
                <rect x="3"  y="15" width="6" height="6" rx="1.5" />
                <path d="M15 15h2v2h-2zM15 20h5M20 15v5" />
              </svg>
            </div>
            <h2>ABOUT Q-FLYERS</h2>
            <p>A Digital Menu Card SaaS is a cloud-based platform that allows restaurants</p>
          </div>

          {/* Card 2 – Phone */}
          <div className="contact-card__item">
            <div className="contact-card__badge" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24
                         11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4
                         a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.24
                         1.02l-2.2 2.19z" />
              </svg>
            </div>
            <h2>PHONE (LANDLINE)</h2>
            <p>
              <a href="tel:+914223563362">+91-4223563362</a>
              <br />
              <a href="tel:+914223563362">+91-4223563362</a>
            </p>
          </div>

          {/* Card 3 – Location */}
          <div className="contact-card__item">
            <div className="contact-card__badge" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13
                         c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
            </div>
            <h2>LOCATION</h2>
            <p>No 48, Kovai Thirunagar, Goldwins, Coimbatore-641004</p>
          </div>

        </div>
      </section>
    </div>
  );
}
