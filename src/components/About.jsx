import styles from './About.module.css'

const pills = ['Mental Health','Nutrition','Sexual Health','STEM Careers','Healthcare Access','Advocacy']
const stats  = [
  { num: '20%',    label: 'Teens with unmet mental health needs' },
  { num: '50%',    label: 'Schools covering all health topics' },
  { num: 'Free',   label: 'All HEAL toolkits & resources' },
  { num: 'Global', label: 'Reach for our STEM content' },
]

export default function About({ onScrollTo }) {
  return (
    <section id="about" className={styles.section}>
      <div className="section-inner">
        <div className={styles.grid}>

          <div className="reveal">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              We believe health knowledge is a right,<br />not a privilege.
            </h2>
            <p className="section-sub">
              HEAL was founded by students who recognized the gap: millions of teens can't access clear, inclusive, and accurate health information. We're here to close that gap — through free resources, education, and community.
            </p>
            <div className={styles.pills}>
              {pills.map(p => <span key={p} className={styles.pill}>{p}</span>)}
            </div>
            <div className={styles.actions}>
              <button className="btn-primary" onClick={() => onScrollTo('programs')}>Our Programs</button>
              <button className={styles.outlineBtn} onClick={() => onScrollTo('involved')}>Volunteer</button>
            </div>
          </div>

          <div className="reveal">
            <div className={styles.quoteCard}>
              <span className={styles.quoteMark}>"</span>
              <blockquote className={styles.quote}>
                Of all the forms of inequality, injustice in health is the most shocking and inhumane.
                <footer className={styles.quoteAuthor}>— Martin Luther King Jr.</footer>
              </blockquote>
              <div className={styles.quoteBg} />
            </div>
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
