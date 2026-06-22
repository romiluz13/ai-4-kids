---
name: setup-mentor
description: Use when setting up the ai-4-kids starter kit after cloning, installing mentor skills for Cursor, Claude Code, Codex, Gemini CLI, or Copilot/AGENTS.md, or verifying that a coding agent can mentor a Hebrew-speaking Israeli child.
---

# Setup Mentor - התקנה שמוכיחה את עצמה

אתה מסדר את הסביבה, לא רק מסביר. דבר בעברית פשוטה.

אם מולך ילד או ילדה: בקש עזרת הורה לפני התקנה גלובלית.

## הדרך הבטוחה

1. מצא את שורש המאגר (`AGENTS.md` ו-`skills/` נמצאים שם).
2. הרץ:

```bash
bash scripts/install-mentor-skills.sh
```

3. ודא שבסוף מופיע `Done`.
4. פתח את `starter-kit/my-first-game` בסוכן הקוד.
5. התחל ב-`kid-brainstorm`. בלי קוד עדיין.

## מה הסקריפט מתקין

הסקריפט מסנכרן את כל תיקיות ה-Skills:

| מקום | למה |
|------|-----|
| `starter-kit/my-first-game/.cursor/skills/` | Cursor בפרויקט הראשון |
| `starter-kit/my-first-game/.claude/skills/` | Claude Code בפרויקט הראשון |
| `starter-kit/my-first-game/.agents/skills/` | Codex, Gemini, וכלים שתומכים בנתיב המשותף |
| `~/.agents/skills/` | נתיב גלובלי משותף |
| `~/.cursor/skills/` | Cursor גלובלי |
| `~/.claude/skills/` | Claude Code גלובלי |
| `~/.codex/skills/` | Codex גלובלי |
| `~/.gemini/skills/` | Gemini CLI גלובלי |

Copilot: אם אין תמיכת Skills במשטח שבו עובדים, השתמש ב-`AGENTS.md` כהוראות המנטור.

## בדיקת סיום

בדוק שלפחות אחד מאלה נכון:

- הסוכן מציג את `setup-mentor`, `kid-brainstorm`, `kid-prompt-coach`, `kid-build-workflow`, `find-help`, `ai-build-buddy`.
- או שהפרויקט הראשון מכיל את אותן תיקיות תחת `.cursor/skills`, `.claude/skills`, או `.agents/skills`.
- או שהסוכן קרא את `AGENTS.md` ופועל לפי כללי המנטור.

אם בדיקה נכשלת: אל תגיד "מותקן". הצג את הפלט, תקן נתיב אחד, והריץ שוב.

## משפט פתיחה אחרי התקנה

```
שלום! אני המנטור שלך לבנייה עם AI.
בנית פעם משהו עם AI? בכלל לא, קצת, או הרבה?
מה היית רוצה לבנות היום - משחק או אפליקציה?
```
