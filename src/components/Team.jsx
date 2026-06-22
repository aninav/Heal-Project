import { Container, SectionHeading, Kicker, Rule, INK, INK_SOFT, LINE, ACCENT, SANS, SERIF } from "./UI";
import { TEAM, ARTICLES } from "../data/siteData";
import { ArticleCard } from "./Articles";

// Only the core team on the Team page (writers appear in journal bylines)
const CORE_TEAM = TEAM.filter(
  t => !["dhanya-duvvuru", "oyindamola-borisade"].includes(t.slug)
);

export function Team({ setPage, setAuthorSlug }) {
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading
          kicker="Who we are"
          title="Meet the team"
          sub="The students behind The HEAL Project. Click anyone to see their profile and writing."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {CORE_TEAM.map((m, i) => (
            <div
              key={m.slug}
              onClick={() => { setAuthorSlug(m.slug); setPage("author"); }}
              style={{
                padding: "24px 24px 24px 0",
                borderTop: `1px solid ${LINE}`,
                borderLeft: i % 3 !== 0 ? `1px solid ${LINE}` : "none",
                paddingLeft: i % 3 !== 0 ? 24 : 0,
                cursor: "pointer",
              }}
            >
              <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: INK, marginBottom: 6 }}>
                {m.name}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: ACCENT }}>{m.role}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AuthorProfile({ slug, onBack, onOpenArticle, onOpenAuthor }) {
  const member = TEAM.find(t => t.slug === slug);
  const posts = ARTICLES.filter(a => slugify(a.author) === slug || slugify(a.researcher) === slug);

  if (!member) return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px" }}>
        <button onClick={onBack} style={{ fontFamily: SANS, color: ACCENT, background: "none", border: "none", fontSize: 14 }}>
          &larr; Back
        </button>
        <p style={{ fontFamily: SANS, color: INK_SOFT, marginTop: 16 }}>Profile not found.</p>
      </Container>
    </div>
  );

  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 100px" }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "none", fontFamily: SANS, fontSize: 14, color: ACCENT, padding: 0, marginBottom: 40 }}
        >
          &larr; Back
        </button>

        <Kicker>{member.role}</Kicker>
        <h1 style={{
          fontFamily: SERIF, fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 600, color: INK, margin: "0 0 16px", letterSpacing: "-0.01em",
        }}>
          {member.name}
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 17, color: INK_SOFT, maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
          {member.bio}
        </p>

        <Rule />

        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 8 }}>
            {posts.length ? `Writing by ${member.name.split(" ")[0]}` : "No published articles yet"}
          </h2>
          {posts.length > 0 && (
            <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, marginBottom: 24 }}>
              Click any article to read it in the journal.
            </p>
          )}
          {posts.map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} onClick={onOpenArticle} onOpenAuthor={onOpenAuthor} />
          ))}
        </div>
      </Container>
    </div>
  );
}

// helper
function slugify(name) {
  return (name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
