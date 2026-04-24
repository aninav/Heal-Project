import { TOOLKITS } from '../data/siteData'
import styles from './Toolkits.module.css'

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function Toolkits() {
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className="center reveal">
          <div className="section-label">Free Downloads</div>
          <h2 className="section-title">Health Toolkits</h2>
          <p className="section-sub">Download our free STEM and health resource toolkits — designed for teens by teens.</p>
        </div>

        <div className={styles.grid}>
          {TOOLKITS.map((t, i) => (
            <div key={i} className={`${styles.card} reveal`}>
              <div className={styles.icon}>{t.emoji}</div>
              <div className={styles.info}>
                <h4 className={styles.title}>{t.title}</h4>
                <p className={styles.desc}>{t.desc}</p>
              </div>
              <div className={styles.download}>
                <DownloadIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
