import SectionTitle from './SectionTitle';
import '../styles/keyFeatures.css';

const FEATURES_DATA = [
  {
    title: 'Instant Menu Updates',
    lines: [
      'Change prices, add specials, or modify descriptions',
      'in seconds - all updates appear immediately across',
      'all customer touchpoints.',
    ],
  },
  {
    title: 'Contactless Ordering',
    lines: [
      'Customers scan your custom QR code to view your',
      'beautifully designed menu directly on their',
      'devices, enhancing hygiene and convenience.',
    ],
  },
  {
    title: 'Data-Driven Insights',
    lines: [
      'Track viewing patterns, popular items, and',
      'customer behavior to optimize your menu and',
      'boost sales of high-margin items.',
    ],
  },
  {
    title: 'Multi-Location Management',
    lines: [
      'Easily manage menus across multiple locations',
      'with centralized controls or customize offerings for',
      'each venue.',
    ],
  },
];

export default function KeyFeatures() {
  return (
    <section className="sec" aria-labelledby="kf">
      <SectionTitle id="kf" title="KEY FEATURES" sub="Powerful Features That Drive Results" />
      <div className="feat">
        <div className="feat__phone-wrapper">
          <img
            src="/images/feature-phone.png"
            alt="Digital menu displayed on smartphone"
            loading="lazy"
            className="feat__phone"
          />
        </div>

        {/* Headings and content lines aligned exactly like reference image */}
        <div className="feat__list">
          {FEATURES_DATA.map((item) => (
            <article key={item.title} className="feat__item">
              <h3>{item.title}</h3>
              <p>
                {item.lines.map((line, idx) => (
                  <span key={idx} className="feat__line">
                    {line}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
