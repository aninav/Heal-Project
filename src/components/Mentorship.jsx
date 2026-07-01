import { Container, Kicker, Rule, INK, INK_SOFT, LINE, CARD, ACCENT, SANS, SERIF } from "./UI";
import { MENTORSHIP } from "../data/siteData";

const ACCENT_SOFT = "#E4F1EC";

function RoleCard({ title, description, applyUrl, applyLabel, icon }) {
  return (
    <div style={{
      background: CARD, border: `1px solid ${LINE}`,
      borderRadius: 12, padding: 36, flex: "1 1 300px",
    }}>
      <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
        {title}
      </div>
      <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.75, margin: "0 0 28px" }}>
        {description}
      </p>
      <a
        href={applyUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: SANS, fontSize: 14, fontWeight: 600,
          color: "#fff", background: ACCENT,
          padding: "12px 24px", borderRadius: 4,
          display: "inline-block",
        }}
      >
        {applyLabel}
      </a>
    </div>
  );
}

export default function MentorshipPage() {
  return (
    <div style={{ paddingTop: 64 }}>

      {/* Hero */}
      <Container style={{ padding: "72px 32px 56px" }}>
        <Kicker>Mentorship Program</Kicker>
        <h1 style={{
          fontFamily: SERIF, fontSize: "clamp(34px, 6vw, 52px)",
          fontWeight: 400, color: INK, margin: "0 0 18px", letterSpacing: "-0.01em",
        }}>
          Grow together.
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 18, color: INK_SOFT, maxWidth: 600, lineHeight: 1.75, marginBottom: 0 }}>
          {MENTORSHIP.overview}
        </p>
      </Container>

      <Rule />

      {/* Role cards */}
      <Container style={{ padding: "64px 32px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 400, color: INK, margin: "0 0 36px" }}>
          Two ways to participate
        </h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <RoleCard
            icon="🧑‍🏫"
            title="Become a Mentor"
            description={MENTORSHIP.mentorDesc}
            applyUrl={MENTORSHIP.mentorApplyUrl}
            applyLabel="Apply as a Mentor →"
          />
          <RoleCard
            icon="🌱"
            title="Become a Mentee"
            description={MENTORSHIP.menteeDesc}
            applyUrl={MENTORSHIP.menteeApplyUrl}
            applyLabel="Apply as a Mentee →"
          />
        </div>
      </Container>

      <Rule />

      {/* What to expect */}
      <Container style={{ padding: "64px 32px" }}>
        <Kicker>What to expect</Kicker>
        <h2 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 400, color: INK, margin: "0 0 32px" }}>
          How the program works
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {[
            { step: "01", title: "Apply", desc: "Fill out the mentor or mentee application. Tell us your goals, interests, and availability." },
            { step: "02", title: "Get matched", desc: "We pair mentors and mentees based on goals, subject areas, and schedules." },
            { step: "03", title: "Meet regularly", desc: "Hold regular check-ins to track progress, get feedback, and navigate challenges." },
            { step: "04", title: "Build & grow", desc: "Work on real projects — articles, research, outreach, or advocacy — with expert guidance." },
          ].map((item, i) => (
            <div key={item.step} style={{
              padding: "28px 20px 28px 0",
              borderTop: `1px solid ${LINE}`,
              borderLeft: i !== 0 ? `1px solid ${LINE}` : "none",
              paddingLeft: i !== 0 ? 20 : 0,
            }}>
              <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                {item.step}
              </div>
              <h3 style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: INK, margin: "0 0 10px" }}>{item.title}</h3>
              <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* CTA */}
      <section style={{ background: ACCENT_SOFT, padding: "64px 0" }}>
        <Container style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 600, color: INK, marginBottom: 12 }}>
            Ready to connect?
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Choose your role below and submit your application. We'll be in touch with your match.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={MENTORSHIP.mentorApplyUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: SANS, background: INK, color: "#fff",
                padding: "13px 28px", fontSize: 14, fontWeight: 500,
                borderRadius: 4, display: "inline-block",
              }}
            >
              Apply as a Mentor
            </a>
            <a
              href={MENTORSHIP.menteeApplyUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: SANS, background: "none", color: INK,
                border: `1px solid ${LINE}`,
                padding: "13px 28px", fontSize: 14, fontWeight: 500,
                borderRadius: 4, display: "inline-block",
              }}
            >
              Apply as a Mentee
            </a>
          </div>
          <p style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginTop: 20 }}>
            Questions?{" "}
            <a href="mailto:thehealproject48@gmail.com" style={{ color: ACCENT }}>thehealproject48@gmail.com</a>
          </p>
        </Container>
      </section>
    </div>
  );
}
