export const SITE = 'https://qflyers.com';
export const NAV = [['Home','/'],['Templates','/templates'],['Pricing','/pricing'],['Contact Us','/contact'],['Goals','/goals']];
export const tpl = (n, label) => ({ src: `/images/template-${String(n).padStart(2,'0')}.jpg`, label });
export const TEMPLATES = [
  { src: '/images/template-01.png', label: 'Ice Cream Shop menu template' },
  { src: '/images/template-03.png', label: 'Ice Cream Parlour logo menu template' },
  { src: '/images/template-04.png', label: 'The Flower Shop floral template' },
  tpl(17,'The Royal Restaurant template'),
  tpl(18,'The New Bakes Restaurant template'),
  tpl(19,'The Authentic Restaurant template'),
  tpl(20,'Restaurant Fine Dining template'),
  tpl(21,'The Classic Restaurant template'),
  tpl(22,'The Royal Restaurant v2 template'),
  tpl(23,'The Royal Restaurant v3 template'),
];
export const HOME_STRIP = [
  { src: '/images/template-17.jpg', label: 'The Royal Restaurant template' },
  { src: '/images/template-18.jpg', label: 'The New Bakes Restaurant template' },
  { src: '/images/template-19.jpg', label: 'The Authentic Restaurant template' },
  { src: '/images/template-20.jpg', label: 'Restaurant Fine Dining template' },
  { src: '/images/template-21.jpg', label: 'The Classic Restaurant template' },
  { src: '/images/template-22.jpg', label: 'The Royal Restaurant v2 template' },
  { src: '/images/template-23.jpg', label: 'The Royal Restaurant v3 template' },
];
export const FILTERS = [['All','Restaurant','Ice Cream Parlour','Cafe'],['Diwali','Furniture','Flower Shop','Sip Society','Clinic','Others']];
export const FAQS = ['Alright, but what exactly do you do?','I don\u2019t need a brand strategist but I need help executing an upcoming campaign. Can we still work together?','Are your rates competitive?','Why do you have a monthly project cap?','Is this suitable for startup business?'];
export const FAQS_ALL = [...FAQS, ...Array(4).fill('Is this suitable for startup business?')];
export const FAQ_ANSWER = 'Q-Flyers lets you publish a digital menu, update it in real time and share it through a QR code. Contact support for details.';
export const STEPS = ['Signup','Template','QR Scan','Explore'];
export const STEP_TEXT = 'Provide some basic information such as your addressing and montage information';
export const SOCIAL = ['Facebook','Instagram','LinkedIn','Twitter'];
export const FEATURES = [
 ['Instant Menu Updates','Change prices, add specials, or modify descriptions in seconds - all updates appear immediately across all customer touchpoints.'],
 ['Contactless Ordering','Customers scan your custom QR code to view your beautifully designed menu directly on their devices, enhancing hygiene and convenience.'],
 ['Data-Driven Insights','Track viewing patterns, popular items, and customer behavior to optimize your menu and boost sales of high-margin items.'],
 ['Multi-Location Management','Easily manage menus across multiple locations with centralized controls or customize offerings for each venue.']];
const F = ['All Features','1k lookups / per month','No API Credits','10 Monitoring Quota','60 minutes Monitoring Interval','20% discount on backorders','Domain Name Appraisal','Ip Monitoring','Backlink Monitoring'];
export const PLANS = [['FREE','0'],['MONTHLY','9'],['ANNUALLY','99'],['LIFE TIME','2999']].map(([n,p],i)=>({name:n,price:p,hot:i===2,features:F}));
export const FOOTER = {
 Product:[['Home','/'],['Template','/templates'],['About','/#about'],['Plan','/pricing'],['Contact us','/contact']],
 'Use Cases':[['Web-designers','/'],['Marketers','/'],['Small Business','/'],['Website Builder','/']],
 Company:[['About Us','/#about'],['Careers','/'],['FAQs','/faqs'],['Privacy','/privacy'],['Terms & conditions','/terms']]};

export const GOALS_DATA = [
  {
    id: 'coffee-shop',
    category: 'COFFEE SHOP',
    title: 'FUEL YOUR AMBITION AT GOAL COFFEE',
    summary: "A coffee shop named 'Goal Coffee' could have a really inspiring and cozy vibe! Imagine it being a place where people go to fuel their ambitions whether they're working on their dreams, studying, or taking a much-needed break.",
    fullText: "A coffee shop named “Goal Coffee” could have a really inspiring and cozy vibe! Imagine it being a place where people go to fuel their ambitions—whether they’re working on their dreams, studying, or taking a much-needed break. At Goal Coffee, we believe in more than just great coffee. We’re a space where creativity flows, ideas spark, and ambition thrives. Whether you’re working on your next big project, studying for exams, or simply taking a moment to unwind, Goal Coffee is here to fuel your journey.",
    image: '/images/goal-coffee.jpg',
  },
  {
    id: 'street-food',
    category: 'STREET FOOD',
    title: 'ENERGIZE YOUR PALATE AT GOAL STREET FOOD',
    summary: "The vibe would be casual and lively, with food trucks or stalls featuring brightly colored signage, chalkboard menus with inspirational quotes, and street art-inspired decor.",
    fullText: "The vibe would be casual and lively, with food trucks or stalls featuring brightly colored signage, chalkboard menus with inspirational quotes, and street art-inspired decor. Street food connects communities and spices up daily routines. With Q-Flyers, street vendors can update daily specials instantly, display mouth-watering pictures, and let hungry customers scan and order in seconds without standing in long lines.",
    image: '/images/goal-streetfood.jpg',
  },
  {
    id: 'restaurant',
    category: 'RESTAURANT',
    title: 'EXPERIENCE FINE DINING AT GOAL RESTAURANT',
    summary: "A restaurant named 'Goal Restaurant' could be a unique concept that combines great food with an emphasis on personal achievement and fulfillment. Picture it as a place where the dining experience goes beyond just enjoying delicious meals.",
    fullText: "A restaurant named “Goal Restaurant” could be a unique concept that combines great food with an emphasis on personal achievement and fulfillment. Picture it as a place where the dining experience goes beyond just enjoying delicious meals. Elegant digital menus allow high-end eateries to present curated wine pairings, seasonal specials, and chef notes with flawless aesthetics and contactless ease.",
    image: '/images/goal-restaurant.jpg',
  },
  {
    id: 'medical',
    category: 'MEDICAL',
    title: 'EMPOWER HEALTHCARE AT GOAL MEDICAL',
    summary: "A medical tools shop provides a wide range of equipment for healthcare professionals and home use. It offers items like stethoscopes, thermometers, surgical instruments, and diagnostic tools.",
    fullText: "A medical tools shop provides a wide range of equipment for healthcare professionals and home use. It offers items like stethoscopes, thermometers, surgical instruments, and diagnostic tools. Using digital flyers and QR displays, clinics and medical supply centers can provide clear instruction guides, patient service catalogs, and emergency contacts instantly to visitors.",
    image: '/images/goal-medical.jpg',
  },
  {
    id: 'tools-shop',
    category: 'TOOLS SHOP',
    title: 'EQUIP YOUR CRAFT AT GOAL TOOLS SHOP',
    summary: "A tool shop is a place where customers can find a variety of tools for different tasks, from basic hand tools to specialized machinery. It offers essential items for home repairs, construction, and automotive work. With expert advice and high-quality products, it supports both professionals and DIY enthusiasts.",
    fullText: "A tool shop is a place where customers can find a variety of tools for different tasks, from basic hand tools to specialized machinery. It offers essential items for home repairs, construction, and automotive work. With expert advice and high-quality products, it supports both professionals and DIY enthusiasts. QR catalogs make hardware inventory discovery and specifications crystal clear.",
    image: '/images/goal-tools.jpg',
  },
  {
    id: 'design',
    category: 'DESIGN & DRAFTING',
    title: 'BLUEPRINT YOUR VISION AT GOAL STUDIO',
    summary: "From architectural drafts to creative design studios, visual precision is everything. Showcase design portfolios, service pricing tiers, and project milestones in stunning digital layouts.",
    fullText: "From architectural drafts to creative design studios, visual precision is everything. Showcase design portfolios, service pricing tiers, and project milestones in stunning digital layouts. Clients can scan your presentation boards to instantly explore your extended portfolio, blueprint specs, and schedule consultations.",
    image: '/images/goal-design.jpg',
  },
];
