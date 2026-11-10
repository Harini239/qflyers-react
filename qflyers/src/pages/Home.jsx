import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Phone from '../components/Phone';
import FaqList from '../components/FaqList';
import StatCounter from '../components/StatCounter';
import useSeo from '../hooks/useSeo';
import { HOME_STRIP, STEPS, STEP_TEXT, FEATURES, FAQS } from '../data/site';

const SOC = 'AI-Powered Content Creation Generate tailored posts, captions, and strategies effortlessly.';
const ALTS = ['Chef plating a dish', 'Waiter holding a plate', 'Plated salmon dish', 'Sales analytics chart'];

function QrViewfinderIcon({ color = 'currentColor', strokeWidth = 2.4 }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.5V4a1 1 0 0 1 1-1h4.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 8.5V4a1 1 0 0 0-1-1h-4.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 19.5V24a1 1 0 0 0 1 1h4.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 19.5V24a1 1 0 0 1-1 1h-4.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6.8" y="6.8" width="5.4" height="5.4" rx="0.8" stroke={color} strokeWidth={strokeWidth * 0.75} fill="none" />
      <rect x="6.8" y="15.8" width="5.4" height="5.4" rx="0.8" stroke={color} strokeWidth={strokeWidth * 0.75} fill="none" />
      <rect x="15.8" y="15.8" width="5.4" height="5.4" rx="0.8" stroke={color} strokeWidth={strokeWidth * 0.75} fill="none" />
      <rect x="15.8" y="6.8" width="2.2" height="2.2" rx="0.4" fill={color} />
      <rect x="19.5" y="6.8" width="2.2" height="2.2" rx="0.4" fill={color} />
      <rect x="17.6" y="9.8" width="2.2" height="2.2" rx="0.4" fill={color} />
    </svg>
  );
}

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

export default function Home() {
  useSeo({
    title: 'Q-Flyers | Smart Digital Menu Cards for Restaurants',
    description: 'The intelligent digital menu solution that boosts sales, improves operations, and enhances customer satisfaction.',
    path: '/'
  });

  return (
    <>
      <Hero
        title="SMART MENUS MADE SIMPLE"
        text="The intelligent digital menu solution that boosts sales, improves operations, and enhances customer satisfaction"
        cta="GET STARTED FOR FREE"
        to="/pricing"
        reversed
      >
        <img
          src="/images/hero-illustration.png"
          alt="Person browsing a digital restaurant menu on a phone"
          width="460"
          height="400"
          fetchpriority="high"
        />
      </Hero>

      <section className="sec" aria-labelledby="tpl">
        <SectionTitle id="tpl" title="TEMPLATES" sub="Our Valuable Templates" />
        <div className="strip-track" aria-label="Scrolling template previews">
          <ul className="strip-marquee">
            {[...HOME_STRIP, ...HOME_STRIP].map((t, i) => (
              <li key={i} aria-hidden={i >= HOME_STRIP.length ? 'true' : undefined}>
                <Phone {...t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ABOUT US SECTION ── */}
      <section className="about" id="about" aria-labelledby="ab">
        <div className="about__top">
          <SectionTitle id="ab" title="ABOUT US" sub={<>Q-Flyers provides a powerful yet simple-to-use<br />Digital Menu Card</>} />
        </div>

        {/* Top Wave: Cream -> Soft Pink */}
        <div className="about__wave-top" aria-hidden="true">
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,0 L130,0 C340,0 480,120 720,120 C960,120 1100,0 1310,0 L1440,0 L1440,140 L0,140 Z" fill="#FCEAE7" />
          </svg>
        </div>

        <div className="about__intro">
          <h2>Simplifying Restaurant Management<br />Through Digital Innovation</h2>
          <p>
            Q-Flyers provides a powerful yet simple-to-use Digital Menu Card platform designed specifically for restaurants, cafes, food trucks, and hospitality businesses. Our cloud-based SaaS solution eliminates paper menus while giving you complete control over your menu presentation, pricing, and promotions - all updatable in real-time from anywhere.
          </p>
        </div>

        {/* Bottom pink area with middle wave divider */}
        <div className="about__bottom">
          <div className="about__wave-mid" aria-hidden="true">
            <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
              <path d="M0,0 L130,0 C340,0 480,120 720,120 C960,120 1100,0 1310,0 L1440,0 L1440,140 L0,140 Z" fill="#F8B2A9" />
            </svg>
          </div>

          <div className="about__cards-wrap">
            <ul className="soc">
              {SOCIAL_DATA.map((s, i) => (
                <li key={s.name} className={`card ${i % 2 === 1 ? 'card--offset' : ''}`}>
                  <span className="dot" aria-hidden="true">{s.icon}</span>
                  <h3>{s.name}</h3>
                  <p>{SOC}</p>
                </li>
              ))}
            </ul>

            <dl className="stats">
                <StatCounter target={40}  suffix="M" label="Business"          duration={2000} />
                <StatCounter target={25}  suffix="B" label="Customers"          duration={2200} />
                <StatCounter target={30}  suffix="B" label="Daily Transaction"  duration={2400} decimals={1} />
            </dl>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS SECTION ── */}
      <section className="how" aria-labelledby="hw">
        <div className="how__panel">
          {/* Top-Right Corner QR Code Badge */}
          <div className="how__qr-badge" aria-hidden="true">
            <QrViewfinderIcon color="#1F1635" strokeWidth={2.6} />
          </div>

          {/* Floating decorative QR code bubbles */}
          <div className="how__qr-decor" aria-hidden="true">
            <span className="how__bubble how__bubble--1">
              <QrViewfinderIcon color="#6D43A6" strokeWidth={2.4} />
            </span>
            <span className="how__bubble how__bubble--2">
              <QrViewfinderIcon color="#6D43A6" strokeWidth={2.4} />
            </span>
            <span className="how__bubble how__bubble--3">
              <QrViewfinderIcon color="#6D43A6" strokeWidth={2.4} />
            </span>
            <span className="how__bubble how__bubble--4">
              <QrViewfinderIcon color="#6D43A6" strokeWidth={2.4} />
            </span>
            <span className="how__bubble how__bubble--5">
              <QrViewfinderIcon color="#6D43A6" strokeWidth={2.4} />
            </span>
          </div>

          <h2 id="hw"><small>How it</small>Works</h2>
          <p>Allow businesses to easily update items, prices, and descriptions.</p>
          <ol>
            {STEPS.map((s, i) => (
              <li key={s} className="card">
                <span className="num">{i + 1}</span>
                <img src={`/images/step-${i + 1}.png`} alt="" width="90" height="90" loading="lazy" />
                <h3>{s}</h3>
                <p>{STEP_TEXT}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" aria-labelledby="kf">
        <SectionTitle id="kf" title="KEY FEATURES" sub="Powerful Features That Drive Results" />
        <div className="feat">
          <img src="/images/feature-phone.png" alt="Ice cream menu on a phone" width="260" height="560" loading="lazy" />
          <div>
            {FEATURES.map(([h, p]) => (
              <article key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ben" aria-labelledby="bn">
        <SectionTitle id="bn" title="BENEFITS" sub="The Q-Flyers Advantage" />
        <ul className="ben__grid">
          {[
            ['For Business', 'benefit-business'],
            ['For Customer', 'benefit-customer'],
          ].map(([l, f]) => (
            <li key={l}>
              <img src={`/images/${f}.png`} alt={l} width="518" height="364" loading="lazy" />
              <h3 className="sr">{l}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec" aria-labelledby="gl">
        <SectionTitle id="gl" title="OUR GOALS" />
        <p className="lead">
          Enhance your experience and enjoy seamless automation, intelligent insights, and effortless management. Discover the difference with Q-flyers.
        </p>
        <div className="mosaic">
          {ALTS.map((a, i) => (
            <img key={a} src={`/images/goal-${i + 1}.jpg`} alt={a} width="400" height="400" loading="lazy" className={`m${i + 1}`} />
          ))}
        </div>
      </section>

      <section className="sec" aria-labelledby="fq">
        <SectionTitle id="fq" title="FAQ'S" sub="Common Questions" />
        <img className="faq__img" src="/images/faq-people.png" alt="People asking questions" width="300" height="220" loading="lazy" />
        <div className="wrap">
          <FaqList items={FAQS} />
        </div>
      </section>
    </>
  );
}
