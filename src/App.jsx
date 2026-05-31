import { useState, useEffect, useRef } from "react";

const COLORS = {
  teal: "#2DB8A0",
  tealDark: "#1A8F7A",
  tealLight: "#E8F9F6",
  navy: "#0D2B3E",
  navyLight: "#163D56",
  mint: "#A8EDE2",
};

const TEAM = [
  { name: "Laylah W.", role: "Founder & CEO", initials: "LW", color: "#2DB8A0" },
  { name: "Lee T.", role: "Vice President", initials: "LT", color: "#1A8F7A" },
  { name: "Anirudh N.", role: "Chief Technology Officer", initials: "AN", color: "#0D2B3E" },
  { name: "Brycen W.", role: "Social Media Manager", initials: "BW", color: "#0D2B3E" },
  { name: "Ayla T.", role: "Leader of Writing & Research", initials: "AT", color: "#163D56" },
  { name: "Nicola K.", role: "Leader of Writing & Research", initials: "NK", color: "#2DB8A0" },
  { name: "Angel G.", role: "Leader of Art & Graphic Design", initials: "AG", color: "#1A8F7A" },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Teen Mental Health: What Every Student Should Know",
    category: "Mental Health",
    date: "May 20, 2025",
    author: "Ayla T.",
    excerpt: "Mental health is just as important as physical health, yet many teens don't know where to turn when they're struggling. Here's a comprehensive guide to understanding and protecting your mental wellness.",
    content: `Mental health is just as important as physical health, yet many teens don't know where to turn when they're struggling. Anxiety, depression, and stress are common experiences during adolescence, but that doesn't mean you have to face them alone.\n\nSigns you might need support include persistent sadness lasting more than two weeks, withdrawal from friends and activities, changes in sleep or appetite, difficulty concentrating, and feelings of hopelessness. If you notice these signs in yourself or a friend, reaching out is the bravest thing you can do.\n\nResources available to teens include school counselors, crisis text lines (text HOME to 741741), and trusted adults in your life. Remember: asking for help is a sign of strength, not weakness.\n\nBuilding resilience starts with small habits: regular sleep, movement, limiting social media, and staying connected to people who uplift you. The HEAL Project is here to support every step of your wellness journey.`,
    readTime: "5 min read",
    color: "#2DB8A0",
  },
  {
    id: 2,
    title: "Nutrition 101: Fueling Your Body for Success",
    category: "Nutrition",
    date: "May 12, 2025",
    author: "Nicola K.",
    excerpt: "What you eat directly impacts your energy, focus, and mood. Learn the basics of teen nutrition without the diet culture noise.",
    content: `What you eat directly impacts your energy, focus, and mood. Teen bodies are growing rapidly and need consistent, balanced fuel — not crash diets or skipping meals.\n\nThe basics: aim for a colorful plate. Half vegetables and fruits, a quarter protein (eggs, beans, chicken, tofu), and a quarter whole grains. Don't fear carbohydrates — your brain runs on glucose.\n\nHydration matters enormously. Most teens are chronically dehydrated, which leads to fatigue and poor concentration. Aim for 8 glasses of water daily, more if you're active.\n\nSnacking smart: choose snacks that combine protein and carbs — apple with peanut butter, hummus with crackers, or yogurt with berries. These combinations keep blood sugar stable and energy consistent.\n\nAvoid diet culture: your body is not a problem to be solved. Focus on nourishment, not restriction. If you're concerned about your relationship with food, talk to a trusted adult or healthcare provider.`,
    readTime: "4 min read",
    color: "#1A8F7A",
  },
  {
    id: 3,
    title: "Sleep Science: Why Teens Need More Than They Think",
    category: "Sleep & Wellness",
    date: "May 5, 2025",
    author: "Ayla T.",
    excerpt: "Teenagers need 8–10 hours of sleep per night, but most get far less. Here's what sleep deprivation actually does to your body and how to fix it.",
    content: `Teenagers need 8–10 hours of sleep per night, but national surveys show the average teen gets only 6–7. This isn't just about being tired — chronic sleep deprivation has serious consequences.\n\nSleep deprivation affects: memory consolidation (you literally can't retain what you learned), mood regulation (irritability and emotional reactivity spike), immune function, metabolism, and athletic performance. Every system in your body suffers.\n\nWhy teens stay up late: biology actually shifts the circadian rhythm during puberty, making it harder to fall asleep before 11pm. Early school start times work against this biology, which is why sleep advocacy organizations push for later school starts.\n\nBetter sleep habits: consistent wake time (even weekends), no screens 30 minutes before bed, cool and dark room, avoiding caffeine after 2pm, and a wind-down routine. Small changes compound over time into significantly better rest.\n\nThe HEAL Project advocates for teen sleep health and encourages schools to consider later start times.`,
    readTime: "6 min read",
    color: "#163D56",
  },
  {
    id: 4,
    title: "Breaking the Stigma: Talking About Sexual Health",
    category: "Sexual Health",
    date: "April 28, 2025",
    author: "Nicola K.",
    excerpt: "Sexual health is health. Here's the honest, judgment-free information every teen deserves to have.",
    content: `Sexual health is health. Despite this, many teens receive incomplete or shame-based education, leaving them without the knowledge to make informed decisions.\n\nContraception basics: multiple options exist, from condoms (which also protect against STIs) to hormonal methods. Talking to a healthcare provider helps determine what's right for you. Planned Parenthood and school health centers offer confidential appointments.\n\nSTI prevention: condoms significantly reduce transmission risk. Regular testing is recommended for sexually active teens — it's a normal part of healthcare, not something to be ashamed of.\n\nConsent is foundational: enthusiastic, ongoing, and freely given. Consent can be withdrawn at any time. Healthy relationships are built on mutual respect and communication.\n\nIf you don't feel safe talking to a parent, consider a school counselor, doctor, or resources like bedsider.org and plannedparenthood.org. You deserve accurate information.`,
    readTime: "5 min read",
    color: "#0D2B3E",
  },
  {
    id: 5,
    title: "Movement as Medicine: Exercise for Teen Mental Health",
    category: "Fitness",
    date: "April 20, 2025",
    author: "Lee T.",
    excerpt: "Exercise isn't just about physical fitness — it's one of the most powerful tools for mental health. And you don't need a gym.",
    content: `Exercise isn't just about physical fitness — it's one of the most powerful tools for mental health. Research consistently shows that regular movement reduces anxiety and depression symptoms, improves sleep, and boosts self-esteem.\n\nHow it works: exercise releases endorphins, reduces cortisol (the stress hormone), increases brain-derived neurotrophic factor (BDNF) which supports brain health, and creates a sense of accomplishment.\n\nYou don't need a gym: walking, dancing, yoga, bike riding, swimming, and playing with pets all count. The best exercise is the one you'll actually do consistently.\n\nThe goal isn't perfection — it's consistency. Even 20 minutes of brisk walking three times a week produces measurable mental health benefits.\n\nBody-neutral fitness: exercise is not punishment for eating. It's a gift you give your future self. Focus on how movement makes you feel, not how it makes you look.`,
    readTime: "4 min read",
    color: "#2DB8A0",
  },
  {
    id: 6,
    title: "Social Media & Self-Image: Setting Healthy Boundaries",
    category: "Digital Wellness",
    date: "April 14, 2025",
    author: "Brycen W.",
    excerpt: "Social media can be a powerful community tool or a comparison trap. Here's how to use it in a way that supports rather than harms your self-image.",
    content: `Social media can be a powerful community tool or a comparison trap. Research shows a correlation between heavy social media use and lower self-esteem, increased anxiety, and poor body image — particularly in teenage girls.\n\nThe comparison trap: you're seeing everyone's highlight reel, not their reality. Filters, editing, and selective posting create an impossible standard. Even the people whose lives look perfect online are struggling in ways you can't see.\n\nAudit your feed: does it make you feel inspired or inadequate? You have the power to unfollow, mute, and curate an environment that builds you up. Fill your feed with accounts that celebrate diversity, education, and real life.\n\nSetting limits: screen time apps can help. Many teens report feeling better within a week of reducing social media use. Try a weekend digital detox and notice how you feel.\n\nThe HEAL Project exists to build real community — where every teen feels valued exactly as they are.`,
    readTime: "5 min read",
    color: "#1A8F7A",
  },
];

const PARTNERS = [
  {
    name: "Food for Good",
    description: "Fighting food insecurity in our communities",
    bg: "#C9A96E",
    textColor: "#fff",
    icon: "🥫",
  },
  {
    name: "M.I.K.D. Youth Empowerment Network",
    description: "Empowering youth through mentorship and community",
    bg: "#F9E8C8",
    textColor: "#333",
    icon: "🤝",
  },
  {
    name: "M.O.R.S.",
    description: "Mental health and wellness advocacy",
    bg: "#1B2A4A",
    textColor: "#fff",
    icon: "🌙",
  },
];

const PROGRAMS = [
  { title: "Peer Education", icon: "🎓", desc: "Teen educators trained to deliver health workshops in schools and community centers.", color: "#2DB8A0" },
  { title: "Wellness Workshops", icon: "💪", desc: "Interactive sessions covering mental health, nutrition, sleep, and more.", color: "#1A8F7A" },
  { title: "Resource Library", icon: "📚", desc: "Free downloadable guides, toolkits, and fact sheets on every health topic.", color: "#0D2B3E" },
  { title: "Community Chapters", icon: "🏫", desc: "Start or join a HEAL chapter at your school and bring health education to your peers.", color: "#163D56" },
  { title: "Speaker Series", icon: "🎤", desc: "Monthly virtual events with health professionals, advocates, and change-makers.", color: "#2DB8A0" },
  { title: "Challenge Program", icon: "🌱", desc: "30-day wellness challenges designed to build healthy habits one day at a time.", color: "#1A8F7A" },
];

const TOPICS = [
  { title: "Mental Health", icon: "🧠", color: "#2DB8A0" },
  { title: "Nutrition", icon: "🥦", color: "#1A8F7A" },
  { title: "Sexual Health", icon: "💜", color: "#0D2B3E" },
  { title: "Sleep & Rest", icon: "😴", color: "#163D56" },
  { title: "Fitness", icon: "🏃", color: "#2DB8A0" },
  { title: "Digital Wellness", icon: "📱", color: "#1A8F7A" },
  { title: "Substance Awareness", icon: "⚠️", color: "#0D2B3E" },
  { title: "Body Image", icon: "💛", color: "#163D56" },
  { title: "Relationships", icon: "❤️", color: "#2DB8A0" },
  { title: "Stress Management", icon: "🌿", color: "#1A8F7A" },
  { title: "First Aid", icon: "🩹", color: "#0D2B3E" },
  { title: "Chronic Illness", icon: "🏥", color: "#163D56" },
];

// ===================== COMPONENTS =====================

function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Programs", id: "programs" },
    { label: "Blog", id: "blog" },
    { label: "Team", id: "team" },
    { label: "Partners", id: "partners" },
    { label: "Get Involved", id: "involved" },
  ];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: COLORS.navy, padding: "0 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 64, boxShadow: "0 2px 20px rgba(0,0,0,0.3)"
    }}>
      <div
        onClick={() => { setPage("home"); setMenuOpen(false); }}
        style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: COLORS.teal, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#fff"
        }}>H</div>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 18, letterSpacing: "-0.3px" }}>
          The HEAL Project
        </span>
      </div>

      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => { setPage(item.id); setMenuOpen(false); }}
            style={{
              background: page === item.id ? COLORS.teal : "transparent",
              color: "#fff", border: "none", borderRadius: 8,
              padding: "8px 14px", cursor: "pointer", fontSize: 14,
              fontWeight: page === item.id ? 700 : 400,
              transition: "all 0.2s"
            }}
          >{item.label}</button>
        ))}
        <button
          onClick={() => setPage("involved")}
          style={{
            background: COLORS.teal, color: "#fff", border: "none",
            borderRadius: 8, padding: "8px 16px", cursor: "pointer",
            fontWeight: 700, fontSize: 14, marginLeft: 8
          }}>Join Us</button>
      </div>
    </nav>
  );
}

function Hero({ setPage }) {
  return (
    <section style={{
      minHeight: "100vh", background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 60%, ${COLORS.tealDark} 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "120px 2rem 4rem", textAlign: "center", position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 70% 50%, rgba(45,184,160,0.15) 0%, transparent 60%)",
        pointerEvents: "none"
      }} />
      <div style={{ maxWidth: 800, position: "relative" }}>
        <div style={{
          display: "inline-block", background: "rgba(45,184,160,0.2)",
          border: `1px solid ${COLORS.teal}`, borderRadius: 100,
          padding: "6px 20px", color: COLORS.mint, fontSize: 13,
          fontWeight: 600, letterSpacing: "0.5px", marginBottom: 28
        }}>
          🌿 Student-Led Nonprofit · Free Health Education
        </div>
        <h1 style={{
          color: "#fff", fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 900, lineHeight: 1.05, marginBottom: 24,
          letterSpacing: "-1px"
        }}>
          Health Education,<br />
          <span style={{ color: COLORS.mint }}>By Teens, For Teens</span>
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.75)", fontSize: 20, lineHeight: 1.7,
          marginBottom: 40, maxWidth: 600, margin: "0 auto 40px"
        }}>
          The HEAL Project delivers free, stigma-free health education to teens everywhere.
          Because every young person deserves access to information that can change their life.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => setPage("blog")}
            style={{
              background: COLORS.teal, color: "#fff", border: "none",
              borderRadius: 12, padding: "16px 36px", fontSize: 17, fontWeight: 700,
              cursor: "pointer", transition: "all 0.2s"
            }}>Read Our Blog</button>
          <button
            onClick={() => setPage("involved")}
            style={{
              background: "transparent", color: "#fff",
              border: "2px solid rgba(255,255,255,0.4)",
              borderRadius: 12, padding: "16px 36px", fontSize: 17, fontWeight: 600,
              cursor: "pointer"
            }}>Get Involved</button>
        </div>
        <div style={{
          display: "flex", gap: 48, justifyContent: "center",
          marginTop: 64, flexWrap: "wrap"
        }}>
          {[["500+", "Students Reached"], ["12", "Health Topics"], ["7", "Team Members"], ["3", "Partner Orgs"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ color: COLORS.mint, fontSize: 36, fontWeight: 900 }}>{n}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs({ setPage }) {
  return (
    <section style={{ padding: "100px 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: COLORS.navy, marginBottom: 16 }}>Our Programs</h2>
          <p style={{ color: "#666", fontSize: 18, maxWidth: 600, margin: "0 auto" }}>
            Six pillars of health education, designed for and by young people.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24
        }}>
          {PROGRAMS.map((p) => (
            <div key={p.title} style={{
              background: COLORS.tealLight, borderRadius: 16,
              padding: 32, border: `1px solid ${COLORS.mint}`,
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "default"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(13,43,62,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: COLORS.navy, marginBottom: 10 }}>{p.title}</h3>
              <p style={{ color: "#555", lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section style={{ padding: "100px 2rem", background: COLORS.tealLight }} id="team">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: COLORS.navy, marginBottom: 16 }}>Meet the Team</h2>
          <p style={{ color: "#555", fontSize: 18, maxWidth: 600, margin: "0 auto" }}>
            The passionate young people behind The HEAL Project.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24
        }}>
          {TEAM.map((member) => (
            <div key={member.name} style={{
              background: "#fff", borderRadius: 16, padding: "32px 24px",
              textAlign: "center", border: "1px solid rgba(45,184,160,0.2)",
              boxShadow: "0 4px 20px rgba(13,43,62,0.06)",
              transition: "transform 0.2s"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: member.color, display: "flex",
                alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px", fontSize: 22,
                fontWeight: 900, color: "#fff", letterSpacing: "1px"
              }}>{member.initials}</div>
              <div style={{ fontWeight: 800, fontSize: 18, color: COLORS.navy, marginBottom: 6 }}>{member.name}</div>
              <div style={{
                fontSize: 13, color: COLORS.teal, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.5px",
                lineHeight: 1.4
              }}>{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HealthTopics() {
  return (
    <section style={{ padding: "100px 2rem", background: COLORS.navy }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16 }}>Health Topics</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18 }}>
            Comprehensive, stigma-free coverage of what matters most.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 16
        }}>
          {TOPICS.map((t) => (
            <div key={t.title} style={{
              background: "rgba(255,255,255,0.06)", borderRadius: 12,
              padding: "24px 16px", textAlign: "center",
              border: "1px solid rgba(45,184,160,0.2)",
              cursor: "pointer", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(45,184,160,0.15)"; e.currentTarget.style.borderColor = COLORS.teal; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(45,184,160,0.2)"; }}
            >
              <div style={{ fontSize: 32, marginBottom: 10 }}>{t.icon}</div>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, onClick }) {
  return (
    <div
      onClick={() => onClick(post)}
      style={{
        background: "#fff", borderRadius: 16, overflow: "hidden",
        border: "1px solid rgba(45,184,160,0.15)",
        cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
        boxShadow: "0 4px 20px rgba(13,43,62,0.06)"
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(13,43,62,0.14)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(13,43,62,0.06)"; }}
    >
      <div style={{
        height: 8, background: post.color
      }} />
      <div style={{ padding: 28 }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "center" }}>
          <span style={{
            background: COLORS.tealLight, color: COLORS.tealDark,
            fontSize: 12, fontWeight: 700, padding: "4px 12px",
            borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.5px"
          }}>{post.category}</span>
          <span style={{ color: "#999", fontSize: 12 }}>{post.readTime}</span>
        </div>
        <h3 style={{
          fontSize: 20, fontWeight: 800, color: COLORS.navy,
          lineHeight: 1.3, marginBottom: 12
        }}>{post.title}</h3>
        <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          borderTop: "1px solid #f0f0f0", paddingTop: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 30, height: 30, borderRadius: "50%",
              background: post.color, display: "flex",
              alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 11, fontWeight: 800
            }}>{post.author.split(" ").map(w => w[0]).join("")}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy }}>{post.author}</div>
              <div style={{ fontSize: 12, color: "#999" }}>{post.date}</div>
            </div>
          </div>
          <span style={{ color: COLORS.teal, fontWeight: 700, fontSize: 13 }}>Read more →</span>
        </div>
      </div>
    </div>
  );
}

function BlogPage({ setPage }) {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];
  const filtered = filter === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === filter);

  if (selected) {
    return (
      <div style={{ minHeight: "100vh", background: "#f8fffe", paddingTop: 80 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 2rem 100px" }}>
          <button
            onClick={() => setSelected(null)}
            style={{
              background: "transparent", border: "none", color: COLORS.teal,
              fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 32,
              display: "flex", alignItems: "center", gap: 6, padding: 0
            }}>← Back to Blog</button>
          <div style={{ height: 6, background: selected.color, borderRadius: 3, marginBottom: 36 }} />
          <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center" }}>
            <span style={{
              background: COLORS.tealLight, color: COLORS.tealDark,
              fontSize: 12, fontWeight: 700, padding: "4px 14px",
              borderRadius: 100, textTransform: "uppercase"
            }}>{selected.category}</span>
            <span style={{ color: "#999", fontSize: 13 }}>{selected.readTime}</span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900,
            color: COLORS.navy, lineHeight: 1.15, marginBottom: 24
          }}>{selected.title}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: selected.color, display: "flex",
              alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 800, fontSize: 13
            }}>{selected.author.split(" ").map(w => w[0]).join("")}</div>
            <div>
              <div style={{ fontWeight: 700, color: COLORS.navy, fontSize: 14 }}>{selected.author}</div>
              <div style={{ color: "#999", fontSize: 13 }}>{selected.date}</div>
            </div>
          </div>
          <div style={{ borderTop: `3px solid ${COLORS.tealLight}`, paddingTop: 36 }}>
            {selected.content.split("\n\n").map((para, i) => (
              <p key={i} style={{
                fontSize: 17, lineHeight: 1.85, color: "#333",
                marginBottom: 24, fontFamily: "Georgia, serif"
              }}>{para}</p>
            ))}
          </div>
          <div style={{
            marginTop: 60, padding: 32, background: COLORS.tealLight,
            borderRadius: 16, textAlign: "center"
          }}>
            <div style={{ fontSize: 24, marginBottom: 10 }}>💚</div>
            <div style={{ fontWeight: 800, color: COLORS.navy, fontSize: 18, marginBottom: 8 }}>
              Found this helpful?
            </div>
            <p style={{ color: "#555", marginBottom: 20 }}>
              Share it with a friend who needs it. Health education works best when we spread it.
            </p>
            <button
              onClick={() => setSelected(null)}
              style={{
                background: COLORS.teal, color: "#fff", border: "none",
                borderRadius: 10, padding: "12px 28px", fontWeight: 700,
                cursor: "pointer", fontSize: 15
              }}>Read More Articles</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fffe", paddingTop: 80 }}>
      <div style={{
        background: COLORS.navy, padding: "80px 2rem 60px", textAlign: "center"
      }}>
        <h1 style={{ color: "#fff", fontSize: 48, fontWeight: 900, marginBottom: 16 }}>The HEAL Blog</h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, maxWidth: 540, margin: "0 auto" }}>
          Evidence-based, teen-written health education you can actually use.
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 2rem 100px" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? COLORS.teal : "#fff",
                color: filter === cat ? "#fff" : COLORS.navy,
                border: `1px solid ${filter === cat ? COLORS.teal : "rgba(45,184,160,0.3)"}`,
                borderRadius: 100, padding: "8px 20px", fontSize: 14,
                fontWeight: 600, cursor: "pointer", transition: "all 0.2s"
              }}>{cat}</button>
          ))}
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 28
        }}>
          {filtered.map(post => (
            <BlogCard key={post.id} post={post} onClick={setSelected} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Partners() {
  return (
    <section style={{ padding: "100px 2rem", background: "#f0fbf8" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: COLORS.navy, marginBottom: 16 }}>Our Partners</h2>
          <p style={{ color: "#666", fontSize: 18, maxWidth: 500, margin: "0 auto" }}>
            Organizations we're proud to work alongside to make health education accessible.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 28
        }}>
          {PARTNERS.map((p) => (
            <div key={p.name} style={{
              background: "#fff", borderRadius: 20, overflow: "hidden",
              border: "1px solid rgba(45,184,160,0.15)",
              boxShadow: "0 4px 20px rgba(13,43,62,0.06)",
              transition: "transform 0.2s"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{
                background: p.bg, height: 120, display: "flex",
                alignItems: "center", justifyContent: "center"
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 16,
                  background: "rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 36
                }}>{p.icon}</div>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: COLORS.navy, marginBottom: 8 }}>{p.name}</div>
                <div style={{ color: "#666", fontSize: 14, lineHeight: 1.6 }}>{p.description}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "#999", fontSize: 14, marginTop: 48 }}>
          Interested in partnering with The HEAL Project? Email us at{" "}
          <a href="mailto:thehealproject48@gmail.com" style={{ color: COLORS.teal, fontWeight: 600 }}>
            thehealproject48@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

function GetInvolved({ setPage }) {
  return (
    <section style={{ padding: "100px 2rem", background: COLORS.navy }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16 }}>Get Involved</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, marginBottom: 60, maxWidth: 560, margin: "0 auto 60px" }}>
          Whether you want to volunteer, start a chapter, or join a challenge — there's a place for you.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24
        }}>
          {[
            { icon: "🙋", title: "Volunteer", desc: "Join our team of peer educators and help deliver workshops in your community." },
            { icon: "🏫", title: "Start a Chapter", desc: "Bring HEAL to your school. We'll give you everything you need to get started." },
            { icon: "🌱", title: "Join a Challenge", desc: "Take our 30-day wellness challenges and build habits that last a lifetime." },
          ].map(card => (
            <div key={card.title} style={{
              background: "rgba(255,255,255,0.07)", borderRadius: 16,
              padding: 32, border: "1px solid rgba(45,184,160,0.3)",
              transition: "background 0.2s"
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(45,184,160,0.15)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{card.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 10 }}>{card.title}</div>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{card.desc}</p>
              <a
                href="mailto:thehealproject48@gmail.com"
                style={{
                  display: "inline-block", marginTop: 20,
                  background: COLORS.teal, color: "#fff",
                  borderRadius: 8, padding: "10px 22px",
                  fontWeight: 700, fontSize: 14, textDecoration: "none"
                }}
              >Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setError("");
  };

  return (
    <section style={{ padding: "80px 2rem", background: COLORS.teal, textAlign: "center" }}>
      <div style={{ maxWidth: 540, margin: "0 auto" }}>
        <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Stay in the Know</h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, marginBottom: 36 }}>
          Get free health resources, event updates, and new articles delivered to your inbox.
        </p>
        {submitted ? (
          <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 12, padding: 24, color: "#fff", fontWeight: 700, fontSize: 18 }}>
            ✅ You're in! Welcome to the HEAL community.
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  flex: 1, padding: "14px 18px", borderRadius: 10,
                  border: "none", fontSize: 16, minWidth: 200,
                  outline: "none"
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  background: COLORS.navy, color: "#fff", border: "none",
                  borderRadius: 10, padding: "14px 28px", fontSize: 16,
                  fontWeight: 700, cursor: "pointer"
                }}>Subscribe</button>
            </div>
            {error && <p style={{ color: "rgba(255,255,255,0.9)", marginTop: 10, fontSize: 14 }}>{error}</p>}
          </div>
        )}
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: COLORS.navy, padding: "60px 2rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40, paddingBottom: 48
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: COLORS.teal, display: "flex", alignItems: "center",
                justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 16
              }}>H</div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>The HEAL Project</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.8 }}>
              Health Education Access League<br />
              Free health education for teens, by teens.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["Instagram", "TikTok", "YouTube", "Pinterest"].map(s => (
                <a key={s} href={`https://instagram.com/thehealproject48`}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700,
                    textDecoration: "none"
                  }}>{s[0]}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ color: COLORS.mint, fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Navigate</div>
            {[["Home", "home"], ["Programs", "programs"], ["Blog", "blog"], ["Team", "team"], ["Partners", "partners"], ["Get Involved", "involved"]].map(([label, id]) => (
              <div key={id} style={{ marginBottom: 10 }}>
                <span
                  onClick={() => setPage(id)}
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, cursor: "pointer", textDecoration: "none" }}
                >{label}</span>
              </div>
            ))}
          </div>

          <div>
            <div style={{ color: COLORS.mint, fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Health Topics</div>
            {TOPICS.slice(0, 6).map(t => (
              <div key={t.title} style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 10 }}>
                {t.icon} {t.title}
              </div>
            ))}
          </div>

          <div>
            <div style={{ color: COLORS.mint, fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Contact</div>
            <a href="mailto:thehealproject48@gmail.com"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, display: "block", marginBottom: 10, textDecoration: "none" }}>
              📧 thehealproject48@gmail.com
            </a>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.7 }}>
              Follow us @thehealproject48<br />
              on all platforms
            </p>
            <div style={{ marginTop: 20 }}>
              <div style={{ color: COLORS.mint, fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>Crisis Resources</div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.8 }}>
                Crisis Text Line: Text HOME to 741741<br />
                SAMHSA Helpline: 1-800-662-4357<br />
                988 Suicide & Crisis Lifeline: Call 988
              </p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "24px 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: 0 }}>
            © {new Date().getFullYear()} The HEAL Project (Health Education Access League). All Rights Reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, margin: 0 }}>
            Student-Led Nonprofit · Dedicated to teen health education
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===================== HOME PAGE =====================

function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <Programs setPage={setPage} />
      <HealthTopics />
      <Team />
      <div style={{ padding: "100px 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: COLORS.navy, marginBottom: 8 }}>Latest from the Blog</h2>
              <p style={{ color: "#666", fontSize: 16 }}>Teen-written health education you can trust.</p>
            </div>
            <button
              onClick={() => setPage("blog")}
              style={{
                background: COLORS.teal, color: "#fff", border: "none",
                borderRadius: 10, padding: "12px 28px", fontWeight: 700,
                fontSize: 15, cursor: "pointer"
              }}>View All Articles →</button>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24
          }}>
            {BLOG_POSTS.slice(0, 3).map(post => (
              <BlogCard key={post.id} post={post} onClick={() => setPage("blog")} />
            ))}
          </div>
        </div>
      </div>
      <Partners />
      <GetInvolved setPage={setPage} />
      <Newsletter />
    </>
  );
}

// ===================== MAIN APP =====================

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} />;
      case "programs": return (
        <div style={{ paddingTop: 64 }}>
          <Programs setPage={setPage} />
          <HealthTopics />
        </div>
      );
      case "blog": return <BlogPage setPage={setPage} />;
      case "team": return (
        <div style={{ paddingTop: 64 }}>
          <Team />
        </div>
      );
      case "partners": return (
        <div style={{ paddingTop: 64 }}>
          <Partners />
        </div>
      );
      case "involved": return (
        <div style={{ paddingTop: 64 }}>
          <GetInvolved setPage={setPage} />
          <Newsletter />
        </div>
      );
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", minHeight: "100vh" }}>
      <Navbar page={page} setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
