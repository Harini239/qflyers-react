import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo';
import { STEPS, STEP_TEXT, GOALS_DATA } from '../data/site';
import '../styles/goals.css';

const COFFEE_DETAIL_LINES = [
  'A coffee shop named "Goal Coffee" could have a really inspiring and cozy vibe! Imagine it being a place where people go to fuel',
  'their ambitions—whether they\'re working on their dreams, studying, or taking a much-needed break. At Goal Coffee, we believe in',
  'more than just great coffee. We\'re a space where creativity flows, ideas spark, and ambition thrives. Whether you\'re working on',
  'your next big project, studying for exams, or simply taking a moment to unwind, Goal Coffee is here to fuel your journey.',
];

function formatGoalTitle(title) {
  if (title.includes(' AT ')) {
    const parts = title.split(' AT ');
    return [parts[0] + ' AT', parts[1]];
  }
  return [title];
}

export default function Goals() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedGoal = id ? GOALS_DATA.find((g) => g.id === id) : null;

  useSeo({
    title: selectedGoal
      ? `${selectedGoal.title} | Q-Flyers Goals`
      : 'Our Goals | Digital Menu Card Solutions | Q-Flyers',
    description: selectedGoal
      ? selectedGoal.summary
      : 'Explore goals and industry use-cases for Q-Flyers: Coffee shops, restaurants, street food, medical, tool shops, and design studios.',
    path: selectedGoal ? `/goals/${selectedGoal.id}` : '/goals',
    crumbs: selectedGoal
      ? [['Home', '/'], ['Goals', '/goals'], [selectedGoal.category, `/goals/${selectedGoal.id}`]]
      : [['Home', '/'], ['Goals', '/goals']],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleSelectGoal = (goal) => {
    navigate(`/goals/${goal.id}`);
  };

  return (
    <div className="goals-page">
      {!selectedGoal ? (
        /* ── VIEW 1: Main Goals Catalog (Cards Grid) ── */
        <>
          <section className="goals-hero" aria-labelledby="goals-hero-title">
            <div className="goals-hero__in">
              <div className="goals-hero__decor" aria-hidden="true">
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                  <rect x="24" y="0" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                  <rect x="0" y="24" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                  <rect x="24" y="24" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                  <circle cx="54" cy="8" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="62" cy="8" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="54" cy="16" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="62" cy="16" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="54" cy="24" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="62" cy="24" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                </svg>
              </div>

              <h1 id="goals-hero-title" className="goals-hero__title">
                <span className="goals-hero__title-line">DESCRIBE YOUR GOAL FOR</span>
                <span className="goals-hero__title-line">USING QFLYER</span>
              </h1>

              <p className="goals-hero__desc">
                <span className="goals-hero__desc-line">My goal for using QFlyer is to efficiently create and manage professional flyers for promoting</span>
                <span className="goals-hero__desc-line">services, events, or products. By utilizing QFlyer’s tools, I aim to design visually appealing,</span>
                <span className="goals-hero__desc-line">informative, and easily shareable flyers to reach a wider audience, increase engagement,</span>
                <span className="goals-hero__desc-line">and drive action for the intended purpose.</span>
              </p>
            </div>
          </section>

          <section className="sec goals-catalog" aria-label="Available business goals">
            <div className="goals-grid">
              {GOALS_DATA.map((g) => (
                <article
                  key={g.id}
                  className="goal-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelectGoal(g)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectGoal(g);
                    }
                  }}
                  aria-label={`View goal details for ${g.category}`}
                >
                  <div className="goal-card__media">
                    <img src={g.image} alt={g.category} loading="lazy" />
                  </div>
                  <div className="goal-card__body">
                    <div className="goal-card__header">
                      <span className="goal-card__tag">{g.category}</span>
                      <span className="goal-card__arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                    <p className="goal-card__desc">{g.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* ── VIEW 2: Specific Goal Detailed Page (Matches Reference Image) ── */
        <>
          <div className="goal-nav-bar">
            <Link
              to="/goals"
              className="goal-back-btn"
              aria-label="Back to all goals"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back to all goals</span>
            </Link>
          </div>

          <section className="goals-detail-hero" aria-labelledby="goal-detail-title">
            <div className="goals-detail-hero__in">
              <div className="goals-detail-hero__decor" aria-hidden="true">
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                  <rect x="24" y="0" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                  <rect x="0" y="24" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                  <rect x="24" y="24" width="18" height="18" rx="4.5" fill="#F4604F" fillOpacity="0.12" />
                  <circle cx="54" cy="8" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="62" cy="8" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="54" cy="16" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="62" cy="16" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="54" cy="24" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                  <circle cx="62" cy="24" r="2.5" fill="#F4604F" fillOpacity="0.16" />
                </svg>
              </div>

              <h1 id="goal-detail-title" className="goals-detail-hero__title">
                {formatGoalTitle(selectedGoal.title).map((line, idx) => (
                  <span key={idx} className="goals-detail-hero__title-line">{line}</span>
                ))}
              </h1>

              {selectedGoal.id === 'coffee-shop' ? (
                <p className="goals-detail-hero__desc">
                  {COFFEE_DETAIL_LINES.map((line, idx) => (
                    <span key={idx} className="goals-detail-hero__desc-line">{line}</span>
                  ))}
                </p>
              ) : (
                <p className="goals-detail-hero__desc">{selectedGoal.fullText}</p>
              )}
            </div>
          </section>

          <section className="sec goal">
            <img
              src={selectedGoal.image}
              alt={selectedGoal.category}
              width="540"
              height="660"
              className="goal__cover"
              loading="lazy"
            />
            <ol>
              {STEPS.map((s, i) => (
                <li key={s}>
                  <img
                    src={`/images/goal-step-${i + 1}.png`}
                    alt=""
                    width="70"
                    height="70"
                    loading="lazy"
                    className="goal-step-icon"
                  />
                  <div>
                    <h2>{s}</h2>
                    <p>{STEP_TEXT}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </>
      )}
    </div>
  );
}
