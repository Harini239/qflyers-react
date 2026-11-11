const fs = require('fs');

const path = 'e:/Falcon square/qflyers-react/qflyers/src/styles/global.css';
let content = fs.readFileSync(path, 'utf8').replace(/\r\n/g, '\n');

// Fix: nav links in mobile menu should be left-aligned, not centered
const oldNav = `  .header__nav{display:none;position:absolute;left:0;right:0;top:100%;background:var(--lav);flex-direction:column;padding:22px 6vw 28px;margin:0;gap:20px;align-items:stretch;box-shadow:0 12px 30px rgba(0,0,0,.12);border-bottom:1px solid rgba(0,0,0,.08);animation:slideDown .2s ease-out}\n  @keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}\n  .header__nav.is-open{display:flex}\n  .header__nav ul{flex-direction:column;gap:14px;width:100%}\n  .header__nav ul a{display:block;font-size:15px;padding:6px 0;width:fit-content}\n  .header__nav ul a.active{border-bottom:2.5px solid #000}\n  .header__cta{display:flex;justify-content:space-between;align-items:center;width:100%;padding-top:14px;border-top:1px solid rgba(0,0,0,.08)}`;

const newNav = `  .header__nav{display:none;position:absolute;left:0;right:0;top:100%;background:var(--lav);flex-direction:column;padding:22px 6vw 28px;margin:0;gap:20px;align-items:flex-start;box-shadow:0 12px 30px rgba(0,0,0,.12);border-bottom:1px solid rgba(0,0,0,.08);animation:slideDown .2s ease-out}\n  @keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}\n  .header__nav.is-open{display:flex}\n  .header__nav ul{flex-direction:column;gap:14px;width:100%;align-items:flex-start}\n  .header__nav ul li{width:100%}\n  .header__nav ul a{display:block;font-size:15px;padding:6px 0;width:fit-content;text-align:left}\n  .header__nav ul a.active{border-bottom:2.5px solid #000}\n  .header__cta{display:flex;justify-content:flex-start;align-items:center;gap:16px;width:100%;padding-top:14px;border-top:1px solid rgba(0,0,0,.08)}`;

if (content.includes(oldNav)) {
  content = content.replace(oldNav, newNav);
  fs.writeFileSync(path, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log('SUCCESS: Nav menu aligned left');
} else {
  console.log('MATCH FAILED');
  // Debug
  const lines = content.split('\n');
  lines.slice(30, 42).forEach((l, i) => console.log(31+i, JSON.stringify(l.slice(0, 120))));
}
