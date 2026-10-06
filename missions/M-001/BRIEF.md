# M-001 · Enter the Web

`W02 Internet & HTTP + W03 HTML · ★☆☆☆☆ · 🎓 LEARN · two sittings of ~45–60 min`

**Goal (can-do):** explain what happens between typing a URL and seeing pixels, using evidence you collected yourself, and ship your first semantic HTML page.

**Why it matters:** every later skill happens somewhere on this journey. CSS and JavaScript run in the browser, servers and databases sit at the far end, and SEO, performance and security apply all along the way. If you can see the journey, you can debug it.

**How we work (split workspace):** you do the hands-on steps on your Windows computer, then paste outputs and files into the chat. I save them in this folder word for word, without fixing anything, as your evidence. Your files: `before.md`, `evidence.md`, `index.html`, `after.md`.

We go **one step at a time** in the chat. This page is the map, not the instructions.

---

## Part 1: The journey (no installs needed)

| Step | What you do | Where |
|---|---|---|
| 0 | **Pre-test.** Write what you think happens when you type `https://example.com` and press Enter, before reading anything. There are no wrong answers. | chat → `before.md` |
| 1 | **DNS.** Predict, then run `nslookup example.com` | PowerShell |
| 2 | **Connection & TLS.** Run `curl.exe -v https://example.com -o NUL`. Type `curl.exe`, not `curl`: in Windows PowerShell, `curl` can be a different command. | PowerShell |
| 3 | **HTTP.** Open `https://example.com` in Edge or Chrome, press F12, open the Network tab, reload, click the first request, and look at Headers and Timing | DevTools |
| 4 | **Source vs DOM.** Compare view-source (Ctrl+U) with the Elements panel | DevTools |
| 5 | **Draw it.** Draw the whole journey in ASCII, using only what you observed | chat |

Outputs from steps 1–4 go into `evidence.md`.

## Part 2: Your first page

**Workshop setup.** This is incidental (installing tools isn't the skill being tested), so ask for help freely. In PowerShell:

```powershell
winget install Microsoft.VisualStudioCode
winget install OpenJS.NodeJS.LTS
winget install Git.Git
```

Close and reopen PowerShell, then check that `node -v` and `git --version` both print a version. If `winget` isn't recognized, use the installers from code.visualstudio.com, nodejs.org and git-scm.com.

| Step | What you do |
|---|---|
| 6 | **Make.** Write `index.html` by hand, without copying: doctype, `<html lang>`, charset, viewport, title, meta description, header / nav / main / footer, one `h1`, a paragraph, an image with meaningful `alt`, and a link |
| 7 | **Open it two ways.** Double-click it (`file://`), then serve it with `npx serve` and open the `http://localhost:…` address it prints. What changed? |
| 8 | **Live-edit.** Change some text in the Elements panel, then reload. Where did your change go? |
| 9 | **Break it.** Remove a closing tag, nest elements wrongly, delete the `alt`, misspell an attribute. Predict first, then look |
| 10 | **Debug.** Use the W3C validator (validator.w3.org → Validate by File Upload) until it shows 0 errors, then the mission checker until it passes |
| 11 | **Explain.** Teach it back twice: to a curious 12-year-old, and to a client asking "why is my site slow?" → `after.md` |
| 12 | **Reflect.** Compare `after.md` with `before.md`: which parts of the journey were invisible to you? |
| 13 | **Commit.** Run `git init`, then make your first commit, with a message that says what you built |

## Acceptance

- `node missions/M-001/check.mjs` passes. I run it on the copies you paste into chat. Once you've cloned this repo (a later Git mission), you'll run it yourself.
- The W3C validator shows 0 errors for `index.html`.
- **Ownership check** in chat: point to DNS, TLS, the status code and TTFB in your evidence, and explain each one.

**Evidence this produces:** `http.request-lifecycle` L2 · `http.dns` L1–L2 · `html.document-structure` L3 · `browser.devtools-network` L2 · `browser.devtools-elements` L2 · `git.basics` L1–L3

**XP:** 20 × independence multiplier (R0–R1 ×1.5 · R2–R3 ×1.0 · R4 ×0.5 · R5 ×0.25)

**Help:** `/hint` (next rung) · `/answer` (full solution, logged) · or just say "hint"
