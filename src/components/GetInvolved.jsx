import { Container, SectionHeading, INK, INK_SOFT, LINE, ACCENT, SANS, SERIF } from "./UI";
import { INVOLVED_CARDS } from "../data/siteData";

export default function GetInvolved() {
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading kicker="Join us" title="Get involved" sub="Whether you want to volunteer, start a chapter, or join a challenge, there's a place for you." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {INVOLVED_CARDS.map((card, i) => (
            <div key={card.title} style={{
              padding: "28px 24px 28px 0", borderTop: `1px solid ${LINE}`,
              borderLeft: i !== 0 ? `1px solid ${LINE}` : "none",
              paddingLeft: i !== 0 ? 24 : 0,
            }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 600, color: INK, margin: "0 0 10px" }}>{card.title}</h3>
              <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, lineHeight: 1.7, margin: "0 0 18px" }}>{card.desc}</p>
              <a href="mailto:thehealproject48@gmail.com" style={{ fontFamily: SANS, fontSize: 14, color: ACCENT, fontWeight: 500 }}>
                Get started →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
