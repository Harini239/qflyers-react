import { useEffect } from 'react';
import { SITE } from '../data/site';
const meta = (sel, val) => { let el = document.head.querySelector(sel); if (!el) { el = document.createElement('meta'); const [k, v] = sel.match(/\[(.+?)="(.+?)"\]/).slice(1); el.setAttribute(k, v); document.head.appendChild(el); } el.setAttribute('content', val); };
export default function useSeo({ title, description, path = '/', crumbs }) {
  useEffect(() => {
    const url = SITE + path;
    document.title = title;
    meta('meta[name="description"]', description);
    ['og:title', 'og:description', 'og:url'].forEach((p, i) => meta(`meta[property="${p}"]`, [title, description, url][i]));
    ['twitter:title', 'twitter:description'].forEach((p, i) => meta(`meta[name="${p}"]`, [title, description][i]));
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = url;
    document.getElementById('ld-page')?.remove();
    if (crumbs) {
      const ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-page';
      ld.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + p })) });
      document.head.appendChild(ld);
    }
  }, [title, description, path]);
}
