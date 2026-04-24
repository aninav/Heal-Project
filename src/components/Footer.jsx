import { SOCIAL_LINKS } from '../data/siteData'
import styles from './Footer.module.css'

export default function Footer({ onScrollTo }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        <div className={styles.brand}>
          <div className={styles.logo} onClick={() => onScrollTo('home')}>
            <div className={styles.logoIcon}>H</div>
            <span className={styles.logoText}>HEAL Project</span>
          </div>
          <p>Health Education Access League — making healthcare knowledge accessible for every teen, everywhere.</p>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialBtn}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                dangerouslySetInnerHTML={{ __html: s.svg }}
              />
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4>Learn</h4>
          <a onClick={() => onScrollTo('learn')}>Articles</a>
          <a href="https://www.the-heal-project.com/careerexploration" target="_blank" rel="noreferrer">Career Exploration</a>
          <a href="https://www.the-heal-project.com/art-gallery" target="_blank" rel="noreferrer">Art Gallery</a>
          <a onClick={() => onScrollTo('learn')}>Toolkits</a>
        </div>

        <div className={styles.col}>
          <h4>Get Involved</h4>
          <a onClick={() => onScrollTo('involved')}>Volunteer</a>
          <a onClick={() => onScrollTo('involved')}>Start a Chapter</a>
          <a href="https://www.the-heal-project.com/mentorship-program" target="_blank" rel="noreferrer">Mentorship</a>
          <a href="https://www.the-heal-project.com/challenges" target="_blank" rel="noreferrer">Challenges</a>
        </div>

        <div className={styles.col}>
          <h4>Organization</h4>
          <a onClick={() => onScrollTo('about')}>About Us</a>
          <a onClick={() => onScrollTo('involved')}>Our Partners</a>
          <a href="mailto:thehealproject48@gmail.com">Contact Us</a>
          <a href="mailto:thehealproject48@gmail.com">thehealproject48@gmail.com</a>
        </div>

      </div>

      <div className={styles.bottom}>
        <span>© 2026 <span className={styles.brand2}>The HEAL Project</span>. All rights reserved.</span>
        <span>Made with ❤️ by students, for students</span>
      </div>
    </footer>
  )
}
