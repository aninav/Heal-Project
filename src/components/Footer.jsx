import { Container, INK, INK_SOFT, LINE, ACCENT, SANS, SERIF } from "./UI";
import { NAV_ITEMS, TOPICS } from "../data/siteData";

export default function Footer({ setPage }) {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: `1px solid ${LINE}`, padding: "64px 0 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, paddingBottom: 48 }}>
          <div>
            <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: INK, marginBottom: 12 }}>The HEAL Project</div>
            <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, lineHeight: 1.8 }}>
              Health Education Access League.<br />Free health education for teens, by teens.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: INK_SOFT, marginBottom: 14 }}>Navigate</div>
            {NAV_ITEMS.map(([label, id]) => (
              <div key={id} style={{ marginBottom: 9 }}>
                <span onClick={() => setPage(id)} style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, cursor: "pointer" }}>{label}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: INK_SOFT, marginBottom: 14 }}>Topics</div>
            {TOPICS.slice(0, 6).map(t => (
              <div key={t} style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, marginBottom: 9 }}>{t}</div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: INK_SOFT, marginBottom: 14 }}>Contact</div>
            <a href="mailto:thehealproject48@gmail.com" style={{ fontFamily: SANS, fontSize: 13.5, color: ACCENT, display: "block", marginBottom: 12 }}>
              thehealproject48@gmail.com
            </a>
            <p style={{ fontFamily: SANS, fontSize: 12.5, color: INK_SOFT, lineHeight: 1.8 }}>@thehealproject48 on all platforms</p>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: INK_SOFT, marginBottom: 8 }}>Crisis resources</div>
              <p style={{ fontFamily: SANS, fontSize: 12, color: INK_SOFT, lineHeight: 1.9 }}>
                Crisis Text Line: text HOME to 741741<br />
                988 Suicide & Crisis Lifeline: call 988<br />
                SAMHSA Helpline: 1-800-662-4357
              </p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${LINE}`, padding: "22px 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontFamily: SANS, fontSize: 12.5, color: INK_SOFT, margin: 0 }}>
            © {year} The HEAL Project (Health Education Access League). All rights reserved.
          </p>
          <p style={{ fontFamily: SANS, fontSize: 12.5, color: INK_SOFT, margin: 0 }}>Student-led nonprofit</p>
        </div>
      </Container>
    </footer>
  );
}
