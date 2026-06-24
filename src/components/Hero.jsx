import { Container, Kicker, INK, INK_SOFT, LINE, SANS, SERIF } from "./UI";
import { HERO_STATS } from "../data/siteData";

export default function Hero({ setPage }) {
  return (
    <section style={{ padding: "96px 0 88px", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <div style={{ maxWidth: 720 }}>
          <Kicker>Student-led nonprofit &middot; Est. 2025</Kicker>
          <h1 style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: "clamp(40px, 7vw, 68px)",
            color: INK, lineHeight: 1.05,
            letterSpacing: "-0.02em", margin: "0 0 28px",
          }}>
            Health education,<br />by teens, for teens.
          </h1>
          <p style={{
            fontFamily: SANS, fontSize: 19, lineHeight: 1.7,
            color: INK_SOFT, maxWidth: 560, margin: "0 0 40px",
          }}>
            The HEAL Project is the Health Education Access League &mdash; a free,
            stigma-free resource built by students, for students, covering the topics
            health class leaves out.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => setPage("blog")}
              style={{
                fontFamily: SANS, background: INK, color: "#fff", border: "none",
                padding: "14px 28px", fontSize: 15, fontWeight: 500, borderRadius: 4,
              }}
            >
              Read the journal
            </button>
            <button
              onClick={() => setPage("involved")}
              style={{
                fontFamily: SANS, background: "none", color: INK,
                border: `1px solid ${LINE}`,
                padding: "14px 28px", fontSize: 15, fontWeight: 500, borderRadius: 4,
              }}
            >
              Get involved
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          marginTop: 80, borderTop: `1px solid ${LINE}`,
        }}>
          {HERO_STATS.map(([n, l], i) => (
            <div
              key={l}
              style={{
                padding: "28px 0 0",
                borderLeft: i === 0 ? "none" : `1px solid ${LINE}`,
                paddingLeft: i === 0 ? 0 : 28,
              }}
            >
              <div style={{ fontFamily: SERIF, fontSize: 34, color: INK }}>{n}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
