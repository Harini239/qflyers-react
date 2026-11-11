import HomeHero from '../components/HomeHero';
import SectionTitle from '../components/SectionTitle';
import Phone from '../components/Phone';
import FaqList from '../components/FaqList';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';
import KeyFeatures from '../components/KeyFeatures';
import useSeo from '../hooks/useSeo';
import { HOME_STRIP, FAQS } from '../data/site';

const ALTS = ['Chef plating a dish', 'Waiter holding a plate', 'Plated salmon dish', 'Sales analytics chart'];

export default function Home() {
  useSeo({
    title: 'Q-Flyers | Smart Digital Menu Cards for Restaurants',
    description: 'The intelligent digital menu solution that boosts sales, improves operations, and enhances customer satisfaction.',
    path: '/'
  });

  return (
    <>
      <HomeHero />

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
      <AboutSection />

      {/* ── HOW IT WORKS SECTION ── */}
      <HowItWorks />

      {/* ── KEY FEATURES SECTION ── */}
      <KeyFeatures />

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
          <span className="lead__line">Enhance your experience and enjoy seamless automation, intelligent insights,</span>
          <span className="lead__line">and effortless management. Discover the difference with Q-flyers.</span>
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
