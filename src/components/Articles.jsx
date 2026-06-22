import { useState, useEffect } from "react";
import { Container, Kicker, Rule, Pill, INK, INK_SOFT, LINE, ACCENT, SANS, SERIF } from "./UI";
import { ARTICLES } from "../data/siteData";

function slugify(name) {
  return (name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function AuthorLink({ name, onOpen }) {
  return (
    <span
      onClick={e => { e.stopPropagation(); onOpen && onOpen(slugify(name)); }}
      style={{ color: ACCENT, cursor: onOpen ? "pointer" : "default" }}
    >
      {name}
    </span>
  );
}

export function ArticleCard({ article, index, onClick, onOpenAuthor }) {
  return (
    <div style={{
      padding: "32px 0", borderTop: `1px solid ${LINE}`,
      display: "grid", gridTemplateColumns: "auto 1fr", gap: 28,
    }}>
      <div style={{ fontFamily: SERIF, fontSize: 15, color: INK_SOFT, paddingTop: 4, minWidth: 36 }}>
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <div style={{
          fontFamily: SANS, fontSize: 12, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: ACCENT, marginBottom: 10,
        }}>
          {article.category}
        </div>
        <h3
          onClick={() => onClick(article)}
          style={{
            fontFamily: SERIF, fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 600, color: INK, margin: "0 0 12px",
            lineHeight: 1.25, cursor: "pointer",
          }}
        >
          {article.title}
        </h3>
        <p
          onClick={() => onClick(article)}
          style={{
            fontFamily: SANS, fontSize: 15, color: INK_SOFT,
            lineHeight: 1.7, margin: "0 0 16px", maxWidth: 640, cursor: "pointer",
          }}
        >
          {article.dek}
        </p>
        <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <span>By <AuthorLink name={article.author} onOpen={onOpenAuthor} /></span>
          <span>&middot;</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  );
}

function ArticleReader({ article, onBack, onOpenAuthor }) {
  useEffect(() => { window.scrollTo({ top: 0 }); }, [article]);

  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ maxWidth: 740, padding: "56px 32px 120px" }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "none", fontFamily: SANS, fontSize: 14, color: ACCENT, padding: 0, marginBottom: 40, cursor: "pointer" }}
        >
          &larr; Back to journal
        </button>

        <div style={{
          fontFamily: SANS, fontSize: 12, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: ACCENT, marginBottom: 16,
        }}>
          {article.category}
        </div>

        <h1 style={{
          fontFamily: SERIF, fontSize: "clamp(32px, 5vw, 46px)",
          fontWeight: 600, color: INK, lineHeight: 1.15,
          letterSpacing: "-0.01em", margin: "0 0 18px",
        }}>
          {article.title}
        </h1>

        <p style={{ fontFamily: SANS, fontSize: 18, color: INK_SOFT, lineHeight: 1.6, margin: "0 0 32px" }}>
          {article.dek}
        </p>

        <div style={{
          display: "flex", flexWrap: "wrap", gap: "8px 28px",
          padding: "20px 0",
          borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`,
          marginBottom: 48,
        }}>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Author</div>
            <div style={{ fontFamily: SANS, fontSize: 14, marginTop: 3 }}>
              <AuthorLink name={article.author} onOpen={onOpenAuthor} />
            </div>
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Researcher</div>
            <div style={{ fontFamily: SANS, fontSize: 14, marginTop: 3 }}>
              <AuthorLink name={article.researcher} onOpen={onOpenAuthor} />
            </div>
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Read time</div>
            <div style={{ fontFamily: SANS, fontSize: 14, color: INK, marginTop: 3 }}>{article.readTime}</div>
          </div>
        </div>

        <article className="heal-prose">
          {article.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "h")  return <h3 key={i}>{block.text}</h3>;
            if (block.type === "p")  return <p key={i}>{block.text}</p>;
            if (block.type === "ul") return (
              <ul key={i}>{block.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            );
            if (block.type === "ol") return (
              <ol key={i}>{block.items.map((it, j) => <li key={j}>{it}</li>)}</ol>
            );
            return null;
          })}
        </article>

        <div style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${LINE}` }}>
          <button
            onClick={onBack}
            style={{
              fontFamily: SANS, background: INK, color: "#fff",
              border: "none", padding: "13px 26px", fontSize: 14,
              fontWeight: 500, borderRadius: 4, cursor: "pointer",
            }}
          >
            More from the journal
          </button>
        </div>
      </Container>
    </div>
  );
}

export default function JournalPage({ onOpenAuthor }) {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const cats = ["All", ...Array.from(new Set(ARTICLES.map(a => a.category)))];
  const filtered = filter === "All" ? ARTICLES : ARTICLES.filter(a => a.category === filter);

  if (selected) return (
    <ArticleReader article={selected} onBack={() => setSelected(null)} onOpenAuthor={onOpenAuthor} />
  );

  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 16px" }}>
        <Kicker>The journal</Kicker>
        <h1 style={{
          fontFamily: SERIF, fontSize: "clamp(36px, 6vw, 54px)",
          fontWeight: 400, color: INK, margin: "0 0 18px", letterSpacing: "-0.01em",
        }}>
          Research &amp; writing
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 17, color: INK_SOFT, maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
          Original, evidence-based articles written and researched by HEAL Project students.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {cats.map(c => (
            <Pill key={c} active={filter === c} onClick={() => setFilter(c)}>{c}</Pill>
          ))}
        </div>
      </Container>
      <Container style={{ padding: "16px 32px 120px" }}>
        {filtered.map((a, i) => (
          <ArticleCard key={a.id} article={a} index={i} onClick={setSelected} onOpenAuthor={onOpenAuthor} />
        ))}
        <Rule />
      </Container>
    </div>
  );
}
