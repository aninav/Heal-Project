import { Container, Kicker, SectionHeading, Rule, INK, INK_SOFT, LINE, CARD, ACCENT, SANS, SERIF } from "./UI";
import { AMBASSADOR } from "../data/siteData";

const ACCENT_SOFT = "#E4F1EC";

export default function AmbassadorPage() {
  return (
    <div style={{ paddingTop: 64 }}>

      {/* Hero */}
      <Container style={{ padding: "72px 32px 56px" }}>
        <Kicker>Student Ambassador Program</Kicker>
        <h1 style={{
          fontFamily: SERIF, fontSize: "clamp(34px, 6vw, 52px)",
          fontWeight: 400, color: INK, margin: "0 0 18px", letterSpacing: "-0.01em",
        }}>
          Build. Lead. Create impact.
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 18, color: INK_SOFT, maxWidth: 620, lineHeight: 1.75, marginBottom: 36 }}>
          {AMBASSADOR.mission}
        </p>
        <a
          href={AMBASSADOR.applyUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: SANS, background: INK, color: "#fff",
            padding: "14px 32px", fontSize: 15, fontWeight: 500,
            borderRadius: 4, display: "inline-block",
          }}
        >
          Apply to become an ambassador →
        </a>
        <p style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginTop: 14 }}>
          Questions? Email{" "}
          <a href="mailto:laylahbwolf@gmail.com" style={{ color: ACCENT }}>laylahbwolf@gmail.com</a>
        </p>
      </Container>

      <Rule />

      {/* Core goals */}
      <Container style={{ padding: "64px 32px" }}>
        <Kicker>What we're building toward</Kicker>
        <h2 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 400, color: INK, margin: "0 0 36px" }}>
          Five core goals
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {AMBASSADOR.goals.map((g, i) => (
            <div key={g.label} style={{
              padding: "24px 20px 24px 0",
              borderTop: `1px solid ${LINE}`,
              borderLeft: i % 5 !== 0 ? `1px solid ${LINE}` : "none",
              paddingLeft: i % 5 !== 0 ? 20 : 0,
            }}>
              <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, color: INK, marginBottom: 8 }}>{g.label}</div>
              <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, lineHeight: 1.65, margin: 0 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <Rule />

      {/* Teams */}
      <Container style={{ padding: "64px 32px" }}>
        <Kicker>Specialization areas</Kicker>
        <h2 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 400, color: INK, margin: "0 0 12px" }}>
          Ambassador teams
        </h2>
        <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
          Join one primary team and optionally collaborate across others. Each team contributes to both short-term outputs and long-term HEAL initiatives.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {AMBASSADOR.teams.map((team, i) => (
            <div key={team.name} style={{
              borderTop: `1px solid ${LINE}`,
              padding: "32px 0",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 32,
            }}>
              {/* Left: team name + purpose */}
              <div>
                <div style={{ fontFamily: SANS, fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                  Team {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 600, color: INK, margin: "0 0 8px", lineHeight: 1.3 }}>
                  {team.name}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, margin: "0 0 16px", lineHeight: 1.6 }}>
                  {team.purpose}
                </p>
                <div>
                  {team.skills.map(s => (
                    <span key={s} style={{
                      display: "inline-block", fontFamily: SANS, fontSize: 11,
                      color: ACCENT, background: ACCENT_SOFT,
                      padding: "4px 10px", borderRadius: 100,
                      marginRight: 6, marginBottom: 6,
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {/* Right: responsibilities + output */}
              <div>
                <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                  Responsibilities
                </div>
                <ul style={{ margin: "0 0 20px", paddingLeft: 20 }}>
                  {team.responsibilities.map((r, j) => (
                    <li key={j} style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, lineHeight: 1.75 }}>{r}</li>
                  ))}
                </ul>
                <div style={{ background: ACCENT_SOFT, borderRadius: 8, padding: "12px 16px" }}>
                  <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, color: ACCENT }}>Weekly output: </span>
                  <span style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT }}>{team.output}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Rule />

      {/* Commitments */}
      <Container style={{ padding: "64px 32px" }}>
        <Kicker>How it works</Kicker>
        <h2 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 400, color: INK, margin: "0 0 36px" }}>
          Commitments & accountability
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {AMBASSADOR.commitments.map((c, i) => (
            <div key={c.title} style={{
              padding: "28px 24px 28px 0",
              borderTop: `1px solid ${LINE}`,
              borderLeft: i !== 0 ? `1px solid ${LINE}` : "none",
              paddingLeft: i !== 0 ? 24 : 0,
            }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, color: INK, margin: "0 0 10px" }}>{c.title}</h3>
              <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, lineHeight: 1.7, margin: 0 }}>{c.detail}</p>
            </div>
          ))}
        </div>
      </Container>

      <Rule />

      {/* What you'll gain */}
      <Container style={{ padding: "64px 32px" }}>
        <Kicker>Benefits</Kicker>
        <h2 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 400, color: INK, margin: "0 0 28px" }}>
          What you'll gain
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {AMBASSADOR.gains.map((g, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 16,
              padding: "18px 0", borderTop: `1px solid ${LINE}`,
            }}>
              <span style={{ color: ACCENT, fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 1 }}>→</span>
              <span style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.7 }}>{g}</span>
            </div>
          ))}
        </div>
      </Container>

      {/* CTA */}
      <section style={{ background: ACCENT_SOFT, padding: "64px 0" }}>
        <Container style={{ textAlign: "center" }}>
          <Kicker>Ready?</Kicker>
          <h2 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: INK, marginBottom: 14 }}>
            Ambassadors are here to build, lead, and create impact.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>
            If you're ready to take initiative and contribute meaningfully, we're excited to have you on the team.
          </p>
          <a
            href={AMBASSADOR.applyUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: SANS, background: INK, color: "#fff",
              padding: "14px 32px", fontSize: 15, fontWeight: 500,
              borderRadius: 4, display: "inline-block",
            }}
          >
            Apply now →
          </a>
        </Container>
      </section>
    </div>
  );
}
