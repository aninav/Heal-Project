import { Container, SectionHeading, INK, INK_SOFT, LINE, CARD, SANS, SERIF } from "./UI";
import { PROGRAMS, TOPICS } from "../data/siteData";

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
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading
          kicker="Coverage"
          title="Health topics"
          sub="Comprehensive, stigma-free coverage of what matters most."
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {TOPICS.map(t => (
            <span
              key={t}
              style={{
                fontFamily: SANS, fontSize: 14, color: INK,
                padding: "10px 18px", border: `1px solid ${LINE}`,
                background: CARD, borderRadius: 100,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
