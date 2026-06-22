/* ============================================================
   components/UI.jsx — tiny shared primitives used everywhere
   ============================================================ */

const INK     = "#16221D";
const INK_SOFT= "#5C6B64";
const LINE    = "#D8E3DD";
const PAPER   = "#F3F8F6";
const CARD    = "#FFFFFF";
const ACCENT  = "#0E6B53";
const SERIF   = "'Source Serif 4', Georgia, serif";
const SANS    = "'Inter', -apple-system, sans-serif";

export { INK, INK_SOFT, LINE, PAPER, CARD, ACCENT, SERIF, SANS };

export function Container({ children, style }) {
  return (
    <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 32px", ...style }}>
      {children}
    </div>
  );
}

export function Kicker({ children }) {
  return (
    <div style={{
      fontFamily: SANS, fontSize: 12, fontWeight: 600,
      letterSpacing: "0.12em", textTransform: "uppercase",
      color: ACCENT, marginBottom: 14,
    }}>
      {children}
    </div>
  );
}

export function SectionHeading({ kicker, title, sub }) {
  return (
    <div style={{ marginBottom: 56 }}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 style={{
        fontFamily: SERIF, fontWeight: 400,
        fontSize: "clamp(28px, 4vw, 38px)",
        color: INK, margin: 0, letterSpacing: "-0.01em", lineHeight: 1.15,
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{
          fontFamily: SANS, fontSize: 16, color: INK_SOFT,
          marginTop: 14, maxWidth: 560, lineHeight: 1.6,
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function Rule() {
  return <div style={{ borderTop: `1px solid ${LINE}` }} />;
}

export function Pill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: SANS, fontSize: 13, padding: "8px 16px",
        borderRadius: 100,
        border: `1px solid ${active ? INK : LINE}`,
        background: active ? INK : CARD,
        color: active ? "#fff" : INK_SOFT,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
