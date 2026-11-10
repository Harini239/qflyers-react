export default function Phone({ src, label, eager }) {
  return (<figure className="phone"><img src={src} alt={label} width="270" height="570" loading={eager ? 'eager' : 'lazy'} decoding="async" /></figure>);
}
