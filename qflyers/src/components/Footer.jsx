import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FOOTER } from '../data/site';

const Ic = ({ d }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d={d} />
  </svg>
);

const SocialIcons = {
  Facebook: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  Twitter: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  ),
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__in">
        <div className="footer__brand">
          <Logo light />
          <p>Follow us</p>
          <div className="footer__social">
            {['Facebook', 'Twitter', 'Instagram'].map(s => {
              const Comp = SocialIcons[s];
              return (
                <a key={s} href="#" aria-label={s}>
                  <Comp />
                </a>
              );
            })}
          </div>
        </div>
        {Object.entries(FOOTER).map(([h, links]) => (
          <nav key={h} aria-label={h}>
            <h2>{h}</h2>
            <ul>
              {links.map(([l, to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
        <address>
          <h2>Contact Us</h2>
          <p><Ic d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />No 48,Kovai Thirunagar, Goldwins, Coimbatore-641004</p>
          <p><Ic d="M3 6h18v12H3zM3 6l9 7 9-7" /><a href="mailto:support@qflyers.com">support@qflyers.com</a></p>
          <p><Ic d="M5 4h4l2 5-2 1a11 11 0 005 5l1-2 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /><a href="tel:+918008543680">+91 800 854-36-80</a></p>
        </address>
      </div>
      <p className="footer__copy">© 2021 All Rights Reserved</p>
    </footer>
  );
}
