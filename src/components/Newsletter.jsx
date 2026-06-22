import { useState } from "react";
import { Container, INK, INK_SOFT, LINE, ACCENT, CARD, SANS, SERIF } from "./UI";

const ACCENT_SOFT = "#E4F1EC";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section style={{ padding: "88px 0", background: ACCENT_SOFT }}>
      <Container style={{ maxWidth: 560, textAlign: "center" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 600, color: INK, margin: "0 0 12px" }}>
          Stay in the know
        </h2>
        <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, marginBottom: 28 }}>
          Get free health resources and new articles delivered to your inbox.
        </p>
        {done ? (
          <div style={{ fontFamily: SANS, fontSize: 15, color: ACCENT, fontWeight: 500 }}>
            You're in — welcome to the HEAL community.
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                fontFamily: SANS, fontSize: 15, padding: "13px 16px",
                borderRadius: 4, border: `1px solid ${LINE}`,
                minWidth: 240, outline: "none", background: CARD,
              }}
            />
            <button type="submit" style={{
              fontFamily: SANS, background: INK, color: "#fff", border: "none",
              padding: "13px 26px", fontSize: 14, fontWeight: 500, borderRadius: 4, cursor: "pointer",
            }}>
              Subscribe
            </button>
          </form>
        )}
        {error && <p style={{ fontFamily: SANS, fontSize: 13, color: "#A3372F", marginTop: 12 }}>{error}</p>}
      </Container>
    </section>
  );
}
