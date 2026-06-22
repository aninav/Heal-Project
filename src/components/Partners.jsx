import { Container, SectionHeading, INK, INK_SOFT, LINE, ACCENT, SANS, SERIF } from "./UI";
import { PARTNERS } from "../data/siteData";

export default function Partners() {
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading kicker="Collaboration" title="Our partners" sub="Organizations we're proud to work alongside." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {PARTNERS.map((p, i) => (
            <div key={p.name} style={{
              padding: "26px 24px 26px 0", borderTop: `1px solid ${LINE}`,
              borderLeft: i !== 0 ? `1px solid ${LINE}` : "none",
              paddingLeft: i !== 0 ? 24 : 0,
            }}>
              <div style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, color: INK, marginBottom: 8 }}>{p.name}</div>
              <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, marginTop: 36 }}>
          Interested in partnering with us?{" "}
          <a href="mailto:thehealproject48@gmail.com" style={{ color: ACCENT }}>thehealproject48@gmail.com</a>
        </p>
      </Container>
    </section>
  );
}
