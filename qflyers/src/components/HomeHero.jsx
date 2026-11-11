import { Link } from 'react-router-dom';
import '../styles/homeHero.css';

export default function HomeHero() {
  return (
    <section className="home-hero" aria-label="Hero Introduction">
      {/* Ambient floating background particles */}
      <div className="home-hero__particles" aria-hidden="true">
        <span className="home-hero__particle home-hero__particle--1">🍔</span>
        <span className="home-hero__particle home-hero__particle--2">🍜</span>
        <span className="home-hero__particle home-hero__particle--3">✨</span>
        <span className="home-hero__particle home-hero__particle--4">🍕</span>
        <span className="home-hero__particle home-hero__particle--5">☕</span>
      </div>

      <div className="home-hero__container">
        {/* ── LEFT COLUMN: Animated Illustration Stage (Shifted Left & Scaled Up) ── */}
        <div className="home-hero__stage">
          {/* Ambient radial glow backdrop */}
          <div className="home-hero__glow" aria-hidden="true" />

          {/* Floating Badge 1 (Top-Right): Live Order Notification */}
          <div className="home-hero__badge home-hero__badge--top-right">
            <div className="home-hero__badge-icon">🍔</div>
            <div className="home-hero__badge-text">
              <span className="home-hero__badge-title">Order #1042 • $25.00</span>
              <span className="home-hero__badge-sub">
                <span className="home-hero__pulse-dot" /> Live Order Placed
              </span>
            </div>
          </div>

          {/* Floating Badge 2 (Bottom-Right): Revenue Growth Metric */}
          <div className="home-hero__badge home-hero__badge--bottom-right">
            <div className="home-hero__badge-icon home-hero__badge-icon--green">📈</div>
            <div className="home-hero__badge-text">
              <span className="home-hero__badge-title">+34% Avg Order Value</span>
              <span className="home-hero__badge-sub">Boosted with visual menus</span>
            </div>
          </div>

          {/* Floating Badge 3 (Left / Customer Side): Instant QR Scan */}
          <div className="home-hero__badge home-hero__badge--left">
            <div className="home-hero__badge-icon home-hero__badge-icon--purple">⚡</div>
            <div className="home-hero__badge-text">
              <span className="home-hero__badge-title">Instant QR Scan</span>
              <span className="home-hero__badge-sub">0s App download needed</span>
            </div>
          </div>

          {/* The main illustration with floating animation */}
          <div className="home-hero__art-wrap">
            <img
              src="/images/hero-illustration.png"
              alt="Digital smart menu showcase with interactive smartphone ordering"
              width="560"
              height="480"
              className="home-hero__art-img"
              fetchpriority="high"
            />
            {/* Subtle animated laser scan beam across the phone screen */}
            <div className="home-hero__scan-beam" aria-hidden="true" />
          </div>
        </div>

        {/* ── RIGHT COLUMN: Content, Headline & Actions ── */}
        <div className="home-hero__content">
          {/* Pill Eyebrow */}
          <div className="home-hero__pill">
            <span className="home-hero__pill-dot" />
            <span>Next-Gen Smart QR Menus</span>
          </div>

          {/* Main Headline without underline */}
          <h1 className="home-hero__title">
            <span className="home-hero__title-line">SMART MENUS</span>
            <span className="home-hero__title-accent">MADE SIMPLE</span>
          </h1>

          {/* Description */}
          <p className="home-hero__desc">
            The intelligent digital menu solution that <strong>boosts sales</strong>, <strong>improves operations</strong>, and <strong>enhances customer satisfaction</strong> — updatable in real-time from any device.
          </p>

          {/* Feature benefit tags */}
          <div className="home-hero__tags">
            <div className="home-hero__tag">
              <span>⚡</span> Instant Price Updates
            </div>
            <div className="home-hero__tag">
              <span>📱</span> 100% Contactless
            </div>
            <div className="home-hero__tag">
              <span>🌿</span> Zero Paper Menus
            </div>
          </div>

          {/* Action Buttons: Primary CTA only */}
          <div className="home-hero__actions">
            <Link to="/pricing" className="home-hero__btn-primary">
              <span>GET STARTED FOR FREE</span>
              <span className="home-hero__btn-arrow" aria-hidden="true">→</span>
              <span className="home-hero__btn-sheen" aria-hidden="true" />
            </Link>
          </div>

          {/* Social Proof & Trust Strip */}
          <div className="home-hero__trust">
            <div className="home-hero__avatars" aria-hidden="true">
              <span className="home-hero__avatar" style={{ background: '#FFD9D6' }}>👨‍🍳</span>
              <span className="home-hero__avatar" style={{ background: '#E6DDF0' }}>👩‍💼</span>
              <span className="home-hero__avatar" style={{ background: '#FFEECB' }}>☕</span>
              <span className="home-hero__avatar" style={{ background: '#D9F2E6' }}>🍕</span>
            </div>
            <div className="home-hero__trust-info">
              <div className="home-hero__stars" aria-label="5 star rating">★★★★★ <strong>4.9 / 5</strong></div>
              <div className="home-hero__trust-text">
                Loved by <strong>500+ restaurants</strong>, cafes & bars
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
