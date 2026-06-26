import { Container, Kicker, INK, INK_SOFT, LINE, ACCENT, ACCENT_SOFT, SANS, SERIF } from "./UI";
import { FELLOWSHIP } from "../data/siteData";

export default function FellowshipPage() {
  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 16px" }}>
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
          display: "flex", flexWrap: "wrap", gap: "10px 32px",
          padding: "20px 0",
          borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`,
          marginBottom: 56,
        }}>
          {[
            ["Dates", FELLOWSHIP.dates],
            ["Format", FELLOWSHIP.format],
          ].map(([label, value]) => (
            <div key={label}>
              <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
              <div style={{ fontFamily: SANS, fontSize: 14, color: INK, marginTop: 3 }}>{value}</div>
            </div>
          ))}
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Contact</div>
            {FELLOWSHIP.contacts.map(c => (
              <a key={c} href={`mailto:${c}`} style={{ fontFamily: SANS, fontSize: 14, color: ACCENT, display: "block", marginTop: 3 }}>{c}</a>
            ))}
          </div>
        </div>
      </Container>

      {/* Commitment */}
      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>Weekly time commitment</h2>
        <ul style={{ margin: 0, paddingLeft: 22 }}>
          {FELLOWSHIP.commitment.map((c, i) => (
            <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{c}</li>
          ))}
        </ul>
      </Container>

      {/* Goals */}
      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>What you'll learn</h2>
        <ul style={{ margin: 0, paddingLeft: 22 }}>
          {FELLOWSHIP.goals.map((g, i) => (
            <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{g}</li>
          ))}
        </ul>
      </Container>

      {/* Week structure */}
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

      {/* Applications closed notice — replaces the CTA with apply button */}
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
            Thank you to everyone who applied for the Summer Research Fellowship 2026.
            Stay in touch to hear about future programs and opportunities.
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
