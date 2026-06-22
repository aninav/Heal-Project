import { useState } from "react";
import { Container, Kicker, Pill, INK, INK_SOFT, LINE, CARD, ACCENT, SANS, SERIF } from "./UI";
import { CHAPTER_LEADERS, REGIONS } from "../data/siteData";

export default function ChaptersPage() {
  const [region, setRegion] = useState("All");

  const filtered = region === "All"
    ? CHAPTER_LEADERS
    : CHAPTER_LEADERS.filter(c => c.region === region);

  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 16px" }}>
        <Kicker>Chapters &amp; Ambassadors</Kicker>
        <h1 style={{
          fontFamily: SERIF, fontSize: "clamp(34px, 6vw, 50px)",
          fontWeight: 400, color: INK, margin: "0 0 18px", letterSpacing: "-0.01em",
        }}>
          Our chapter leaders
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 16, color: INK_SOFT, maxWidth: 580, lineHeight: 1.7, marginBottom: 32 }}>
          HEAL chapters are student-led clubs that bring free health education to schools and
          communities. Explore current chapter leaders and ambassadors below, or start your
          own chapter if there isn't one near you yet.
        </p>
        <div style={{ marginBottom: 40 }}>
          <a
            href="mailto:thehealproject48@gmail.com"
            style={{
              fontFamily: SANS, fontSize: 14, fontWeight: 500,
              color: "#fff", background: INK,
              padding: "12px 24px", borderRadius: 4,
              display: "inline-block",
            }}
          >
            Start a chapter &rarr;
          </a>
        </div>

        <div style={{ fontFamily: SANS, fontSize: 12, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
          Filter by region
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {REGIONS.map(r => (
            <Pill key={r} active={region === r} onClick={() => setRegion(r)}>{r}</Pill>
          ))}
        </div>
      </Container>

      <Container style={{ padding: "32px 32px 120px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {filtered.map(c => (
            <div
              key={c.name}
              style={{
                background: CARD,
                border: `1px solid ${LINE}`,
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: INK, marginBottom: 4 }}>
                {c.name}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginBottom: 12 }}>
                {c.location}
              </div>
              {c.instagram ? (
                <a
                  href={`https://instagram.com/${c.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: SANS, fontSize: 13, color: ACCENT, fontWeight: 500, display: "block", marginBottom: 14 }}
                >
                  {c.instagram}
                </a>
              ) : (
                <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, fontStyle: "italic", marginBottom: 14 }}>
                  Instagram coming soon
                </div>
              )}
              <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, lineHeight: 1.65, margin: 0 }}>
                {c.blurb}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
