import '../styles/howItWorks.css';

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

const STEPS_DATA = [
  {
    num: 1,
    title: 'Signup',
    img: '/images/step-1.png',
  },
  {
    num: 2,
    title: 'Template',
    img: '/images/step-2.png',
  },
  {
    num: 3,
    title: 'QR Scan',
    img: '/images/step-3.png',
  },
  {
    num: 4,
    title: 'Explore',
    img: '/images/step-4.png',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how" aria-labelledby="hw">
      <div className="how__panel">
        {/* Top-Right Corner QR Code Badge with Breathing Float Animation */}
        <div className="how__qr-badge" aria-hidden="true" title="Scan QR digital menu">
          <QrViewfinderIcon color="#1F1635" strokeWidth={2.6} />
        </div>

        {/* Floating Decorative QR Code Bubbles */}
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

        {/* Heading & Subtitle aligned exactly like the image: "How it" and "Works" same bold size */}
        <h2 id="hw" className="how__title">
          <span className="how__title-line">How it</span>
          <span className="how__title-line">Works</span>
        </h2>
        <p className="how__subtitle">
          <span className="how__sub-line">Allow businesses to easily update items, prices, and</span>
          <span className="how__sub-line">descriptions.</span>
        </p>

        {/* The 4 Step Cards with exact circle placement (Image 2) and 4-line text (Image 3) */}
        <ol>
          {STEPS_DATA.map((s) => (
            <li key={s.title} className={`card card--step-${s.num}`}>
              <span className="num" aria-label={`Step ${s.num}`}>{s.num}</span>
              <img
                src={s.img}
                alt={`${s.title} step illustration`}
                width="90"
                height="90"
                loading="lazy"
              />
              <h3>{s.title}</h3>
              <p className="how__step-desc">
                <span className="how__step-line">Provide some basic</span>
                <span className="how__step-line">information such as your</span>
                <span className="how__step-line">addressing and montage</span>
                <span className="how__step-line">Information</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
