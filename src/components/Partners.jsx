import { PARTNERS } from '../data/siteData'
import styles from './Partners.module.css'

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className="center reveal">
          <div className="section-label">Community</div>
          <h2 className="section-title">Our Partners</h2>
        </div>
        <div className={`${styles.grid} reveal`}>
          {PARTNERS.map((p, i) => (
            <div key={i} className={styles.badge}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
