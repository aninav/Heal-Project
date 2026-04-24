import { useState } from 'react'
import { HABITS } from '../data/siteData'
import styles from './DailyTracker.module.css'

export default function DailyTracker() {
  const [checked, setChecked] = useState({})
  const toggle = (i) => setChecked(c => ({ ...c, [i]: !c[i] }))
  const count = Object.values(checked).filter(Boolean).length

  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className="center reveal">
          <div className="section-label">Wellness Tracker</div>
          <h2 className="section-title">Daily Health Habits</h2>
          <p className="section-sub">Check off your healthy habits for today and build a streak!</p>
        </div>

        <div className={`${styles.card} reveal`}>
          <div className={styles.cardTitle}>Today's Health Checklist</div>

          <div className={styles.habits}>
            {HABITS.map((h, i) => (
              <div
                key={i}
                className={`${styles.habit} ${checked[i] ? styles.habitChecked : ''}`}
                onClick={() => toggle(i)}
              >
                <div className={styles.checkbox}>
                  {checked[i] && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className={styles.habitEmoji}>{h.emoji}</span>
                <span className={styles.habitLabel}>{h.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(count / HABITS.length) * 100}%` }}
            />
          </div>

          <div className={styles.streak}>
            {count === 0 && 'Check off your habits for today!'}
            {count > 0 && count < HABITS.length && (
              <><span className={styles.streakHighlight}>{count}/{HABITS.length}</span> habits done — keep going! 💪</>
            )}
            {count === HABITS.length && (
              <><span className={styles.streakHighlight}>🎉 All done!</span> You crushed today's health goals!</>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
