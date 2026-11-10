import useSeo from '../hooks/useSeo';
import { LEGAL } from '../data/legal';

export default function Legal({ kind }) {
  const d = LEGAL[kind];
  const path = `/${kind}`;
  useSeo({
    title: `${d.title.replace('&', 'and')} | Q-Flyers`,
    description: `${d.title} for Q-Flyers.`,
    path,
    crumbs: [['Home', '/'], [d.title, path]]
  });

  return (
    <article className="legal">
      <h1 className="h1">{d.title}</h1>
      {d.subtitle && <p className="legal__subtitle">{d.subtitle}</p>}
      {d.updated && <p className="legal__updated">{d.updated}</p>}
      {d.intro && (
        <div className="legal__intro">
          {Array.isArray(d.intro) ? (
            d.intro.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{d.intro}</p>
          )}
        </div>
      )}
      {d.sections.map(([h, t], idx) => (
        <section key={h || idx}>
          {h && <h2>{h}</h2>}
          {Array.isArray(t) ? (
            t.map((p, pIdx) => <p key={pIdx}>{p}</p>)
          ) : (
            <p>{t}</p>
          )}
        </section>
      ))}
    </article>
  );
}
