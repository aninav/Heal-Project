import { useState, useEffect, useCallback } from "react";
import { Container, Kicker, Pill, INK, INK_SOFT, LINE, CARD, ACCENT, SANS, SERIF } from "./UI";
import { CHAPTER_LEADERS, REGIONS } from "../data/siteData";

/* -----------------------------------------------------------------------
   PhotoSlideshow — shown on chapter cards that have a `photos` array.
   photos: [{ src: string, caption?: string }]
   ----------------------------------------------------------------------- */
function PhotoSlideshow({ photos, chapterName }) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  const go = useCallback((dir) => {
    setFade(false);
    setTimeout(() => {
      setIdx(i => (i + dir + photos.length) % photos.length);
      setFade(true);
    }, 160);
  }, [photos.length]);

  // Auto-advance every 4 s
  useEffect(() => {
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [go]);

  const photo = photos[idx];

  return (
    <div style={{ position: "relative", marginBottom: 16, borderRadius: 8, overflow: "hidden", background: "#D8E3DD" }}>
      {/* Image */}
      <div style={{
        width: "100%", paddingTop: "62%", position: "relative",
        overflow: "hidden",
      }}>
        <img
          src={photo.src}
          alt={photo.caption || `${chapterName} photo ${idx + 1}`}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: fade ? 1 : 0,
            transition: "opacity 0.18s ease",
          }}
        />
        {/* Gradient overlay for caption legibility */}
        {photo.caption && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(transparent, rgba(22,34,29,0.65))",
            padding: "24px 14px 10px",
          }}>
            <p style={{
              fontFamily: SANS, fontSize: 12, color: "#fff",
              margin: 0, lineHeight: 1.4,
              opacity: fade ? 1 : 0, transition: "opacity 0.18s ease",
            }}>
              {photo.caption}
            </p>
          </div>
        )}
      </div>

      {/* Controls — only shown if more than 1 photo */}
      {photos.length > 1 && (
        <>
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); go(-1); }}
            style={{
              position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.85)", border: "none", borderRadius: "50%",
              width: 28, height: 28, cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: 14, color: INK, lineHeight: 1,
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); go(1); }}
            style={{
              position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.85)", border: "none", borderRadius: "50%",
              width: 28, height: 28, cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: 14, color: INK, lineHeight: 1,
            }}
            aria-label="Next photo"
          >
            ›
          </button>
          {/* Dots */}
          <div style={{
            position: "absolute", bottom: photo.caption ? 30 : 8, left: 0, right: 0,
            display: "flex", justifyContent: "center", gap: 5,
          }}>
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setFade(false); setTimeout(() => { setIdx(i); setFade(true); }, 160); }}
                style={{
                  width: i === idx ? 16 : 6, height: 6, borderRadius: 3,
                  background: i === idx ? "#fff" : "rgba(255,255,255,0.5)",
                  border: "none", padding: 0, cursor: "pointer",
                  transition: "width 0.2s, background 0.2s",
                }}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Photo count badge */}
      {photos.length > 1 && (
        <div style={{
          position: "absolute", top: 8, right: 8,
          background: "rgba(22,34,29,0.55)", borderRadius: 100,
          padding: "3px 9px",
          fontFamily: SANS, fontSize: 11, color: "#fff",
        }}>
          {idx + 1} / {photos.length}
        </div>
      )}
    </div>
  );
}

/* -----------------------------------------------------------------------
   ChapterCard
   ----------------------------------------------------------------------- */
function ChapterCard({ c }) {
  const isInternational = c.region === "International" || (c.location && !c.location.includes("USA"));
  const hasPhotos = Array.isArray(c.photos) && c.photos.length > 0;

  return (
    <div style={{
      background: CARD,
      border: `1px solid ${LINE}`,
      borderRadius: 8,
      padding: hasPhotos ? 0 : 24,
      overflow: "hidden",
    }}>
      {/* Slideshow if photos exist */}
      {hasPhotos && (
        <PhotoSlideshow photos={c.photos} chapterName={c.name} />
      )}

      <div style={{ padding: hasPhotos ? "0 20px 20px" : 0 }}>
        {/* International badge */}
        {isInternational && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: "#E4F1EC", borderRadius: 100,
            padding: "3px 10px", marginBottom: 10,
            fontFamily: SANS, fontSize: 11, fontWeight: 600,
            color: ACCENT, letterSpacing: "0.05em",
          }}>
            🌍 International Chapter
          </div>
        )}

        <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: INK, marginBottom: 4 }}>
          {c.name}
        </div>
        <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginBottom: 12 }}>
          {c.location}
        </div>
        {c.instagram ? (
          <a
            href={`https://instagram.com/${c.instagram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: SANS, fontSize: 13, color: ACCENT, fontWeight: 500, display: "block", marginBottom: 14 }}
          >
            {c.instagram}
          </a>
        ) : (
          <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, fontStyle: "italic", marginBottom: 14 }}>
            Instagram coming soon
          </div>
        )}
        <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, lineHeight: 1.65, margin: 0 }}>
          {c.blurb}
        </p>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------------------
   ChaptersPage
   ----------------------------------------------------------------------- */
export default function ChaptersPage() {
  const [region, setRegion] = useState("All");

  const filtered = region === "All"
    ? CHAPTER_LEADERS
    : CHAPTER_LEADERS.filter(c => c.region === region);

  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 16px" }}>
        <Kicker>Chapters &amp; Ambassadors</Kicker>
        <h1 style={{
          fontFamily: SERIF, fontSize: "clamp(34px, 6vw, 50px)",
          fontWeight: 400, color: INK, margin: "0 0 18px", letterSpacing: "-0.01em",
        }}>
          Our chapter leaders
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 16, color: INK_SOFT, maxWidth: 580, lineHeight: 1.7, marginBottom: 32 }}>
          HEAL chapters are student-led clubs that bring free health education to schools and
          communities. Explore current chapter leaders and ambassadors below, or start your
          own chapter if there isn't one near you yet.
        </p>

        {/* Note about photo slideshows */}
        <p style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginBottom: 24, fontStyle: "italic" }}>
          International chapters now feature photo slideshows — add a <code>photos</code> array to any chapter in <code>siteData.js</code> to showcase their work.
        </p>

        <div style={{ marginBottom: 40 }}>
          <a
            href="mailto:thehealproject48@gmail.com"
            style={{
              fontFamily: SANS, fontSize: 14, fontWeight: 500,
              color: "#fff", background: INK,
              padding: "12px 24px", borderRadius: 4,
              display: "inline-block",
            }}
          >
            Start a chapter &rarr;
          </a>
        </div>

        <div style={{ fontFamily: SANS, fontSize: 12, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
          Filter by region
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {REGIONS.map(r => (
            <Pill key={r} active={region === r} onClick={() => setRegion(r)}>{r}</Pill>
          ))}
        </div>
      </Container>

      <Container style={{ padding: "32px 32px 120px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {filtered.map(c => (
            <ChapterCard key={c.name} c={c} />
          ))}
        </div>
      </Container>
    </div>
  );
}
