# **Kyōka** ⚔️
*"Perception is deception."*

Inspired by Aizen's **Kyōka Suigetsu**, this app is a **real-time chess insights and illusion engine** — where your opponent sees reality too late. It's smooth, deadly, and ten steps ahead.

---

## 🔥 **What Kyōka Does**

**Kyōka** is a SaaS chess tool for:
* 🔍 Real-time **game tracking** 
* 🧠 Live **AI evaluations & best move predictions**
* ⚡ Streamer overlay modes with elegant graphics
* 📉 Heatmaps, blunder alerts, and visual storytelling
* 🎮 Chess enhanced — feels like hacking the match

---

## 👤 **App Personas / Characters** *(Anime-Aesthetic Inspired)*

| Character Codename | Role | Inspiration |
|-------------------|------|-------------|
| **Kyōka** (core app) | The main entity — beautiful, cold, always watching | Aizen's Bankai |
| **The Observer** | AI engine suggesting optimal plays | Like Gojo's Six Eyes / or Aizen post-hōgyoku |
| **Specter Mode** | Streamer mode — clean overlays | Stealth + precision like Itachi |
| **The Archive** | Past games, eval heatmaps, tactics auto-capture | Like Kisuke's underground lab |
| **The Mirror** | GPT-based move explainer: "why this move?" | "The illusion within an illusion." |
| **ShadowCast** | Shareable link with commentary | Broadcast your mind like Sukuna's domain |
| **Gatekeeper** | Auth system + usage limiter (SaaS) | Control like Kaguya over her palace |

---

## 🧱 **Tech Stack**

### **Frontend**
* React + Tailwind + Framer Motion
* Zustand/Jotai for state management
* `react-chessboard` for board rendering
* Vite for blazing fast dev

### **Backend** 
* Node.js + Express
* Socket.io for real-time updates
* MongoDB + Redis for data & caching
* Optional: Supabase Auth
* Chess Engine: Stockfish (local or via Lichess Cloud Eval API)

### **AI Layer**
* GPT-4 or Claude/Gemini (for summaries)
* GPT-generated insights: "this fork loses the game"
* Lichess evals or self-hosted engine

---

## 🧪 **MVP Roadmap**

### **Week 1: Base Foundation**
- [x] Setup project repo, Vite + React + Tailwind
- [x] Routing, layout, dark/light themes  
- [x] Integrate chessboard + basic PGN parser

### **Week 2: Live Game Mode**
- [ ] Integrate Chess.com / Lichess live games
- [ ] Backend fetcher with scheduled refresh
- [ ] Real-time updates via Socket.io
- [ ] Render board + moves in real-time

### **Week 3: AI Engine Integration** 
- [ ] Add Stockfish WASM
- [ ] Show eval bar / best move / centipawn loss
- [ ] Add mistake / blunder / accuracy tags
- [ ] Highlight squares (color-coded)

### **Week 4: Overlay & UI Polish**
- [ ] Create Streamer Mode (Specter)
- [ ] Add key moments timeline
- [ ] Minimalistic dark mode design
- [ ] Add game navigation and PGN download

### **Week 5: GPT + The Mirror**
- [ ] Connect GPT-4 to explain moves
- [ ] "Why this move?" sidebar
- [ ] Tactical summary: "fork bait on move 23"

### **Week 6: SaaS Features**
- [ ] Add login / auth (Supabase or Firebase)
- [ ] Save favorite players
- [ ] Personal dashboard with stats
- [ ] Usage limits (Gatekeeper)

### **Week 7: Final Touches**
- [ ] Add Shareable links (ShadowCast)
- [ ] Deploy with Vercel / Railway
- [ ] Setup Stripe for basic pro plan
- [ ] Launch beta to friends / Discord

### **Extras (Post MVP)**
- [ ] OBS integration
- [ ] Support for custom engines  
- [ ] Auto-tagging of games for blunders, brilliancies

---

## 🧠 **Business Angle**

### **Freemium Model**
* **Free tier:** 3 live games per day
* **Pro:** Unlimited analysis, deep insights, past game storage
* **Add-ons:** Branded overlay, GPT commentary, stream alerts

### **Target Users**
* Chess streamers wanting professional overlays
* Competitive players analyzing their games
* Chess coaches teaching students
* Anyone wanting to "see the matrix" in chess

---

## ✨ **Domain Ideas**
* `kyoka.gg`
* `playkyoka.com` 
* `kyokasync.ai`
* `veilrook.com` (backup option)

---

## 🎯 **Core Features Deep Dive**

### **The Observer** - AI Engine
* Real-time position evaluation (-2.3, +1.7, etc.)
* Best move suggestions with confidence %
* Blunder detection with severity levels
* Opening book integration
* Endgame tablebase lookup

### **Specter Mode** - Streamer Overlay
* Clean, minimal UI that doesn't obstruct gameplay
* Customizable themes (dark, neon, minimal)
* Key stats: accuracy, blunders, time pressure moments
* Chat integration for move predictions

### **The Mirror** - Move Explanation
* "This move creates a discovered attack"
* "Opponent missed Qh5+ winning the exchange" 
* "Position is drawish despite material advantage"
* Natural language explanations for every move

### **ShadowCast** - Social Features
* Share analyzed games with embedded player
* Community voting on critical positions
* Highlight reels of best/worst moves
* Export to social media with auto-generated insights

---

*Ready to make your opponents question reality?*