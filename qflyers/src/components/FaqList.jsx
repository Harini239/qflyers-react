import { useState } from 'react';
import { FAQ_ANSWER } from '../data/site';
export default function FaqList({ items }) {
  const [open, setOpen] = useState(null);
  return (<ul className="faq">{items.map((q, i) => (<li key={i}><h3><button aria-expanded={open === i} aria-controls={`f${i}`} onClick={() => setOpen(open === i ? null : i)}><b>{String(i + 1).padStart(2, '0')}</b><span>{q}</span><em aria-hidden="true">{open === i ? '\u2212' : '+'}</em></button></h3><p id={`f${i}`} hidden={open !== i}>{FAQ_ANSWER}</p></li>))}</ul>);
}
