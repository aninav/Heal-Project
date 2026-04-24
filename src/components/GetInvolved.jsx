import { INVOLVED_CARDS } from '../data/siteData'
import styles from './GetInvolved.module.css'

export default function GetInvolved() {
  return (
    <section id="involved" className={styles.section}>
      <div className="section-inner">
        <div className="center reveal">
          <div className="section-label">Take Action</div>
          <h2 className="section-title">Get Involved</h2>
          <p className="section-sub">Three ways to be part of the HEAL movement.</p>
        </div>

        <div className={styles.grid}>
          {INVOLVED_CARDS.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardBg} style={{ background: c.bg }} />
              <div className={styles.content}>
                <div className={styles.title}>{c.title}</div>
                <div className={styles.desc}>{c.desc}</div>
                <button className={styles.btn}>{c.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
