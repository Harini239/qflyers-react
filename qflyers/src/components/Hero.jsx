import { Link } from 'react-router-dom';
export default function Hero({ title, text, cta, to, children, reversed }) {
  return (
    <section className="hero">
      <div className={`hero__in${reversed ? ' hero__in--rev' : ''}`}>
        {reversed && <div className="hero__media">{children}</div>}
        <div className="hero__text">
          <h1>{title}</h1>
          {text && <p>{text}</p>}
          {cta && <Link className="btn btn--pill" to={to}>{cta}</Link>}
        </div>
        {!reversed && <div className="hero__media">{children}</div>}
      </div>
    </section>
  );
}
