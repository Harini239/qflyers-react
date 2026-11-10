import useSeo from '../hooks/useSeo';
import { PLANS } from '../data/site';
export default function Pricing() {
  useSeo({ title: 'Pricing Plans | Q-Flyers', description: 'Flexible payment plans for your convenience. No hidden charges, straightforward pricing, cancel anytime.', path: '/pricing', crumbs: [['Home', '/'], ['Pricing', '/pricing']] });
  return (<>
    <section className="hero hero--center"><div className="hero__text"><h1>FLEXIBLE PAYMENT PLANS FOR YOUR CONVENIENCE</h1><p>Get started for free and upgrade as you grow.</p>
      <ul className="ticks">{['No Hidden charges', 'Straightforward pricing', 'Cancel anytime'].map(t => (<li key={t}><i aria-hidden="true">✓</i>{t}</li>))}</ul></div></section>
    <section className="sec" aria-label="Plans"><ul className="plans">{PLANS.map(p => (<li key={p.name} className={`plan ${p.hot ? 'plan--hot' : ''}`}><h2 className="tag">{p.name}</h2><p className="plan__d">For All individuals and starters who want to start with domaining.</p>
      <p className="plan__p"><span>₹</span>{p.price}</p><p className="plan__m">Per member, per Month</p>
      <ul>{p.features.map(f => (<li key={f}>{f}</li>))}</ul><a href="#" className="btn btn--sq">Start free 30-day Trial</a></li>))}</ul></section>
    <section className="sec trust"><h2>Trusted by <em>50K Owners</em></h2><p>*Join over 50,000 satisfied owners who trust us for reliability. Our commitment to quality, reliability, and customer satisfaction has earned us the trust of a growing community. Trust in the experiences of fellow owners and choose us to be part of your journey. We’re here to support you every step of the way.</p></section>
  </>);
}
