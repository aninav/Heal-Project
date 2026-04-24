import { useState } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email,      setEmail]      = useState('')
  const [error,      setError]      = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!email) { setError('Please enter your email address.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return }
    setError('')
    setSubscribed(true)
  }

  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className={`${styles.inner} reveal`}>
          <div className={styles.title}>Stay in the Know 📬</div>
          <p className={styles.sub}>
            Get free health tips, new toolkits, challenge announcements, and community updates straight to your inbox.
          </p>

          {!subscribed ? (
            <div>
              <div className={styles.form}>
                <input
                  className={`${styles.input} ${error ? styles.inputError : ''}`}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError('') }}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                />
                <button className={styles.btn} onClick={handleSubscribe}>Subscribe</button>
              </div>
              {error && <p className={styles.error}>{error}</p>}
            </div>
          ) : (
            <div className={styles.success}>
              ✅ You're in! Welcome to the HEAL community.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
