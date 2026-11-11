import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { NAV } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isLinkActive = (to) => {
    if (to === '/') {
      return location.pathname === '/' || location.pathname === '/about' || location.pathname === '/about-us';
    }
    if (to === '/contact') {
      return location.pathname === '/contact' || location.pathname === '/contact-us';
    }
    return location.pathname === to || location.pathname.startsWith(to + '/');
  };

  return (
    <header className="header">
      <div className="header__in">
        <Link to="/" aria-label="Q-Flyers home"><Logo /></Link>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <div id="nav" className={`header__nav ${open ? 'is-open' : ''}`}>
          <nav aria-label="Primary">
            <ul>
              {NAV.map(([l, to]) => (
                <li key={l}>
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className={isLinkActive(to) ? 'active' : ''}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__cta">
            <Link to="/" className="login">Login</Link>
            <Link to="/pricing" className="btn btn--pill btn--sm">TRY FOR FREE</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
