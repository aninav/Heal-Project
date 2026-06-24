import { Container, SectionHeading, Kicker, Rule, INK, INK_SOFT, LINE, ACCENT, CARD, SANS, SERIF } from "./UI";
import { TEAM, ARTICLES } from "../data/siteData";
import { ArticleCard } from "./Articles";

// Slugify helper
function slugify(name) {
  return (name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Core team shown on the team page (excludes standalone writer/researcher entries)
const CORE_TEAM = TEAM.filter(
  t => !["oyindamola-borisade", "dhanya-duvvuru", "laylah-wolf-researcher"].includes(t.slug)
);

// Writers/researchers shown in the "Contributors" strip — ordered by most recent article
function getContributors() {
  const seen = new Set();
  const ordered = [];
  // Walk articles in order (most recent first = end of array, so reverse)
  [...ARTICLES].reverse().forEach(a => {
    [a.author, a.researcher].forEach(name => {
      const slug = slugify(name);
      const member = TEAM.find(t => t.slug === slug || t.name === name);
      if (member && !seen.has(member.slug)) {
        // Only include people NOT already in core team grid
        if (!CORE_TEAM.find(c => c.slug === member.slug)) {
          seen.add(member.slug);
          ordered.push(member);
        }
      }
    });
  });
  return ordered;
}

function Avatar({ member, size = 80 }) {
  const initials = member.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  if (member.avatar) {
    return (
      <img
        src={member.avatar}
        alt={member.name}
        style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", display: "block" }}
      />
    );
  }
  // Placeholder circle with initials
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: ACCENT, display: "flex", alignItems: "center",
      justifyContent: "center", color: "#fff",
      fontFamily: SANS, fontSize: size * 0.28, fontWeight: 600,
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

export function Team({ setPage, setAuthorSlug }) {
  const contributors = getContributors();

  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading
          kicker="Who we are"
          title="Meet the team"
          sub="The students behind The HEAL Project. Click anyone to see their profile and writing."
        />

        {/* Core team grid with photos */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 24, marginBottom: 64,
        }}>
          {CORE_TEAM.map(m => (
            <div
              key={m.slug}
              onClick={() => { setAuthorSlug(m.slug); setPage("author"); }}
              style={{
                background: CARD, border: `1px solid ${LINE}`, borderRadius: 10,
                padding: 24, cursor: "pointer", textAlign: "center",
                transition: "box-shadow 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                <Avatar member={m} size={72} />
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 600, color: INK, marginBottom: 4 }}>
                {m.name}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 12, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {m.role}
              </div>
            </div>
          ))}
        </div>

        {/* Writers & Researchers strip */}
        {contributors.length > 0 && (
          <>
            <div style={{ borderTop: `1px solid ${LINE}`, paddingTop: 48, marginBottom: 32 }}>
              <Kicker>Contributors</Kicker>
              <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 400, color: INK, margin: "0 0 8px" }}>
                Writers &amp; Researchers
              </h3>
              <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, margin: "0 0 32px" }}>
                Ordered by most recently published.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {contributors.map(m => (
                <div
                  key={m.slug}
                  onClick={() => { setAuthorSlug(m.slug); setPage("author"); }}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    background: CARD, border: `1px solid ${LINE}`, borderRadius: 10,
                    padding: "16px 20px", cursor: "pointer",
                    transition: "box-shadow 0.15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                >
                  <Avatar member={m} size={44} />
                  <div>
                    <div style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600, color: INK }}>{m.name}</div>
                    <div style={{ fontFamily: SANS, fontSize: 11, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}

export function AuthorProfile({ slug, onBack, onOpenArticle, onOpenAuthor }) {
  // Match by slug or by slugified name (handles laylah-wolf-researcher → laylah-wolf)
  const member = TEAM.find(t => t.slug === slug) || TEAM.find(t => slugify(t.name) === slug);
  const posts = ARTICLES.filter(a => slugify(a.author) === slug || slugify(a.researcher) === slug || (member && (a.author === member.name || a.researcher === member.name)));

  // Sort posts most recent first (last in array = most recent)
  const sortedPosts = [...posts].reverse();

  if (!member) return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px" }}>
        <button onClick={onBack} style={{ fontFamily: SANS, color: ACCENT, background: "none", border: "none", fontSize: 14, cursor: "pointer" }}>
          ← Back
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
          style={{ background: "none", border: "none", fontFamily: SANS, fontSize: 14, color: ACCENT, padding: 0, marginBottom: 40, cursor: "pointer" }}
        >
          ← Back
        </button>

        {/* Profile header */}
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 32, flexWrap: "wrap" }}>
          <Avatar member={member} size={88} />
          <div>
            <Kicker>{member.role}</Kicker>
            <h1 style={{
              fontFamily: SERIF, fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 600, color: INK, margin: "0 0 10px", letterSpacing: "-0.01em",
            }}>
              {member.name}
            </h1>
            <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
              {member.bio}
            </p>
          </div>
        </div>

        {/* Add photo hint if no avatar */}
        {!member.avatar && (
          <p style={{ fontFamily: SANS, fontSize: 12, color: INK_SOFT, fontStyle: "italic", marginBottom: 40 }}>
            To add a photo: set <code>avatar: "/images/{member.slug}.jpg"</code> in siteData.js and place the image in <code>public/images/</code>.
          </p>
        )}

        <Rule />

        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 600, color: INK, marginBottom: 8 }}>
            {sortedPosts.length ? `Writing by ${member.name.split(" ")[0]}` : "No published articles yet"}
          </h2>
          {sortedPosts.length > 0 && (
            <p style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginBottom: 24 }}>
              Most recently published first.
            </p>
          )}
          {sortedPosts.map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} onClick={onOpenArticle} onOpenAuthor={onOpenAuthor} />
          ))}
        </div>
      </Container>
    </div>
  );
}
