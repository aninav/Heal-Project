import { TOPICS, COLORS } from '../data/siteData'
import styles from './HealthTopics.module.css'

export default function HealthTopics({ onOpenTopic }) {
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className="center reveal">
          <div className={styles.label}>Browse by Topic</div>
          <h2 className={styles.title}>Explore Health Topics</h2>
        </div>

        <div className={styles.grid}>
          {TOPICS.map((t, i) => (
            <div key={i} className={`${styles.card} reveal`} onClick={() => onOpenTopic(t)}>
              <span className={styles.emoji}>{t.emoji}</span>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.hint}>Tap to learn →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
