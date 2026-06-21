---
name: setup-mentor
description: >-
  השתמש כשהמשתמש פתח את מאגר ai-4-kids ורוצה להתקין את המנטור, או שואל איך
  מתחילים עם Cursor / Claude Code / Codex / Copilot / Gemini.
compatibility: Cursor, Claude Code, Codex CLI, GitHub Copilot, Gemini CLI
---

# Setup Mentor

מתקין את המנטור **פעם אחת** — ואז הוא זמין בכל פרויקט עתידי. עברית פשוטה, צעד-צעד.

## שלב 1 — התקנה גלובלית (מומלץ! פעם אחת בלבד)

העתק את כל ה-skills לתיקיית ה-skills **הגלובלית** של המחשב. ככה המנטור
יהיה בכל פרויקט חדש — בלי להעתיק שוב את המאגר.

```bash
for d in ~/.cursor/skills ~/.claude/skills ~/.agents/skills; do
  mkdir -p "$d"
  cp -r skills/*/ "$d/"
done
```

- `~/.cursor/skills/` → Cursor
- `~/.claude/skills/` → Claude Code
- `~/.agents/skills/` → Codex, Copilot, Gemini

הסבר לילד: "התקנו את המנטור על המחשב. עכשיו בכל פרויקט חדש הוא כבר שם."

## שלב 2 — הפרויקט הראשון

**Open Folder** על `starter-kit/my-first-game` (כבר מוכן עם הכול) ובנו שם.

לפרויקט חדש בעתיד: פותחים **תיקייה ריקה חדשה** — המנטור כבר זמין (גלובלי).

## שלב 3 — בדיקה

- Cursor: Settings → Rules → רואים את ה-skills
- Claude Code: `/skills`
- הסבר לילד את 5 הרמות: מגלה → בונה → חוקר → ארכיטקט → גיבור

## שלב 4 — התחלה

הפעל `kid-brainstorm` — "מה היית רוצה לבנות — משחק או אפליקציה?" **בלי קוד עדיין.**

## חלופה — פרויקט בודד בלבד

אם רוצים רק לפרויקט הזה (לא גלובלי): העתק `skills/*` ל-`.cursor/skills/`
(או `.claude/skills/` · `.agents/skills/`) בתוך תיקיית הפרויקט.

## הפניות (פתחו בדפדפן)

- **מאפס לגיבור** — 5 רמות: `reference/mentor-levels.html`
- **המסע המלא** — 7 שלבים: `reference/the-full-journey.html`
