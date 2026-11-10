import { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Phone from '../components/Phone';
import useSeo from '../hooks/useSeo';
import { TEMPLATES, FILTERS } from '../data/site';
export default function Templates() {
  useSeo({ title: 'Digital Menu Templates for Every Industry | Q-Flyers', description: 'Professionally designed templates for restaurants, cafes, ice cream parlours, flower shops, furniture stores and clinics.', path: '/templates', crumbs: [['Home', '/'], ['Templates', '/templates']] });
  const [q, setQ] = useState(''); const [tag, setTag] = useState('All');
  const list = useMemo(() => TEMPLATES.filter(t => t.label.toLowerCase().includes(q.toLowerCase()) && (tag === 'All' || t.label.toLowerCase().includes(tag.toLowerCase().split(' ')[0]))), [q, tag]);
  return (<>
    <Hero title="PROFESSIONALLY DESIGNED TEMPLATES FOR EVERY INDUSTRY" text="Discover templates crafted by QFlyers to suit businesses of all kinds — from restaurants to retailers and everything in between." cta="Browse Templates" to="#browse">
      <div className="trio">{[3, 1, 4].map(n => (<Phone key={n} src={`/images/template-0${n}.png`} label="Template preview" eager />))}</div></Hero>
    <section className="sec" id="browse" aria-labelledby="tt"><SectionTitle id="tt" title="TEMPLATES" sub="Templates That Work for Every Business" />
      <div className="search"><label className="sr" htmlFor="s">Search templates</label><input id="s" type="search" placeholder="Search" value={q} onChange={e => setQ(e.target.value)} /></div>
      <div className="chips" role="group" aria-label="Filter templates">{FILTERS.map((row, i) => (<div key={i}>{row.map(c => (<button key={c} aria-pressed={tag === c} className={tag === c ? 'on' : ''} onClick={() => setTag(c)}>{c}</button>))}</div>))}</div>
      <ul className="grid4">{list.map(t => (<li key={t.src}><Phone {...t} /></li>))}</ul></section>
  </>);
}
