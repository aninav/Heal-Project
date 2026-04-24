import { useState } from 'react'
import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Programs from './components/Programs'
import HealthTopics from './components/HealthTopics'
import Quiz from './components/Quiz'
import DailyTracker from './components/DailyTracker'
import Articles from './components/Articles'
import Toolkits from './components/Toolkits'
import GetInvolved from './components/GetInvolved'
import Partners from './components/Partners'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { COLORS } from './data/siteData'

export default function App() {
  useReveal()
  const [programModal, setProgramModal] = useState(null)
  const [topicModal,   setTopicModal]   = useState(null)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar onScrollTo={scrollTo} />
      <Hero onScrollTo={scrollTo} />
      <Ticker />
      <About onScrollTo={scrollTo} />
      <Programs onOpenModal={setProgramModal} />
      <HealthTopics onOpenTopic={setTopicModal} />
      <Quiz onScrollTo={scrollTo} />
      <DailyTracker />
      <Articles />
      <Toolkits />
      <GetInvolved />
      <Partners />
      <Newsletter />
      <Footer onScrollTo={scrollTo} />

      {/* Program detail modal */}
      {programModal && (
        <Modal onClose={() => setProgramModal(null)}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{programModal.icon}</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 800, marginBottom: '.75rem' }}>
            {programModal.title}
          </h3>
          <p style={{ color: COLORS.gray, lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {programModal.desc}
          </p>
          <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: '.9rem', marginBottom: '1.75rem' }}>
            Our {programModal.title} program provides free, teen-friendly resources including videos, articles,
            infographics, and interactive guides. All content is reviewed by healthcare professionals and student educators.
          </p>
          <button
            className="btn-primary"
            onClick={() => { setProgramModal(null); scrollTo('learn') }}
          >
            Explore Resources →
          </button>
        </Modal>
      )}

      {/* Health topic detail modal */}
      {topicModal && (
        <Modal onClose={() => setTopicModal(null)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: topicModal.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem', flexShrink: 0
            }}>
              {topicModal.emoji}
            </div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 800 }}>
              {topicModal.name}
            </h3>
          </div>

          <p style={{ color: COLORS.gray, lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '.95rem' }}>
            {topicModal.desc}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.78rem',
              letterSpacing: '1.5px', textTransform: 'uppercase',
              color: COLORS.teal, marginBottom: '.75rem'
            }}>
              Key Facts
            </div>
            {topicModal.facts.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '.6rem', marginBottom: '.5rem', fontSize: '.9rem', alignItems: 'flex-start' }}>
                <span style={{ color: COLORS.teal, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>→</span>
                {f}
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.78rem',
              letterSpacing: '1.5px', textTransform: 'uppercase',
              color: COLORS.teal, marginBottom: '.75rem'
            }}>
              Resources
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
              {topicModal.resources.map((r, i) => (
                <span key={i} style={{
                  background: 'rgba(45,184,160,.1)',
                  border: '1px solid rgba(45,184,160,.25)',
                  color: COLORS.tealDark,
                  fontSize: '.82rem', fontWeight: 600,
                  padding: '.35rem .85rem', borderRadius: '50px', cursor: 'pointer'
                }}>
                  {r}
                </span>
              ))}
            </div>
          </div>

          <button
            className="btn-primary"
            onClick={() => { setTopicModal(null); scrollTo('learn') }}
          >
            Explore {topicModal.name} Articles →
          </button>
        </Modal>
      )}
    </>
  )
}
