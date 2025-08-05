# Kyōka Development Roadmap (4 Months)

## **Month 1: Core Foundation**
**Week 1**
- [x] Setup Vite + React + Tailwind + Routing
- [x] Integrate `react-chessboard`
- [x] Basic chess logic with `chess.js`

**Week 2**
- [ ] Add Stockfish WASM for evaluation bar
- [ ] Display real-time evaluation score
- [ ] Basic UI setup (dark mode + branding)

**Week 3**
- [ ] Implement move highlighting
- [ ] Add option squares for legal moves
- [ ] Improve chessboard interactions (drag/drop)

**Week 4**
- [ ] Polish UI animations with Framer Motion
- [ ] Prepare for PGN analysis feature

---

## **Month 2: Advanced Analysis & AI Layer**
**Week 5**
- [ ] Add PGN upload feature
- [ ] Parse and render game history

**Week 6**
- [ ] Implement accuracy and blunder detection
- [ ] Create heatmap for mistakes and critical moves

**Week 7**
- [ ] GPT integration for move commentary (`The Mirror`)
- [ ] Generate AI insights like “Why this move?” and “Missed tactics”

**Week 8**
- [ ] Build commentary sidebar UI
- [ ] Optimize Stockfish performance

---

## **Month 3: Real-Time Mode & API Integration**
**Week 9**
- [ ] Add Lichess API integration for live games
- [ ] Implement real-time updates via Socket.io

**Week 10**
- [ ] Chess.com archived games integration
- [ ] Allow PGN import from Chess.com

**Week 11**
- [ ] **(Optional)** Add Chess.com live tracking using WebSocket scraping  
  *⚠ For demo only, private mode*

**Week 12**
- [ ] Build **Specter Mode** (streamer overlay)
- [ ] Add Framer Motion animations for smooth overlay transitions

---

## **Month 4: SaaS Polish & Deployment**
**Week 13**
- [ ] Implement authentication (Supabase or Firebase)
- [ ] Add login flow and session management

**Week 14**
- [ ] Gate advanced features behind login
- [ ] Add T&C consent before enabling live analysis

**Week 15**
- [ ] Build dashboard to save past games
- [ ] Enable shareable game analysis links (`ShadowCast`)

**Week 16**
- [ ] Final UI polish (responsive design, anime theme)
- [ ] Deploy frontend (Vercel) and backend (Railway)
