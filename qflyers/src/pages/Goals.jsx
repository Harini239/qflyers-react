import { useState } from 'react';
import useSeo from '../hooks/useSeo';
import { STEPS, STEP_TEXT, GOALS_DATA } from '../data/site';

export default function Goals() {
  const [selectedGoal, setSelectedGoal] = useState(null);

  useSeo({
    title: selectedGoal
      ? `${selectedGoal.title} | Q-Flyers Goals`
      : 'Our Goals | Digital Menu Card Solutions | Q-Flyers',
    description:
      'Explore goals and industry use-cases for Q-Flyers: Coffee shops, restaurants, street food, medical, tool shops, and design studios.',
    path: '/goals',
    crumbs: [['Home', '/'], ['Goals', '/goals']],
  });

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedGoal(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="goals-page">
      {!selectedGoal ? (
        /* ── VIEW 1: All Goals Grid ── */
        <>
          <section className="hero hero--center">
            <div className="hero__text">
              <h1>DESCRIBE YOUR GOAL FOR USING QFLYER</h1>
              <p className="narrow">
                My goal for using QFlyer is to efficiently create and manage professional flyers for promoting services, events, or products. By utilizing QFlyer's tools, I aim to design visually appealing, informative, and easily shareable flyers to reach a wider audience, increase engagement, and drive action for the intended purpose.
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
        /* ── VIEW 2: Interactive Goal Detail ── */
        <>
          <div className="goal-nav-bar">
            <button
              type="button"
              className="goal-back-btn"
              onClick={handleBack}
              aria-label="Back to all goals"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back to all goals</span>
            </button>
          </div>

          <section className="hero hero--center">
            <div className="hero__text">
              <h1>{selectedGoal.title}</h1>
              <p className="narrow">{selectedGoal.fullText}</p>
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
