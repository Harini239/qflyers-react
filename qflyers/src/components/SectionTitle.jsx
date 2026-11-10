export default function SectionTitle({ title, sub, id }) {
  return (<div className="st"><div className="st__row"><i /><h2 id={id} className="st__title">{title}</h2><i /></div>{sub && <p className="st__sub">{sub}</p>}</div>);
}
