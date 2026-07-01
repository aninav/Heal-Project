import { Container, Kicker, Rule, INK, INK_SOFT, LINE, ACCENT, ACCENT_SOFT, SANS, SERIF } from "./UI";
import { FELLOWSHIP } from "../data/siteData";

function MetaItem({ label, value }) {
  return (
    <div>
      <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
      <div style={{ fontFamily: SANS, fontSize: 14, color: INK, marginTop: 3 }}>{value}</div>
    </div>
  );
}

export default function FellowshipPage() {
  return (
    <div style={{ paddingTop: 64 }}>

      {/* Hero */}
      <Container style={{ padding: "72px 32px 16px" }}>
        {/* Ongoing banner */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#D4EDDA", border: "1px solid #A8D5B5",
          borderRadius: 100, padding: "6px 16px", marginBottom: 20,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1A7A3C", display: "inline-block" }} />
          <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, color: "#1A7A3C", letterSpacing: "0.05em" }}>
            Currently in session
          </span>
        </div>

        <Kicker>{FELLOWSHIP.partner}</Kicker>
        <h1 style={{
          fontFamily: SERIF, fontSize: "clamp(34px, 6vw, 50px)",
          fontWeight: 400, color: INK, margin: "0 0 14px", letterSpacing: "-0.01em",
        }}>
          {FELLOWSHIP.name}
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 18, color: INK_SOFT, maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>
          {FELLOWSHIP.tagline}
        </p>

        {/* Meta strip */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "12px 36px",
          padding: "20px 0",
          borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`,
          marginBottom: 56,
        }}>
          <MetaItem label="Dates" value={FELLOWSHIP.dates} />
          <MetaItem label="Format" value={FELLOWSHIP.format} />
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Program Leaders</div>
            {FELLOWSHIP.instructors.map(inst => (
              <div key={inst.email} style={{ marginTop: 3 }}>
                <span style={{ fontFamily: SANS, fontSize: 14, color: INK }}>{inst.name} — </span>
                <a href={`mailto:${inst.email}`} style={{ fontFamily: SANS, fontSize: 14, color: ACCENT }}>{inst.email}</a>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Applications closed notice */}
      <Container style={{ padding: "0 32px 48px" }}>
        <div style={{
          background: "#FFF8E7", border: "1px solid #F0D080",
          borderRadius: 10, padding: "20px 24px",
          display: "flex", alignItems: "flex-start", gap: 14,
        }}>
          <span style={{ fontSize: 20, flexShrink: 0 }}>📋</span>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 600, color: "#7A5200", marginBottom: 4 }}>
              Applications are closed
            </div>
            <p style={{ fontFamily: SANS, fontSize: 14, color: "#7A5200", margin: 0, lineHeight: 1.6 }}>
              The Summer Research Fellowship 2026 is currently in session and no longer accepting new applications.
              Stay connected to hear about future programs and opportunities.
            </p>
          </div>
        </div>
      </Container>

      {/* What you'll learn */}
      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>What you'll learn</h2>
        <ul style={{ margin: 0, paddingLeft: 22 }}>
          {FELLOWSHIP.goals.map((g, i) => (
            <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{g}</li>
          ))}
        </ul>
      </Container>

      {/* Time commitment */}
      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>Weekly time commitment</h2>
        <ul style={{ margin: 0, paddingLeft: 22 }}>
          {FELLOWSHIP.commitment.map((c, i) => (
            <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{c}</li>
          ))}
        </ul>
      </Container>

      {/* Program structure */}
      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 24 }}>Program structure</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {FELLOWSHIP.weeks.map((w, i) => (
            <div key={w.title} style={{
              padding: "20px 20px 20px 0",
              borderTop: `1px solid ${LINE}`,
              borderLeft: i % 3 !== 0 ? `1px solid ${LINE}` : "none",
              paddingLeft: i % 3 !== 0 ? 20 : 0,
            }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 600, color: INK, margin: "0 0 8px" }}>{w.title}</h3>
              <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, lineHeight: 1.65, margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Guest Speakers */}
      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 20 }}>Guest speakers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0 }}>
          {FELLOWSHIP.guestSpeakers.map((gs, i) => (
            <div key={gs.date} style={{
              padding: "16px 20px 16px 0",
              borderTop: `1px solid ${LINE}`,
              borderLeft: i % 3 !== 0 ? `1px solid ${LINE}` : "none",
              paddingLeft: i % 3 !== 0 ? 20 : 0,
            }}>
              <div style={{ fontFamily: SANS, fontSize: 12, color: ACCENT, fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {gs.date}
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, color: INK }}>
                {gs.speaker}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Deliverables */}
      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>Required deliverables</h2>
        <ul style={{ margin: "0 0 40px", paddingLeft: 22 }}>
          {FELLOWSHIP.deliverables.map((d, i) => (
            <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{d}</li>
          ))}
        </ul>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>Optional opportunities</h2>
        <ul style={{ margin: 0, paddingLeft: 22 }}>
          {FELLOWSHIP.optional.map((d, i) => (
            <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{d}</li>
          ))}
        </ul>
      </Container>

      {/* Volunteer hours */}
      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 20 }}>Volunteer hours</h2>
        <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, marginBottom: 20 }}>Up to <strong>58.5 possible hours</strong> for full participation.</p>
        <div style={{ borderTop: `1px solid ${LINE}` }}>
          {FELLOWSHIP.volunteerHours.map((row, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "14px 0", borderBottom: `1px solid ${LINE}`,
              gap: 16, flexWrap: "wrap",
            }}>
              <span style={{ fontFamily: SANS, fontSize: 14, color: INK }}>{row.topic}</span>
              <span style={{ fontFamily: SANS, fontSize: 14, color: ACCENT, fontWeight: 500, flexShrink: 0 }}>{row.hours}</span>
            </div>
          ))}
        </div>
      </Container>

      {/* Applications closed footer CTA */}
      <section style={{ background: ACCENT_SOFT, padding: "56px 0" }}>
        <Container style={{ textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#fff", border: `1px solid ${LINE}`,
            borderRadius: 100, padding: "7px 18px", marginBottom: 20,
          }}>
            <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, color: INK_SOFT, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Applications closed
            </span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 600, color: INK, marginBottom: 12 }}>
            The application deadline has passed
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.7 }}>
            Thank you to everyone who applied. The fellowship is currently underway.
            Stay in touch to hear about future cohorts.
          </p>
          <a
            href="mailto:thehealproject48@gmail.com"
            style={{
              fontFamily: SANS, background: INK, color: "#fff",
              padding: "13px 28px", fontSize: 14, fontWeight: 500,
              borderRadius: 4, display: "inline-block",
            }}
          >
            Stay in touch
          </a>
        </Container>
      </section>
    </div>
  );
}
