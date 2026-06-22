import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Programs, HealthTopics } from "./components/Programs";
import { Team, AuthorProfile } from "./components/Team";
import JournalPage, { ArticleCard } from "./components/Articles";
import ChaptersPage from "./components/Chapters";
import FellowshipPage from "./components/Fellowship";
import Partners from "./components/Partners";
import GetInvolved from "./components/GetInvolved";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { ARTICLES } from "./data/siteData";
import { Container, SectionHeading, Rule, INK, LINE, SANS } from "./components/UI";

function HomePage({ setPage, openAuthor }) {
  return (
    <>
      <Hero setPage={setPage} />
      <Programs />
      <HealthTopics />
      <Team setPage={setPage} setAuthorSlug={openAuthor} />

      <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 8 }}>
            <SectionHeading kicker="From the journal" title="Latest writing" />
            <button
              onClick={() => setPage("blog")}
              style={{ fontFamily: SANS, background: "none", border: `1px solid ${LINE}`, color: INK, padding: "11px 22px", fontSize: 14, fontWeight: 500, cursor: "pointer", borderRadius: 4, marginBottom: 56 }}
            >
              View all →
            </button>
          </div>
          {ARTICLES.slice(0, 4).map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} onClick={() => setPage("blog")} />
          ))}
          <Rule />
        </Container>
      </section>

      <Partners />
      <GetInvolved />
      <Newsletter />
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [authorSlug, setAuthorSlug] = useState(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  const openAuthor = (slug) => { setAuthorSlug(slug); setPage("author"); };

  const render = () => {
    switch (page) {
      case "home":       return <HomePage setPage={setPage} openAuthor={openAuthor} />;
      case "programs":   return <div style={{ paddingTop: 64 }}><Programs /><HealthTopics /></div>;
      case "blog":       return <JournalPage onOpenAuthor={openAuthor} />;
      case "team":       return <div style={{ paddingTop: 64 }}><Team setPage={setPage} setAuthorSlug={openAuthor} /></div>;
      case "author":     return <AuthorProfile slug={authorSlug} onBack={() => setPage("team")} onOpenArticle={() => setPage("blog")} onOpenAuthor={openAuthor} />;
      case "chapters":   return <ChaptersPage />;
      case "fellowship": return <FellowshipPage />;
      case "partners":   return <div style={{ paddingTop: 64 }}><Partners /></div>;
      case "involved":   return <div style={{ paddingTop: 64 }}><GetInvolved /><Newsletter /></div>;
      default:           return <HomePage setPage={setPage} openAuthor={openAuthor} />;
    }
  };

  return (
    <div style={{ background: "#F3F8F6", minHeight: "100vh" }}>
      <Navbar page={page} setPage={setPage} />
      <main>{render()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
