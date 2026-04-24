import { ARTICLES } from '../data/siteData'
import styles from './Articles.module.css'

export default function Articles() {
  return (
    <section id="learn" className={styles.section}>
      <div className="section-inner">
        <div className={styles.header}>
          <div className="reveal">
            <div className="section-label">Learn</div>
            <h2 className="section-title">Latest Articles</h2>
          </div>
          <button className={styles.viewAll}>View All Articles →</button>
        </div>

        <div className={styles.grid}>
          {ARTICLES.map((a, i) => (
            <article key={i} className={`${styles.card} reveal`}>
              <div className={styles.cardImg} style={{ background: a.bg }}>
                {a.emoji}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.tag}>{a.tag}</div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.excerpt}>{a.excerpt}</p>
                <div className={styles.meta}>
                  <div className={styles.avatar}>{a.author}</div>
                  <span className={styles.metaText}>{a.name} · {a.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
