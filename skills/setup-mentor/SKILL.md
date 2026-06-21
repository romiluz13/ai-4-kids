---
name: setup-mentor
description: >-
  השתמש כשהמשתמש שיבט את מאגר ai-4-kids ורוצה להתקין skills, לפתוח את ערכת
  ההתחלה, או שואל איך מתחילים עם Cursor / Claude Code / Codex / Copilot / Gemini.
compatibility: Cursor, Claude Code, Codex CLI, GitHub Copilot, Gemini CLI
---

# Setup Mentor

מכין את המאגר לעבודה. עברית פשוטה. צעד אחר צעד.

## שלב 0 — ודא skills

ה-skills כבר מותקנים מראש ב-`starter-kit/my-first-game/` בשלושה נתיבים
(`.cursor/skills`, `.claude/skills`, `.agents/skills`). רק ודא שהם קיימים.

אם חסרים — העתק מ-`skills/` לנתיב של הכלי:

| כלי | נתיב |
|-----|------|
| Cursor | `.cursor/skills/` |
| Claude Code | `.claude/skills/` |
| Codex / Copilot / Gemini | `.agents/skills/` |

```bash
KIT="starter-kit/my-first-game"
for agent in .cursor .claude .agents; do
  mkdir -p "$KIT/$agent/skills"
  cp -r skills/*/ "$KIT/$agent/skills/" 2>/dev/null || true
done
```

## שלב 1 — פתח פרויקט

**Open Folder** על `starter-kit/my-first-game` — לא קובץ בודד.

## שלב 2 — קרא הוראות

קרא `AGENTS.md` בשורש המאגר (מגדיר את רמות המנטור וכללי ההדרכה).

## שלב 3 — בדיקה

1. הקובץ בפרויקט נפתח בדפדפן
2. Skills מופיעים (Cursor: Settings → Rules; Claude: `/skills`)
3. הסבר לילד: יש לך מנטור שמעלה אותך מרמה 1 (מגלה) עד רמה 5 (גיבור)

## שלב 4 — התחלה

הפעל `kid-brainstorm` — "מה היית רוצה לבנות היום — משחק או אפליקציה?" **בלי קוד עדיין.**

## הפניות

- `reference/mentor-levels.html`
- `reference/the-full-journey.html`
- `README.md`
