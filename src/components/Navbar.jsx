import { useState } from "react";
import { Container, INK, INK_SOFT, LINE, PAPER, ACCENT, SANS, SERIF } from "./UI";
import { NAV_ITEMS } from "../data/siteData";

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(243,248,246,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: `1px solid ${LINE}`,
    }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <div
          onClick={() => { setPage("home"); setOpen(false); }}
          style={{ cursor: "pointer" }}
        >
          <span style={{ fontFamily: SERIF, fontSize: 21, fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>
            The HEAL Project
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="heal-desktop-nav">
          {NAV_ITEMS.map(([label, id]) => (
            <button
              key={id}
              onClick={() => setPage(id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: SANS, fontSize: 13.5, padding: "8px 11px",
                color: page === id ? INK : INK_SOFT,
                fontWeight: page === id ? 500 : 400,
                borderBottom: page === id ? `1px solid ${ACCENT}` : "1px solid transparent",
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="heal-mobile-toggle"
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: `1px solid ${LINE}`, borderRadius: 6,
            width: 36, height: 36, fontFamily: SANS, fontSize: 18, color: INK,
          }}
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: `1px solid ${LINE}`, background: PAPER }}>
          <Container style={{ display: "flex", flexDirection: "column", padding: "8px 32px 16px" }}>
            {NAV_ITEMS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => { setPage(id); setOpen(false); }}
                style={{
                  background: "none", border: "none", textAlign: "left",
                  padding: "12px 0", fontFamily: SANS, fontSize: 15,
                  color: page === id ? INK : INK_SOFT,
                  borderBottom: `1px solid ${LINE}`,
                  fontWeight: page === id ? 500 : 400,
                }}
              >
                {label}
              </button>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
