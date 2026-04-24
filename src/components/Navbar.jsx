import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '../data/siteData'
import styles from './Navbar.module.css'

export default function Navbar({ onScrollTo }) {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeSection, setActive]   = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    onScrollTo(id)
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo} onClick={() => handleNav('home')}>
          <div className={styles.logoIcon}>H</div>
          <span className={styles.logoText}>HEAL Project</span>
        </div>

        <div className={styles.links}>
          {NAV_ITEMS.map(n => (
            <button
              key={n.id}
              className={`${styles.link} ${activeSection === n.id ? styles.active : ''}`}
              onClick={() => handleNav(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>

        <button className={styles.cta} onClick={() => handleNav('involved')}>
          Join Us →
        </button>

        <div className={styles.hamburger} onClick={() => setMenuOpen(o => !o)}>
          <span className={menuOpen ? styles.open1 : ''} />
          <span className={menuOpen ? styles.open2 : ''} />
          <span className={menuOpen ? styles.open3 : ''} />
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_ITEMS.map(n => (
          <button key={n.id} className={styles.link} onClick={() => handleNav(n.id)}>
            {n.label}
          </button>
        ))}
        <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={() => handleNav('involved')}>
          Join Us →
        </button>
      </div>
    </>
  )
}
