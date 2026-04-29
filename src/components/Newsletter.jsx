import { useState } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email,      setEmail]      = useState('')
  const [error,      setError]      = useState('')
  const [loading,    setLoading]    = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!email) { setError('Please enter your email address.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return }
    setError('')
    setLoading(true)
    // Simulate network delay so the animation is visible
    setTimeout(() => {
      setLoading(false)
      setSubscribed(true)
    }, 1200)
  }

  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className={`${styles.inner} reveal`}>

          {!subscribed ? (
            <>
              <div className={styles.title}>Stay in the Know 📬</div>
              <p className={styles.sub}>
                Get free health tips, new toolkits, challenge announcements, and community updates straight to your inbox.
              </p>
              <div className={styles.formWrap}>
                <div className={styles.form}>
                  <input
                    className={`${styles.input} ${error ? styles.inputError : ''}`}
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    disabled={loading}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  />
                  <button
                    className={`${styles.btn} ${loading ? styles.btnLoading : ''}`}
                    onClick={handleSubscribe}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className={styles.spinner} />
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
                {error && <p className={styles.error}>{error}</p>}
              </div>
            </>
          ) : (
            <div className={styles.successScreen}>
              <div className={styles.checkCircle}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={styles.successTitle}>You're in! 🎉</div>
              <div className={styles.successSub}>
                Welcome to the HEAL community.<br />
                Check your inbox for a welcome email.
              </div>
              <div className={styles.successBadges}>
                <span className={styles.successBadge}>✦ Free Toolkits</span>
                <span className={styles.successBadge}>✦ Health Tips</span>
                <span className={styles.successBadge}>✦ Challenges</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
