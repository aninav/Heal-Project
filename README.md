# The HEAL Project — Website

**Health Education Access League** · Student-Led Nonprofit

A fully responsive, production-ready React + Vite website.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
heal-project/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite config
├── package.json
├── public/
│   └── favicon.svg             # Site favicon
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Main app — wires all sections + modals
    ├── data/
    │   └── siteData.js         # ALL content: programs, topics, quiz, articles, etc.
    ├── hooks/
    │   └── useReveal.js        # Scroll-reveal IntersectionObserver hook
    ├── styles/
    │   └── global.css          # CSS variables, shared utilities, animations
    └── components/
        ├── Navbar.jsx           # Fixed top nav + mobile hamburger menu
        ├── Hero.jsx             # Full-screen hero with stats + social icons
        ├── Ticker.jsx           # Scrolling marquee banner
        ├── About.jsx            # Mission + quote + impact stats
        ├── Programs.jsx         # 6 program cards (opens modal on click)
        ├── HealthTopics.jsx     # 12 topic cards (opens detail modal on click)
        ├── Quiz.jsx             # 5-question interactive health IQ quiz
        ├── DailyTracker.jsx     # Daily wellness habit checklist
        ├── Articles.jsx         # Latest articles / blog grid
        ├── Toolkits.jsx         # Free downloadable health toolkits
        ├── GetInvolved.jsx      # Volunteer / chapter / challenge cards
        ├── Partners.jsx         # Partner organization badges
        ├── Newsletter.jsx       # Email signup with validation
        ├── Footer.jsx           # Full footer with links + social icons
        └── Modal.jsx            # Reusable modal (Esc to close, click outside)
```

---

## ✏️ Updating Content

All site content lives in **`src/data/siteData.js`** — no need to dig through components.

| What to change | Where |
|---|---|
| Programs | `PROGRAMS` array |
| Health topics + facts | `TOPICS` array |
| Quiz questions | `QUIZ_DATA` array |
| Articles | `ARTICLES` array |
| Toolkits | `TOOLKITS` array |
| Daily habits | `HABITS` array |
| Get Involved cards | `INVOLVED_CARDS` array |
| Partners | `PARTNERS` array |
| Social links | `SOCIAL_LINKS` array |
| Hero stats | `HERO_STATS` array |
| Nav items | `NAV_ITEMS` array |
| Brand colors | `COLORS` object + `src/styles/global.css` `:root` |

---

## 🌐 Deployment

### Netlify (recommended — free)
1. Run `npm run build`
2. Drag the `dist/` folder into [netlify.com/drop](https://app.netlify.com/drop)

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
# In vite.config.js, add: base: '/your-repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

---

## 🎨 Brand Colors

| Name | Hex |
|---|---|
| Teal (primary) | `#2DB8A0` |
| Teal Dark | `#1A8F7A` |
| Teal Light | `#E8F9F6` |
| Navy | `#0D2B3E` |
| Navy Light | `#163D56` |
| Mint | `#A8EDE2` |

---

## 📬 Contact

**thehealproject48@gmail.com**  
Instagram · TikTok · YouTube · Pinterest: **@thehealproject48**
