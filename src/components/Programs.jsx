import { useState } from "react";
import { Container, SectionHeading, INK, INK_SOFT, LINE, CARD, ACCENT, ACCENT_SOFT, SANS, SERIF } from "./UI";
import { PROGRAMS, TOPICS } from "../data/siteData";

// Why each topic matters — shown in the popup
const TOPIC_DESCRIPTIONS = {
  "Mental Health": {
    why: "1 in 5 teens experiences a mental health condition, yet most never receive support. Understanding your mind is the foundation of every other kind of wellness.",
    icon: "🧠",
  },
  "Nutrition": {
    why: "Teen bodies are growing faster than at any other life stage. What you eat affects your energy, focus, mood, and long-term disease risk — and diet culture makes it harder to know what's actually true.",
    icon: "🥗",
  },
  "Sexual Health": {
    why: "Incomplete or shame-based sex ed leaves teens without the information to protect themselves and make informed choices. Everyone deserves honest, judgment-free answers.",
    icon: "💬",
  },
  "Sleep & Rest": {
    why: "Most teens are chronically sleep-deprived. Poor sleep impairs memory, immunity, mood, and growth — yet schools and society treat it as optional.",
    icon: "🌙",
  },
  "Fitness": {
    why: "Regular movement is one of the most evidence-backed interventions for anxiety and depression. It doesn't require a gym or a perfect body — just consistency.",
    icon: "🏃",
  },
  "Digital Wellness": {
    why: "Teens average 7+ hours of screen time daily. Understanding how algorithms and social media affect your self-image and attention is a modern survival skill.",
    icon: "📱",
  },
  "Substance Awareness": {
    why: "Teen brains are still developing, making them especially vulnerable to substance use. Non-judgmental, accurate information reduces harm far better than abstinence-only messaging.",
    icon: "⚠️",
  },
  "Body Image": {
    why: "Poor body image is linked to depression, eating disorders, and lower academic performance. Learning to respect your body — not just tolerate it — changes everything.",
    icon: "🪞",
  },
  "Relationships": {
    why: "Healthy relationships — romantic, platonic, and familial — are protective factors for mental health. Recognizing red flags and building communication skills starts here.",
    icon: "🤝",
  },
  "Stress Management": {
    why: "Chronic stress activates the same biological pathways as physical danger. Without tools to manage it, teens are left running on cortisol — and burning out.",
    icon: "🌊",
  },
  "First Aid": {
    why: "Knowing basic first aid can save a life. Every teen should know CPR, how to handle emergencies, and when to call for help — before they ever need it.",
    icon: "🩺",
  },
  "Chronic Illness": {
    why: "Millions of teens live with conditions like diabetes, asthma, or autoimmune disease. Understanding chronic illness reduces stigma and helps those affected advocate for themselves.",
    icon: "💛",
  },
};

function TopicPopup({ topic, onClose }) {
  const info = TOPIC_DESCRIPTIONS[topic] || { why: "", icon: "📚" };
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(22,34,29,0.35)",
          backdropFilter: "blur(2px)",
        }}
      />
      {/* Card */}
      <div style={{
        position: "fixed", zIndex: 201,
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        background: CARD, borderRadius: 14,
        border: `1px solid ${LINE}`,
        boxShadow: "0 20px 60px rgba(22,34,29,0.18)",
        padding: "40px 36px 32px",
        maxWidth: 400, width: "calc(100vw - 48px)",
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "none", border: "none", fontSize: 18,
            color: INK_SOFT, cursor: "pointer", lineHeight: 1,
            padding: "4px 8px", borderRadius: 4,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Icon */}
        <div style={{ fontSize: 36, marginBottom: 14 }}>{info.icon}</div>

        {/* Topic label */}
        <div style={{
          fontFamily: SANS, fontSize: 11, fontWeight: 600,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: ACCENT, marginBottom: 8,
        }}>
          Why it matters
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: SERIF, fontSize: 24, fontWeight: 600,
          color: INK, margin: "0 0 16px", lineHeight: 1.2,
        }}>
          {topic}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: SANS, fontSize: 15, color: INK_SOFT,
          lineHeight: 1.75, margin: "0 0 24px",
        }}>
          {info.why}
        </p>

        {/* Subtle accent bar */}
        <div style={{
          height: 3, borderRadius: 2,
          background: `linear-gradient(90deg, ${ACCENT} 0%, #4DB899 100%)`,
          width: 48,
        }} />
      </div>
    </>
  );
}

export function Programs() {
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading
          kicker="What we do"
          title="Our programs"
          sub="Six pillars of health education, designed for and by young people."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {PROGRAMS.map((p, i) => (
            <div
              key={p.title}
              style={{
                padding: "28px 28px 28px 0",
                borderTop: `1px solid ${LINE}`,
                borderLeft: i % 3 !== 0 ? `1px solid ${LINE}` : "none",
                paddingLeft: i % 3 !== 0 ? 28 : 0,
              }}
            >
              <div style={{ fontFamily: SANS, fontSize: 12, color: "#0E6B53", marginBottom: 10 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ fontFamily: SERIF, fontSize: 21, fontWeight: 600, color: INK, margin: "0 0 10px" }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: SANS, fontSize: 14.5, color: INK_SOFT, lineHeight: 1.7, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HealthTopics() {
  const [activeTopic, setActiveTopic] = useState(null);

  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading
          kicker="Coverage"
          title="Health topics"
          sub="Tap any topic to learn why it matters. Comprehensive, stigma-free coverage of what affects teens most."
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {TOPICS.map(t => (
            <button
              key={t}
              onClick={() => setActiveTopic(t)}
              style={{
                fontFamily: SANS, fontSize: 14, color: INK,
                padding: "10px 18px", border: `1px solid ${LINE}`,
                background: CARD, borderRadius: 100,
                cursor: "pointer", transition: "all 0.15s",
                display: "flex", alignItems: "center", gap: 6,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = ACCENT_SOFT;
                e.currentTarget.style.borderColor = ACCENT;
                e.currentTarget.style.color = ACCENT;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = CARD;
                e.currentTarget.style.borderColor = LINE;
                e.currentTarget.style.color = INK;
              }}
            >
              <span>{TOPIC_DESCRIPTIONS[t]?.icon}</span>
              <span>{t}</span>
            </button>
          ))}
        </div>
        <p style={{
          fontFamily: SANS, fontSize: 13, color: INK_SOFT,
          marginTop: 20, display: "flex", alignItems: "center", gap: 6,
        }}>
          <span style={{ fontSize: 15 }}>💡</span>
          Click any topic to see why it matters
        </p>
      </Container>

      {activeTopic && (
        <TopicPopup topic={activeTopic} onClose={() => setActiveTopic(null)} />
      )}
    </section>
  );
}
