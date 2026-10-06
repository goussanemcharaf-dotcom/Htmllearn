# Brainstorm: Web Engineer Master Academy v6 → v7

**Input:** v6.0 (`prompts/archive/WEB-ENGINEER-MASTER-ACADEMY-v6.md`)
**Output:** v7.1 (`prompts/WEB-ENGINEER-MASTER-ACADEMY-v7.md`)

**Method:** three passes, as requested, then a fourth once v7 was actually run.

1. **Brainstorm.** What v6 gets right, how it would behave when actually run, and every improvement idea worth considering.
2. **Refine.** Decide what goes into v7, what gets rejected, and why.
3. **Brainstorm again.** Attack the v7 draft, then fix what breaks.
4. **Brainstorm while executing.** Install v7, run it with a real learner, and fix what reality breaks. The result is v7.1.

---

## Round 1: Brainstorm

### 1.1 What v6 gets right (kept)

- **The prime directive**: "build the engineer, not the dependent user". This is the heart of the prompt.
- **Blind-spot detection plus essentiality classes (🔴 → 🔵).** The most original and valuable mechanism in v6.
- **A help ladder, competency levels backed by evidence, and a scientific debugging loop.**
- **Professional realism**: client simulation, ADRs, quality gates, production checks, and an ambiguous capstone.
- **Named anti-patterns**: tutorial hell, copy-paste development, tech zoo.
- **Research honesty**: separating fact from hypothesis, and never inventing APIs.
- **The engineering-maturity ladder**: how → why → how could it fail → design → trade-offs → production → five years. It moved into v7 Part A (A2), where it is used on every turn.
- **One project that keeps evolving** instead of many throwaway projects.

### 1.2 Stress test: what happens when v6 actually runs

I went through v6 the way Claude would execute it, session by session. These are the failure points:

| # | Problem | Where in v6 | What happens in practice |
|---|---|---|---|
| 1 | The behavior rules are buried under topic lists | §13 alone is ~1,000 of v6's 3,393 lines; commands duplicated in §41/§65; the loop repeated in §2/§61/§68 | As `CLAUDE.md`, all ~5,600 words load every session. The rules that change behavior get diluted, and most of the topic lists describe things Claude already knows |
| 2 | No learner intake | — | "Highest-value next mission" can't be worked out without knowing the learner's goal, time, background and language |
| 3 | Memory exists only on paper | §7 ("internal AI dependency score"), §33 | Claude doesn't remember between sessions. Without a file schema and a rule for when to read and write, nothing carries over |
| 4 | About 25 files and folders created on day one | §62–63 | Mostly empty structure that overwhelms the learner and contradicts "smallest safe change" and "don't over-engineer" |
| 5 | Nothing stops Claude typing the learner's code | (missing) | In Claude Code, Claude edits files directly. That is the fastest route to dependency, and v6 never mentions it |
| 6 | The help ladder has 10 rungs and no way out | §8 | Hard to apply consistently. There is no way to say "just show me", and no limit on how long the learner should struggle |
| 7 | Every obstacle is treated as a lesson | §7–8, §50 | Socratic questioning about a PATH glitch or a broken install drains motivation without building the target skill |
| 8 | "No-AI mode" runs inside an AI chat | §9 | The name is confusing, there's no time box or rubric, and it can't prove independence |
| 9 | Evidence can be faked | §11 | Code pasted from another AI looks exactly like an independent implementation |
| 10 | A 19-step lesson format for every lesson | §26 | Slow and repetitive, which contradicts v6's own Anti-Boring Engine (§27) |
| 11 | One quality gate for every project | §22 | A beginner's landing page must be "MONITORED". That's out of proportion and discouraging |
| 12 | No limit on blind-spot alerts | §3–6 | Risk of a flood of warnings, which is its own kind of overwhelm |
| 13 | Gamification without rules | §47 | XP is never defined, so awards are arbitrary. Ranks form a straight ladder with no evidence required |
| 14 | Command names clash with Claude Code built-ins | §41 | `/status`, `/review` and `/help` are built into Claude Code, so the academy versions of those commands won't run |
| 15 | 22 roles in the identity | §0 | Listing roles doesn't change behavior. Modes do |
| 16 | ALL-CAPS "NEVER / DO NOT" throughout, with no reasons given | throughout | Recent Claude models follow instructions closely, so shouted absolutes get over-applied (for example, withholding code even when the learner really needs it). Rules without reasons also don't extend well to new situations |
| 17 | No priority order | — | When autonomy, learning and delivery conflict, behavior becomes unpredictable |
| 18 | The evolving project doesn't need its later stages | §18 | A personal page has no real reason to need PostgreSQL, auth or AI. The project needs a domain that genuinely grows |
| 19 | Curriculum gaps | §13 | Missing: dates and time zones, money, Unicode, i18n and RTL, privacy, legal, licensing, email, payments, AI security (prompt injection), cost control, progressive enhancement, modern platform features |
| 20 | No safety or wellbeing rules | — | Security labs could be pointed at third-party sites, streak-style guilt is possible, and nothing handles frustration |
| 21 | Box-drawing cards break | §6 | The fixed-width `╔═╗` box falls apart with variable-length text, on mobile, and in proportional fonts |

### 1.3 Idea bank (everything considered)

**A. Teaching methods**
1. PRIMM (Predict → Run → Investigate → Modify → Make) as the backbone of every micro-lesson.
2. Predict before running, with a 1–5 confidence rating, then track how often confidence matches correctness. This catches the "fluency illusion", where reading something feels like knowing it.
3. Worked examples that fade: fully worked → partly worked → independent → transfer.
4. Parsons puzzles (reorder shuffled lines), trace tables, and "find all 5 bugs".
5. Spaced review with explicit intervals: +1, +3, +7, +21 and +60 days.
6. Mixing topics from different worlds in the same review session.
7. Difficulty targeting: aim for 70–85% success; step up after 3 wins in a row, down after 2 failures.
8. At most three new terms per micro-lesson.
9. Test-out: skip anything by passing its mastery check.
10. A pre-test in Mission 001: the learner writes their own idea of the URL-to-pixels journey before learning, then compares afterwards.
11. A weekly retro with numbers.
12. A benchmark kata every ~4 weeks, so growth shows as a trend.
13. The knowledge base is written by the learner, not by Claude, because writing it yourself is what makes it stick.

**B. Preventing dependency**

14. Two speeds, LEARN and SHIP, so the trade-off is explicit and Claude never refuses to help.
15. A hands-on-keyboard rule: who writes which code.
16. Classify each obstacle as target or incidental.
17. A struggle budget of ~10–15 minutes before climbing a rung.
18. `/hint` and `/answer` as escape hatches that respect autonomy, recorded each time they're used.
19. A Reliance Index: the average highest rung used. It's measurable and transparent.
20. An ownership check: explain the code, predict what a change would do, and modify it on demand.
21. A Learning Debt Register, with "interest" for how much future work depends on each item.
22. Replay missions: redo SHIP work solo later.
23. Offline missions, done with no AI at all.
24. `/solo` exam mode with a rubric and a time box.
25. A "How I used AI" section in every portfolio case study.

**C. Fitting Claude Code**

26. Part A goes in `CLAUDE.md`; the playbooks become skills that load only when needed.
27. Executable acceptance criteria: Claude writes failing tests or checkers, and the learner makes them pass.
28. Real tools in the labs: `dig`, `curl -v`, DevTools, Lighthouse, axe, validators, `npm audit`.
29. Git history as the evidence trail, with a branch per mission.
30. Create files and folders only when first needed.
31. Rename commands that clash with built-ins.
32. An optional SessionStart hook (due reviews) and status line (rank and XP).
33. A State Capsule for chat-only use, so progress carries over between tools.

**D. Motivation and avoiding boredom**

34. A catalog of 20+ exercise types, with a rule against using the same type three times in a row.
35. Sessions that adapt to the learner's time budget and energy.
36. A project themed on the learner's interests, plus side quests.
37. Client personas with hidden requirements, scored on how many the learner uncovers.
38. Incident drills ("production is down").
39. Constraint challenges: no JS, 14 KB, keyboard-only, slow 3G.
40. Boss fights mapped to Acts, with rank unlocks.
41. Specific praise about the learner's process, rather than generic praise.
42. A switch to turn the game layer off.
43. Specialist badges (Security, Accessibility, Performance, Discoverability) alongside the main rank path.

**E. Assessment**

44. An evidence requirement for each level.
45. Every piece of evidence references a commit, file or mission.
46. Skills decay through failed reviews.
47. A calibration measure.
48. Quality gates sized to the project, in tiers T1–T4.

**F. Curriculum gaps**

49. **W31 Real-World Data**: time zones, daylight saving, money, Unicode, i18n, RTL, `Intl`.
50. **W32 Privacy, Legal & Ethics**: consent, licenses, personal data, awareness of accessibility law.
51. AI security: prompt injection, treating LLM output as untrusted (XSS), cost caps, permission limits on tools.
52. Platform first: native `<dialog>`, `<details>`, `:has()` and container queries before reaching for libraries, checked against Baseline.
53. Email deliverability, payments, webhooks, idempotency.
54. Progressive enhancement and resilience (JS fails, slow networks).
55. Personal security habits: 2FA, a password manager, SSH keys.
56. A billing alarm before any cloud deploy.
57. Reading specs and MDN as a skill.
58. Discoverability as one track (SEO → Structured Data → AEO → GEO) with proper experimental method.

**G. How the prompt itself is written**

59. A priority order for resolving conflicts.
60. A reason attached to each rule.
61. Calmer wording, with "never" kept for true hard lines.
62. One identity with modes, instead of 22 roles.
63. Turn discipline: one step per message, about 150 words, ending with one action.
64. The self-check list cut from 12 questions to 8.

---

## Round 2: Refine

### 2.1 Adopted, and where each idea lives in v7

| Idea(s) | v7 section |
|---|---|
| Priority order (59) | A3 |
| LEARN / SHIP speeds (14), replay missions (22) | A4 |
| Hands-on-keyboard rule (15) | A5 |
| Target vs incidental (16), struggle budget (17), escape hatches (18), ladder cut to R0–R5 | A6 |
| One identity with modes (62) | A1, A7 |
| Turn discipline (63), predict before running (2), explanation language | A8 |
| Evidence per level (44, 45), ownership check (20), decay (46), test-out (9) | A9 |
| Reliance Index (19), Learning Debt (21), calibration (2, 47) | A10 |
| Blind-spot card budget and ranking (anti-overwhelm), a card that renders anywhere | A11 |
| Specific praise about process (41), frustration signals | A12 |
| Showing the research path, fact labels | A13 |
| Security labs on own systems only, secrets, wellbeing (20) | A14 |
| Learner makes their own commits, branch per mission (29) | A15 |
| State in files, lazy creation (30), capsule (33) | A16, D1, D6 |
| Session protocol sized to time and energy (35) | A17 |
| Commands grouped and renamed to avoid built-ins (31) | A18 |
| Onboarding intake (fixes problem 2) | B1 |
| PRIMM+ lesson engine (1), fading (3), difficulty targeting (7), cognitive load (8), executable acceptance (27) | B3 |
| Exercise catalog (4, 34, 39) | B4 |
| Planning sized to the project tier (fixes problem 11 for planning) | B5 |
| `/solo` (24), offline missions (23), katas (12) | B8 |
| Hidden requirements (37), stakeholders, incident drills (38) | B10 |
| Proportional quality gates T1–T4 (48) and real audit tools (28) | B13 |
| AI Visibility Lab: experimental method (58) | B14 |
| Spaced intervals (5), mixing topics (6), retros (11) | B17 |
| "How I used AI" in the portfolio (25) | B19 |
| Map with can-do outcomes, essentiality, blind spots and labs for every world | C2 |
| W31 (49) and W32 (50), AI security (51), platform first (52), email and payments (53) | C2 |
| Threads and mental models | C3 |
| Spine project that unlocks with competencies (36), alternatives by goal | C4 |
| XP table, evidence-gated ranks, badges (42, 43) | C5 |
| Skills, hook and status line (26, 32) | D0, D7 |
| Mission 001 rebuilt with real tools and a pre-test (10, 28) | D8 |

### 2.2 Rejected or deferred, and why

| Idea | Decision | Why |
|---|---|---|
| Measuring dependency through keystroke or time tracking | ❌ | Invasive and unreliable. The highest-rung record is simpler and honest |
| Hard prerequisite gating on every topic | ❌ | Kills motivation. v7 offers A/B/C choices and gates only ranks |
| Daily streaks | ❌ | Builds guilt. Replaced by weekly retros and trend lines |
| A separate full prompt per world | ❌ | Fragments the system. One map, read when needed |
| Claude auto-committing the learner's work | ❌ | Takes away Git practice and risks the learner's history |
| A database or LMS for state | ❌ | Overkill. Three files (profile, `state.json`, log) are enough |
| Teaching every framework equally | ❌ | That's the tech zoo. One primary stack, and the others only as awareness |
| "Guaranteed" AI-visibility tactics | ❌ | Dishonest. Replaced with an experiment protocol |
| A 30-skill Claude Code setup on day one | ⏸ deferred | Option 2 in D0. Start simple (Option 1) and add skills once the habits are real |
| Automatic Reliance Index from commit diffs | ⏸ deferred | Interesting, but it needs tooling. Rung tracking by hand comes first |

### 2.3 Structural decisions

- **Four parts with on-demand loading.** Part A is the core that is always loaded (about 250 lines and 2,900 words, roughly half of v6's ~5,600 words, all of which would have been in `CLAUDE.md`). Parts B–D are reference material read when a mode starts. v7 is larger in total (about 13,500 words) because it adds the things v6 left undefined: playbooks, schemas, templates, the XP rules, and per-world can-do outcomes and labs. It is shorter than v6 in lines (about 1,250 vs 3,393), because v6 put one word per line.
- **Rules carry their reasons**, so Claude can apply them sensibly in situations they don't explicitly cover. "Never" is kept only for hard lines: invented facts, destroying work, attacking third-party systems, and shaming.
- **World numbers stay stable** (W00–W30 from v6, plus W31 and W32), so anything referring to v6 worlds still works. The Acts give the order.
- **v6's names and flavor stay**: SOLO LEARNER BLIND SPOT, AI DEPENDENCY ALERT, boss fights, and every rank name.

---

## Round 3: Brainstorm again (attacking v7)

The v7 draft was attacked from the angle of the learner, of Claude, and of reality. Each attack led to a fix in the final file:

| Attack | Risk | Fix in v7 |
|---|---|---|
| "v7 is still long." | Context cost | Only Part A is always loaded. B–D are read on demand (D0) |
| "The Reliance Index punishes beginners." | Demotivation | Tracked per area, with early high values described as normal (A10) |
| "The hands-on rule annoys someone who just wants to ship." | The learner leaves | SHIP speed, which never refuses (A4) |
| "A learner could fake an 'offline' mission." | False evidence | The ownership check makes faking pointless (A9, B8) |
| "Claude forgets to update state." | Lost memory | Saves every ~30 minutes, an end-of-session protocol, and the capsule (A16, D6) |
| "Review dates get miscalculated." | Broken spacing | ISO dates stored in state and compared with today's date (A16, D3) |
| "Blind-spot cards turn into nagging." | Annoyance | One per session, the rest in a backlog (A11) |
| "An experienced learner is bored by the basics." | They quit | Test-out, a diagnostic, and speedrunning M-001 (A9, B2, D8) |
| "Gamification feels childish to some people." | Disengagement | The game layer can be switched off (B1, C5) |
| "Curriculum facts go out of date." | Teaching wrong things | "Check current docs or Baseline" flags on fast-moving items, plus A13 |
| "The learner wants a topic that isn't on the map." | Rigidity | Template for adding a new world (C6) |
| "The learner thinks in another language." | Comprehension | An explanation-language setting (A8, B1) |
| "Slash commands don't exist until skills are installed." | Confusion | A18 and D0 say: type the word without the slash, or install skills |
| "Built-in commands win name clashes." | Commands never run | `/progress`, `/critique` and `/academy` instead of `/status`, `/review` and `/help` |
| "Frustration or impostor feelings." | Burnout | Wellbeing rules, suggested breaks, showing the evidence trend (A12, A14) |
| "Security labs could be misused." | Harm, legal trouble | Own or permitted systems only (A14) |
| "Quality gates discourage beginners." | Overwhelm | Gates sized to the project, T1–T4 (B13) |
| "A 'nice' Claude inflates levels." | Fake progress | The no-inflation rule, evidence references, and choosing the lower level when unsure (A9) |
| "Too many commands to remember." | Friction | A grouped table, and plain language always works (A18) |
| "Windows `curl` isn't real curl in PowerShell." | Mission 001 stalls | Explicit `curl.exe` note in D8, framed as an incidental blind spot |
| "XP isn't the bottleneck, so ranks come too fast." | Empty ranks | Ranks require evidence gates and bosses, not just XP (C5) |

---

## Round 4: Brainstorm while executing (v7 → v7.1)

Reviewing a prompt on paper only goes so far. On 2026-10-06, v7 was installed in this repo and run for real: onboarding through question cards in the Claude app, checks of the session's machine, and preparation of Mission 001. Each finding below lists the evidence that surfaced it.

| # | Found while executing | Evidence | Change in v7.1 |
|---|---|---|---|
| 1 | `/debug` is a built-in Claude Code command, and a project skill with the same name *replaces* it | Claude Code docs: the built-in command list and the rules for skill names | Academy command renamed to `/bughunt` (A18, B6, D7) |
| 2 | Skill descriptions cost context on every turn, unless `disable-model-invocation: true` is set | Claude Code skills docs | 35 thin command skills with that flag. They cost no context, and the master file stays the single source of truth (D0, D7) |
| 3 | The learner's machine is not the session's machine | This session runs in a cloud container; the learner works on a Windows computer | The profile records a `workspace`: `same-machine` · `split` · `app-only` · `chat-only` (A5, B1) |
| 4 | In `split` and `app-only` modes, the learner can't type into the session's files | The Claude app can view files but not edit them | Scribe rule (save the learner's code verbatim, bugs included), dictated commands, and outputs pasted into chat as evidence (A5) |
| 5 | Version checks are wrong in the cloud | `node -v` here reports the container's Node 22, not the learner's PC | Check versions yourself only on the learner's own machine (B1) |
| 6 | The cloud container is temporary | The session environment | Commit and push state at every checkpoint in cloud modes (A16) |
| 7 | `dig` and `nslookup` aren't available everywhere | Both missing in the container | A DNS-over-HTTPS request through curl works anywhere curl does, and it shows the TTL (D8 step 1) |
| 8 | `curl -v` through a proxy shows the proxy, not the site | Container output: `CONNECT example.com:443` sent to `127.0.0.1` | Explained as an observation in D8 step 2 (proxies are 🟠 in W02) |
| 9 | One name has several addresses, and their order varies | DNS-over-HTTPS returned 2 A records (TTL 12 s), and two lookups listed them in different orders | Becomes a question in D8 step 1 (load balancing) |
| 10 | The academy's own dates had a time-zone bug | The container clock is UTC, but "due today" depends on the learner's zone | The profile stores the time zone, with UTC used until it's known (A16, D2). W31 applies to the academy itself |
| 11 | Self-ratings aren't evidence | A9 contradicts B1's self-ratings | Self-ratings stay in the profile, and every competency starts as unknown (B1) |
| 12 | Typing long answers in the app is slow | The onboarding run | Tap-to-answer question cards (4 questions or fewer each), asking only what changes the next step (B1) |
| 13 | "Don't know" is a real answer | The game-layer question | When the learner is unsure, use the gentler default as a trial and revisit it at the first retro (B1) |
| 14 | The first sitting would be onboarding plus a 90-minute mission | Time budget | M-001 is split into Part 1 (no installs) and Part 2 (setup and the first page) (D8) |
| 15 | `python3` isn't the Windows command | Windows uses `python` or `py` | D8 step 7 |
| 16 | Acceptance needs something the learner can run | B3 says acceptance should be "executable where possible" | A zero-dependency `missions/M-001/check.mjs`, which becomes the learner's first passing test (D8 step 10) |
| 17 | `CLAUDE.md` is a copy of Part A | The install step | `CLAUDE.md` is generated from Part A at install time, and its header says to change both together |

**What was executed:** the academy was installed (`CLAUDE.md`, 35 command skills, `.gitignore`), onboarding was completed, the learner's state was created in `.academy/`, and Mission 001 was prepared with a brief and an executable checker. Part 1 has been launched.

---

## v6 → v7: where every v6 section went

Nothing was dropped silently. Every v6 section maps to a place in v7:

| v6 | v7 |
|---|---|
| §0 Identity (22 roles) | A1 (one mentor who plays several roles), A7 modes |
| §1 Prime Directive | A2 |
| §2 Core philosophy loop | A19 Master Loop, B3 lesson engine |
| §3–6 Solo-learner protection, radar, essentiality, "You might miss this" | A11 |
| §7 AI dependency protection | A10 Reliance Index and Independence Mode |
| §8 AI help ladder (levels 0–9) | A6 (R0–R5, target vs incidental, escape hatches) |
| §9 No-AI mode | B8 `/solo`, offline missions, `/kata` |
| §10–11 Competency levels and evidence | A9 |
| §12 Curriculum architecture | C0, C1 |
| §13 Worlds 00–30 | C2 (+ W31, W32) |
| §14 Invisible professional skills | C3 threads, W29 |
| §15 Debugging system | B6 |
| §16 Reverse engineering | B9 |
| §17 Project factory | C4 |
| §18 Project evolution | C4 spine project (unlocked by competencies) |
| §19 Project requirements | B5 (sized to the tier) |
| §20 Client simulation | B10 (+ hidden requirements) |
| §21 ADRs | B15 |
| §22 Quality gate | B13 (tiers T1–T4) |
| §23 Technology radar | B16 |
| §24 Research policy | A13, B16 |
| §25 Learning session engine | A17 |
| §26 Lesson format | B3 (PRIMM+) |
| §27 Anti-boring engine | B4 |
| §28 Visual learning | A8 |
| §29 Boss fights | B12 |
| §30–31 Capstone and final review | B20 |
| §32 Knowledge system | D1, D5 (written by the learner) |
| §33 Learning state | A16, D1–D4 |
| §34 Spaced reinforcement | B17 |
| §35 Transfer learning | B3 optional modules, A9 L5 |
| §36 Teach-back | B3, B4, `/teach` |
| §37 Professional code review | B7 `/critique` |
| §38 AI-generated code review | B7 `/explain-code` |
| §39 Error culture | A12, B6 |
| §40 Git safety | A15 |
| §41 and §65 Commands (duplicated) | A18 (grouped, no clashes with built-ins) |
| §42 `/blind-spots`, §43 `/status` | B18 (`/progress`) |
| §44 `/diagnostic` | B2 |
| §45 `/reverse` | B9 |
| §46 `/production-check` | B13 (`/audit prod`) |
| §47 Gamification | C5 |
| §48 Build mode | B5 |
| §49 Learn mode | B3 |
| §50 Debug mode | B6 |
| §51 Interview mode | B11 |
| §52 Portfolio engine | B19 |
| §53 Career simulation | B10 stakeholders |
| §54 Technology choice rule | B16 |
| §55–57 Tutorial hell, copy-paste, tech zoo | B21 |
| §58 Professional mental models | C3 |
| §59 Engineering maturity | A2 maturity ladder |
| §60 Mission generator | B3 mission card |
| §61 Daily session | A17 |
| §62–63 Initialization and directory | D0, D1 (files created when first needed) |
| §64 Claude skills | D0, D7 |
| §66 Learning science | B3, B4, B17 |
| §67 Final principle | Closing principle |
| §68 Master loop | A19 |
| §69 Mission 001 | D8 (rebuilt with real tools and a pre-test) |
| §70 Final behavior rule | A20 |

---

## Open questions: answered at onboarding (2026-10-06)

| Question | Answer |
|---|---|
| Explanation language | English |
| Spine project theme | Local business → booking platform → AI SaaS (the type of business is chosen at spine v1) |
| Time budget | 15+ hours a week |
| Game layer | "Don't know", so it's on as a trial and will be revisited at the first retro |
| Install now? | Yes: Option 2 (`CLAUDE.md` plus command skills) |
