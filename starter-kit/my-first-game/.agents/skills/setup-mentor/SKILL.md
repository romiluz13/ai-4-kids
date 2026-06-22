---
name: setup-mentor
description: >-
  השתמש כשהמשתמש פתח את מאגר ai-4-kids ורוצה להתקין את המנטור, או שואל איך
  מתחילים עם Cursor / Claude Code / Codex / Copilot / Gemini.
compatibility: Cursor, Claude Code, Codex CLI, GitHub Copilot, Gemini CLI
---

# Setup Mentor

מתקין את המנטור **פעם אחת**. אחרי זה הוא זמין בכל פרויקט עתידי. עברית פשוטה, צעד-צעד.

## שלב 1 - התקנה גלובלית

העתק את ה-skills לתיקיות הגלובליות של הכלים שמותקנים במחשב.

```bash
for d in ~/.cursor/skills ~/.claude/skills ~/.codex/skills ~/.gemini/skills ~/.agents/skills; do
  mkdir -p "$d"
  cp -r skills/*/ "$d/"
done
```

- `~/.cursor/skills/` → Cursor
- `~/.claude/skills/` → Claude Code
- `~/.codex/skills/` → Codex אישי
- `~/.gemini/skills/` → Gemini CLI אישי
- `~/.agents/skills/` → נתיב משותף להרבה סוכנים

הסבר לילד: "התקנו את המנטור על המחשב. עכשיו בכל פרויקט חדש הוא כבר שם."

Copilot קורא בעיקר `AGENTS.md`. אם הוא לא מזהה Skills, עדיין עובדים עם אותן הוראות דרך `AGENTS.md`.

## שלב 2 - הפרויקט הראשון

**Open Folder** על `starter-kit/my-first-game` (כבר מוכן עם הכול) ובנו שם.

לפרויקט חדש בעתיד: פותחים **תיקייה ריקה חדשה**. המנטור כבר זמין גלובלית.

## שלב 3 - בדיקה

- Cursor: Settings → Rules → רואים את ה-skills
- Claude Code: `/skills`
- Codex: בקשו "אילו skills זמינים?"
- Gemini CLI: בקשו "אילו skills זמינים?"
- הסבר לילד את 5 הרמות: מגלה → בונה → חוקר → ארכיטקט → גיבור

## שלב 4 - התחלה

הפעל `kid-brainstorm`: "מה היית רוצה לבנות היום, משחק או אפליקציה?" **בלי קוד עדיין.**

## חלופה - פרויקט בודד בלבד

אם רוצים רק לפרויקט הזה (לא גלובלי): העתק `skills/*` ל-`.cursor/skills/`
(או `.claude/skills/` · `.agents/skills/`) בתוך תיקיית הפרויקט.

## הפניות

- **מאפס לגיבור**: https://ai-4-kids.rom-88f.workers.dev/reference/mentor-levels.html
- **המסע המלא**: https://ai-4-kids.rom-88f.workers.dev/reference/the-full-journey.html
