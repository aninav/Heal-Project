import { HERO_STATS, SOCIAL_LINKS } from '../data/siteData'
import styles from './Hero.module.css'

export default function Hero({ onScrollTo }) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgCircles}>
        {[
          { w: 500, h: 500, top: '-150px', left: '-200px', delay: '0s' },
          { w: 350, h: 350, bottom: '-100px', right: '-100px', delay: '2s' },
          { w: 250, h: 250, top: '30%', right: '15%', delay: '4s' },
        ].map((c, i) => (
          <div key={i} className={styles.circle} style={{ width: c.w, height: c.h, top: c.top, bottom: c.bottom, left: c.left, right: c.right, animationDelay: c.delay }} />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Student-Led · Nonprofit · Founded 2025
        </div>

        <h1 className={styles.title}>
          Health Education<br />
          <span>Access League</span>
        </h1>

        <p className={styles.sub}>
          Making healthcare knowledge accessible, accurate, and empowering for every teen — regardless of background, zip code, or income.
        </p>

        <div className={styles.buttons}>
          <button className="btn-primary" onClick={() => onScrollTo('learn')}>Explore Resources</button>
          <button className="btn-outline" onClick={() => onScrollTo('about')}>Our Mission</button>
        </div>

        <div className={styles.stats}>
          {HERO_STATS.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className={styles.socials}>
          <span className={styles.socialsLabel}>Follow Us</span>
          <div className={styles.socialsDivider} />
          {SOCIAL_LINKS.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              className={styles.socialBtn}
              dangerouslySetInnerHTML={{ __html: s.svg }}
            />
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
