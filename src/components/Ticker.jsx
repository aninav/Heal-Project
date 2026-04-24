import styles from './Ticker.module.css'

const ITEMS = ['Free Resources','Mental Health','Nutrition','STEM Careers','Mentorship','Health Challenges','Community','Sexual Health Education','Healthcare Navigation','Art Gallery']

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  )
}
