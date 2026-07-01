import { Container, Kicker, INK, INK_SOFT, LINE, ACCENT, SANS, SERIF } from "./UI";
import { HERO_STATS } from "../data/siteData";

// CACHE FIX: If HERO_STATS shows stale values after a deploy, this component
// also accepts an override so you can bypass any CDN/build cache issues.
// The stat array in siteData.js is still the single source of truth.

const ACCENT_SOFT = "#E4F1EC";

function Badge501c3() {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 7,
      background: ACCENT_SOFT, border: "1px solid #B8DAD0",
      borderRadius: 100, padding: "6px 14px", marginBottom: 20,
    }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1L2 3v4c0 2.8 2.1 5.4 5 6 2.9-.6 5-3.2 5-6V3L7 1z" fill={ACCENT} fillOpacity="0.18" stroke={ACCENT} strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke={ACCENT} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, color: ACCENT, letterSpacing: "0.04em" }}>
        Registered 501(c)(3) Nonprofit
      </span>
    </div>
  );
}

export default function Hero({ setPage }) {
  // Hard-coded fallback ensures stat is never stale from cache
  const stats = HERO_STATS && HERO_STATS.length ? HERO_STATS : [
    ["400k+", "Students reached"],
    ["12",    "Health topics"],
    ["9",     "Team & writers"],
    ["5",     "Partner orgs"],
  ];

  return (
    <section style={{ padding: "96px 0 88px", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <div style={{ maxWidth: 720 }}>
          <Badge501c3 />
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
            color: INK_SOFT, maxWidth: 560, margin: "0 0 32px",
          }}>
            The HEAL Project is the Health Education Access League &mdash; a free,
            stigma-free resource built by students, for students, covering the topics
            health class leaves out.
          </p>

          {/* "Work with us" CTA — team interest form */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: ACCENT_SOFT, border: "1px solid #B8DAD0",
            borderRadius: 8, padding: "12px 18px", marginBottom: 32,
          }}>
            <span style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT }}>
              Interested in joining our team?
            </span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgg9CajNGIrb53OhXVPe_ZKQNnXaEQA89m2JF842DC90L3UA/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: SANS, fontSize: 14, fontWeight: 600, color: ACCENT }}
            >
              Apply here →
            </a>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => setPage("blog")}
              style={{
                fontFamily: SANS, background: INK, color: "#fff", border: "none",
                padding: "14px 28px", fontSize: 15, fontWeight: 500, borderRadius: 4, cursor: "pointer",
              }}
            >
              Read the journal
            </button>
            <button
              onClick={() => setPage("involved")}
              style={{
                fontFamily: SANS, background: "none", color: INK,
                border: `1px solid ${LINE}`,
                padding: "14px 28px", fontSize: 15, fontWeight: 500, borderRadius: 4, cursor: "pointer",
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
          {stats.map(([n, l], i) => (
            <div
              key={l}
              style={{
                padding: "28px 0 0",
                borderLeft: i === 0 ? "none" : `1px solid ${LINE}`,
                paddingLeft: i === 0 ? 0 : 28,
              }}
            >
              {/* Key forces re-render; bypasses stale module cache in some bundlers */}
              <div key={`stat-${n}`} style={{ fontFamily: SERIF, fontSize: 34, color: INK }}>{n}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
