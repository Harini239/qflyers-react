import SectionTitle from './SectionTitle';
import StatCounter from './StatCounter';
import '../styles/aboutSection.css';

const SOC = 'AI-Powered Content Creation Generate tailored posts, captions, and strategies effortlessly.';

const SOCIAL_DATA = [
  {
    name: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308C2.497 19.483 2.226 18.216 2.164 16.85 2.106 15.584 2.094 15.204 2.094 12s.012-3.584.07-4.85C2.226 5.784 2.497 4.517 3.472 3.542c.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/>
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="ab">
      {/* ── TOP SECTION (CREAM BACKGROUND) ── */}
      <div className="about__top">
        <SectionTitle
          id="ab"
          title="ABOUT US"
          sub={
            <>
              <span className="about__sub-line">Q-Flyers provides a powerful yet simple-to-use</span>
              <span className="about__sub-line">Digital Menu Card</span>
            </>
          }
        />
      </div>

      {/* ── TOP ANIMATED WAVE (CREAM -> SOFT PEACH #FCEAE7) ── */}
      <div className="about__wave-top" aria-hidden="true">
        {/* Layer 1: Ambient back wave */}
        <div className="about__wave-layer about__wave-layer--back">
          <svg viewBox="0 0 2880 140" preserveAspectRatio="none">
            <path
              d="M0,25 C380,25 450,135 720,135 C990,135 1060,25 1440,25 C1820,25 1890,135 2160,135 C2430,135 2500,25 2880,25 L2880,140 L0,140 Z"
              fill="#FCEAE7"
            />
          </svg>
        </div>
        {/* Layer 2: Main front wave */}
        <div className="about__wave-layer about__wave-layer--front">
          <svg viewBox="0 0 2880 140" preserveAspectRatio="none">
            <path
              d="M0,0 C340,0 480,120 720,120 C960,120 1100,0 1310,0 L1440,0 C1780,0 1920,120 2160,120 C2400,120 2540,0 2750,0 L2880,0 L2880,140 L0,140 Z"
              fill="#FCEAE7"
            />
          </svg>
        </div>
      </div>

      {/* ── INTRO SECTION (SOFT PEACH #FCEAE7) ── */}
      <div className="about__intro">
        <h2>
          <span className="about__h2-line">Simplifying Restaurant Management</span>
          <span className="about__h2-line">Through Digital Innovation</span>
        </h2>
        <p>
          <span className="about__p-line">Q-Flyers provides a powerful yet simple-to-use Digital Menu Card platform designed specifically for restaurants, cafes, food trucks, and</span>
          <span className="about__p-line">hospitality businesses. Our cloud-based SaaS solution eliminates paper menus while giving you complete control over your menu</span>
          <span className="about__p-line">presentation, pricing, and promotions - all updatable in real-time from anywhere.</span>
        </p>
      </div>

      {/* ── BOTTOM PINK AREA WITH MID ANIMATED WAVE ── */}
      <div className="about__bottom">
        {/* ── MID ANIMATED WAVE (SOFT PEACH -> ROSE PINK #F8B2A9) ── */}
        <div className="about__wave-mid" aria-hidden="true">
          {/* Layer 1: Ambient back wave */}
          <div className="about__wave-layer about__wave-layer--back">
            <svg viewBox="0 0 2880 140" preserveAspectRatio="none">
              <path
                d="M0,25 C380,25 450,135 720,135 C990,135 1060,25 1440,25 C1820,25 1890,135 2160,135 C2430,135 2500,25 2880,25 L2880,140 L0,140 Z"
                fill="#F8B2A9"
              />
            </svg>
          </div>
          {/* Layer 2: Main front wave */}
          <div className="about__wave-layer about__wave-layer--front">
            <svg viewBox="0 0 2880 140" preserveAspectRatio="none">
              <path
                d="M0,0 C340,0 480,120 720,120 C960,120 1100,0 1310,0 L1440,0 C1780,0 1920,120 2160,120 C2400,120 2540,0 2750,0 L2880,0 L2880,140 L0,140 Z"
                fill="#F8B2A9"
              />
            </svg>
          </div>
        </div>

        {/* ── 4 CARDS & STATS WRAPPER ── */}
        <div className="about__cards-wrap">
          <ul className="soc">
            {SOCIAL_DATA.map((s, i) => (
              <li
                key={s.name}
                className={`card ${i % 2 === 1 ? 'card--offset' : ''} card--animated-${i + 1}`}
              >
                <span className="dot" aria-hidden="true">{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{SOC}</p>
              </li>
            ))}
          </ul>

          <dl className="stats">
            <StatCounter target={40} suffix="M" label="Business" duration={2000} />
            <StatCounter target={25} suffix="B" label="Customers" duration={2200} />
            <StatCounter target={30} suffix="B" label="Daily Transaction" duration={2400} decimals={1} />
          </dl>
        </div>
      </div>
    </section>
  );
}
