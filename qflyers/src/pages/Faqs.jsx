import FaqList from '../components/FaqList';
import useSeo from '../hooks/useSeo';
import { FAQS_ALL } from '../data/site';
export default function Faqs() {
  useSeo({ title: 'FAQs | Q-Flyers', description: 'Answers to common questions about Q-Flyers digital menu cards.', path: '/faqs', crumbs: [['Home', '/'], ['FAQs', '/faqs']] });
  return (
    <section className="sec sec--faq">
      <h1 className="h1 h1--faq">FAQ’S</h1>
      <img className="faq__img" src="/images/faq-people.png" alt="People asking questions" width="340" height="250" loading="eager" />
      <div className="wrap"><FaqList items={FAQS_ALL} /></div>
    </section>
  );
}
