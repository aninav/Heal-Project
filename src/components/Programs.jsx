import { PROGRAMS, COLORS } from '../data/siteData'
import styles from './Programs.module.css'

export default function Programs({ onOpenModal }) {
  return (
    <section id="programs" className={styles.section}>
      <div className="section-inner">
        <div className="center reveal">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Programs &amp; Services</h2>
          <p className="section-sub">Comprehensive health education built by teens, for teens — completely free.</p>
        </div>

        <div className={styles.grid}>
          {PROGRAMS.map((p, i) => (
            <div key={i} className={`${styles.card} reveal`} onClick={() => onOpenModal(p)}>
              <div className={styles.icon} style={{ background: p.color }}>{p.icon}</div>
              {p.badge && <span className={styles.badge}>{p.badge}</span>}
              <div className={styles.title}>{p.title}</div>
              <div className={styles.desc}>{p.desc}</div>
              <div className={styles.arrow}>Learn more <span>→</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
