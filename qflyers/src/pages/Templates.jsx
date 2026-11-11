import { useState, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import Phone from '../components/Phone';
import useSeo from '../hooks/useSeo';
import { TEMPLATES, FILTERS } from '../data/site';
import '../styles/templates.css';

export default function Templates() {
  useSeo({
    title: 'Digital Menu Templates for Every Industry | Q-Flyers',
    description:
      'Professionally designed templates for restaurants, cafes, ice cream parlours, flower shops, furniture stores and clinics.',
    path: '/templates',
    crumbs: [['Home', '/'], ['Templates', '/templates']],
  });

  const [q, setQ] = useState('');
  const [tag, setTag] = useState('All');

  const list = useMemo(
    () =>
      TEMPLATES.filter(
        (t) =>
          t.label.toLowerCase().includes(q.toLowerCase()) &&
          (tag === 'All' || t.label.toLowerCase().includes(tag.toLowerCase().split(' ')[0]))
      ),
    [q, tag]
  );

  const handleScrollToBrowse = (e) => {
    e.preventDefault();
    const el = document.getElementById('browse');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── HERO SECTION MATCHING REFERENCE IMAGE ── */}
      <section className="tpl-hero" aria-labelledby="tpl-hero-title">
        {/* Soft Ambient Floating Glow Behind the Phones */}
        <div className="tpl-hero__glow" aria-hidden="true" />

        <div className="tpl-hero__in">
          {/* Left Column: Trio Phones with decorative grid accent */}
          <div className="tpl-hero__media">
            <div className="tpl-hero__decor" aria-hidden="true">
              <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                <rect x="24" y="0" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                <rect x="0" y="24" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                <rect x="24" y="24" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                <circle cx="54" cy="8" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                <circle cx="62" cy="8" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                <circle cx="54" cy="16" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                <circle cx="62" cy="16" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                <circle cx="54" cy="24" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                <circle cx="62" cy="24" r="2.5" fill="#F4604F" fillOpacity="0.16" />
              </svg>
            </div>

            <div className="tpl-trio">
              {/* Left Phone: Ice Cream Logo Menu (template-03.png) */}
              <figure className="tpl-phone tpl-phone--left">
                <img
                  src="/images/template-03.png"
                  alt="Ice Cream Parlour logo menu template"
                  width="270"
                  height="570"
                  loading="eager"
                  decoding="async"
                />
              </figure>

              {/* Center Phone: Ice Cream Shop Menu (template-01.png) - Main highlight */}
              <figure className="tpl-phone tpl-phone--center">
                <img
                  src="/images/template-01.png"
                  alt="Ice Cream Shop menu template"
                  width="270"
                  height="570"
                  loading="eager"
                  decoding="async"
                />
              </figure>

              {/* Right Phone: The Flower Shop (template-04.png) */}
              <figure className="tpl-phone tpl-phone--right">
                <img
                  src="/images/template-04.png"
                  alt="The Flower Shop floral template"
                  width="270"
                  height="570"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </div>
          </div>

          {/* Right Column: Heading, description & Browse Templates button */}
          <div className="tpl-hero__text">
            <h1 id="tpl-hero-title" className="tpl-hero__title">
              <span className="tpl-hero__title-line">PROFESSIONALLY</span>
              <span className="tpl-hero__title-line">DESIGNED TEMPLATES</span>
              <span className="tpl-hero__title-line">FOR EVERY INDUSTRY</span>
            </h1>

            <p className="tpl-hero__desc">
              <span>Discover templates crafted by QFlyers to suit</span>
              <span>businesses of all kinds — from restaurants to</span>
              <span>retailers and everything in between.</span>
            </p>

            <a
              href="#browse"
              onClick={handleScrollToBrowse}
              className="tpl-hero__btn"
            >
              <span>Browse Templates</span>
              <svg className="tpl-hero__btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3.5V12.5M8 12.5L12 8.5M8 12.5L4 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── BROWSE & FILTER CATALOG SECTION ── */}
      <section className="sec" id="browse" aria-labelledby="tt">
        <SectionTitle id="tt" title="TEMPLATES" sub="Templates That Work for Every Business" />
        <div className="search">
          <label className="sr" htmlFor="s">
            Search templates
          </label>
          <input
            id="s"
            type="search"
            placeholder="Search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="chips" role="group" aria-label="Filter templates">
          {FILTERS.map((row, i) => (
            <div key={i}>
              {row.map((c) => (
                <button
                  key={c}
                  aria-pressed={tag === c}
                  className={tag === c ? 'on' : ''}
                  onClick={() => setTag(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          ))}
        </div>
        <ul className="grid4">
          {list.map((t) => (
            <li key={t.src}>
              <Phone {...t} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
