import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { NAV } from '../data/site';
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__in">
        <Link to="/" aria-label="Q-Flyers home"><Logo /></Link>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label="Menu" onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <div id="nav" className={`header__nav ${open ? 'is-open' : ''}`}>
          <nav aria-label="Primary"><ul>{NAV.map(([l, to]) => (<li key={l}><NavLink to={to} end onClick={() => setOpen(false)} className={({ isActive }) => (isActive && !to.includes('#') ? 'active' : '')}>{l}</NavLink></li>))}</ul></nav>
          <div className="header__cta"><Link to="/" className="login">Login</Link><Link to="/pricing" className="btn btn--pill btn--sm">TRY FOR FREE</Link></div>
        </div>
      </div>
    </header>
  );
}
