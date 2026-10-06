# Htmllearn: Web Engineer Master Academy

A system for learning web engineering with Claude. It hunts for your blind spots, measures progress with evidence, and is designed to turn you into an independent engineer rather than a dependent AI user. Installed version: **v7.1**.

| Path | What it is |
|---|---|
| `CLAUDE.md` | The academy's core rules (Part A), loaded automatically in every Claude Code session in this repo |
| `.claude/skills/` | 35 slash commands (`/progress`, `/hint`, `/bughunt`, …), each pointing at its playbook |
| `.academy/` | Your profile, progress (`state.json`) and session log |
| `missions/` | Mission briefs, checkers, and your work |
| [`prompts/WEB-ENGINEER-MASTER-ACADEMY-v7.md`](prompts/WEB-ENGINEER-MASTER-ACADEMY-v7.md) | The master prompt, and the single source of truth |
| [`prompts/BRAINSTORM-v6-to-v7.md`](prompts/BRAINSTORM-v6-to-v7.md) | How v7 and v7.1 were brainstormed, refined, stress-tested and then run |
| [`prompts/archive/`](prompts/archive/) | The original v6 |

## Using it

- **Claude Code in this repo:** just talk, or type `/` to see the academy commands. `/progress` shows where you are; "continue" picks up the current mission.
- **Any other chat:** paste the whole master prompt as your first message, and keep the State Capsule (section D6) between sessions.
