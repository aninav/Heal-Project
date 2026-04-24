import { useState } from 'react'
import { QUIZ_DATA } from '../data/siteData'
import styles from './Quiz.module.css'

export default function Quiz({ onScrollTo }) {
  const [idx,    setIdx]    = useState(0)
  const [answer, setAnswer] = useState(null)
  const [score,  setScore]  = useState(0)
  const [done,   setDone]   = useState(false)

  const handleAnswer = (i) => {
    if (answer !== null) return
    setAnswer(i)
    if (i === QUIZ_DATA[idx].correct) setScore(s => s + 1)
  }

  const next = () => {
    if (idx + 1 >= QUIZ_DATA.length) { setDone(true); return }
    setIdx(q => q + 1)
    setAnswer(null)
  }

  const restart = () => { setIdx(0); setAnswer(null); setScore(0); setDone(false) }

  const q = QUIZ_DATA[idx]

  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className="center reveal">
          <div className="section-label">Test Your Knowledge</div>
          <h2 className="section-title">Health IQ Quiz</h2>
          <p className="section-sub">Answer 5 questions and see how health-savvy you are.</p>
        </div>

        <div className={`${styles.card} reveal`}>
          {!done ? (
            <>
              <div className={styles.progress}>
                {QUIZ_DATA.map((_, i) => (
                  <div key={i} className={`${styles.dot} ${i <= idx ? styles.dotDone : ''}`} />
                ))}
              </div>
              <div className={styles.counter}>Question {idx + 1} of {QUIZ_DATA.length}</div>
              <div className={styles.question}>{q.question}</div>
              <div className={styles.options}>
                {q.options.map((opt, i) => {
                  let cls = styles.option
                  if (answer !== null) {
                    if (i === q.correct)      cls += ' ' + styles.correct
                    else if (i === answer)    cls += ' ' + styles.wrong
                  }
                  return (
                    <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                      {opt}
                    </button>
                  )
                })}
              </div>
              {answer !== null && (
                <>
                  <div className={`${styles.feedback} ${answer === q.correct ? styles.feedbackCorrect : styles.feedbackWrong}`}>
                    {answer === q.correct ? '✅ Correct! ' : '❌ Not quite. '}
                    {q.explanation}
                  </div>
                  <button className={styles.next} onClick={next}>
                    {idx + 1 >= QUIZ_DATA.length ? 'See My Score →' : 'Next Question →'}
                  </button>
                </>
              )}
            </>
          ) : (
            <div className={styles.scoreScreen}>
              <div className={styles.scoreNum}>{score}/{QUIZ_DATA.length}</div>
              <div className={styles.scoreLabel}>
                {score === 5 ? '🏆 Perfect score! You\'re a health expert!' :
                 score >= 3  ? '🌟 Great job! Keep exploring our resources.' :
                               '📚 Keep learning — explore our articles to level up!'}
              </div>
              <div className={styles.scoreActions}>
                <button className={styles.next} onClick={restart}>Try Again</button>
                <button className={styles.outlineBtn} onClick={() => onScrollTo('learn')}>Explore Articles</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
